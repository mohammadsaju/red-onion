import React from 'react';
import {Scrollbars} from 'react-custom-scrollbars-2';
import { useStateValue } from '../app/StateProvider';
import Cart from '../components/Cart';
import CartItem from '../components/CartItem';

const ShoppingCart = () => {
    const [{cart}, dispatch] = useStateValue();
    return (
        <>
            <div className="flex flex-col items-center md:flex-row md:justify-evenly py-16 sm:px-12 md:px-16">
                <div className="w-4/5 mb-10 md:w-1/3 lg:w-2/5 xl:w-1/4">
                    <h1 className="text-lg font-semibold text-gray-600 italic">Edit Delivery Details</h1>
                    <hr className="mb-8 mt-4 border-b-2"/>
                    <form>
                        <input className="mb-3 block text-gray-500 pl-8 font-semibold w-full bg-gray-100 p-2 rounded-md focus:outline-none border focus:bg-gray-200 focus:shadow-inner" type="text" placeholder="Deliver to door"/>
                        <input className="mb-3 block text-gray-500 pl-8 font-semibold w-full bg-gray-100 p-2 rounded-md focus:outline-none border focus:bg-gray-200 focus:shadow-inner" type="email" placeholder="107 Rd No 8"/>
                        <input className="mb-3 block text-gray-500 pl-8 font-semibold w-full bg-gray-100 p-2 rounded-md focus:outline-none border focus:bg-gray-200 focus:shadow-inner" type="password" placeholder="Flat, suite or floor"/>
                        <input className="mb-3 block text-gray-500 pl-8 font-semibold w-full bg-gray-100 p-2 rounded-md focus:outline-none border focus:bg-gray-200 focus:shadow-inner" type="password" placeholder="Business Name"/>
                        <textarea className="mb-3 block text-gray-500 pl-8 font-semibold w-full bg-gray-100 p-2 rounded-md focus:outline-none border focus:bg-gray-200 focus:shadow-inner" placeholder="Add delivery instructor"></textarea>
                        <button className="mb-3 block text-gray-100 font-semibold w-full bg-gray-100 p-2 rounded-md bg-red-500 hover:bg-red-600 transition" type="submit">Save & continue</button>
                    </form>
                </div>
                <div className="w-4/5 md:w-3/5 lg:w-2/5 xl:w-1/4">
                    <p className="text-lg md:text-xl font-semibold text-gray-600">From <span className="font-bold text-gray-700 italic">Gulshan Plaza Restaura GPR</span></p>
                    <p className="text-gray-600 font-semibold my-3">Arriving in 20-30 min</p>
                    <p className="text-gray-600 font-semibold">107 Rd No 8</p>
                    <div className="my-7 flex flex-col rounded-md" style={{width: '100', height: 298, boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'}}>
                        <Scrollbars >
                            {cart?.length === 0 ? (
                                <img src="https://www.eshoppingnepal.com/photos/nproduct.png"/>
                            ):(
                                <>
                                {cart.map(item => (
                                <CartItem cartItem={item}/>
                                ))}
                                </>
                            )}
                            
                        </Scrollbars>
                    </div>
                    <>
                    <Cart/>
                    </>
                </div>
            </div>
        </>
    )
}

export default ShoppingCart;
