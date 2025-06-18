import React from 'react'
import Products from './Products'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Home = () => {
  return (
    <div className='wrapper'>
      <Carousel autoPlay infiniteLoop={true} showThumbs={false} showIndicators={false} showStatus={false} showArrows={false} interval={6000}>
        <div>
          <img className='carousel-img'  src="/banner2.jpg"  />

        </div>
        <div>
          <img className='carousel-img' src="/bannerx.jpg" />

        </div>
       
      </Carousel>
      <Products />

    </div>
  )
}

export default Home