import httpService from './httpService';
import { Subject } from 'rxjs'

const subject = new Subject();
let state = [];

const productService = {
    init: () => subject.next(state),
    subscribe: setState => subject.subscribe(setState),
    async getProductList() {
        const products = await httpService.getData('/products')
        state = products;
        subject.next(state);
        return products;
    },
    async getProductById(id) {
        var product = state.filter(item => item.id === id)[0];
        if(!product)
            product = await httpService.getData('/product/' + id)
        return product;
    }
}


export default productService;