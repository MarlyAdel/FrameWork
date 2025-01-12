import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {

 const [isScrolled, setIsScrolled] = useState(false);

 useEffect(() => {
   function handleScroll () {
     setIsScrolled(window.scrollY > 50); 
   };

   window.addEventListener("scroll", handleScroll);
   return () => {
     window.removeEventListener("scroll", handleScroll);
   };
 }, []);

  return (
    <div>
       <nav className={`navbar navbar-expand-lg fixed-top ${isScrolled ? 'scrolled' : ''}`}>
  <div className="container py-3">
    <a className="navbar-brand text-white" href="#">START FRAMEWORK</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0  pe-5">
        <li className="nav-item pe-3">
          <NavLink className="nav-link text-white" to={"/about"}>ABOUT</NavLink>
        </li>
        <li className="nav-item pe-3">
          <NavLink className="nav-link text-white" to={"/portfolio"}>PORTFOLIO</NavLink>
        </li>
        <li className="nav-item pe-3">
          <NavLink className="nav-link text-white" to={"/contact"}>CONTACT</NavLink>
        </li>
        
      </ul>
      
    </div>
  </div>
</nav>

    </div>
  )
}
