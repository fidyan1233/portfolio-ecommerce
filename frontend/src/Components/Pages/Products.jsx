import React from 'react'
import toast from 'react-hot-toast';
import Carousel from 'react-multi-carousel';
import { Link } from 'react-router-dom'
import { HeartIcon as OutlineHeart } from '@heroicons/react/24/outline';
import { HeartIcon as SolidHeart } from '@heroicons/react/24/solid';
import 'react-multi-carousel/lib/styles.css';
import { useState } from 'react';

const Products = () => {


  const [favorites, setFavorites] = useState({});
  const [addedToCart, setAddedToCart] = useState({});

  const addToCart = (id) => {
    setAddedToCart((prev) => ({ ...prev, [id]: true }));
  };

  const handleBuyNow = (id) => {
    // Redirect to checkout or implement buy now logic
    alert(`Buying product with ID: ${id}`);
  };
  const toggleFavorite = (id) => {
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
  };


  const products = [
    {
      id: 1,
      name: 'Tom Hiddle',
      description: 'Cotton fabric material',
      price: 1599,
      image: '/product1.jpg',
    },
    {
      id: 2,
      name: 'Tom Hiddle',
      description: 'Premium cotton t-shirt',
      price: 1599,
      image: '/product-2.jpg',
    },
    {
      id: 3,
      name: 'Tom Hiddle',
      description: 'Stylish casual wear',
      price: 1599,
      image: '/product-3.jpg',
    },
    {
      id: 3,
      name: 'Tom Hiddle',
      description: 'Stylish casual wear',
      price: 1599,
      image: '/product-5.jpg',
    },
    {
      id: 3,
      name: 'Tom Hiddle',
      description: 'Stylish casual wear',
      price: 1599,
      image: '/product1.jpg',
    },
    {
      id: 3,
      name: 'Tom Hiddle',
      description: 'Stylish casual wear',
      price: 1599,
      image: '/product-2.jpg',
    },
    {
      id: 3,
      name: 'Tom Hiddle',
      description: 'Stylish casual wear',
      price: 1599,
      image: '/product-3.jpg',
    },
    // Add more products as needed
  ];
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

        <h1 className='my-6 lg:my-10  font-bold text-xl lg:text-2xl text-center '>FEATURED PRODUCTS</h1>
        <Carousel responsive={responsive} keyBoardControl={true}>
      {products.map((product) => (
        <div key={product.id} className="card mx-3 shadow-lg shadow-bottom relative bg-white rounded-lg overflow-hidden">
          {/* Image and Heart Icon */}
          <div className="product-img cursor-pointer relative">
            <img src={product.image} style={{ width: '100%' }} alt={product.name} />

            <button
              onClick={() => toggleFavorite(product.id)}
              className="absolute top-2 right-2 bg-white p-1 rounded-full shadow hover:scale-110 transition"
            >
              {favorites[product.id] ? (
                <SolidHeart className="w-6 h-6 text-red-500" />
              ) : (
                <OutlineHeart className="w-6 h-6 text-gray-500" />
              )}
            </button>
          </div>

          {/* Product Content */}
          <div className="product-content my-1 py-1 lg:py-3 text-center">
            <p className="text-sm lg:text-xl">{product.name}</p>
            <p>{product.description}</p>
            <p className="text-xl lg:text-xl font-bold">₹ {product.price}/-</p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2 px-2 mb-3">
            <button
              onClick={() => addToCart(product.id)}
              className="w-1/2 bg-[#009688] hover:bg-[#00796b] text-white py-2 rounded text-sm font-semibold"
            >
              {addedToCart[product.id] ? (
                <Link to="/cart" className="text-white">Go to Cart</Link>
              ) : (
                'Add to Cart'
              )}
            </button>

            <button
              onClick={() => handleBuyNow(product.id)}
              className="w-1/2 bg-green-500 hover:bg-green-600 text-white py-2 rounded text-sm font-semibold"
            >
              Buy Now
            </button>
          </div>
        </div>
      ))}
    </Carousel>
        <h1 className='my-6 lg:my-10 font-bold text-xl lg:text-2xl text-center '>T-SHIRTS</h1>
        <Carousel responsive={responsive} keyBoardControl={true}>
      {products.map((product) => (
        <div key={product.id} className="card mx-3 shadow-lg shadow-bottom relative bg-white rounded-lg overflow-hidden">
          {/* Image and Heart Icon */}
          <div className="product-img cursor-pointer relative">
            <img src={product.image} style={{ width: '100%' }} alt={product.name} />

            <button
              onClick={() => toggleFavorite(product.id)}
              className="absolute top-2 right-2 bg-white p-1 rounded-full shadow hover:scale-110 transition"
            >
              {favorites[product.id] ? (
                <SolidHeart className="w-6 h-6 text-red-500" />
              ) : (
                <OutlineHeart className="w-6 h-6 text-gray-500" />
              )}
            </button>
          </div>

          {/* Product Content */}
          <div className="product-content my-1 py-1 lg:py-3 text-center">
            <p className="text-sm lg:text-xl">{product.name}</p>
            <p>{product.description}</p>
            <p className="text-xl lg:text-xl font-bold">₹ {product.price}/-</p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2 px-2 mb-3">
            <button
              onClick={() => addToCart(product.id)}
              className="w-1/2 bg-[#009688] hover:bg-[#00796b] text-white py-2 rounded text-sm font-semibold"
            >
              {addedToCart[product.id] ? (
                <Link to="/cart" className="text-white">Go to Cart</Link>
              ) : (
                'Add to Cart'
              )}
            </button>

            <button
              onClick={() => handleBuyNow(product.id)}
              className="w-1/2 bg-green-500 hover:bg-green-600 text-white py-2 rounded text-sm font-semibold"
            >
              Buy Now
            </button>
          </div>
        </div>
      ))}
    </Carousel>
        <h1 className='my-6 lg:my-10 font-bold text-xl lg:text-2xl text-center '>SHIRTS</h1>
        <Carousel responsive={responsive} keyBoardControl={true}>
      {products.map((product) => (
        <div key={product.id} className="card mx-3 shadow-lg shadow-bottom relative bg-white rounded-lg overflow-hidden">
          {/* Image and Heart Icon */}
          <div className="product-img cursor-pointer relative">
            <img src={product.image} style={{ width: '100%' }} alt={product.name} />

            <button
              onClick={() => toggleFavorite(product.id)}
              className="absolute top-2 right-2 bg-white p-1 rounded-full shadow hover:scale-110 transition"
            >
              {favorites[product.id] ? (
                <SolidHeart className="w-6 h-6 text-red-500" />
              ) : (
                <OutlineHeart className="w-6 h-6 text-gray-500" />
              )}
            </button>
          </div>

          {/* Product Content */}
          <div className="product-content my-1 py-1 lg:py-3 text-center">
            <p className="text-sm lg:text-xl">{product.name}</p>
            <p>{product.description}</p>
            <p className="text-xl lg:text-xl font-bold">₹ {product.price}/-</p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2 px-2 mb-3">
            <button
              onClick={() => addToCart(product.id)}
              className="w-1/2 bg-[#009688] hover:bg-[#00796b] text-white py-2 rounded text-sm font-semibold"
            >
              {addedToCart[product.id] ? (
                <Link to="/cart" className="text-white">Go to Cart</Link>
              ) : (
                'Add to Cart'
              )}
            </button>

            <button
              onClick={() => handleBuyNow(product.id)}
              className="w-1/2 bg-green-500 hover:bg-green-600 text-white py-2 rounded text-sm font-semibold"
            >
              Buy Now
            </button>
          </div>
        </div>
      ))}
    </Carousel>
        <h1 className='my-6 lg:my-10 font-bold text-xl lg:text-2xl text-center '>FEATURED PRODUCTS</h1>
        <Carousel responsive={responsive} keyBoardControl={true}>
      {products.map((product) => (
        <div key={product.id} className="card mx-3 shadow-lg shadow-bottom relative bg-white rounded-lg overflow-hidden">
          {/* Image and Heart Icon */}
          <div className="product-img cursor-pointer relative">
            <img src={product.image} style={{ width: '100%' }} alt={product.name} />

            <button
              onClick={() => toggleFavorite(product.id)}
              className="absolute top-2 right-2 bg-white p-1 rounded-full shadow hover:scale-110 transition"
            >
              {favorites[product.id] ? (
                <SolidHeart className="w-6 h-6 text-red-500" />
              ) : (
                <OutlineHeart className="w-6 h-6 text-gray-500" />
              )}
            </button>
          </div>

          {/* Product Content */}
          <div className="product-content my-1 py-1 lg:py-3 text-center">
            <p className="text-sm lg:text-xl">{product.name}</p>
            <p>{product.description}</p>
            <p className="text-xl lg:text-xl font-bold">₹ {product.price}/-</p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2 px-2 mb-3">
            <button
              onClick={() => addToCart(product.id)}
              className="w-1/2 bg-[#009688] hover:bg-[#00796b] text-white py-2 rounded text-sm font-semibold"
            >
              {addedToCart[product.id] ? (
                <Link to="/cart" className="text-white">Go to Cart</Link>
              ) : (
                'Add to Cart'
              )}
            </button>

            <button
              onClick={() => handleBuyNow(product.id)}
              className="w-1/2 bg-green-500 hover:bg-green-600 text-white py-2 rounded text-sm font-semibold"
            >
              Buy Now
            </button>
          </div>
        </div>
      ))}
    </Carousel>
        <h1 className='my-6 lg:my-10 font-bold text-xl lg:text-2xl text-center '>FEATURED PRODUCTS</h1>
        <Carousel responsive={responsive} keyBoardControl={true}>
      {products.map((product) => (
        <div key={product.id} className="card mx-3 shadow-lg shadow-bottom relative bg-white rounded-lg overflow-hidden">
          {/* Image and Heart Icon */}
          <div className="product-img cursor-pointer relative">
            <img src={product.image} style={{ width: '100%' }} alt={product.name} />

            <button
              onClick={() => toggleFavorite(product.id)}
              className="absolute top-2 right-2 bg-white p-1 rounded-full shadow hover:scale-110 transition"
            >
              {favorites[product.id] ? (
                <SolidHeart className="w-6 h-6 text-red-500" />
              ) : (
                <OutlineHeart className="w-6 h-6 text-gray-500" />
              )}
            </button>
          </div>

          {/* Product Content */}
          <div className="product-content my-1 py-1 lg:py-3 text-center">
            <p className="text-sm lg:text-xl">{product.name}</p>
            <p>{product.description}</p>
            <p className="text-xl lg:text-xl font-bold">₹ {product.price}/-</p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2 px-2 mb-3">
            <button
              onClick={() => addToCart(product.id)}
              className="w-1/2 bg-[#009688] hover:bg-[#00796b] text-white py-2 rounded text-sm font-semibold"
            >
              {addedToCart[product.id] ? (
                <Link to="/cart" className="text-white">Go to Cart</Link>
              ) : (
                'Add to Cart'
              )}
            </button>

            <button
              onClick={() => handleBuyNow(product.id)}
              className="w-1/2 bg-green-500 hover:bg-green-600 text-white py-2 rounded text-sm font-semibold"
            >
              Buy Now
            </button>
          </div>
        </div>
      ))}
    </Carousel>
        <h1 className='my-6 lg:my-10 font-bold text-xl lg:text-2xl text-center '>FEATURED PRODUCTS</h1>
        <Carousel responsive={responsive} keyBoardControl={true}>
      {products.map((product) => (
        <div key={product.id} className="card mx-3 shadow-lg shadow-bottom relative bg-white rounded-lg overflow-hidden">
          {/* Image and Heart Icon */}
          <div className="product-img cursor-pointer relative">
            <img src={product.image} style={{ width: '100%' }} alt={product.name} />

            <button
              onClick={() => toggleFavorite(product.id)}
              className="absolute top-2 right-2 bg-white p-1 rounded-full shadow hover:scale-110 transition"
            >
              {favorites[product.id] ? (
                <SolidHeart className="w-6 h-6 text-red-500" />
              ) : (
                <OutlineHeart className="w-6 h-6 text-gray-500" />
              )}
            </button>
          </div>

          {/* Product Content */}
          <div className="product-content my-1 py-1 lg:py-3 text-center">
            <p className="text-sm lg:text-xl">{product.name}</p>
            <p>{product.description}</p>
            <p className="text-xl lg:text-xl font-bold">₹ {product.price}/-</p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2 px-2 mb-3">
            <button
              onClick={() => addToCart(product.id)}
              className="w-1/2 bg-[#009688] hover:bg-[#00796b] text-white py-2 rounded text-sm font-semibold"
            >
              {addedToCart[product.id] ? (
                <Link to="/cart" className="text-white">Go to Cart</Link>
              ) : (
                'Add to Cart'
              )}
            </button>

            <button
              onClick={() => handleBuyNow(product.id)}
              className="w-1/2 bg-green-500 hover:bg-green-600 text-white py-2 rounded text-sm font-semibold"
            >
              Buy Now
            </button>
          </div>
        </div>
      ))}
    </Carousel>
        <h1 className='my-6 lg:my-10 font-bold text-xl lg:text-2xl text-center '>FEATURED PRODUCTS</h1>
        <Carousel responsive={responsive} keyBoardControl={true}>
      {products.map((product) => (
        <div key={product.id} className="card mx-3 shadow-lg shadow-bottom relative bg-white rounded-lg overflow-hidden">
          {/* Image and Heart Icon */}
          <div className="product-img cursor-pointer relative">
            <img src={product.image} style={{ width: '100%' }} alt={product.name} />

            <button
              onClick={() => toggleFavorite(product.id)}
              className="absolute top-2 right-2 bg-white p-1 rounded-full shadow hover:scale-110 transition"
            >
              {favorites[product.id] ? (
                <SolidHeart className="w-6 h-6 text-red-500" />
              ) : (
                <OutlineHeart className="w-6 h-6 text-gray-500" />
              )}
            </button>
          </div>

          {/* Product Content */}
          <div className="product-content my-1 py-1 lg:py-3 text-center">
            <p className="text-sm lg:text-xl">{product.name}</p>
            <p>{product.description}</p>
            <p className="text-xl lg:text-xl font-bold">₹ {product.price}/-</p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2 px-2 mb-3">
            <button
              onClick={() => addToCart(product.id)}
              className="w-1/2 bg-[#009688] hover:bg-[#00796b] text-white py-2 rounded text-sm font-semibold"
            >
              {addedToCart[product.id] ? (
                <Link to="/cart" className="text-white">Go to Cart</Link>
              ) : (
                'Add to Cart'
              )}
            </button>

            <button
              onClick={() => handleBuyNow(product.id)}
              className="w-1/2 bg-green-500 hover:bg-green-600 text-white py-2 rounded text-sm font-semibold"
            >
              Buy Now
            </button>
          </div>
        </div>
      ))}
    </Carousel>

      </div>
    </>
  )
}

export default Products