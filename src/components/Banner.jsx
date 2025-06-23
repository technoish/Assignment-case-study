import React from "react";
import "../styles/Banner.css";
import frame1 from "../assets/image 23.png"; 
import frame2 from "../assets/image 24.png";
import doradesign from "../assets/doradesign.png";
import framefree from "../assets/frame-free.png";

function Banner() {
  return (
    <div className="banner">
      <div className="banner-container">
        <div className="banner-frame-f">
            <h1>I AM A <img src={frame1} alt="freelance-image" /> FREELANCE  <br /> DESIGNER <img src={frame2} alt="freelance-image" /> FROM <br /> San Francisco</h1>
        </div>
        
        <div className="banner-frame-s">
          <ul>
            <li><img src={doradesign} alt="" /></li>
            <li><img src={doradesign} alt="" /></li>
            <li><img src={framefree} alt="" /></li>
            
            <li>
              <p>
                Welcome to my portfolio. Here, artistry meets functionality.
                Dive into a curated showcase of distinctive branding and web
                designs, each crafted to captivate and inspire.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Banner;
