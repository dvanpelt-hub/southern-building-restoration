import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <>
      <h2 className="about-us-title">
        Southern Building Restoration (SBR): A Legacy of Craftsmanship
      </h2>
      <div className="about-container">
        <div className="about-image-container">
          <span
            className="about-image"
            alt="A picture of a historical chimney."
          />
        </div>
        <div className="about-content">
          <h3>About Us</h3>
          <p>
            Southern Building Restoration (SBR) is the evolution of what was once Harbon Builders, a company with deep roots in the building industry.
          </p>
        </div>
      </div>
      <div className="about-container-reverse">
        <div className="about-image-container">
          <span
            className="about-image"
            alt="A picture of a historical chimney."
          />
        </div>
        <div className="about-content">
          <h3>Listed and Historic Buildings</h3>
          <p>
            Southern Building Restoration was originally established in 1968, mostly serving
            the alteration and new build sector. Having encountered Listed and
            Historic Buildings we have developed an interest in how 'old'
            properties work and how to maintain them. Now Harbon Builders solely
            works on Listed and Historic Buildings.
          </p>
        </div>
      </div>
      <div className="about-container">
        <div className="about-image-container">
          <span
            className="about-image"
            alt="A picture of a historical chimney."
          />
        </div>
        <div className="about-content">
          <h3>Family</h3>
          <p>
            Second generation Harbon, Proprietor Tom Harbon is now studying
            towards a MSc Building Conservation Degree taught at The Weald and
            Down Museum near Chichester to further the company's knowledge and
            expertise in the field of Building Conservation.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
