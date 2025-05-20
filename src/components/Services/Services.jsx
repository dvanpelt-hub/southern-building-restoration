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
          <h3>Lime plastering and rendering</h3>
          <p>
            SBR offers comprehensive lime plastering and rendering services,
            specializing in the restoration and conservation of historic
            buildings. Lime plastering is an essential technique for preserving
            the authenticity and structural integrity of period properties, and
            SBR’s expert craftsmen are skilled in applying traditional
            lime-based plasters and renders to both interior and exterior
            surfaces. Unlike modern cement-based products, lime plaster is
            breathable and flexible, allowing buildings to maintain proper
            moisture regulation and preventing long-term damage. SBR uses the
            finest quality lime products and combines them with time-tested
            methods to ensure the aesthetic and functional performance of each
            restoration project. Whether it’s refreshing the finish on a period
            property or undertaking more extensive lime plastering works, SBR
            delivers meticulous and long-lasting results. 
            <br />
            <br />
            In addition to
            traditional plastering, SBR’s lime rendering services play a vital
            role in the conservation of historical facades. Lime render provides
            a durable, weather-resistant coating that allows moisture to escape
            from the building, protecting the underlying structure from damp and
            decay. The team at SBR is highly experienced in applying lime render
            to a wide range of surfaces, including stone, brick, and timber.
            Their careful approach ensures that the character of the building is
            preserved while enhancing its longevity. From delicate internal lime
            plastering to robust external rendering, SBR offers a full range of
            lime-based services, providing expert solutions to maintain and
            restore the beauty of historic properties for future generations.
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
