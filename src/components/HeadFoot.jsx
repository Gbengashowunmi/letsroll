import React from "react";
import "./headfoot.scss";
import TemporaryDrawer from "./TemporaryDrawer";
export default function HeadFoot({ children }) {
  return (
    <>
      <div className="header">
        <div className="nav_bar">
          <TemporaryDrawer />
        </div>
        <section className="logo">
          <div className="image">
            <img src="/images/letsroll_logo.jpeg" alt="" />
          </div>
        </section>
        <section className="nav">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li> FAQ</li>
          </ul>
        </section>
      </div>
      {children}
      <footer>
        <div className="footer_category">
          <h5>Let's Roll</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, porro?
          </p>
        </div>
        <div className="footer_category">
          <h5>COMPANY</h5>
          <ul>
            <li>Careers</li>
            <li>Mobile</li>
            <li>Blog</li>
            <li>How we work</li>
          </ul>
        </div>
        <div className="footer_category">
          <h5>WORKING HOURS</h5>
          <ul>
            <li>Mon - Fri: 09:00AM - 09:00PM </li>
            <li>Sat: 09:00AM - 07:00PM</li>
            <li>Sun: Closed</li>
          </ul>
        </div>
        <div className="footer_category">
          <h5>SUBSCRIPTION</h5>
          <p>Subscribe your Email address for latest news & updates.</p>
          <input type="text" placeholder="Enter Email Address" />
          <button>Submit</button>
        </div>
      </footer>

      <div className="bottom">
        <p>©2020 Car Rental. All Rights Reserved</p>
        <div className="social_media">
          <p>fbk</p>
          <p>instagram</p>
          <p>whatsapp</p>
        </div>
      </div>
    </>
  );
}
