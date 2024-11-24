import React from 'react'

import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'




const Navbar = () => {
    return (
        <div className=' sticky top-0  shadow-md' style={{zIndex:"4000"}}>

            <div className='bg-gray-100 py-6 px-40 flex justify-between items-center ' >
                <div className="logo">
                    <h1 className='font-bold text-4xl text-[#009688]'>My Store</h1>
                </div>
                <div className="search-bar relative" style={{ width: "660px" }} >
                    <input type="text" className='p-3 rounded-md' style={{ width: "100%" }} placeholder='Search for a Product' />
                    <img src="/search.png" className='absolute right-4 bottom-3' alt="" />
                </div>
                <div className="cart-likes-profile flex gap-16">
                    <div className="phone flex items-center">
                        <div className="number" style={{ lineHeight: "20px" }}>
                            <p className='text-right text-sm '>For Support ?</p>
                            <p className='text-m font-bold text-[#009688]'>+91 8108290681</p>
                        </div>

                    </div>

                    <div className="cart flex items-center cursor-pointer">

                        <img src="/cart.png" width={35} alt="" /> <span className='text-sm  ms-1'>2</span>
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
            <div className="menu-nav flex items-center justify-center py-5 bg-white" style={{height:"30px"}}>
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

    )
}

export default Navbar