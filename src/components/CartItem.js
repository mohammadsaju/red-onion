import React from 'react';
import { useStateValue } from '../app/StateProvider';

const CartItem = ({cartItem}) => {
    const [{}, dispatch] = useStateValue();
    const increment = (key) => {
        dispatch({
            type: 'INCREMENT',
            payload: key
        })
    }
    const decrement = (key) => {
        dispatch({
            type: 'DECREMENT',
            payload: key
        })
    }
    return (
        <>
            <div className="flex items-center flex-col md:flex-row gap-3 md:gap-7 bg-gray-100 py-2 pl-2 rounded-2xl m-6 text-center">
            <img className="object-contain w-24 rounded-full" src={cartItem.img}/>
            <div>
                <p className="text-gray-700 font-semibold text-sm md:text-base">{cartItem.name}</p>
                <h3 className="text-lg font-semibold text-red-500">${cartItem.price}</h3>
                <p className="text-sm text-gray-400">Delivery time</p>
            </div>
            <div className="flex items-center gap-2 md:gap-4 px-2 py-1 bg-transparent">
            <svg onClick={() => decrement(cartItem.key)} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 12H6" />
            </svg>
            <span className="text-xl font-bold">{cartItem.quantity}</span>
            <svg onClick={() => increment(cartItem.key)} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" />
            </svg>
            </div>
        </div>
        </>
    )
}

export default CartItem;
