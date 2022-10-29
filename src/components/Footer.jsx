import React from "react";
import "../styles/css/components/footer.css";
import { logo } from "../assets/index";
import { fb, google, insta, twitter, youtube } from "../assets/index";
const Footer = () => {
  let social = [google, fb, twitter, insta, youtube];
  return (
    <div className="footer">
      <div className="container">
        <div className="box-box">
          <div className="box-1">
            <div className="logo-box">
              <img src={logo} alt="logo" className="logo" />
              <p>ZixBlog</p>
            </div>
            <p className="p">
              We understand that every student has different needs and
              capabilities, which is why we create such a wonderful and unique
              curriculum that is the best fit for every student.
            </p>
            <div>
              <p className="follow">Follow Us:</p>
              <div className="social">
                {social.map((company, index) => {
                  return (
                    <img
                      src={company}
                      alt="company logo"
                      key={index}
                      className="img"
                    />
                  );
                })}
              </div>
            </div>
            <p className="contact">conatct us at: ayushris49271@gamil.com</p>
          </div>

          {/* box 2 */}
          <div className="box-2">
            <div>
              <h2>Founder</h2>
              <ul>
                <li>Ayush kumar</li>
                <li>Abhishek kumar</li>
              </ul>
            </div>
            <div>
              <div>
                <h2>Members</h2>
                <ul>
                  <li>manish kumar</li>
                  <li>Rudransh raj</li>
                  <li>Jack Paul</li>
                  <li>Rohit Kumar</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr />

        {/* down box */}
        <div className="box-box-2">
          <div className="st-box">
            <p>
              {" "}
              Terms & Conditions<span>|</span>Privacy & Policy
              <span>|</span>Contact Us
            </p>
          </div>
          <div className="nd-box">
            <p>Copyright © 2022 ZixBlogs Pvt. Ltd. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
