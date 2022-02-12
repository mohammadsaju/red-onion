import React from 'react';
import { Link } from 'react-router-dom';
import { useStateValue } from '../app/StateProvider';
import logo from '../assets/logo2.png';
import useFirebase from '../hooks/useFirebase';

const Header = () => {
    const [{totalQuantity, user}, dispatch] = useStateValue();
    const {signOut} = useFirebase();
    return (
        <>
            <header className="sticky z-20 top-0 right-0 left-0 shadow">
                <nav className="bg-white flex items-center justify-between px-6 sm:px-12 py-2 sm:py-4">
                    <Link to='/'>
                    <img className="object-contain w-28 sm:w-36" src={logo}/>
                    </Link>
                    <div className="flex items-center gap-4 sm:gap-11">
                        <Link to='/shopping-cart'>
                        <div className='flex'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <strong className='-mt-2 bg-red-300 h-6 px-1 rounded-full font-semibold'>{totalQuantity}</strong>
                        </div>
                        </Link>
                        { user ? (
                            <>
                            <div className='flex flex-col items-center cursor-pointer'>
                            <img className='w-7 rounded-full' src={user.photoURL}/>
                            <p className='text-sm font-semibold text-gray-600'>{user.email && user.displayName}</p>
                            </div>
                            <button onClick={() => signOut()} className='bg-yellow-500 rounded-full text-gray-100 font-semibold px-4 py-2 hover:bg-yellow-700 transition'>Logout</button>
                            </>
                        ) : (
                            <>
                            <Link to='/login' className="text-md sm:text-xl font-semibold text-gray-700">Login</Link>
                            <Link to='/register' className="px-3 sm:px-11 py-2 bg-red-500 text-sm  sm:text-lg font-semibold sm:font-medium text-gray-100 rounded-full hover:bg-red-600 transition">Sign Up</Link>
                            </>
                        )}
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header;
