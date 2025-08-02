import React from 'react'

import { Menu, MenuButton, MenuItem, MenuItems, Transition, Popover } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { useState, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { FaPhoneAlt } from "react-icons/fa";
import { Bars3Icon, XMarkIcon, BuildingStorefrontIcon} from '@heroicons/react/24/outline'
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
                                <Link to={"/"}><img src="/sellkaroo-logo.png" width={160} alt="" /></Link>
                            </div>

                        </div>
                        {/* <h1 className='font-bold text-xl text-[#009688] block lg:hidden'>FS UPTREND</h1> */}
                    </div>
                    <div className='flex items-center lg:hidden '>
                        <div className='flex  gap-2 '>
                            <div className='p-2'>
                                <Link to={"/search"}><img src="/search.png" width={22} alt="" /></Link>
                            </div>
                            <div className="cart relative p-2">
                                <Link to={"/cart"}><img src="/cart.png" width={24} alt="" /></Link>
                                <span className='rounded-full bg-[#009688] absolute top-0 right-0 text-white text-center' style={{ width: "16px", border: "2px solid #fff", fontSize: "8px" }}>1</span>
                            </div>
                            <div className="cart relative p-2">
                                <Link to={"/wishlist"}><img src="/like.png" width={24} alt="" /></Link>
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
                                                    <Link
                                                        to={"/"}
                                                        onClick={() => setIsOpen(false)}
                                                        className={`block px-4 py-2 rounded ${active ? 'bg-blue-100 text-blue-700' : ' text-[#479789]'
                                                            }`}
                                                    >
                                                        Home
                                                    </Link>
                                                )}
                                            </MenuItem>
                                            <MenuItem>
                                                {({ active }) => (
                                                    <Link
                                                        to={"/about"}
                                                        onClick={() => setIsOpen(false)}
                                                        className={`block px-4 py-2 rounded ${active ? 'bg-blue-100 text-blue-700' : ' text-[#479789]'
                                                            }`}
                                                    >
                                                        About
                                                    </Link>
                                                )}
                                            </MenuItem>
                                            <MenuItem>
                                                {({ active }) => (
                                                    <Link
                                                        to={"/contact"}
                                                        onClick={() => setIsOpen(false)}
                                                        className={`block px-4 py-2 rounded ${active ? 'bg-blue-100 text-blue-700' : ' text-[#479789]'
                                                            }`}
                                                    >
                                                        Contact
                                                    </Link>
                                                )}
                                            </MenuItem>
                                            <MenuItem>
                                                {({ active }) => (
                                                    <Link
                                                        to={"/my-profile"}
                                                        onClick={() => setIsOpen(false)}
                                                        className={`block px-4 py-2 rounded ${active ? 'bg-blue-100 text-blue-700' : ' text-[#479789]'
                                                            }`}
                                                    >
                                                        My Profile
                                                    </Link>
                                                )}
                                            </MenuItem>
                                            <hr />
                                            <h4 className='px-4 pt-2 font-bold'>WANT TO SELL ?</h4>
                                            <MenuItem>
                                                {({ active }) => (
                                                    <Link
                                                        to={"/subscription"}
                                                        onClick={() => setIsOpen(false)}
                                                        className='bg-[#479789] px-4 font-bold text-xl text-[#fff] w-60 flex items-center rounded py-1 '
                                                    >
                                                    Create Store Now <BuildingStorefrontIcon className="mx-2 inline w-6 h-6 text-[#fff]" />
                                                    </Link>
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
                                <p className='text-right text-sm '>Want to Sell ?</p>
                                <p className='text-m font-bold text-[#009688]'><Link to={"/subscription"}>Create Your Store Now</Link></p>
                            </div>


                        </div>
                    </div>

                    <div className="hidden lg:block">
                        <div className="flex gap-16">
                            <div className="cart flex items-center  cursor-pointer">
                                <Link to="/cart" className='flex items-center'> <img src="/cart.png" width={35} alt="" /> <span className='text-sm  ms-1'>2</span></Link>

                            </div>

                            <div className="like flex items-center cursor-pointer">

                                <Link className='flex items-center' to={"/wishlist"}><img src="/like.png" width={35} alt="" /> <span className='text-sm  ms-1'>10</span></Link>
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
                        <li className="group relative">
                            <Popover className="relative">
                                {({ open }) => (
                                    <>
                                        <Popover.Button className="inline-flex items-center gap-1 text-gray-800 hover:text-[#479789] focus:outline-none">
                                            Available Stores Category wise
                                            <ChevronDownIcon className="w-4 h-4" />
                                        </Popover.Button>

                                        <Transition
                                            as={Fragment}
                                            enter="transition ease-out duration-200"
                                            enterFrom="opacity-0 translate-y-1"
                                            enterTo="opacity-100 translate-y-0"
                                            leave="transition ease-in duration-150"
                                            leaveFrom="opacity-100 translate-y-0"
                                            leaveTo="opacity-0 translate-y-1"
                                        >
                                            <Popover.Panel className="absolute left-0 mt-3 w-[700px] bg-white shadow-lg ring-1 ring-gray-200 rounded-lg p-6 z-10">
                                                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                                                    <div>
                                                        <h3 className="text-l font-semibold text-[#479789] uppercase">Ladies Dresses</h3>
                                                        <ul className="mt-2 space-y-2">
                                                            <li><a href="#" className="block text-gray-700 hover:text-[#479789]">Cotton House</a></li>
                                                            <li><a href="#" className="block text-gray-700 hover:text-[#479789]">Saniya Ladies dresses</a></li>
                                                        </ul>
                                                    </div>
                                                    <div>
                                                        <h3 className="text-l font-semibold text-[#479789] uppercase">T-shirts</h3>
                                                        <ul className="mt-2 space-y-2">
                                                            <li><a href="#" className="block text-gray-700 hover:text-[#479789]">Skipper</a></li>
                                                            <li><a href="#" className="block text-gray-700 hover:text-[#479789]">Fuel</a></li>
                                                        </ul>
                                                    </div>
                                                    <div>
                                                        <h3 className="text-l font-semibold text-[#479789] uppercase">Jeans</h3>
                                                        <ul className="mt-2 space-y-2">
                                                            <li><a href="#" className="block text-gray-700 hover:text-[#479789]">Guys Fashion</a></li>
                                                            <li><a href="#" className="block text-gray-700 hover:text-[#479789]">Friends Collection</a></li>
                                                        </ul>
                                                    </div>
                                                    <div>
                                                        <h3 className="text-l font-semibold text-[#479789] uppercase">Shirts</h3>
                                                        <ul className="mt-2 space-y-2">
                                                            <li><a href="#" className="block text-gray-700 hover:text-[#479789]">Guys Fashion</a></li>
                                                            <li><a href="#" className="block text-gray-700 hover:text-[#479789]">Friends Collection</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </Popover.Panel>
                                        </Transition>
                                    </>
                                )}
                            </Popover>
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
