import '@testing-library/jest-dom';
import { render, screen, fireEvent  } from '@testing-library/react';
import CheckoutItem from '../../components/checkout/checkoutItem';
import { act } from "react-dom/test-utils";
import { BrowserRouter as Router,} from "react-router-dom";

const checkoutItem = {
    quantity: 1,
    product:
    {
        id: 123,
        name: "My Item",
        image: "http://image",
        price: 10
    }
}

test('renders checkout item values', () => {
    act(() => {
        render(<Router><CheckoutItem checkoutItem={checkoutItem}/></Router>);
      });
    screen.debug();
    expect(screen.getByText(checkoutItem.product.name)).toBeInTheDocument();
    expect(screen.getByText("£" + checkoutItem.product.price, { selector: 'b' })).toBeInTheDocument();
    expect(screen.getByText(checkoutItem.quantity.toString())).toBeInTheDocument();
    //expect(screen.getByTestId("productImage").textContent).toBe(checkoutItem.product.image);
    const itemCost = checkoutItem.product.price * checkoutItem.quantity;
    expect(screen.getByText("£" + itemCost.toString(), { selector: 'span' })).toBeInTheDocument();
});


test('on plus click increase quantity function called', () => {
    const increaseClick = jest.fn()
    act(() => {
        render(<Router><CheckoutItem checkoutItem={checkoutItem} onIncreaseQuantity={increaseClick}/></Router>);
      });

    fireEvent.click(screen.getByTestId('increaseQty'));
    expect(increaseClick).toHaveBeenCalledTimes(1)
    expect(increaseClick.mock.calls[0][0]).toBe(123); //first call, first parameter

});

test('on minus click decrease quantity function called', () => {
    const decreaseClick = jest.fn()
    act(() => {
        render(<Router><CheckoutItem checkoutItem={checkoutItem} onDecreaseQuantity={decreaseClick}/></Router>);
      });

    fireEvent.click(screen.getByTestId('decreaseQty'));
    expect(decreaseClick).toHaveBeenCalledTimes(1)
    expect(decreaseClick.mock.calls[0][0]).toBe(123); //first call, first parameter

});

test('on remove button click removeItem function called', () => {
    const onRemoveItemClick = jest.fn()
    act(() => {
        render(<Router><CheckoutItem checkoutItem={checkoutItem} onRemoveItem={onRemoveItemClick}/></Router>);
      });

    fireEvent.click(screen.getByTestId('removeItem'));
    expect(onRemoveItemClick).toHaveBeenCalledTimes(1)
    expect(onRemoveItemClick.mock.calls[0][0]).toBe(123); //first call, first parameter

});