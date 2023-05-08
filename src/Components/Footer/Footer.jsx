import React from "react";
import "../../index.css";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left">
          <img src="./logo2.png" alt="" width={120}></img>
          <span className="secondaryText">
            Our vision is to make all people <br />
            the best place to live for them
          </span>
        </div>

        {/* right side  */}
        <div className="flexColStart f-right">
            <span className="primaryText">Information</span>
            <span className="secondaryText">FP-03, Ganga Nagar, Meerut</span>

            <div className="flexCenter f-menu">
                <span>Property</span>
                <span>Services</span>
                <span>Product</span>
                <span>About Us</span>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
