import React from 'react';

const Banner = () => {
    return (
        <>
            <div className="grid place-items-center" id="banner">
                <div className="flex flex-col items-center">
                    <h1 className="text-gray-700 font-semibold text-xl sm:text-2xl md:text-4xl">Best food waiting for your belly</h1>
                    <div className="bg-white rounded-full mt-4 sm:mt-7">
                        <input className="ml-2 pl-5 sm:pl-8 sm:pr-20  text-gray-500 font-medium" type="text" placeholder="search food here"/>
                        <button className="bg-red-500 px-6 py-2 text-lg font-semibold text-gray-100 tracking-wider rounded-full hover:bg-red-600 transition">search</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner;
