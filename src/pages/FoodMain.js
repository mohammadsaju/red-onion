import React, { useEffect, useState } from 'react';
import { useStateValue } from '../app/StateProvider';
import FoodItem from '../components/FoodItem';
import Skeleton from '../components/Sketon';

const FoodMain = () => {
    const [menuItem, setMenuItem] = useState('lounch');
    const [loading, setLoading] = useState(false)
    const [{foods}] = useStateValue();
    //for filtering  item
    const handleFilter = (text) => {
        setMenuItem(text)
    }
    //for loading 
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        },1000)
    },[])
    return (
        <>
        <div className="grid place-items-center py-11 px-5">
            <div className="flex gap-7">
                <button onClick={() => handleFilter('breckfast')} className={`text-lg font-semibold italic text-gray-700 ${menuItem === 'breckfast' &&'active__filter'}`}>Breackfast</button>
                <button onClick={() => handleFilter('lounch')} className={`text-lg font-semibold italic text-gray-700 ${menuItem == 'lounch' && 'active__filter'}`}>Lounch</button>
                <button onClick={() => handleFilter('dinner')} className={`text-lg font-semibold italic text-gray-700 ${menuItem == 'dinner' && 'active__filter'}`}>Dinner</button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-20" id='foods'>
                {
                    foods.filter(item => menuItem === item.category).map((food) => (
                        loading ? <Skeleton key={food.key}/> : <FoodItem key={food.key} food={food} />
                    ))
                }
            </div>
            <div className="mt-10">
                <button className="bg-gray-400 px-10 py-2 rounded-md text-white font-semibold tracking-wider text-lg italic hover:bg-gray-500 transition">Checkout Your Food</button>
            </div>
        </div>
        </>
    )
}

export default FoodMain;
