import React from "react";
import { Link } from "react-router-dom";
import HarbonLogo from "../../media/SBR_LOGO.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MobileNavMenu from "../HamburgerMenu/MobileNavMenu";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <MobileNavMenu />
      <div className="header-container">
        <Link to="/">
          <LazyLoadImage
            alt="The Harbon Builders company logo, comprised of a pillar and the company name."
            id="main-image"
            src={HarbonLogo}
          />
        </Link>
        <nav className="desktop-nav">
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/services">Services</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
