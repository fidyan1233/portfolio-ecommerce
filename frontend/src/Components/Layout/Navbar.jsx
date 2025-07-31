import React from 'react'

import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaPhoneAlt } from "react-icons/fa";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { FiSearch } from "react-icons/fi";

import { MdEmail } from "react-icons/md";




const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className=' sticky top-0  shadow-md' style={{ zIndex: "4000" }}>
            <div className="top-nav-bar flex justify-between items-center px-6 py-2 lg:px-40 bg-[#009688] text-white ">
                <div className="phone-number text-xs lg:text-sm lg:font-bold flex items-center gap-1 ">
                    <FaPhoneAlt />
                    <div className="number flex items-center">
                        +91 8108290681
                    </div>
                </div>
                <div className="email text-xs lg:text-sm flex lg:font-bold items-center gap-1 pe-1">
                    <MdEmail />
                    <div className="email-text flex items-center">

                        info.fidyanpandhre@gmail.com
                    </div>
                </div>
            </div>

            <div className='bg-gray-100 pt-2 pb-2 lg:py-2 lg:px-40 px-3    block lg:flex justify-between items-center ' >
                <div className="logo  lg:text-left  lg:mb-0 lg:mb-0 flex justify-between">
                    <div className='flex items-center '>

                        {/* <h1 className='font-bold text-4xl text-[#009688] hidden lg:block'>FS UPTREND</h1> */}
                        <div className='hidden lg:block'>
                            <div className="flex items-center">
                                <img src="/sellkaroo-logo.png" alt="" />
                            </div>

                        </div>
                        <div className='block lg:hidden'>
                            <div className="flex items-center">
                                <img src="/sellkaroo-logo.png" width={160} alt="" />
                            </div>

                        </div>
                        {/* <h1 className='font-bold text-xl text-[#009688] block lg:hidden'>FS UPTREND</h1> */}
                    </div>
                    <div className='flex items-center lg:hidden '>
                        <div className='flex  gap-2 '>
                            <div className='p-2'>
                                <Link to={"/cart"}><img src="/search.png" width={22} alt="" /></Link>
                            </div>
                            <div className="cart relative p-2">
                                <Link to={"/cart"}><img src="/cart.png" width={24} alt="" /></Link>
                                <span className='rounded-full bg-[#009688] absolute top-0 right-0 text-white text-center' style={{ width: "16px", border: "2px solid #fff", fontSize: "8px" }}>1</span>
                            </div>
                            <div className="cart relative p-2">
                                <Link to={"/cart"}><img src="/like.png" width={24} alt="" /></Link>
                                <span className=' rounded-full bg-[#009688] absolute top-0 right-0 text-white text-center' style={{ width: "16px", border: "2px solid #fff", fontSize: "8px" }}>1</span>
                            </div>
                            {/* <div className="p-2">
                                <Link to={"/cart"}><img src="/profile.png" width={24} alt="" /></Link>
                            </div> */}
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="p-2 text-gray-700 focus:outline-none md:hidden"
                            >
                                {isOpen ? <XMarkIcon className="w-6 text-[#479789]" strokeWidth={2.8} /> : <Bars3Icon className="w-6 text-[#479789]" strokeWidth={2.8} />}
                            </button>
                            <Transition
                                show={isOpen}
                                enter="transition-transform duration-200"
                                enterFrom="-translate-x-full"
                                enterTo="translate-x-0"
                                leave="transition-transform duration-200"
                                leaveFrom="translate-x-0"
                                leaveTo="-translate-x-full"
                            >
                                <div className="fixed top-0 left-0 w-full h-full bg-white shadow-lg z-50 md:hidden">
                                    <div className="flex justify-between items-center px-4 py-3 border-b">
                                        <img src="/sellkaroo-logo.png" width={180} alt="" />
                                        <button onClick={() => setIsOpen(false)}>
                                            <XMarkIcon className="w-6 h-6 text-[#479789]" strokeWidth={2.8} />
                                        </button>
                                    </div>

                                    <Menu as="div" className="mt-4">
                                        <MenuItems static className="flex flex-col gap-2 px-4">
                                            <MenuItem>
                                                {({ active }) => (
                                                    <a
                                                        href="/cart"
                                                        className={`block px-4 py-2 rounded ${active ? 'bg-blue-100 text-blue-700' : 'text-gray-800'
                                                            }`}
                                                    >
                                                        Home
                                                    </a>
                                                )}
                                            </MenuItem>
                                            <MenuItem>
                                                {({ active }) => (
                                                    <a
                                                        href="/cart"
                                                        className={`block px-4 py-2 rounded ${active ? 'bg-blue-100 text-blue-700' : 'text-gray-800'
                                                            }`}
                                                    >
                                                        About
                                                    </a>
                                                )}
                                            </MenuItem>
                                            <MenuItem>
                                                {({ active }) => (
                                                    <a
                                                        href="/cart"
                                                        className={`block px-4 py-2 rounded ${active ? 'bg-blue-100 text-blue-700' : 'text-gray-800'
                                                            }`}
                                                    >
                                                        Contact
                                                    </a>
                                                )}
                                            </MenuItem>
                                        </MenuItems>
                                    </Menu>
                                </div>
                            </Transition>

                        </div>
                    </div>

                </div>
                <div className='hidden lg:block'>

                    <div className="search-bar relative "  >
                        <input type="text" className='p-3 rounded-md' style={{ width: "100%" }} placeholder='Search for a Product' />
                        <img src="/search.png" className='absolute right-4 bottom-3' alt="" />
                    </div>
                </div>
                {/* <div className='block lg:hidden pb-2'>

                    <div className="search-bar relative ">
                        <input type="text" className='p-2 rounded-md' style={{ width: "100%" }} placeholder='Search for a Product' />
                        <img src="/search.png" className='absolute right-4 bottom-3' width={20} alt="" />
                    </div>
                </div> */}
                <div className="cart-likes-profile flex gap-16">
                    <div className="flex items-center">


                        <div className='hidden lg:block'>


                            <div className="number" style={{ lineHeight: "20px" }}>
                                <p className='text-right text-sm '>For Support ?</p>
                                <p className='text-m font-bold text-[#009688]'>+91 8108290681</p>
                            </div>


                        </div>
                    </div>

                    <div className="hidden lg:block">
                        <div className="flex gap-16">
                            <div className="cart flex items-center  cursor-pointer">
                                <Link to="/cart" className='flex items-center'> <img src="/cart.png" width={35} alt="" /> <span className='text-sm  ms-1'>2</span></Link>

                            </div>

                            <div className="like flex items-center cursor-pointer">

                                <img src="/like.png" width={35} alt="" /> <span className='text-sm  ms-1'>10</span>
                            </div>

                            <Menu as="div" className="relative inline-block text-left">
                                <div>
                                    <MenuButton className="inline-flex w-full justify-center  rounded-md  py-2 text-sm font-semibold text-gray-900  ">
                                        <img src="/profile.png" width={35} alt="" />

                                        <ChevronDownIcon aria-hidden="true" className="mt-1 size-6 text-gray-600" />
                                    </MenuButton>
                                </div>

                                <MenuItems
                                    transition
                                    className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                                >
                                    <div className="py-1">
                                        <MenuItem>
                                            <a
                                                href="#"
                                                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                                            >
                                                Account settings
                                            </a>
                                        </MenuItem>
                                        <MenuItem>
                                            <a
                                                href="#"
                                                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                                            >
                                                Support
                                            </a>
                                        </MenuItem>
                                        <MenuItem>
                                            <a
                                                href="#"
                                                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                                            >
                                                License
                                            </a>
                                        </MenuItem>
                                        <form action="#" method="POST">
                                            <MenuItem >
                                                <button
                                                    type="submit"
                                                    className="block w-full px-4 py-2 text-left text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                                                >
                                                    Sign out
                                                </button>
                                            </MenuItem>
                                        </form>
                                    </div>
                                </MenuItems>
                            </Menu>

                        </div>
                    </div>
                </div>
            </div>
            <div className='hidden lg:block'>

                <div className="menu-nav flex items-center justify-center  py-5 bg-white" style={{ height: "30px" }}>
                    <ul className='flex gap-20'>
                        <li>
                            <Menu as="div" className="relative inline-block text-left">
                                <div>
                                    <MenuButton className="inline-flex w-full justify-center  rounded-md   items-center  text-gray-900  ">
                                        T-shirts
                                        <ChevronDownIcon aria-hidden="true" className="size-5 ms-1 text-gray-600" />
                                    </MenuButton>
                                </div>

                                <MenuItems
                                    transition
                                    className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                                >
                                    <div className="py-1">
                                        <MenuItem>
                                            <a
                                                href="#"
                                                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                                            >
                                                Half Sleves
                                            </a>
                                        </MenuItem>
                                        <MenuItem>
                                            <a
                                                href="#"
                                                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                                            >
                                                Full Sleves
                                            </a>
                                        </MenuItem>
                                        <MenuItem>
                                            <a
                                                href="#"
                                                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                                            >
                                                Lycra
                                            </a>
                                        </MenuItem>
                                        <MenuItem>
                                            <a
                                                href="#"
                                                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                                            >
                                                Cotton
                                            </a>
                                        </MenuItem>

                                    </div>
                                </MenuItems>
                            </Menu>
                        </li>
                        <li>Shirts</li>
                        <li>Hodies</li>
                        <li>Jeans</li>
                        <li>Sweaters</li>
                        <li>Raincoats</li>
                    </ul>

                </div>
            </div>
        </div>

    )
}

