import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <>
      <h3 className="services-title">Our Services</h3>
      <div className="services-container-brick">
        <div className="services-image-container">
          <span
            className="services-image"
            alt="A picture of a historical chimney."
          />
        </div>
        <div className="services-content-brick">
          <h3>Traditional Brickwork</h3>
          <p>
            We have a wealth of knowledge and experience in the field of
            Traditional, Heritage, Historic and Conservation Brickwork. Historic
            Brickwork repairs, maintenance or alteration should always be
            approached with a view of preserving and prolonging the life of the
            original fabric, like all aspects of building conservation. At
            Harbon Builders we can source replacements whether new or reclaimed
            to exactly match the existing brick fabric with our extensive
            distribution directory. We can also match mortars to sympathise with
            the existing mortar of the original brick fabric.
          </p>
        </div>
      </div>
      <div className="services-container-reverse">
        <div className="services-image-container">
          <span
            className="services-image"
            alt="A picture of a historical chimney."
          />
        </div>
        <div className="services-content-timber">
          <h3>Timber</h3>
          <p>
            In works we undertake our main aim is to bring a positive input into
            the building future. This could involve removing of a harmful non
            breathable paint to be replaced with permeable lime paint or re
            pointing a soft Clunch stone wall to prolong its life.
          </p>
        </div>
      </div>
      <div className="services-container">
        <div className="services-image-container">
          <span
            className="services-image"
            alt="A picture of a historical chimney."
          />
        </div>
        <div className="services-content-plastering">
          <h3>Plastering</h3>
          <p>
            All work we undertake is carried out with care and thought, giving
            the buildings we work on the respect they deserve.
          </p>
        </div>
      </div>
    </>
  );
};

export default Services;
