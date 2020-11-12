import basketStoreService from '../../services/basketStoreService'
import React, { useEffect, useState } from "react";
import CheckoutItem from './checkoutItem';

function Checkout() {

    const [basketState, setBasketState] = useState(basketStoreService.initialState);

    useEffect(()=> {
        basketStoreService.subscribe(setBasketState);
        basketStoreService.init();
    },[]);

    const onClearBasketButtonClick = e => {
        e.preventDefault();
        basketStoreService.clearBasket();
    };

    return (
        <div class="container mx-auto px-6">
            <h3 class="text-gray-700 text-2xl font-medium">Checkout</h3>
            <div class="flex flex-col lg:flex-row mt-8">
                <div class="w-full lg:w-full order-2">
                    <form class="mt-8 lg:w-full">
                        <div>
                            <div class="w-full mb-8 flex-shrink-0 order-1 lg:w-1/2 lg:mb-0 lg:order-2">
                                <div class="w-full flex">
                                    <div class="border rounded-md max-w-md w-full px-4 py-3">
                                        <div class="flex items-center justify-between">
                                            <h3 class="text-gray-700 font-medium">Order total ({basketState.basketItemCount})</h3>
                                        </div>
                                        {basketState.data.map((checkoutItem) =>
                                            <CheckoutItem checkoutItem={checkoutItem} />
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="w-1/2">
                            <div class="mt-8">
                                <h4 class="text-sm text-gray-500 font-medium">Your Details</h4>
                                <div class="mt-6 flex">
                                    <label class="block flex-1 ml-3">
                                        <input type="text" class="form-input mt-1 block w-full text-gray-700" placeholder="First Name"/>
                                    </label>
                                    <label class="block flex-1 ml-3">
                                        <input type="text" class="form-input mt-1 block w-full text-gray-700" placeholder="Last Name"/>
                                    </label>
                                </div>
                                <div class="mt-6 flex">
                                    <label class="block flex-1 ml-3">
                                        <input type="text" class="form-input mt-1 block w-full text-gray-700" placeholder="Email address"/>
                                    </label>
                                </div>
                                <div class="mt-6 flex mb-10">
                                    <label class="block flex-1 ml-3">
                                        <input type="text" class="form-input mt-1 block w-full text-gray-700" placeholder="Telephone"/>
                                    </label>
                                </div>
                                <h4 class="text-sm text-gray-500 font-medium">Delivery address</h4>
                                <div class="mt-6 flex">
                                    <label class="block flex-1 ml-3">
                                        <textarea type="text" class="form-input mt-1 block w-full text-gray-700" placeholder="Address"/>
                                    </label>
                                </div>
                            </div>
                            <div class="mt-8">
                                <h4 class="text-sm text-gray-500 font-medium">Ideal Delivery Date</h4>
                                <div class="mt-6 flex">
                                    <label class="block flex-1">
                                        <input type="date" class="form-input mt-1 block w-full text-gray-700" placeholder="Date"/>
                                    </label>
                                </div>
                            </div>
                        </div>
    
                        <div class="flex items-center justify-between mt-8 mb-10">
                            <button class="flex items-center px-3 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                                <span>Complete order</span>
                            </button>
                            <button class="flex items-center px-3 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500" onClick={onClearBasketButtonClick}>
                                <span>Clear Basket</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
  }
  
  export default Checkout;
  