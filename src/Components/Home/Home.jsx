import React from 'react'
import homeImage from '../../assets/Images/avataaars.svg'
import './Home.css'

export default function Home() {
  return (
    <header>
      <div className="container py-5">
        <div className="home text-center text-white mb-5">
          <img src={homeImage} alt="Boy" className='mb-5'/>
          <h2>START FRAMEWORK</h2>
           <div className="position-relative">
          <span className="line">
            <i class="fa-solid fa-star"></i>
          </span>
        </div>
          <div className='mt-3'>Graphic Artist - Web Designer - Illustrator</div>
        </div>
      </div>
    </header>
  );
}
