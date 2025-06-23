import React from "react";
import "../styles/Footer.css";
import star from "../assets/star.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="marquee">
          <div className="marquee-content">
            <p>
              <span>
                WEBFLOW <img src={star} alt="" />
              </span>
              <span>
                FIGMA <img src={star} alt="" />
              </span>
              <span>
                DESIGNER <img src={star} alt="" />
              </span>
              <span>
                {" "}
                DEVELOPER
                <img src={star} alt="" />
              </span>
            </p>

            <p>
              <span>
                WEBFLOW <img src={star} alt="" />
              </span>
              <span>
                FIGMA <img src={star} alt="" />
              </span>
              <span>
                DESIGNER <img src={star} alt="" />
              </span>
              <span>
                {" "}
                DEVELOPER
                <img src={star} alt="" />
              </span>
            </p>

           
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
