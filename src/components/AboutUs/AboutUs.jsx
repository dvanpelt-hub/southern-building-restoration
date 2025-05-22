import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <>
      <h2 className="about-us-title">
        About Us
      </h2>
      <div className="about-container">
        <div className="about-image-container">
          <span
            className="about-image"
            alt="A picture of a historical chimney."
          />
        </div>
        <div className="about-content">
          <h3>Southern Building Restoration (SBR): A Legacy of Craftsmanship</h3>
          <p>
            Southern Building Restoration (SBR) is the evolution of what was
            once Harbon Builders, a company with deep roots in the building
            industry.
            <br />
            <br />
            Harbon Builders was founded in 1967 by Geoff Harbon, specializing in
            new builds and extensions. The company thrived until the mid-1990s
            when Geoff shifted his focus to support his wife, Jan Harbon, in her
            botanical illustration business.
            <br />
            <br />
            Following in his father’s footsteps, Tom Harbon left school and went
            straight to work on building sites. While he quickly realized that
            modern construction wasn’t his passion, he found himself drawn to
            the practical challenges of restoration work. After gaining
            experience with a local building firm, Tom had his first encounter
            with natural hydraulic lime mortar at just 16—an experience that
            sparked his curiosity.
          </p>
        </div>
      </div>
      <div className="about-container-reverse">
        <div className="about-image-container">
          <span
            className="about-image-2"
            alt="A picture of a historical chimney."
          />
        </div>
        <div className="about-content">
          <h3>Building Conservation - Harbon Builders</h3>
          <p>
            At 18, Tom joined a company specializing in building restoration and
            conservation. By 20, he was managing large-scale projects—sometimes
            overwhelmed but always finding a way to see them through. His work
            ranged from lime-rendering an admiralty semaphore station to
            devising non-invasive ways to install modern heating systems in a
            15th-century cottage. Every day presented a new challenge, deepening
            his expertise and passion for historic buildings.
            <br />
            <br />
            A turning point came when a client, who was pursuing an MSc in
            Building Conservation at the Weald and Downland Museum, encouraged
            Tom to apply for the program. At 21, despite having no formal
            qualifications beyond a handful of GCSEs, Tom was offered a
            place—likely due to his enthusiasm, hands-on experience, and perhaps
            the fact that he had worn a suit for the first time.
            <br />
            <br />
            By 22, Tom had set out on his own, reviving Harbon Builders — a name
            that carried the weight of tradition and craftsmanship.
            <br />
            <br />
            Over the following years, a small, dedicated team was formed,
            completing restoration projects across Hampshire, Surrey, and
            Sussex. Their work spanned all aspects of building conservation,
            from reconstructing a gatehouse tower that doubled as an ensuite to
            extending listed properties—all while preserving the integrity and
            historical character of each building.
          </p>
        </div>
      </div>
      <div className="about-container">
        <div className="about-image-container">
          <span
            className="about-image-3"
            alt="A picture of a historical chimney."
          />
        </div>
        <div className="about-content">
          <h3>Formation of SBR</h3>
          <p>
            Tom’s dedication paid off when one of his most challenging projects
            was shortlisted for a South Downs Design Award. The project required
            complex problem-solving, but the results proved the effort was well
            worth it. Every aspect, from planning to execution, was handled
            in-house—a testament to the team’s skill and commitment.
            <br />
            <br />
            Fast forward 15 years, and Tom has chosen to return to his true
            passion: pure restoration and conservation work. As Harbon Builders
            had evolved into a broader construction firm, it became clear that a
            rebrand was needed.
            <br />
            <br />
            Southern Building Restoration (SBR) was born.
            <br />
            <br />
            SBR specializes in all aspects of restoration and conservation, with
            a primary focus on lime work. The company also offers building
            condition reports, listed building planning assistance, and work
            scheduling to ensure every project is carried out with precision and
            respect for the original structure.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
