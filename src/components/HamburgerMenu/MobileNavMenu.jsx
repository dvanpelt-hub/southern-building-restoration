import React, { useState } from "react";
import "./MobileNavMenu.css";

const MobileNavMenu = () => {
  let burger = document.getElementById("burger");
  let nav = document.getElementById("main-nav");
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleMenu = () => {
    setIsBurgerOpen(!isBurgerOpen);
    setIsNavOpen(!isNavOpen);
    if (burger) {
      burger.addEventListener("click", function (e) {
        this.classList.toggle("is-open");
        nav.classList.toggle("is-open");
      });
    }
  };

  return (
    <>
      <button id="burger" className="open-main-nav" onClick={handleMenu}>
        {isBurgerOpen ? <span>&times;</span> : <span>=</span>}
      </button>
      <nav
        className={isNavOpen ? "main-nav is-open" : "main-nav"}
        id="main-nav"
      >
        <ul>
          <li>
            <a href="/about">/ About</a>
          </li>
          <li>
            <a href="/services">/ Services</a>
          </li>
          <li>
            <a href="/projects">/ Projects</a>
          </li>
          <li>
            <a href="/contact">/ Contact</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default MobileNavMenu;
