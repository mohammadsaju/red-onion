import React from 'react';
import logo from '../assets/logo2.png';

const Footer = () => {
    return (
        <>
            <footer className="bg-black text-gray-400 py-10 px-10 md:px-24">
            <div className="flex flex-col gap-7 md:flex-row justify-between">
                <div>
                    <img className="object-contain w-44" src={logo}/>
                </div>
            <div className="flex flex-col md:flex-row  gap-6 md:gap-44">
                <div>
                    <p className="text-lg font-semibold mb-2">About Online food</p>
                    <p className="text-lg font-semibold mb-2">Read our blog</p>
                    <p className="text-lg font-semibold mb-2">Sign up to deliver</p>
                    <p className="text-lg font-semibold mb-2">Add your restaurant</p>
                </div>
                <div>
                    <p className="text-lg font-semibold mb-2">Get help</p>
                    <p className="text-lg font-semibold mb-2">Read FAQs</p>
                    <p className="text-lg font-semibold mb-2">View all cities</p>
                    <p className="text-lg font-semibold mb-2">Restaurants near me</p>
                </div>
            </div>
            </div>
            <div className="flex flex-col md:flex-row gap-6 justify-between mt-12">
                <div>
                    <p>Copyrigtht @ 2020 Online food</p>
                </div>
                <div className="flex gap-3 md:gap-11">
                    <p className="text-lg md:font-semibold">Privacy Policy</p>
                    <p className="text-lg md:font-semibold">Terms of Use</p>
                    <p className="text-lg md:font-semibold">Pricing</p>
                </div>
            </div>
        </footer>
        </>
    )
}

export default Footer;
