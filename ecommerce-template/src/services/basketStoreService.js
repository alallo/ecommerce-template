import { Subject } from 'rxjs'

const subject = new Subject();

const initialState = {
  data: [],
  basketItemCount: 0,
}; 

let state = initialState;

let storedBasket = window.localStorage.getItem('basket');
let basket = JSON.parse(storedBasket);
if (Array.isArray(basket.data) && basket.data.length > 0) {
  state = basket;
}

const basketStoreService = {
    init: () => subject.next(state),
    subscribe: setState => subject.subscribe(setState),
    addItemToBasket: item => {
        state = {
          ...state,
          data: [...state.data, item],
          basketItemCount: state.basketItemCount + 1
         };
         window.localStorage.setItem('basket', JSON.stringify(state));
         subject.next(state);
      },
    removeItemFromBasket: id => {
        state = {
          ...state,
          data: state.data.filter(item => item.product.id !== id),
          basketItemCount: state.basketItemCount - 1
         };
         window.localStorage.setItem('basket', JSON.stringify(state));
         subject.next(state);
      },
    clearBasket: () => {
        state = initialState;
        window.localStorage.setItem('basket', JSON.stringify(state));
        subject.next(state);
    },
    initialState
}

export default basketStoreService;