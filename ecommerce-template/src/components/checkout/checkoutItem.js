import React, {useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function CheckoutItem(props) {

    const [checkoutItem, setCheckoutItem] = useState(props.checkoutItem);
    useEffect(() => {
        setCheckoutItem(props.checkoutItem)
    },[props.checkoutItem, props.checkoutItem.quantity])

    return (
            <div className="flex justify-between mt-6">
                <div className="flex">
                    <div className="mx-1">
                        <Link to= {"/product-details/" + checkoutItem.product.id}>
                            <img className="h-40 w-1/2 object-cover rounded" src={checkoutItem.product.image} alt=""/>
                        </Link>
                    </div>
                    <div className="mx-3">
                        <h3 className="text-sm text-gray-600">{checkoutItem.product.name}</h3>
                        <h3 className="text-sm text-gray-600"><b>£{checkoutItem.product.price}</b></h3>
                        <div className="flex items-center mt-2">
                            <button data-testid="increaseQty" className="text-gray-500 focus:outline-none focus:text-gray-600" onClick={(event) => props.onIncreaseQuantity(checkoutItem.product.id, event)}>
                                <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            </button>
                                <span className="text-gray-700 mx-2">{checkoutItem.quantity}</span>
                            <button data-testid="decreaseQty" className="text-gray-500 focus:outline-none focus:text-gray-600" onClick={(event) => props.onDecreaseQuantity(checkoutItem.product.id, event)}>
                                <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            </button>
                        </div>
                        <div className="flex items-center mt-2">
                            <button data-testid="removeItem"  className="text-gray-500 focus:outline-none focus:text-gray-600" onClick={(event) => props.onRemoveItem(checkoutItem.product.id, event)}>
                                <span>Remove Item</span>
                            </button>  
                        </div>
                    </div>
                </div>
                <span className="text-gray-600">£{checkoutItem.product.price * checkoutItem.quantity}</span>
        </div>
       
    );
  }
  

  CheckoutItem.propTypes = 
  {
    checkoutItem: PropTypes.shape({
        product: PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            image: PropTypes.string.isRequired
        }),
        quantity: PropTypes.number.isRequired
    }),
    onRemoveItem: PropTypes.func.isRequired,
    onIncreaseQuantity: PropTypes.func.isRequired,
    onDecreaseQuantity: PropTypes.func.isRequired
  }

  export default CheckoutItem;
  

