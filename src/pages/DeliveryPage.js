import React from 'react';
import delivery_one from '../assets/Image/adult-blur-blurred-background-687824.png';
import delivery_two from '../assets/Image/chef-cook-food-33614.png';
import delivery_three from '../assets/Image/architecture-building-city-2047397.png';
import icon_one from '../assets/ICON/Group 245.png';
import icon_two from '../assets/ICON/Group 1133.png';
import icon_three from '../assets/ICON/Group 204.png';

const DeliveryPage = () => {
    return (
        <>
            <div className="py-9 px-6 md:px-16 lg:px-36">
            <h1 className="text-3xl font-semibold text-gray-700 mb-5">Why you choose us</h1>
            <p className="text-lg text-gray-600 italic tracking-wider mb-12">Barton waited twenty always repair in within we do An delighted offending <br/> curiosity my is dashwoods at. Boy prosperous increasing surrounded.</p>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                <div className="flex justify-center flex-col transform transition duration-700 hover:scale-105 hover:shadow-md">
                    <div className='overflow-hidden'>
                    <img className='transform transition duration-700 hover:scale-125 hover:shadow-md' src={delivery_one}/>
                    </div>
                    <div className="flex gap-6 my-6">
                        <img className="object-contain -mt-20" src={icon_one}/>
                        <div className="">
                            <h4 className="text-lg font-semibold">Fast Delevary</h4>
                            <p className="text-gray-600 py-2">Keep your systems in sync with autmated web hook <br/> based notificatrions each time link is paid and how we <br/> dream about our future</p>
                            <div className="flex items-center gap-4">
                                <a href="#" className="text-blue-600 text-lg font-semibold">See more</a>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 bg-green-400 text-white cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="shadow-md rounded-md flex justify-center flex-col">
                    <img src={delivery_two}/>
                    <div className="flex gap-6 p-4">
                        <img className="object-contain -mt-20" src={icon_two}/>
                        <div>
                            <h4 className="text-lg font-semibold">A Good Auto Responder</h4>
                            <p className="text-gray-600 py-2">Keep your systems in sync with autmated web hook <br/> based notificatrions each time link is paid and how we <br/> dream about our future</p>
                            <div className="flex items-center gap-4">
                                <a href="#" className="text-blue-600 text-lg font-semibold">See more</a>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 bg-green-400 text-white cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center flex-col transform transition duration-700 hover:scale-105 hover:shadow-lg">
                    <div className='overflow-hidden'>
                    <img className='transform transition duration-700 hover:scale-125' src={delivery_three}/>
                    </div>
                    <div className="flex gap-6 my-6">
                        <img className="object-contain -mt-20" src={icon_three}/>
                        <div className="">
                            <h4 className="text-lg font-semibold">Home Delevary</h4>
                            <p className="text-gray-600 py-2">Keep your systems in sync with autmated web hook <br/> based notificatrions each time link is paid and how we <br/> dream about our future</p>
                            <div className="flex items-center gap-4">
                                <a href="#" className="text-blue-600 text-lg font-semibold">See more</a>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 bg-green-400 text-white cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default DeliveryPage;
