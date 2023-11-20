import React from 'react'
import './Hero.css'

import hand_icon from '../Assets/1.png'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/cd.png'

function Hero() {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>PREMIUM QUALITY</h2>
        <div>
          <div className="hero-hand-icon">
            <p>Food</p>
            <img src={hand_icon} alt="" />
          </div>
          <p>For our</p>
          <p>Little friends</p>
        </div>
        <div className="hero-latest-btn">
          <div>The best choice</div>
          <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_image} alt="" />
      </div>

    </div>
  )
}

export default Hero