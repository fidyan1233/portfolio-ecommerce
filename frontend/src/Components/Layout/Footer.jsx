import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='pt-20 px-40 bg-gray-100 hidden lg:block'>


      <div class="grid grid-cols-4 gap-4">
        <div>
          <div className="logo">
            <h1 className='font-bold text-4xl text-[#009688]'>My Store</h1>
          </div>
          <p className='mt-4  pe-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. At facilis, nihil nemo distinctio dolor laborum atque beatae. Architecto quos similique illo facilis, maiores voluptatum esse placeat labore voluptatibus dolorem voluptas.</p>

        </div>

        <div className='flex justify-center'>
          <div>
            <div className="logo">
              <h1 className='font-bold text-2xl text-[#009688]'>Quick Links</h1>
            </div>
            <ul className="mt-5 gap-10">
              <Link to="/about"><li className='mb-3 cursor-pointer'>About</li></Link>
              <Link to="/contact"><li className='mb-3 cursor-pointer'>Contact</li></Link>
              <Link to="/privacy-policy"><li className='mb-3 cursor-pointer'>Privacy Policy</li></Link>
              <Link to="/terms-conditions"><li className='mb-3 cursor-pointer'>Terms & Conditions</li></Link>
              <Link to="/refund-policy"><li className='mb-3 cursor-pointer'>Refund Policy</li></Link>
              <Link to="/my-account"><li className='mb-3 cursor-pointer'>My Account</li></Link>
            </ul>

          </div>

        </div>
        <div className='flex justify-center'>
          <div>

            <div className="logo">
              <h1 className='font-bold text-2xl text-[#009688]'>Categories</h1>
            </div>
            <ul className="mt-5">
              <Link to="/about"><li className='mb-3 cursor-pointer'>T-shirts</li></Link>
              <Link to="/contact"><li className='mb-3 cursor-pointer'>Shirts</li></Link>
              <Link to="/privacy-policy"><li className='mb-3 cursor-pointer'>Hodies</li></Link>
              <Link to="/terms-conditions"><li className='mb-3 cursor-pointer'>Jeans</li></Link>
              <Link to="/refund-policy"><li className='mb-3 cursor-pointer'>Sweater</li></Link>
              <Link to="/my-account"><li className='mb-3 cursor-pointer'>Raincoat</li></Link>
            </ul>
          </div>

        </div>
        <div>
          <div>

            <div className="logo">
              <h1 className='font-bold text-2xl text-[#009688]'>Contact</h1>
            </div>
            <div className='mt-4'>
              <div className=' rounded-md' >
                <div className="grid grid-cols-[20%_75%] ">
                  <div >
                    <p className='font-bold text-[#009688] mb-5'>Phone :</p>
                    <p className='font-bold text-[#009688] mb-5'>Email :</p>
                    <p className='font-bold text-[#009688] '>Address :</p>
                  </div>
                  <div>
                    <p className='mb-5'>+91 8108290681</p>
                    <p className='mb-5'>info.fidyanpandhre@gmail.com</p>
                    <p>205 / Iqbal Manzil Kismat Colony Kausa Mumbra 400612</p>
                  </div>
                </div>
               
              </div>

            </div>
          </div>

        </div>
      </div>
      <hr className='mt-10' style={{color:"#000"}}/>
      <div className='py-5 text-center bg-gray-100'>
        <p>Designed by <span className='font-bold text-[#009688]'>Fidyan Pandhre</span></p>
      </div>
    </div>
  )
}

export default Footer