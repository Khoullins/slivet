"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import NavLink from './NavLink';
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from './MenuOverlay';

const navLinks = [
    
    {
        title: "Home",
        path: "/",
    },
    {
        title: "About",
        path: "#about",
    },
    {
        title: "Projects",
        path: "#projects",
    },
    {
        title: "Contact",
        path: "#contact",
    },
];
const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
        <nav className="fixed mx-auto top-0 left-0 right-0 z-10 bg-[#004E60] bg-opacity-100">
            <div className='flex flex-wrap items-center justify-between mx-auto xl:ml-10 lg:ml-10 sm:ml-4 p-4 py-4'>
                <Link 
                    href={"/"} 
                    className='text-2xl md:text-5xl text-white font-semibold'>
                    <img className='h-16 max-w-full' src="/images/slivetPrimLogoBgNon.png" alt="logo" />
                </Link>
                <div className="mobile-menu block md:hidden">
                    {!navbarOpen ? (
                    <button onClick={() => setNavbarOpen(true)} className='flex items-center px-3 py-2 border rounded border-[#00AEEF] text-[#00AEEF] hover:text-[#39B54A] hover:border-[#39B54A]'>
                        <Bars3Icon className='h-5 w-5' />
                    </button>
                    ) : (
                    <button onClick={() => setNavbarOpen(false)} className='flex items-center px-3 py-2 border rounded border-[#00AEEF] text-[#00AEEF] hover:text-[#39B54A] hover:border-[#39B54A]'>
                        <XMarkIcon className='h-5 w-5' />
                    </button>
                    )}
                </div>
                <div className='menu hidden md:block md:w-auto' id="navbar">
                    <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
                        {
                            navLinks.map((link, index) => (
                                <li key={index}>
                                    <NavLink href={link.path} title={link.title} />
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
        </nav>
    )
    }

export default Navbar