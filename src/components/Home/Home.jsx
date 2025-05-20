import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div id="home" className="home-container">
        <h2>Southern Building Restoration</h2>
        <p>
          Specializing in all aspects of Building Conservation throughout
          Hampshire, Surrey and Sussex
        </p>
      </div>
      <div className="slogan-container">
        <div className="slogan-content">
          <h3>Preserving Heritage / Protecting Legacy</h3>
          <p>
            SBR offers comprehensive lime plastering and rendering services,
            specializing in the restoration and conservation of historic
            buildings. SBR uses the finest quality lime products and combines
            them with time-tested methods to ensure the aesthetic and functional
            performance of each restoration project. Whether it’s refreshing the
            finish on a period property or undertaking more extensive lime
            plastering works, SBR delivers meticulous and long-lasting results.
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
            SBR specializes in all aspects of restoration and conservation, with
            a primary focus on lime work. The company also offers building
            condition reports, listed building planning assistance, and work
            scheduling to ensure every project is carried out with precision and
            respect for the original structure.
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
