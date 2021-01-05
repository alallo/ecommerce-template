import httpService from './httpService';
import { Subject } from 'rxjs';

const subject = new Subject();
let state = [];

const productService = {
    init: () => subject.next(state),
    subscribe: setState => subject.subscribe(setState),
    async getProductList() {
        let products;
        try
        {
            products = await httpService.getData('/products');
            state = products;
            subject.next(state);
            return products;
        }
        catch(error)
        {
            console.error("Can't get the list of products: " + error);
        }
        finally
        {
            return products
        }
    },
    async getProductById(id) {
        var product = state.filter(item => item.id === id)[0];
        if(!product)
            product = await httpService.getData('/products/' + id)
        return product;
    }
}


export default productService;