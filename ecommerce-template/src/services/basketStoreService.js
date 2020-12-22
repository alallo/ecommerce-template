import { Subject } from 'rxjs'

const subject = new Subject();

const initialState = {
  data: [],
  basketItemCount: 0,
  basketTotalAmount: 0
}; 

let state = initialState;

let storedBasket = window.localStorage.getItem('basket');
let basket = JSON.parse(storedBasket);
if (basket && Array.isArray(basket.data) && basket.data.length > 0) {
  state = basket;
}

const basketStoreService = {
    init: () => subject.next(state),
    subscribe: setState => subject.subscribe(setState),
    addItemToBasket: item => {
        state = {
          ...state,
          data: [...state.data, item],
          basketItemCount: state.basketItemCount + 1,
          basketTotalAmount: state.basketTotalAmount + (item.product.price * item.quantity)
         };
         saveToLocalStorageAndEmit()
      },
    removeItemFromBasket: id => {
        state = {
          ...state,
          data: state.data.filter(item => item.product.id !== id),
          basketItemCount: state.basketItemCount - 1
        };
        updateBasketTotalAmount();
        saveToLocalStorageAndEmit();
      },
    increaseQuantity: (id, quantity) =>{
      let updateItem = state.data.find(item => item.product.id === id);
      let index = state.data.indexOf(updateItem);
      updateItem.quantity += quantity;
      state.data[index] = updateItem;
      updateBasketTotalAmount();
      saveToLocalStorageAndEmit()
    },
    decreaseQuantity: (id, quantity) =>{
      this.increaseQuantity(id, quantity);
    },
    clearBasket: () => {
        state = initialState;
        saveToLocalStorageAndEmit()
    },
    initialState
}

export default basketStoreService;

function updateBasketTotalAmount() {
  state.basketTotalAmount = state.data.reduce(function (total, item) {
    return total + (item.product.price * item.quantity);
  }, 0);
}

function saveToLocalStorageAndEmit() {
  window.localStorage.setItem('basket', JSON.stringify(state));
  subject.next(state);
}
