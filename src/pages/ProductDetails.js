import React from 'react';
import { useParams } from 'react-router';
import swal from 'sweetalert';
import { useStateValue } from '../app/StateProvider';

const ProductDetails = () => {
    const [{foods}, dispatch] = useStateValue();
    
    const {productId} = useParams();
    const addToCart = (item) => {
        dispatch({
            type: 'ADD_TO_CART',
            payload: item
        })
        swal("product added", "checkout the cart page", "success")
    }
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
            <div className="flex flex-col sm:flex-row justify-center sm:justify-end gap-14 sm:gap-20 py-20 sm:pt-44 px-14 md:px-24">
                {foods?.filter(item => item.key === productId)?.map((food) => (
                    <>
                    <div>
                    <h1 className="text-2xl italic sm:text-4xl font-semibold text-gray-800 mb-6">{food.name}</h1>
                    <p className="text-gray-500 mb-6">Gay one the what walk then she. Demesne mention promise <br/> you justice arrived way. Amazing foods are Or and increasing <br/> to in especially inquietude companions acceptance <br/>admiration.Outweigh it families distance wandered ye</p>
                    <div className="flex gap-12">
                        <h1 className="text-3xl font-semibold">${food.price}</h1>
                        <div className="flex items-center gap-7 px-4 py-1 bg-transparent border rounded-full">
                        <svg onClick={() => decrement(food.key)} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
                        </svg> {food.quantity}<svg onClick={() => increment(food.key)} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-800 cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
                        </svg>
                        </div>
                    </div>
                    <button onClick={() => addToCart(food)} className="flex gap-3 my-7 bg-red-500 text-gray-100 px-6 py-2 rounded hover:bg-red-600 transition"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-100 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>Add</button>
                    <div className="flex items-center gap-11">
                        <img className="object-contain w-28 md:w-48" src={food.img}/>
                        <img className="object-contain w-28 md:w-52" src={food.img}/>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </div>
                </div>
                <div>
                    <img className="object-contain sm:w-1/2 md:w-3/4 xl:w-3/5" src={food.img}/>
                </div>
                    </>
                ))}
            </div>
        </>
    )
}

export default ProductDetails;