export default Navbar


{/* <div className="cart flex items-center  cursor-pointer">
                                <Link to="/cart" className='flex items-center'> <img src="/cart.png" width={20} alt="" /> <span className='text-sm  ms-1'>2</span></Link>

                            </div>

                            <div className="like flex items-center cursor-pointer">

                                <img src="/like.png" width={20} alt="" /> <span className='text-sm  ms-1'>10</span>
                            </div> */}

{/* <Menu as="div" className="relative inline-block text-left">
                                <div>
                                    <MenuButton className="inline-flex w-full justify-center  rounded-md  py-2 text-sm font-semibold text-gray-900  ">
                                        <img src="/profile.png" width={20} alt="" />

                                        <ChevronDownIcon aria-hidden="true" className="mt-0 size-5 text-gray-600" />
                                    </MenuButton>
                                </div>

                                <MenuItems
                                    transition
                                    className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                                >
                                    <div className="py-1">
                                        <MenuItem>
                                            <a
                                                href="#"
                                                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                                            >
                                                Account settings
                                            </a>
                                        </MenuItem>
                                        <MenuItem>
                                            <a
                                                href="#"
                                                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                                            >
                                                Support
                                            </a>
                                        </MenuItem>
                                        <MenuItem>
                                            <a
                                                href="#"
                                                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                                            >
                                                License
                                            </a>
                                        </MenuItem>
                                        <form action="#" method="POST">
                                            <MenuItem >
                                                <button
                                                    type="submit"
                                                    className="block w-full px-4 py-2 text-left text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                                                >
                                                    Sign out
                                                </button>
                                            </MenuItem>
                                        </form>
                                    </div>
                                </MenuItems>
                            </Menu> */}
