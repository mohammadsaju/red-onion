import React from 'react';
import { useHistory } from 'react-router';
import { useStateValue } from '../app/StateProvider';

const Cart = () => {
    const history = useHistory();
    const [{total, totalQuantity, shipping, tax, grandTotal}, dispatch] = useStateValue();
    const handleClick = () => {
        history.push('/place-order')
    }
    return (
            <div>
                <p className="mb-3 text-gray-700 font-semibold text-lg flex justify-between">Subtotal {totalQuantity} item <span>${total?.toFixed(2)}</span></p>
                <p className="mb-3 text-gray-700 font-semibold text-lg flex justify-between">Tax <span>${tax?.toFixed(2)}</span></p>
                <p className="mb-3 text-gray-700 font-semibold text-lg flex justify-between">Delivery fee<span>${shipping}</span></p>
                <p className="mb-3 text-gray-700 font-bold text-xl flex justify-between">Total<span>${grandTotal?.toFixed(2)}</span></p>
                <button onClick={() => handleClick()} className="w-full py-3 text-white bg-gray-500 font-semibold rounded-md mt-3 hover:bg-gray-600 transition">Place Order</button>
            </div>
    )
}

export default Cart;
