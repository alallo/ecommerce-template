import basketStoreService from '../../services/basketStoreService'
import React, { useEffect, useState } from "react";
import CheckoutItem from './checkoutItem';
import checkoutService from '../../services/checkoutService';
import  { useHistory } from 'react-router-dom'
import { useAlert } from 'react-alert'

function Checkout() {

    const [basketState, setBasketState] = useState(basketStoreService.initialState);
    const [checkoutFormState, setCheckoutFormState] = useState({ name: "", email: "", telephone: "", address: "", deliveryDate: ""});
    const history = useHistory();
    const alert = useAlert();

    useEffect(()=> {
        basketStoreService.subscribe(setBasketState);
        basketStoreService.init();
    },[basketState.data]);

    function onClearBasketButtonClick (event) {
        event.preventDefault();
        basketStoreService.clearBasket();
    };

    function handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        setCheckoutFormState(prevState => ({
            ...prevState,
            [name]: value
        }));
      }
    
    function completeOrderButtonClick(event)
    {
        event.preventDefault();
        let order = { basket: basketState.data, customer: checkoutFormState};
        checkoutService.completeCheckout(order);
        basketStoreService.clearBasket();
        alert.success("Your order is now with us. We will get in touch soon. Thank you!");
        return history.push('/') ;
    }

    return (
        <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row mt-8">
                <div className="w-full lg:w-full order-2">
                    <form className="mt-8 lg:w-full">
                        <div>
                            <div className="w-full mb-8 flex-shrink-0 order-1 lg:w-1/2 lg:mb-0 lg:order-2">
                                <div className="w-full flex">
                                    <div className="border rounded-md max-w-md w-full px-4 py-3">
                                        <div className="flex items-center justify-between">
                                            <h3 className="text-gray-700 font-medium">Order total ({basketState.basketItemCount})</h3>
                                        </div>
                                        {basketState.data.length > 0 
                                            ? basketState.data.map((checkoutItem, index) =>
                                            <CheckoutItem checkoutItem={checkoutItem} key={index}/>)
                                            : <div>The basket is empty</div>
                                        }
                                        <hr className="my-3"/>
                                    <div>
                                    <h3 className="text-gray-700 font-medium">Subtotal(excluding delivery): <b>£{basketState.basketTotalAmount}</b></h3>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-1/2">
                            <div className="mt-8">
                                <h4 className="text-sm text-gray-500 font-medium">Your Details</h4>
                                <div className="mt-6 flex">
                                    <label className="block flex-1 ml-3">
                                        <input type="text" className="form-input mt-1 block w-full text-gray-700" name="name" placeholder="Name" value={checkoutFormState.name} onChange={handleInputChange}/>
                                    </label>
                                </div>
                                <div className="mt-6 flex">
                                    <label className="block flex-1 ml-3">
                                        <input type="email" className="form-input mt-1 block w-full text-gray-700" name="email" placeholder="Email address" value={checkoutFormState.email} onChange={handleInputChange}/>
                                    </label>
                                </div>
                                <div className="mt-6 flex mb-10">
                                    <label className="block flex-1 ml-3">
                                        <input type="tel" className="form-input mt-1 block w-full text-gray-700" name="telephone" placeholder="Telephone" value={checkoutFormState.telephone} onChange={handleInputChange}/>
                                    </label>
                                </div>
                                <h4 className="text-sm text-gray-500 font-medium">Delivery address</h4>
                                <div className="mt-6 flex">
                                    <label className="block flex-1 ml-3">
                                        <textarea type="text" className="form-input mt-1 block w-full text-gray-700" name="address" placeholder="Address" value={checkoutFormState.address} onChange={handleInputChange}/>
                                    </label>
                                </div>
                            </div>
                            <div className="mt-8">
                                <h4 className="text-sm text-gray-500 font-medium">Ideal Delivery Date</h4>
                                <div className="mt-6 flex">
                                    <label className="block flex-1">
                                        <input type="date" className="form-input mt-1 block w-full text-gray-700" name="deliveryDate" placeholder="Date" value={checkoutFormState.deliveryDate} onChange={handleInputChange}/>
                                    </label>
                                </div>
                            </div>
                        </div>
    
                        <div className="flex items-center justify-between mt-8 mb-10">
                            <button className="flex items-center px-3 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500" onClick={completeOrderButtonClick}>
                                <span>Complete order</span>
                            </button>
                            <button className="flex items-center px-3 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500" onClick={onClearBasketButtonClick}>
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
  