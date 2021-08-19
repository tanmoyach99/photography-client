import React from "react";
import contactImg from "../../images/contactImg.jpeg";
import "./Contacts.css";

const Contacts = () => {
  return (
    <div>
      <div className="text-center contact-info">
        <h1>Contact Us</h1>
        <p>Dhaka,Bangladesh</p>
        <p>+8801818XXXXXX</p>
        <p>MarysPhotography@gmail.com</p>
      </div>
      <div className="container-fluid contacts row d-flex">
        <div className="col-md-5 d-flex  justify-content-center align-items-center">
          <img src={contactImg} alt="" className="img-fluid contact-img" />
        </div>
        <div className="col-md-7 p-5 d-flex flex-column justify-content-center align-items-center">
          <form action="" className="contact-form">
            <div className="contact-item d-flex flex-column">
              <label className="contact-label" htmlFor="">
                Name
              </label>

              <input
                type="text"
                className="contact-input"
                placeholder="Your Name"
              />
            </div>
            <div className="contact-item d-flex flex-column">
              <label className="contact-label" htmlFor="">
                Email
              </label>

              <input
                type="text"
                className="contact-input"
                placeholder="Your Email"
              />
            </div>
            <div className="contact-item d-flex flex-column">
              <label className="contact-label" htmlFor="">
                Phone
              </label>

              <input
                type="text"
                className="contact-input"
                placeholder="Your Phone"
              />
            </div>
            <div className="contact-item d-flex flex-column">
              <label className="contact-label" htmlFor="">
                Address
              </label>

              <input
                type="text"
                className="contact-input"
                placeholder="Your Address"
              />
            </div>
            <div className="contact-item d-flex flex-column align-items-start">
              <label className="contact-label" htmlFor="">
                Message
              </label>

              <input
                type="text"
                className="contact-input"
                placeholder="Your Message"
              />
            </div>
            <br />
            <input type="submit" value="submit" className="btn btn-submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
