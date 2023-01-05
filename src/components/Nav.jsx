import React from "react";
import { useState } from "react";

function Nav() {
  const [isMobile, setIsMobile] = useState(false)
  return (
    <nav className={`navbar ${isMobile ? "exchange" : ""}`}>
      <a href="#" className="logo">
        JOEKAT
      </a>
      <ul className={isMobile ? "navbar-nav-mobile" :"navbar-nav"}>
        <li>
          <a href="#" className="navbar-navlinks">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="navbar-navlinks">
            Gallery
          </a>
          <img src="/images/dropdown.png" alt="" />
        </li>
        <li>
          <a href="#" className="navbar-navlinks">
            Events
          </a>
          <img src="/images/dropdown.png" alt="" />
        </li>
        <li>
          <a href="#" className="navbar-navlinks">
            Travel
          </a>
          <img src="/images/dropdown.png" alt="" />
        </li>
        <li>
          <a href="#" className="navbar-navlinks">
            Partners
          </a>
        </li>
        <li>
          <a href="#" className="navbar-navlinks">
            About
          </a>
        </li>
      </ul>
      <div className="login">
        <button>Login</button>
        <button>Register</button>
      </div>
      <div className="ham-burger" onClick={()=>setIsMobile(!isMobile)}>{isMobile ? "x" : "-"}</div>
    </nav>
  );
}

export default Nav;
