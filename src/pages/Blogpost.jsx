import "../styles/css/pages/blogpost.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Footer } from "../components/index";
import { AiOutlineTwitter, AiFillLinkedin } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { HiLink } from "react-icons/hi";
import { logo } from "../assets/index";
const baseURL = "http://127.0.0.1:8000/posts/";
const Blogpost = () => {
  const [post, setPost] = useState({});

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data[0]);
      console.log(response.data[0].content);
    });
  }, []);

  return (
    <>
      <div className="blogpost">
        <h1 className="blog-title">
          What Is a Blog, & Why Should You Create One
        </h1>
        {/* cat */}
        <div className="header-cat">
          <p className="text">
            Your blog needs an online home. Learn more about HubSpot's CMS.
          </p>
          <div className="button">
            <p>Learn More</p>
          </div>
        </div>
        {/* user */}

        <div className="user">
          <div className="user-details">
            <div className="img">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDJzEaxLN-jGRYYUO65pWu7Q9GXoNt4LUSSA&usqp=CAU"
                alt=""
              />
            </div>
            <div className="details">
              <h3>Ayush Kumar</h3>
              <p>
                <span>Oct 12 2022</span>.<span>5 min read</span>.
                <span>Web dev</span>
              </p>
            </div>
          </div>
          <div className="user-social">
            <a href="">
              <AiOutlineTwitter />
            </a>
            <a href="">
              <AiFillLinkedin />
            </a>
            <a href="">
              <BsFacebook />
            </a>
            <a href="">
              <HiLink />
            </a>
          </div>
        </div>

        {/* content */}

        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: post.content }}
        ></div>
      </div>
      <Footer />
    </>
  );
};

export default Blogpost;
