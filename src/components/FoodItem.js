import React from 'react';
import { useHistory } from 'react-router';
import swal from 'sweetalert';
import { useStateValue } from '../app/StateProvider';

const FoodItem = ({food}) => {
    const history = useHistory();
    const[{}, dispatch] = useStateValue();
    const addToCart = (item) => {
        dispatch({
            type: 'ADD_TO_CART',
            payload: item
        });
        swal("wow", "product added to the cart", "success")
    }
    const handleClick = (key) => {
        history.push(`/product-details/${key}`)
    }
    return (
        <>
            <div className="text-center flex flex-col items-center py-4 cursor-pointer transform transition duration-200 hover:scale-105 rounded-lg food_item">
                <img className='object-contain w-48' src={food.img}/>
                <h4 className="mt-5 text-gray-700 font-semibold text-lg">{food.name}</h4>
                <p className="text-gray-500 py-2">{food.description}</p>
                <h3 className="text-gray-700 text-2xl font-bold">${food.price}</h3>
                <button onClick={() => addToCart(food)} className='bg-red-500 px-4 py-1 mt-3 rounded-full text-sm font-semibold text-gray-100  hover:bg-red-600'>Add To Cart</button>
                <button onClick={() => handleClick(food.key)}  className='bg-green-600 px-4 py-1 mt-3 rounded-full text-sm font-semibold text-gray-100  hover:bg-green-700'>Details</button>
            </div>
        </>
    )
}

export default FoodItem;
