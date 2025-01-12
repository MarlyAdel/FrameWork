import React from 'react'
import './About.css'

export default function About() {
  return (
    <section className="about d-flex justify-content-center align-items-center flex-column pb-5  text-white">
      <h2>ABOUT COMPONENT</h2>
      <div className="position-relative">
        <span className="line">
          <i class="fa-solid fa-star"></i>
        </span>
      </div>

      <div className="container mt-2">
        <div className="row mt-2 ">
          <div className="col-md-6 ">
            <p className="pharagraph">
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
          </div>
          <div className="col-md-6">
            <p className="pharagraph">
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
