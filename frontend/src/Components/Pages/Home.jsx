import React from 'react'
import Products from './Products'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Home = () => {
  return (
    <div className='wrapper'>
      <Carousel autoPlay infiniteLoop showThumbs={false}>
        <div>
          <img src="/back.jpg" />

        </div>
        <div>
          <img src="/back.jpg" />

        </div>
        <div>
          <img src="/back.jpg " />

        </div>
      </Carousel>
      <Products />

    </div>
  )
}

export default Home