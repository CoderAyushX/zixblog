import { useState, useEffect, useRef } from "react";
import { Outlet, Link } from "react-router-dom";
import "../styles/css/components/header.css";
import { logo } from "../assets/index";
const Navbar = () => {
  const hamburger = useRef();
  const navLink = useRef();
  const [openNav, setOpenNav] = useState(true);
  const Open = () => {
    setOpenNav(!openNav);
    hamburger.current.classList.toggle("open");

    if (openNav) {
      navLink.current.style.width = "100%";
      navLink.current.style.padding = "20px";
    } else {
      navLink.current.style.width = "0%";
      navLink.current.style.padding = "0px";
    }
  };
  return (
    <>
      <nav>
        <div className="container">
          <div className="logo-box">
            <img src={logo} alt="logo" className="logo" />
            <p>ZixBlog</p>
          </div>
          <div className="nav-link-box">
            <ul ref={navLink}>
              <li>
                {" "}
                <Link to="/" className="Link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/blog" className="Link">
                  Blogs
                </Link>
              </li>
              <li>
                <Link to="/contact" className="Link">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/about" className="Link">
                  About
                </Link>
              </li>

              <button
                onClick={() => {
                  window.location.href = "https://www.buymeacoffee.com/zixblog";
                }}
              >
                <p>Give Support</p>
              </button>
            </ul>
          </div>
          <div className="wrapper-menu" ref={hamburger} onClick={() => Open()}>
            <div className="line-menu half start"></div>
            <div className="line-menu"></div>
            <div className="line-menu half end"></div>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
