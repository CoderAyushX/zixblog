import axios from "axios";
import { useState } from "react";
import { FiArrowUpRight } from "react-icons/Fi";
import { ToastContainer, toast } from "react-toastify";
import "../styles/css/pages/contact.css";
import "react-toastify/dist/ReactToastify.css";

const baseURL = "http://127.0.0.1:8000/";
const Contact = () => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    intrest: "progrmming",
    country: "india",
    message: "",
  });
  const showToastMessage = () => {
    toast.success("Thanks for your message !", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const handelInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setContact({ ...contact, [name]: value });
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    axios.post(`${baseURL}add/`, contact).then((response) => {
      showToastMessage();
    });
  };

  return (
    <div className="contact">
      <form className="c-box" onSubmit={handelSubmit}>
        <h1>
          Love to hear from you, <br />
          Get in touch 👋
        </h1>

        <div className="div-1">
          <div>
            <p>Your name</p>
            <input
              type="text"
              autoCorrect="false"
              value={contact.name}
              onChange={handelInput}
              name="name"
              autoFocus
            />
          </div>
          <div>
            <p>Your email</p>
            <input
              type="email"
              autoCorrect="false"
              value={contact.email}
              onChange={handelInput}
              name="email"
            />
          </div>
        </div>

        <div className="div-2">
          <div>
            <label for="intrest">You are intrested in:</label>
            <select
              id="intrest"
              name="intrest"
              value={contact.intrest}
              onChange={handelInput}
            >
              <option value="blogging">Blogging</option>
              <option value="programing">Programing</option>
              <option value="tech">Tech</option>
              <option value="others">Other</option>
            </select>
          </div>

          <div>
            <label for="country">Choose your country:</label>
            <select
              id="country"
              name="country"
              value={contact.country}
              onChange={handelInput}
            >
              <option value="india">India</option>
              <option value="others">Others</option>
            </select>
          </div>
        </div>

        <div className="div-3">
          <p>Message</p>
          <textarea
            name="message"
            rows="6"
            cols="30"
            value={contact.message}
            onChange={handelInput}
          >
            The cat was playing in the garden.
          </textarea>
        </div>

        <button type="submit">
          <p>
            Just Send <FiArrowUpRight size={20} />
          </p>
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Contact;
