import React, { useState } from 'react';
import { IoClose } from "react-icons/io5";
import { HiOutlineMenu } from "react-icons/hi";
import { Link } from 'react-router-dom';

export const Header = () => {
    const [menu, setMenu] = useState(false);

    return (
        <header className='p-4 bg-gray-200 shadow-md fixed top-0 left-0 right-0 z-50'> {/* Ensure header has z-index */}
            <div className='max-w-6xl mx-auto'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center'>
                        <img src="/profile.png" alt="Profile" className='w-12 h-12 border border-stone-300 bg-stone-400 rounded-full mr-2' />
                        <div>
                            <h1 className='text-xl font-semibold'>Kruna<span className='text-stone-500'>l</span></h1>
                            <p className='font-medium text-sm'>Web Developer</p>
                        </div>
                    </div>
                    <div className='hidden md:block'>
                        <ul className='flex gap-4 font-medium'>
                            <Link to='/'>
                                <li className='hover:underline hover:text-gray-600 cursor-pointer hover:scale-x-105'>Home</li>
                            </Link>
                            <li className='hover:underline hover:text-gray-600 cursor-pointer hover:scale-x-105'>About</li>
                            <li className='hover:underline hover:text-gray-600 cursor-pointer hover:scale-x-105'>Projects</li>
                            <li className='hover:underline hover:text-gray-600 cursor-pointer duration-75 hover:scale-x-105'>Contacts</li>
                        </ul>
                    </div>
                    <div onClick={() => setMenu(!menu)} className='md:hidden cursor-pointer'>
                        {menu ? <IoClose size={24} /> : <HiOutlineMenu size={24} />}
                    </div>
                </div>
                {menu && (
                    <div className='md:hidden'>
                        <ul className='flex flex-col items-center justify-center gap-4 font-medium h-screen'>
                            <li onClick={() => setMenu(false)} className='hover:underline hover:text-gray-600 cursor-pointer hover:scale-x-105 text-xl'><Link to="/">Home</Link></li>
                            <li onClick={() => setMenu(false)} className='hover:underline hover:text-gray-600 cursor-pointer hover:scale-x-105 text-xl'>About</li>
                            <li onClick={() => setMenu(false)} className='hover:underline hover:text-gray-600 cursor-pointer hover:scale-x-105 text-xl'>Portfolio</li>
                            <li onClick={() => setMenu(false)} className='hover:underline hover:text-gray-600 cursor-pointer hover:scale-x-105 text-xl'>Experience</li>
                            <li onClick={() => setMenu(false)} className='hover:underline hover:text-gray-600 cursor-pointer duration-75 hover:scale-x-105 text-xl'>Contacts</li>
                        </ul>
                    </div>
                )}
            </div>
        </header>
    );
};
