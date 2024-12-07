import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='pt-20 px-6 lg:px-40 bg-gray-100  '>


      <div class="grid  grid-flex-4 lg:grid-cols-4 gap-4">
        <div>
          <div className="logo">
            <div className="flex  items-center">
              <img src="/new-logo.svg" width={60} alt="" />
              <div className='h-full flex items-center'>

                <div>
                  <h1 className='text-4xl text-[#009688] font-style ' style={{ fontWeight: "500" }}>UPTREND</h1>
                  <hr />
                  <p className='text-sm text-center text-[#009688] font-style' >Top Trending Apparels</p>

                </div>
              </div>
            </div>
          </div>
          <p className='mt-4  pe-3 text-sm text-wrap'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. At facilis, nihil nemo distinctio dolor laborum atque beatae. Architecto quos similique illo facilis, maiores voluptatum esse placeat labore voluptatibus dolorem voluptas.</p>
          <p className='hidden lg:block mt-4  pe-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. At facilis, nihil nemo distinctio dolor laborum atque beatae. Architecto quos similique illo facilis, maiores voluptatum esse placeat labore voluptatibus dolorem voluptas.</p>

        </div>

        <div className="flex lg:hidden">
          <div className='mobile-footer  flex justify-left lg:justify-center'>
            <div>
              <div className="logo">
                <h1 className='font-bold text-xl text-[#009688]'>Quick Links</h1>
              </div>
              <ul className="mt-5 gap-10">
                <Link to="/about"><li className='mb-3 text-sm cursor-pointer'>About</li></Link>
                <Link to="/contact"><li className='mb-3 text-sm cursor-pointer'>Contact</li></Link>
                <Link to="/privacy-policy"><li className='mb-3 text-sm cursor-pointer'>Privacy Policy</li></Link>
                <Link to="/terms-conditions"><li className='mb-3 text-sm cursor-pointer'>Terms & Conditions</li></Link>
                <Link to="/refund-policy"><li className='mb-3 text-sm cursor-pointer'>Refund Policy</li></Link>
                <Link to="/my-account"><li className='mb-3 text-sm cursor-pointer'>My Account</li></Link>
              </ul>

            </div>

          </div>
          <div className='flex justify-left lg:justify-center  w-half' >
            <div>

              <div className="logo">
                <h1 className='font-bold text-xl text-[#009688]'>Categories</h1>
              </div>
              <ul className="mt-5">
                <Link to="/about"><li className='mb-3 text-sm cursor-pointer'>T-shirts</li></Link>
                <Link to="/contact"><li className='mb-3 text-sm cursor-pointer'>Shirts</li></Link>
                <Link to="/privacy-policy"><li className='mb-3 text-sm cursor-pointer'>Hodies</li></Link>
                <Link to="/terms-conditions"><li className='mb-3 text-sm cursor-pointer'>Jeans</li></Link>
                <Link to="/refund-policy"><li className='mb-3 text-sm cursor-pointer'>Sweater</li></Link>
                <Link to="/my-account"><li className='mb-3 text-sm cursor-pointer'>Raincoat</li></Link>
              </ul>
            </div>

          </div>
        </div>

        <div className='hidden lg:flex lg:justify-center'>
          <div>
            <div className="logo">
              <h1 className='font-bold text-2xl text-[#009688]'>Quick Links</h1>
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
        <div className='hidden lg:flex lg:justify-center' >
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
              <h1 className='font-bold text-xl text-[#009688]'>Contact</h1>
              <h1 className='font-bold text-2xl text-[#009688] hidden lg:block'>Contact</h1>
            </div>
            <div className='mt-4'>
              <div className=' rounded-md' >
                <div className="grid grid-cols-[20%_75%] ">
                  <div >
                    <p className='font-bold text-[#009688] mb-5 text-sm'>Phone :</p>
                    <p className='font-bold text-[#009688] mb-5 text-sm'>Email :</p>
                    <p className='font-bold text-[#009688]  text-sm'>Address :</p>
                  </div>
                  <div>
                    <p className='mb-5 text-sm'>+91 8108290681</p>
                    <p className='mb-5 text-sm'>info.fidyanpandhre@gmail.com</p>
                    <p className='text-sm'>205 / Iqbal Manzil Kismat Colony Kausa Mumbra 400612</p>
                  </div>
                </div>

              </div>

            </div>
            <div className='mt-4 hidden lg:block'>
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
      <hr className='mt-10' style={{ color: "#000" }} />
      <div className='py-5 text-center bg-gray-100'>
        <p>Designed by <span className='font-bold text-[#009688]'>Fidyan Pandhre</span></p>
      </div>
    </div>
  )
}

export default Footer