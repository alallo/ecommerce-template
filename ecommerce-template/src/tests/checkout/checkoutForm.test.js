import '@testing-library/jest-dom';
import { render, screen, fireEvent  } from '@testing-library/react';
import CheckoutForm from '../../components/checkout/checkoutForm';
import { act } from "react-dom/test-utils";
import { BrowserRouter as Router,} from "react-router-dom";

function setupComponent() {
    const onCompleteOrderButtonClick = jest.fn();
    const onClearBasketButtonClick = jest.fn();
    act(() => {
        render(<Router><CheckoutForm onComplete={onCompleteOrderButtonClick} onClear={onClearBasketButtonClick} /></Router>);
    });
}

test('renders checkout form input field', () => {
    setupComponent();
    expect(screen.getByPlaceholderText('Full Name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Email Address')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Telephone Number')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Address')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Delivery Date')).toBeInTheDocument();
});

test('can type name in input field', () => {
    setupComponent();
    const nameInput = screen.getByPlaceholderText('Full Name');
    expect(nameInput).toBeInTheDocument();
    expect(nameInput.value).toBe('');

    fireEvent.change(nameInput, { target: { value: 'Alex' } })
    expect(nameInput.value).toBe('Alex');
});

test('render error when email not valid', () => {
    setupComponent();
    const nameInput = screen.getByPlaceholderText('Email Address');
    expect(nameInput).toBeInTheDocument();
    expect(nameInput.value).toBe('');

    fireEvent.change(nameInput, { target: { value: 'myemail.com' } })
    expect(nameInput.value).toBe('myemail.com');

    expect(screen.getByText('Please enter a valid email address.')).toBeInTheDocument();

    fireEvent.change(nameInput, { target: { value: 'myemail@gmail.com' } })
    expect(nameInput.value).toBe('myemail@gmail.com');
});


