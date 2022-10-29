import "../styles/css/pages/blog.css";
import { useRef, useEffect, useState } from "react";
import { Footer, ChoiceChips } from "../components/index";
const Blog = () => {
  const parentDiv = useRef();
  const [colors, setColors] = useState([]);
  const [collection, setCollection] = useState([]);
  let cats = [
    "Personal",
    "Business",
    "professional",
    "Fashion",
    "Lifestyle",
    "Travel",
    "Food",
  ];
  useEffect(() => {
    setColors(getRandomColor());
    setCollection(parentDiv.current.children);
  }, []);

  // random colors generators

  function getRandomColor() {
    let letters = "BCDEF".split("");
    let colors = [];
    let c;
    for (let k = 0; k < cats.length; k++) {
      c = "#";
      for (let i = 0; i < 6; i++) {
        c += letters[Math.floor(Math.random() * letters.length)];
      }
      colors.push(c);
    }
    return colors;
  }

  // changing bg
  for (let i = 0; i < collection.length; i++) {
    collection[i].style.background = colors[i];
    collection[i].style.transform = `translateY(${0})`;
  }

  const Heroblocks = (props) => {
    return (
      <div className="box">
        <div className="img">
          <img src={props.image} alt="" />
        </div>
        <div className="text">
          <h2>React 18 will include out-of-the-box improvements</h2>

          <button>
            <p>Read More</p>
          </button>
        </div>
      </div>
    );
  };

  const NineBlock = (props) => {
    return (
      <div className="nine-box">
        <div className="img">
          <img src={props.image} alt="" />
        </div>
        <div className="text">
          <p>Marketing</p>
          <h2>React 18 will include out-of-the-box improvements</h2>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="blog">
        {/* categes */}
        <div className="cats" ref={parentDiv}>
          {cats.map((name, index) => {
            return (
              <div className="box" key={index}>
                {name}
              </div>
            );
          })}
        </div>
        {/*  hero */}
        <div className="blog-hero">
          <div className="first-box">
            <div className="box">
              <h1>New latest smartphones</h1>

              <button>
                <p>Read More</p>
              </button>
            </div>
          </div>
          <Heroblocks image="https://image.api.playstation.com/vulcan/ap/rnd/202206/2707/XAjj2IBqZYWZXgKwNKhp2R3o.jpg" />
          <Heroblocks image="https://source.unsplash.com/random" />
          <Heroblocks image="https://domf5oio6qrcr.cloudfront.net/medialibrary/12031/e8e80fe7-0a4a-40f2-9163-b773c86e52e4.jpg" />
          <Heroblocks image="https://www.itprotoday.com/sites/itprotoday.com/files/styles/article_featured_retina/public/JavaScript-code.jpg?itok=1Wia7hH0" />
          <Heroblocks image="https://www.simplilearn.com/ice9/free_resources_article_thumb/Advantages_and_Disadvantages_of_artificial_intelligence.jpg" />
          <Heroblocks image="https://i0.wp.com/www.smartprix.com/bytes/wp-content/uploads/2022/05/40572-93406-iPhone-14-vs-pro-xl.jpg?ssl=1" />
        </div>

        {/* Read Our Blogs */}
        <div className="our-blogs">
          <div className="ob-box-1">
            <div className="image">
              <img
                src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/few_off/sian-fkp-37/2022/06_20/gallery/sian_05_m.jpg"
                alt="img"
              />
            </div>
            <div className="text">
              <h2>
                5 Steps to Create an Outstanding Marketing Plan [Free Templates]
              </h2>

              <p>
                marketing
                <span>|</span>
                10 minutes
              </p>
            </div>
          </div>
          <div className="ob-box-2">
            <div className="most-p">
              <div className="head">
                <h2>Most Popular</h2>
              </div>
              <ChoiceChips />
              <ChoiceChips />
              <ChoiceChips />
            </div>
            <div className="editor-p">
              <div className="head">
                <h2>Editor choice</h2>
              </div>
              <ChoiceChips />

              <ChoiceChips />
            </div>
          </div>
        </div>

        {/* last view 9 latest blogs */}

        <div className="nine-blog">
          <NineBlock image="https://cdn.pixabay.com/photo/2016/03/23/04/01/woman-1274056_960_720.jpg" />
          <NineBlock image="https://cdn.pixabay.com/photo/2015/12/04/14/05/code-1076536_960_720.jpg" />
          <NineBlock image="https://cdn.pixabay.com/photo/2016/11/29/02/53/python-1866944_960_720.jpg" />
          <NineBlock image="https://cdn.pixabay.com/photo/2013/04/11/19/46/building-102840_960_720.jpg" />
         
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blog;
