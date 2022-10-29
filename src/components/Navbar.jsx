import React from "react";
import { Outlet, Link } from "react-router-dom";
import "../styles/css/components/header.css";
import { logo } from "../assets/index";
const Navbar = () => {
  return (
 <>
    <nav>
      <div className="container">
        <div className="logo-box">
          <img src={logo} alt="logo" className="logo" />
          <p>ZixBlog</p>
        </div>
        <div className="nav-link-box">
          <ul>
            <li> <Link to="/" className="Link">Home</Link></li>
            <li><Link to="/blog" className="Link">Blogs</Link></li>
            <li><Link to="/contact" className="Link">Contact</Link></li>
            <li><Link to="/about" className="Link">About</Link></li>
            <button onClick={() =>{window.location.href='https://www.buymeacoffee.com/zixblog'}}>
              <p>Give Support</p>
            </button>
          </ul>
        </div>
      </div>
    </nav>
<Outlet/>
   </> 
  );
};

export default Navbar;
