import basketStoreService from '../../services/basketStoreService'
import React, { useEffect, useState } from "react";
import CheckoutItem from './checkoutItem';
import checkoutService from '../../services/checkoutService';
import  { useHistory } from 'react-router-dom'
import { useAlert } from 'react-alert'
import CheckoutForm from './checkoutForm';

function Checkout() {

    const [basketState, setBasketState] = useState(basketStoreService.initialState);
    const history = useHistory();
    const alert = useAlert();


    useEffect(()=> {
        basketStoreService.subscribe(setBasketState);
        basketStoreService.init();
        return () => {
            setBasketState(basketStoreService.initialState);
          };
    },[basketState.data]);

    function onRemoveItemButtonClick(itemId, event) {
        event.preventDefault();
        basketStoreService.removeItemFromBasket(itemId);
    };

    function onIncreaseQuantityButtonClick(itemId, event) {
        event.preventDefault();
        basketStoreService.updateQuantity(itemId, 1);
    };

    function onDecreaseQuantityButtonClick(itemId, event) {
        event.preventDefault();
        basketStoreService.updateQuantity(itemId, -1);
    };

    function onClearBasketButtonClick (event) {
        event.preventDefault();
        basketStoreService.clearBasket();
    };

    function onCompleteOrderButtonClick(event, customerDetails, isFormValid)
    {
        event.preventDefault();

        if(isFormValid)
        {
            let order = { basket: basketState.data, customer: customerDetails};
            checkoutService.completeCheckout(order);
            basketStoreService.clearBasket();
            alert.success("Your order is now with us. We will get in touch soon. Thank you!");
            return history.push('/');
        }
    }

    return (  
        <div className="container mx-auto px-6 border rounded-md">
            <div className="flex flex-col lg:flex-row mt-8">
                <div className="w-full lg:w-full order-2">
                    <div className="w-full mb-8 flex-shrink-0 order-1 lg:w-1/2 lg:mb-0 lg:order-2 border rounded-md">
                        <div className="w-full flex">
                            <div className="max-w-md w-full px-4 py-3">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-gray-700 font-medium">Order total ({basketState.basketItemCount})</h3>
                                </div>
                                {basketState.data.length > 0 
                                    ? basketState.data.map((checkoutItem) =>
                                    <CheckoutItem checkoutItem={checkoutItem} key={checkoutItem.product.id} 
                                        onIncreaseQuantity={onIncreaseQuantityButtonClick} onDecreaseQuantity={onDecreaseQuantityButtonClick} onRemoveItem={onRemoveItemButtonClick}/>)
                                    : <div>The basket is empty</div>
                                }
                                <hr className="my-3"/>
                            <div>
                            <h3 className="text-gray-700 font-medium">Subtotal(excluding delivery): <b>£{basketState.basketTotalAmount}</b></h3>
                            </div>
                            </div>
                        </div>
                    </div>
                    <CheckoutForm onComplete={onCompleteOrderButtonClick} onClear={onClearBasketButtonClick}></CheckoutForm>
                </div>
            </div>
        </div>
    );
  }
  
  export default Checkout;
  