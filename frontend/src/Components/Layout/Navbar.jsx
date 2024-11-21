import React from 'react'
import { FiShoppingCart } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";

import { CiHeart, CiPhone } from "react-icons/ci";




const Navbar = () => {
    return (
        <div className='bg-gray-100 py-6 px-40 flex justify-between items-center'>
            <div className="logo">
                <h1 className='font-bold text-4xl text-[#009688]'>My Store</h1>
            </div>
            <div className="search-bar relative" style={{width:"660px"}} >
                <input type="text"className='p-3 rounded-md' style={{width:"100%"}} placeholder='Search for a Product' />
                <img src="/search.png" className='absolute right-4 bottom-3' alt="" />
            </div>
            <div className="cart-likes-profile flex gap-20">
                <div className="phone flex ">
                    <div className="number">
                        <p className='text-right text-xl font-bold'>For Support ?</p>
                        <p className='text-m'>+91 8108290681</p>
                    </div>
                    
                </div>
                <div className="cart flex items-center">

                    <img src="/cart.png" width={35} alt="" />
                </div>
                <div className="like flex items-center">

                    <img src="/like.png" width={35} alt="" />
                </div>
                <div className="profile flex items-center">

                    <img src="/profile.png" width={35} alt="" />
                </div>




            </div>
        </div>
    )
}

export default Navbar