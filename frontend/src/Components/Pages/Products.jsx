import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Products = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
  };
  return (
    <>
      <div className="product-wrapper mb-20 px-2 lg:px-40 ">

        <h1 className='my-6 lg:my-10 font-bold text-xl lg:text-2xl text-center '>FEATURED PRODUCTS</h1>
        <Carousel responsive={responsive} keyBoardControl={true}>

          <div className="card mx-3 shadow-lg ">
            <div className="product-img cursor-pointer">

              <img src="/product1.jpg" style={{ width: "100%" }} alt="" />
            </div>
            <div className="product-content my-2  py-1 lg:py-3  text-center">

              <p className='text-sm mb-1 lg:text-xl'>Tom Hiddle</p>
              <p className='text-xl lg:text-2xl font-bold'>₹ 1599/-</p>

            </div>
            <div className="buy-btn shadow-lg bg-[#009688] text-center text-white my-2 py-2 lg:py-3 text-xs lg:text-l font-bold">
              Add To Cart

            </div>
          </div>
          <div className="card mx-3 shadow-lg ">
            <div className="product-img cursor-pointer">

              <img src="/product-2.jpg" style={{ width: "100%" }} alt="" />
            </div>
            <div className="product-content my-2  py-1 lg:py-3  text-center">

              <p className='text-sm mb-1 lg:text-xl'>Tom Hiddle</p>
              <p className='text-xl lg:text-2xl font-bold'>₹ 1599/-</p>

            </div>
            <div className="buy-btn shadow-lg bg-[#009688] text-center text-white my-2 py-2 lg:py-3 text-xs lg:text-l font-bold">
              Add To Cart

            </div>
          </div>
          <div className="card mx-3 shadow-lg ">
            <div className="product-img cursor-pointer">

              <img src="/product-3.jpg" style={{ width: "100%" }} alt="" />
            </div>
            <div className="product-content my-2  py-1 lg:py-3  text-center">

              <p className='text-sm mb-1 lg:text-xl'>Tom Hiddle</p>
              <p className='text-xl lg:text-2xl font-bold'>₹ 1599/-</p>

            </div>
            <div className="buy-btn shadow-lg bg-[#009688] text-center text-white my-2 py-2 lg:py-3 text-xs lg:text-l font-bold">
              Add To Cart

            </div>
          </div>
          <div className="card mx-3 shadow-lg ">
            <div className="product-img cursor-pointer">

              <img src="/product-5.jpg" style={{ width: "100%" }} alt="" />
            </div>
            <div className="product-content my-2  py-1 lg:py-3  text-center">

              <p className='text-sm mb-1 lg:text-xl'>Tom Hiddle</p>
              <p className='text-xl lg:text-2xl font-bold'>₹ 1599/-</p>

            </div>
            <div className="buy-btn shadow-lg bg-[#009688] text-center text-white my-2 py-2 lg:py-3 text-xs lg:text-l font-bold">
              Add To Cart

            </div>
          </div>
          <div className="card mx-3 shadow-lg ">
            <div className="product-img cursor-pointer">

              <img src="/product1.jpg" style={{ width: "100%" }} alt="" />
            </div>
            <div className="product-content my-2  py-1 lg:py-3  text-center">

              <p className='text-sm mb-1 lg:text-xl'>Tom Hiddle</p>
              <p className='text-xl lg:text-2xl font-bold'>₹ 1599/-</p>

            </div>
            <div className="buy-btn shadow-lg bg-[#009688] text-center text-white my-2 py-2 lg:py-3 text-xs lg:text-l font-bold">
              Add To Cart

            </div>
          </div>
          <div className="card mx-3 shadow-lg ">
            <div className="product-img cursor-pointer">

              <img src="/product-2.jpg" style={{ width: "100%" }} alt="" />
            </div>
            <div className="product-content my-2  py-1 lg:py-3  text-center">

              <p className='text-sm mb-1 lg:text-xl'>Tom Hiddle</p>
              <p className='text-xl lg:text-2xl font-bold'>₹ 1599/-</p>

            </div>
            <div className="buy-btn shadow-lg bg-[#009688] text-center text-white my-2 py-2 lg:py-3 text-xs lg:text-l font-bold">
              Add To Cart

            </div>
          </div>
        

        </Carousel>
        <h1 className='my-6 lg:my-10 font-bold text-xl lg:text-2xl text-center '>FEATURED PRODUCTS</h1>
        <Carousel responsive={responsive} keyBoardControl={true}>

          <div className="card mx-3 shadow-lg ">
            <div className="product-img cursor-pointer">

              <img src="/product1.jpg" style={{ width: "100%" }} alt="" />
            </div>
            <div className="product-content my-2  py-1 lg:py-3  text-center">

              <p className='text-sm mb-1 lg:text-xl'>Tom Hiddle</p>
              <p className='text-xl lg:text-2xl font-bold'>₹ 1599/-</p>

            </div>
            <div className="buy-btn shadow-lg bg-[#009688] text-center text-white my-2 py-2 lg:py-3 text-xs lg:text-l font-bold">
              Add To Cart

            </div>
          </div>
          <div className="card mx-3 shadow-lg ">
            <div className="product-img cursor-pointer">

              <img src="/product-2.jpg" style={{ width: "100%" }} alt="" />
            </div>
            <div className="product-content my-2  py-1 lg:py-3  text-center">

              <p className='text-sm mb-1 lg:text-xl'>Tom Hiddle</p>
              <p className='text-xl lg:text-2xl font-bold'>₹ 1599/-</p>

            </div>
            <div className="buy-btn shadow-lg bg-[#009688] text-center text-white my-2 py-2 lg:py-3 text-xs lg:text-l font-bold">
              Add To Cart

            </div>
          </div>
          <div className="card mx-3 shadow-lg ">
            <div className="product-img cursor-pointer">

              <img src="/product-3.jpg" style={{ width: "100%" }} alt="" />
            </div>
            <div className="product-content my-2  py-1 lg:py-3  text-center">

              <p className='text-sm mb-1 lg:text-xl'>Tom Hiddle</p>
              <p className='text-xl lg:text-2xl font-bold'>₹ 1599/-</p>

            </div>
            <div className="buy-btn shadow-lg bg-[#009688] text-center text-white my-2 py-2 lg:py-3 text-xs lg:text-l font-bold">
              Add To Cart

            </div>
          </div>
          <div className="card mx-3 shadow-lg ">
            <div className="product-img cursor-pointer">

              <img src="/product-5.jpg" style={{ width: "100%" }} alt="" />
            </div>
            <div className="product-content my-2  py-1 lg:py-3  text-center">

              <p className='text-sm mb-1 lg:text-xl'>Tom Hiddle</p>
              <p className='text-xl lg:text-2xl font-bold'>₹ 1599/-</p>

            </div>
            <div className="buy-btn shadow-lg bg-[#009688] text-center text-white my-2 py-2 lg:py-3 text-xs lg:text-l font-bold">
              Add To Cart

            </div>
          </div>
          <div className="card mx-3 shadow-lg ">
            <div className="product-img cursor-pointer">

              <img src="/product1.jpg" style={{ width: "100%" }} alt="" />
            </div>
            <div className="product-content my-2  py-1 lg:py-3  text-center">

              <p className='text-sm mb-1 lg:text-xl'>Tom Hiddle</p>
              <p className='text-xl lg:text-2xl font-bold'>₹ 1599/-</p>

            </div>
            <div className="buy-btn shadow-lg bg-[#009688] text-center text-white my-2 py-2 lg:py-3 text-xs lg:text-l font-bold">
              Add To Cart

            </div>
          </div>
          <div className="card mx-3 shadow-lg ">
            <div className="product-img cursor-pointer">

              <img src="/product-2.jpg" style={{ width: "100%" }} alt="" />
            </div>
            <div className="product-content my-2  py-1 lg:py-3  text-center">

              <p className='text-sm mb-1 lg:text-xl'>Tom Hiddle</p>
              <p className='text-xl lg:text-2xl font-bold'>₹ 1599/-</p>

            </div>
            <div className="buy-btn shadow-lg bg-[#009688] text-center text-white my-2 py-2 lg:py-3 text-xs lg:text-l font-bold">
              Add To Cart

            </div>
          </div>
        

        </Carousel>
        <h1 className='my-6 lg:my-10 font-bold text-xl lg:text-2xl text-center '>FEATURED PRODUCTS</h1>
        <Carousel responsive={responsive} keyBoardControl={true}>

          <div className="card mx-3 shadow-lg ">
            <div className="product-img cursor-pointer">

              <img src="/product1.jpg" style={{ width: "100%" }} alt="" />
            </div>
            <div className="product-content my-2  py-1 lg:py-3  text-center">

              <p className='text-sm mb-1 lg:text-xl'>Tom Hiddle</p>
              <p className='text-xl lg:text-2xl font-bold'>₹ 1599/-</p>

            </div>
            <div className="buy-btn shadow-lg bg-[#009688] text-center text-white my-2 py-2 lg:py-3 text-xs lg:text-l font-bold">
              Add To Cart

            </div>
          </div>
          <div className="card mx-3 shadow-lg ">
            <div className="product-img cursor-pointer">

              <img src="/product-2.jpg" style={{ width: "100%" }} alt="" />
            </div>
            <div className="product-content my-2  py-1 lg:py-3  text-center">

              <p className='text-sm mb-1 lg:text-xl'>Tom Hiddle</p>
              <p className='text-xl lg:text-2xl font-bold'>₹ 1599/-</p>

            </div>
            <div className="buy-btn shadow-lg bg-[#009688] text-center text-white my-2 py-2 lg:py-3 text-xs lg:text-l font-bold">
              Add To Cart

            </div>
          </div>
          <div className="card mx-3 shadow-lg ">
            <div className="product-img cursor-pointer">

              <img src="/product-3.jpg" style={{ width: "100%" }} alt="" />
            </div>
            <div className="product-content my-2  py-1 lg:py-3  text-center">

              <p className='text-sm mb-1 lg:text-xl'>Tom Hiddle</p>
              <p className='text-xl lg:text-2xl font-bold'>₹ 1599/-</p>

            </div>
            <div className="buy-btn shadow-lg bg-[#009688] text-center text-white my-2 py-2 lg:py-3 text-xs lg:text-l font-bold">
              Add To Cart

            </div>
          </div>
          <div className="card mx-3 shadow-lg ">
            <div className="product-img cursor-pointer">

              <img src="/product-5.jpg" style={{ width: "100%" }} alt="" />
            </div>
            <div className="product-content my-2  py-1 lg:py-3  text-center">

              <p className='text-sm mb-1 lg:text-xl'>Tom Hiddle</p>
              <p className='text-xl lg:text-2xl font-bold'>₹ 1599/-</p>

            </div>
            <div className="buy-btn shadow-lg bg-[#009688] text-center text-white my-2 py-2 lg:py-3 text-xs lg:text-l font-bold">
              Add To Cart

            </div>
          </div>
          <div className="card mx-3 shadow-lg ">
            <div className="product-img cursor-pointer">

              <img src="/product1.jpg" style={{ width: "100%" }} alt="" />
            </div>
            <div className="product-content my-2  py-1 lg:py-3  text-center">

              <p className='text-sm mb-1 lg:text-xl'>Tom Hiddle</p>
              <p className='text-xl lg:text-2xl font-bold'>₹ 1599/-</p>

            </div>
            <div className="buy-btn shadow-lg bg-[#009688] text-center text-white my-2 py-2 lg:py-3 text-xs lg:text-l font-bold">
              Add To Cart

            </div>
          </div>
          <div className="card mx-3 shadow-lg ">
            <div className="product-img cursor-pointer">

              <img src="/product-2.jpg" style={{ width: "100%" }} alt="" />
            </div>
            <div className="product-content my-2  py-1 lg:py-3  text-center">

              <p className='text-sm mb-1 lg:text-xl'>Tom Hiddle</p>
              <p className='text-xl lg:text-2xl font-bold'>₹ 1599/-</p>

            </div>
            <div className="buy-btn shadow-lg bg-[#009688] text-center text-white my-2 py-2 lg:py-3 text-xs lg:text-l font-bold">
              Add To Cart

            </div>
          </div>
        

        </Carousel>
        <h1 className='my-6 lg:my-10 font-bold text-xl lg:text-2xl text-center '>FEATURED PRODUCTS</h1>
        <Carousel responsive={responsive} keyBoardControl={true}>

          <div className="card mx-3 shadow-lg ">
            <div className="product-img cursor-pointer">

              <img src="/product1.jpg" style={{ width: "100%" }} alt="" />
            </div>
            <div className="product-content my-2  py-1 lg:py-3  text-center">

              <p className='text-sm mb-1 lg:text-xl'>Tom Hiddle</p>
              <p className='text-xl lg:text-2xl font-bold'>₹ 1599/-</p>

            </div>
            <div className="buy-btn shadow-lg bg-[#009688] text-center text-white my-2 py-2 lg:py-3 text-xs lg:text-l font-bold">
              Add To Cart

            </div>
          </div>
          <div className="card mx-3 shadow-lg ">
            <div className="product-img cursor-pointer">

              <img src="/product-2.jpg" style={{ width: "100%" }} alt="" />
            </div>
            <div className="product-content my-2  py-1 lg:py-3  text-center">

              <p className='text-sm mb-1 lg:text-xl'>Tom Hiddle</p>
              <p className='text-xl lg:text-2xl font-bold'>₹ 1599/-</p>

            </div>
            <div className="buy-btn shadow-lg bg-[#009688] text-center text-white my-2 py-2 lg:py-3 text-xs lg:text-l font-bold">
              Add To Cart

            </div>
          </div>
          <div className="card mx-3 shadow-lg ">
            <div className="product-img cursor-pointer">

              <img src="/product-3.jpg" style={{ width: "100%" }} alt="" />
            </div>
            <div className="product-content my-2  py-1 lg:py-3  text-center">

              <p className='text-sm mb-1 lg:text-xl'>Tom Hiddle</p>
              <p className='text-xl lg:text-2xl font-bold'>₹ 1599/-</p>

            </div>
            <div className="buy-btn shadow-lg bg-[#009688] text-center text-white my-2 py-2 lg:py-3 text-xs lg:text-l font-bold">
              Add To Cart

            </div>
          </div>
          <div className="card mx-3 shadow-lg ">
            <div className="product-img cursor-pointer">

              <img src="/product-5.jpg" style={{ width: "100%" }} alt="" />
            </div>
            <div className="product-content my-2  py-1 lg:py-3  text-center">

              <p className='text-sm mb-1 lg:text-xl'>Tom Hiddle</p>
              <p className='text-xl lg:text-2xl font-bold'>₹ 1599/-</p>

            </div>
            <div className="buy-btn shadow-lg bg-[#009688] text-center text-white my-2 py-2 lg:py-3 text-xs lg:text-l font-bold">
              Add To Cart

            </div>
          </div>
          <div className="card mx-3 shadow-lg ">
            <div className="product-img cursor-pointer">

              <img src="/product1.jpg" style={{ width: "100%" }} alt="" />
            </div>
            <div className="product-content my-2  py-1 lg:py-3  text-center">

              <p className='text-sm mb-1 lg:text-xl'>Tom Hiddle</p>
              <p className='text-xl lg:text-2xl font-bold'>₹ 1599/-</p>

            </div>
            <div className="buy-btn shadow-lg bg-[#009688] text-center text-white my-2 py-2 lg:py-3 text-xs lg:text-l font-bold">
              Add To Cart

            </div>
          </div>
          <div className="card mx-3 shadow-lg ">
            <div className="product-img cursor-pointer">

              <img src="/product-2.jpg" style={{ width: "100%" }} alt="" />
            </div>
            <div className="product-content my-2  py-1 lg:py-3  text-center">

              <p className='text-sm mb-1 lg:text-xl'>Tom Hiddle</p>
              <p className='text-xl lg:text-2xl font-bold'>₹ 1599/-</p>

            </div>
            <div className="buy-btn shadow-lg bg-[#009688] text-center text-white my-2 py-2 lg:py-3 text-xs lg:text-l font-bold">
              Add To Cart

            </div>
          </div>
        

        </Carousel>
        <h1 className='my-6 lg:my-10 font-bold text-xl lg:text-2xl text-center '>FEATURED PRODUCTS</h1>
        <Carousel responsive={responsive} keyBoardControl={true}>

          <div className="card mx-3 shadow-lg ">
            <div className="product-img cursor-pointer">

              <img src="/product1.jpg" style={{ width: "100%" }} alt="" />
            </div>
            <div className="product-content my-2  py-1 lg:py-3  text-center">

              <p className='text-sm mb-1 lg:text-xl'>Tom Hiddle</p>
              <p className='text-xl lg:text-2xl font-bold'>₹ 1599/-</p>

            </div>
            <div className="buy-btn shadow-lg bg-[#009688] text-center text-white my-2 py-2 lg:py-3 text-xs lg:text-l font-bold">
              Add To Cart

            </div>
          </div>
          <div className="card mx-3 shadow-lg ">
            <div className="product-img cursor-pointer">

              <img src="/product-2.jpg" style={{ width: "100%" }} alt="" />
            </div>
            <div className="product-content my-2  py-1 lg:py-3  text-center">

              <p className='text-sm mb-1 lg:text-xl'>Tom Hiddle</p>
              <p className='text-xl lg:text-2xl font-bold'>₹ 1599/-</p>

            </div>
            <div className="buy-btn shadow-lg bg-[#009688] text-center text-white my-2 py-2 lg:py-3 text-xs lg:text-l font-bold">
              Add To Cart

            </div>
          </div>
          <div className="card mx-3 shadow-lg ">
            <div className="product-img cursor-pointer">

              <img src="/product-3.jpg" style={{ width: "100%" }} alt="" />
            </div>
            <div className="product-content my-2  py-1 lg:py-3  text-center">

              <p className='text-sm mb-1 lg:text-xl'>Tom Hiddle</p>
              <p className='text-xl lg:text-2xl font-bold'>₹ 1599/-</p>

            </div>
            <div className="buy-btn shadow-lg bg-[#009688] text-center text-white my-2 py-2 lg:py-3 text-xs lg:text-l font-bold">
              Add To Cart

            </div>
          </div>
          <div className="card mx-3 shadow-lg ">
            <div className="product-img cursor-pointer">

              <img src="/product-5.jpg" style={{ width: "100%" }} alt="" />
            </div>
            <div className="product-content my-2  py-1 lg:py-3  text-center">

              <p className='text-sm mb-1 lg:text-xl'>Tom Hiddle</p>
              <p className='text-xl lg:text-2xl font-bold'>₹ 1599/-</p>

            </div>
            <div className="buy-btn shadow-lg bg-[#009688] text-center text-white my-2 py-2 lg:py-3 text-xs lg:text-l font-bold">
              Add To Cart

            </div>
          </div>
          <div className="card mx-3 shadow-lg ">
            <div className="product-img cursor-pointer">

              <img src="/product1.jpg" style={{ width: "100%" }} alt="" />
            </div>
            <div className="product-content my-2  py-1 lg:py-3  text-center">

              <p className='text-sm mb-1 lg:text-xl'>Tom Hiddle</p>
              <p className='text-xl lg:text-2xl font-bold'>₹ 1599/-</p>

            </div>
            <div className="buy-btn shadow-lg bg-[#009688] text-center text-white my-2 py-2 lg:py-3 text-xs lg:text-l font-bold">
              Add To Cart

            </div>
          </div>
          <div className="card mx-3 shadow-lg ">
            <div className="product-img cursor-pointer">

              <img src="/product-2.jpg" style={{ width: "100%" }} alt="" />
            </div>
            <div className="product-content my-2  py-1 lg:py-3  text-center">

              <p className='text-sm mb-1 lg:text-xl'>Tom Hiddle</p>
              <p className='text-xl lg:text-2xl font-bold'>₹ 1599/-</p>

            </div>
            <div className="buy-btn shadow-lg bg-[#009688] text-center text-white my-2 py-2 lg:py-3 text-xs lg:text-l font-bold">
              Add To Cart

            </div>
          </div>
        

        </Carousel>
        <h1 className='my-6 lg:my-10 font-bold text-xl lg:text-2xl text-center '>FEATURED PRODUCTS</h1>
        <Carousel responsive={responsive} keyBoardControl={true}>

          <div className="card mx-3 shadow-lg ">
            <div className="product-img cursor-pointer">

              <img src="/product1.jpg" style={{ width: "100%" }} alt="" />
            </div>
            <div className="product-content my-2  py-1 lg:py-3  text-center">

              <p className='text-sm mb-1 lg:text-xl'>Tom Hiddle</p>
              <p className='text-xl lg:text-2xl font-bold'>₹ 1599/-</p>

            </div>
            <div className="buy-btn shadow-lg bg-[#009688] text-center text-white my-2 py-2 lg:py-3 text-xs lg:text-l font-bold">
              Add To Cart

            </div>
          </div>
          <div className="card mx-3 shadow-lg ">
            <div className="product-img cursor-pointer">

              <img src="/product-2.jpg" style={{ width: "100%" }} alt="" />
            </div>
            <div className="product-content my-2  py-1 lg:py-3  text-center">

              <p className='text-sm mb-1 lg:text-xl'>Tom Hiddle</p>
              <p className='text-xl lg:text-2xl font-bold'>₹ 1599/-</p>

            </div>
            <div className="buy-btn shadow-lg bg-[#009688] text-center text-white my-2 py-2 lg:py-3 text-xs lg:text-l font-bold">
              Add To Cart

            </div>
          </div>
          <div className="card mx-3 shadow-lg ">
            <div className="product-img cursor-pointer">

              <img src="/product-3.jpg" style={{ width: "100%" }} alt="" />
            </div>
            <div className="product-content my-2  py-1 lg:py-3  text-center">

              <p className='text-sm mb-1 lg:text-xl'>Tom Hiddle</p>
              <p className='text-xl lg:text-2xl font-bold'>₹ 1599/-</p>

            </div>
            <div className="buy-btn shadow-lg bg-[#009688] text-center text-white my-2 py-2 lg:py-3 text-xs lg:text-l font-bold">
              Add To Cart

            </div>
          </div>
          <div className="card mx-3 shadow-lg ">
            <div className="product-img cursor-pointer">

              <img src="/product-5.jpg" style={{ width: "100%" }} alt="" />
            </div>
            <div className="product-content my-2  py-1 lg:py-3  text-center">

              <p className='text-sm mb-1 lg:text-xl'>Tom Hiddle</p>
              <p className='text-xl lg:text-2xl font-bold'>₹ 1599/-</p>

            </div>
            <div className="buy-btn shadow-lg bg-[#009688] text-center text-white my-2 py-2 lg:py-3 text-xs lg:text-l font-bold">
              Add To Cart

            </div>
          </div>
          <div className="card mx-3 shadow-lg ">
            <div className="product-img cursor-pointer">

              <img src="/product1.jpg" style={{ width: "100%" }} alt="" />
            </div>
            <div className="product-content my-2  py-1 lg:py-3  text-center">

              <p className='text-sm mb-1 lg:text-xl'>Tom Hiddle</p>
              <p className='text-xl lg:text-2xl font-bold'>₹ 1599/-</p>

            </div>
            <div className="buy-btn shadow-lg bg-[#009688] text-center text-white my-2 py-2 lg:py-3 text-xs lg:text-l font-bold">
              Add To Cart

            </div>
          </div>
          <div className="card mx-3 shadow-lg ">
            <div className="product-img cursor-pointer">

              <img src="/product-2.jpg" style={{ width: "100%" }} alt="" />
            </div>
            <div className="product-content my-2  py-1 lg:py-3  text-center">

              <p className='text-sm mb-1 lg:text-xl'>Tom Hiddle</p>
              <p className='text-xl lg:text-2xl font-bold'>₹ 1599/-</p>

            </div>
            <div className="buy-btn shadow-lg bg-[#009688] text-center text-white my-2 py-2 lg:py-3 text-xs lg:text-l font-bold">
              Add To Cart

            </div>
          </div>
        

        </Carousel>
        <h1 className='my-6 lg:my-10 font-bold text-xl lg:text-2xl text-center '>FEATURED PRODUCTS</h1>
        <Carousel responsive={responsive} keyBoardControl={true}>

          <div className="card mx-3 shadow-lg ">
            <div className="product-img cursor-pointer">

              <img src="/product1.jpg" style={{ width: "100%" }} alt="" />
            </div>
            <div className="product-content my-2  py-1 lg:py-3  text-center">

              <p className='text-sm mb-1 lg:text-xl'>Tom Hiddle</p>
              <p className='text-xl lg:text-2xl font-bold'>₹ 1599/-</p>

            </div>
            <div className="buy-btn shadow-lg bg-[#009688] text-center text-white my-2 py-2 lg:py-3 text-xs lg:text-l font-bold">
              Add To Cart

            </div>
          </div>
          <div className="card mx-3 shadow-lg ">
            <div className="product-img cursor-pointer">

              <img src="/product-2.jpg" style={{ width: "100%" }} alt="" />
            </div>
            <div className="product-content my-2  py-1 lg:py-3  text-center">

              <p className='text-sm mb-1 lg:text-xl'>Tom Hiddle</p>
              <p className='text-xl lg:text-2xl font-bold'>₹ 1599/-</p>

            </div>
            <div className="buy-btn shadow-lg bg-[#009688] text-center text-white my-2 py-2 lg:py-3 text-xs lg:text-l font-bold">
              Add To Cart

            </div>
          </div>
          <div className="card mx-3 shadow-lg ">
            <div className="product-img cursor-pointer">

              <img src="/product-3.jpg" style={{ width: "100%" }} alt="" />
            </div>
            <div className="product-content my-2  py-1 lg:py-3  text-center">

              <p className='text-sm mb-1 lg:text-xl'>Tom Hiddle</p>
              <p className='text-xl lg:text-2xl font-bold'>₹ 1599/-</p>

            </div>
            <div className="buy-btn shadow-lg bg-[#009688] text-center text-white my-2 py-2 lg:py-3 text-xs lg:text-l font-bold">
              Add To Cart

            </div>
          </div>
          <div className="card mx-3 shadow-lg ">
            <div className="product-img cursor-pointer">

              <img src="/product-5.jpg" style={{ width: "100%" }} alt="" />
            </div>
            <div className="product-content my-2  py-1 lg:py-3  text-center">

              <p className='text-sm mb-1 lg:text-xl'>Tom Hiddle</p>
              <p className='text-xl lg:text-2xl font-bold'>₹ 1599/-</p>

            </div>
            <div className="buy-btn shadow-lg bg-[#009688] text-center text-white my-2 py-2 lg:py-3 text-xs lg:text-l font-bold">
              Add To Cart

            </div>
          </div>
          <div className="card mx-3 shadow-lg ">
            <div className="product-img cursor-pointer">

              <img src="/product1.jpg" style={{ width: "100%" }} alt="" />
            </div>
            <div className="product-content my-2  py-1 lg:py-3  text-center">

              <p className='text-sm mb-1 lg:text-xl'>Tom Hiddle</p>
              <p className='text-xl lg:text-2xl font-bold'>₹ 1599/-</p>

            </div>
            <div className="buy-btn shadow-lg bg-[#009688] text-center text-white my-2 py-2 lg:py-3 text-xs lg:text-l font-bold">
              Add To Cart

            </div>
          </div>
          <div className="card mx-3 shadow-lg ">
            <div className="product-img cursor-pointer">

              <img src="/product-2.jpg" style={{ width: "100%" }} alt="" />
            </div>
            <div className="product-content my-2  py-1 lg:py-3  text-center">

              <p className='text-sm mb-1 lg:text-xl'>Tom Hiddle</p>
              <p className='text-xl lg:text-2xl font-bold'>₹ 1599/-</p>

            </div>
            <div className="buy-btn shadow-lg bg-[#009688] text-center text-white my-2 py-2 lg:py-3 text-xs lg:text-l font-bold">
              Add To Cart

            </div>
          </div>
        

        </Carousel>
       
      </div>
    </>
  )
}

export default Products