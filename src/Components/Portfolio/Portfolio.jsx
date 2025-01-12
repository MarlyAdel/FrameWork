import React, { useState } from 'react'
import './portfolio.css'
import portfolioImg1 from '../../assets/Images/poert1.png'
import portfolioImg2 from "../../assets/Images/port2.png"
import portfolioImg3 from "../../assets/Images/port3.png"

export default function Portfolio() {

 const [selectImg, setSelectImg] = useState(null);

 function handleImg(image){
  console.log("Image clicked:", image);
  setSelectImg(image)
 }

 function closeModal() {
   setSelectImg(null);
 }


  return (
    <>
      <section className="portfolio mb-5">
        <div className="portfolio-title text-center py-5 ">
          <h2>PORTFOLIO COMPONENT</h2>
          <div className="position-relative">
            <span className="line-portfolio">
              <i class="fa-solid fa-star"></i>
            </span>
          </div>
        </div>
        <div className="container mb-5">
          <div className="row gy-4">
            {[
              portfolioImg1,
              portfolioImg2,
              portfolioImg3,
              portfolioImg1,
              portfolioImg2,
              portfolioImg3,
            ].map((image, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <div className="rounded-3 overflow-hidden position-relative">
                  <img
                    onClick={() => handleImg(image)}
                    src={image}
                    alt="photos"
                    className="w-100"
                  />
                  <div
                    className="layer position-absolute w-100 h-100 start-0 top-0 d-flex justify-content-center align-items-center"
                    onClick={() => handleImg(image)}
                  >
                    <i class="fa-solid fa-plus text-white"></i>
                  </div>
                </div>
              </div>
            ))}
            
          </div>
        </div>
      </section>
      {selectImg && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectImg} alt="photos" className="modal-image" />
          </div>
        </div>
      )}
    </>
  );
}
