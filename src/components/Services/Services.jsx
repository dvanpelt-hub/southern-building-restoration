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
          <h3>Lime pointing</h3>
          <p>
            SBR specializes in all aspects of lime pointing, offering expert services designed to preserve and protect the integrity of historic buildings and structures. Lime pointing is a traditional technique used to repoint mortar joints in brick and stonework, and SBR excels in this highly skilled process. Unlike modern cement-based mortar, lime mortar is breathable, flexible, and much more sympathetic to the natural materials of older buildings. SBR’s team understands the importance of using the right mix and application techniques to match the original material, ensuring the longevity and structural stability of period properties. Whether it’s repointing a building’s facade or repairing joints on smaller features, SBR provides a professional and precise service that respects the craftsmanship of the past.
            <br />
            <br />
            With a deep understanding of historic masonry, SBR’s lime pointing services not only improve the aesthetic appeal of a building but also enhance its performance. Lime mortar allows moisture to escape, preventing the trapped moisture that can cause damage in modern cement-based systems. SBR uses the best quality lime products and employs traditional methods to ensure that each project is completed to the highest standards. From minor repointing repairs to larger conservation projects, SBR’s lime pointing services are an essential part of maintaining and restoring the beauty and function of historic properties for years to come.
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
