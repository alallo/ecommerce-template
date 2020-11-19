import { Subject } from 'rxjs'
import productList from './productList.json'

const subject = new Subject();

const initialState = productList;

let state = initialState;

const productService = {
    init: () => subject.next(state),
    subscribe: setState => subject.subscribe(setState),
    getProductList: () => {
        state = productList;
        state = subject.next(state);
    },
    initialState
}

export default productService;