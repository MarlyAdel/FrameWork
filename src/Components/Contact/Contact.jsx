import React from 'react'
import './Contact.css'

export default function Contact() {
  return (
    <section className="contact text-center">
      <div className="container pt-5">
        <h2>CONTACT SECTION</h2>
        <div className="position-relative">
          <span className="line-contact">
            <i class="fa-solid fa-star"></i>
          </span>
        </div>
        <form className='pt-5 d-flex flex-column justify-content-center align-items-center'>
          <label htmlFor="userName"></label>
          <input id="userName" type="text" placeholder="userName" name='userName' className='form-control'/>
          <br />
          <label htmlFor="userAge"></label>
          <input id="userAge" type="text" placeholder="userAge" name='userAge' className='form-control'/>
           <br />
          <label htmlFor="userEmail"></label>
          <input id="userEmail" type="text" placeholder="userEmail" name='userEmail' className='form-control'/>
           <br />
          <label htmlFor="userPassword"></label>
          <input id="userPassword" type="text" placeholder="userPassword" name='userPassword' className='form-control'/>
           <br />
          <button className='btn btn-custom'>Send Message</button>
        </form>
      </div>
    </section>
  );
}
