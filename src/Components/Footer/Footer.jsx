import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <footer>
      <div className="container text-center ">
        <div className="row gy-5 py-5">
          <div className="col-md-4">
            <div className="footer-1">
              <h3>LOCATION</h3>
              <p>2215 John Daniel Drive</p>
              <p>Clark, MO 65243</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="footer-2">
              <h3>AROUND THE WEB</h3>
              <div className="social-links">
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-linkedin-in"></i>
                <i class="fa-solid fa-globe"></i>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="footer-3">
              <h3>ABOUT FREELANCER</h3>
              <p>
                Freelance is a free to use, licensed Bootstrap theme created by
                Route
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-end py-3">
        <p className='text-center'>Copyright © Your Website 2021</p>
      </div>
    </footer>
  );
}
