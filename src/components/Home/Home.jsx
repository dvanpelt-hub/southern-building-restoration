import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div id="home" className="home-container">
        <h2>We Are Harbon Builders</h2>
        <p>
          Specializing in all aspects of Building Conservation throughout
          Hampshire, Surrey and Sussex
        </p>
      </div>
      <div className="slogan-container">
        <div className="slogan-content">
          <h3>Preserving Heritage / Protecting Legacy</h3>
          <p>
            At Preserving Heritage, Protecting Legacy, we are dedicated to
            safeguarding the architectural treasures that tell the story of our
            past. Our mission is to restore and preserve historic buildings with
            the highest standards of craftsmanship and care, ensuring their
            beauty and cultural significance endure for future generations. We
            believe that each historic structure holds a unique place in
            history, reflecting the values, artistry, and identity of its era.
          </p>
        </div>
      </div>
      <div className="about-us-container">
        <span
          className="about-us-image"
          alt="A picture of a historical chimney."
        />
        <div className="about-us-content">
          <h3>About Us</h3>
          <p>
            At Harbon Builders our aim is to meet your property's needs for its
            sustainable future, preserving it in the least intrusive manner. Our
            skilled craftsmen respect and understand the fragile nature of
            Historic and Listed Buildings.
          </p>
          <div className="button-primary-homepage-container">
            <Link to="/about" className="button-primary-homepage">
              VIEW MORE
            </Link>
          </div>
        </div>
      </div>
      <div className="our-services-container">
        <span
          className="our-services-image"
          alt="A picture of a historical chimney."
        />
        <div className="our-services-content">
          <h3>Services</h3>
          <p>
            We have completed conservation work on all types of Historic and
            Listed properties from vernacular Tudor cottages to grand Georgian
            mansions. Preservation of original fabric is always at the forefront
            and vision of our work, taking necessary and logical steps in our
            work to achieve this. The understanding that every property and
            building is different is an important approach in how the work is
            carried out to ensure the best possible results.
          </p>
          <div className="button-primary-homepage-container">
            <Link to="/services" className="button-primary-homepage">
              VIEW MORE
            </Link>
          </div>
        </div>
      </div>
      <div className="our-projects-container">
        <span
          className="our-projects-image"
          alt="A picture of old victorian flats."
        />
        <div className="our-projects-content">
          <h3>Projects</h3>
          <p>
            Harbon Builders was originally established in 1968, mostly serving
            the alteration and new build sector. Having encountered Listed and
            Historic Buildings we have developed an interest in how 'old'
            properties work and how to maintain them. Now Harbon Builders solely
            works on Listed and Historic Buildings.
          </p>
          <div className="button-primary-homepage-container">
            <Link to="/projects" className="button-primary-homepage">
              VIEW MORE
            </Link>
          </div>
        </div>
      </div>
      <div className="contact-us-container">
        <span
          className="contact-us-image"
          alt="A picture of old victorian flats."
        />
        <div className="contact-us-content">
          <h3>Contact</h3>
          <p>
            Harbon Builders was originally established in 1968, mostly serving
            the alteration and new build sector. Having encountered Listed and
            Historic Buildings we have developed an interest in how 'old'
            properties work and how to maintain them. Now Harbon Builders solely
            works on Listed and Historic Buildings.
          </p>
          <div className="button-primary-homepage-container">
            <Link to="/contact" className="button-primary-homepage">
              GET IN TOUCH
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
