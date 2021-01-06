import React, { useState } from "react";
import PropTypes from "prop-types";
import InputField from './inputField';

function CheckoutForm(props) {

    const [isFormValid, setIsFormValid] = useState(false);
    const [formErrors, setFormErrors] = useState([]);
    const [checkoutFormState, setCheckoutFormState] = useState({ name: "", email: "", telephone: "", address: "", deliveryDate: ""});

    function handleInputChange(event) {
        setIsFormValid(true);
        const target = event.target;
        const value = target.value;
        const name = target.name;

        setCheckoutFormState(prevState => ({
            ...prevState,
            [name]: value
        }));

        validateForm();
    }
    
    function validateForm() {
        const errors = [];
        if(!checkoutFormState["name"])
        {
            errors.push('Please enter a valid name.');
            setIsFormValid(false)
        }
        if (!checkoutFormState["email"] || typeof checkoutFormState["email"] !== "undefined") {
            //regular expression for email validation
            const pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(checkoutFormState["email"])) {
                errors.push('Please enter a valid email address.');
                setIsFormValid(false)
            }
          }
        if(!checkoutFormState["telephone"])
        {
            errors.push('Please enter a valid telephone number.');
            setIsFormValid(false)
        }
        if(!checkoutFormState["address"])
        {
            errors.push('Please enter a valid address.');
            setIsFormValid(false)
        }
        setFormErrors(errors);
    }

    return (
        <form className="mt-8 lg:w-full ">
            <div>
                {
                    !isFormValid && formErrors.length > 0
                    ?   <div className="w-full mb-8 flex-shrink-0 order-1 lg:w-1/2 lg:mb-0 lg:order-2" role="alert">
                            <div className="bg-red-500 text-white font-bold rounded-t px-4 py-2">
                                Error
                            </div>
                            <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
                                {
                                    formErrors.map((error) =>
                                        <p>{error}</p>)
                                }
                            </div>
                        </div>
                    : null
                }
            </div>
            <div className="w-full mb-8 flex-shrink-0 order-1 lg:w-1/2 lg:mb-0 lg:order-2 border rounded-md my-5">
                <div className="mt-8 px-4 py-3">
                    <div className="px-4 py-3">
                        <h4 className="text-md text-black-500 font-bold">Your Details</h4>
                        <InputField name="name" placeholder="Full Name" value={checkoutFormState.name} onChange={handleInputChange}></InputField>
                        <InputField name="email" placeholder="Email Address" value={checkoutFormState.email} onChange={handleInputChange}></InputField>
                        <InputField name="telephone" placeholder="Telephone Number" value={checkoutFormState.telephone} onChange={handleInputChange}></InputField>
                    </div>

                    <div className="px-4 py-3">
                        <h4 className="text-md text-black-500 font-bold">Delivery address</h4>
                        <div className="mt-6 flex">
                            <label className="block flex-1 ml-3">
                                <textarea type="text" className="form-input mt-1 block w-full text-gray-700" name="address" placeholder="Address" value={checkoutFormState.address} onChange={handleInputChange}/>
                            </label>
                        </div>
                    </div>

                    <div className="px-4 py-3">
                        <h4 className="text-md text-black-500 font-bold">Ideal Delivery Date</h4>
                        <InputField name="deliveryDate" placeholder="Delivery Date" value={checkoutFormState.deliveryDate} onChange={handleInputChange}></InputField>
                    </div>
                </div>
            </div>
            <div className="w-full mb-8 flex-shrink-0 order-1 lg:w-1/2 lg:mb-0 lg:order-2 my-5">
                <div className="flex items-center justify-between mt-8 mb-10 px-4 py-3">
                    <button className="flex items-center px-3 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500" onClick={props.onClear}>
                        <span>Clear Basket</span>
                    </button>
                    <button disabled={!isFormValid} className="flex items-center px-3 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500" onClick={(event) => props.onComplete(event, checkoutFormState, isFormValid)}>
                        <span>Complete order</span>
                    </button>
                </div>           
            </div>
        </form>
    );
  }

  CheckoutForm.propTypes = 
  {
    onClear: PropTypes.func.isRequired,
    onComplete: PropTypes.func.isRequired
  }

  export default CheckoutForm;
  

