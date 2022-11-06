import React from "react";
import "../styles/css/pages/home.css";
import {
  hero,
  fb,
  fbm,
  google,
  insta,
  twitter,
  youtube,
} from "../assets/index";
import { LatestBlog, Navbar, HeroChips, Footer } from "../components/index";

const Home = () => {
  let companies = [fb, twitter, google, youtube, insta, fbm];
  return (
    <>
      {/* hero */}
      <main className="hero">
        <div className="container">
          <div className="hero-text">
            <h1>
              Welcome to Zixblogs <br />
              New Way <br />
              of Learn Things
            </h1>
            <div>
              <HeroChips text="Software" color="#5C5C5C" />
              <HeroChips text="Technology" color="#5C5C5C" />
              <HeroChips text="Web Development" color="#5C5C5C" />
              <HeroChips text="Personal Blogging" bg="#DD16BB" color="main" />
              <HeroChips text="Marketing and PR" color="#5C5C5C" />
            </div>
            <p>
              A blog was more of a personal diary that people shared online. In
              this online journal, you could talk about your daily life or share
              about things that you were doing. Scroll and read our blogs!!
            </p>
          </div>
          <div className="hero-img">
            <img src={hero} alt="hero" />
          </div>
        </div>
        <div className="gr1 __gradient "/>
        <div className="gr2 __gradient2 "/>
  
      </main>

      {/* company slider */}
      <div className="company-slider">
        <div className="container">
          {companies.map((company, index) => {
            return <img src={company} alt="company logo" key={index} />;
          })}
        </div>
      </div>

      <section className="latest-blogs">
        <div className="container">
          <h1>Latest Vlogs</h1>
          <div className="grid">
            <LatestBlog />
            <LatestBlog />
            <LatestBlog />
            <LatestBlog />
            <LatestBlog />
    
          </div>
        </div>
      </section>

      {/* footer */}
      <Footer />
    </>
  );
};

export default Home;
