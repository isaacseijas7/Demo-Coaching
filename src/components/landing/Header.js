import React, { useRef } from "react";

import logo from "./../../assets/svg/logo.svg";

const Header = ({
  headerScroll,
  aboutScroll,
  changeyourlifeScroll,
  chooseyourcoachScroll,
  faqScroll,
  coursesScroll,
  contactScroll,
  refProp,
}) => {
  const btnNavbarTogglerRef = useRef(null);
  const navMenuRef = useRef(null);

  const toggleNavigation = () => {
    if (
      btnNavbarTogglerRef &&
      btnNavbarTogglerRef.current &&
      navMenuRef.current
    ) {
      btnNavbarTogglerRef.current.classList.toggle("collapsed");
      navMenuRef.current.classList.toggle("collapsed");
      navMenuRef.current.classList.toggle("show");
    }
  };

  const toggleNavigationHiden = () => {
    if (
      btnNavbarTogglerRef &&
      btnNavbarTogglerRef.current &&
      navMenuRef.current
    ) {
      btnNavbarTogglerRef.current.classList.remove("collapsed");
      navMenuRef.current.classList.remove("collapsed");
      navMenuRef.current.classList.remove("show");
    }
  };

  return (
    <header ref={refProp} className="header default border-bottom">
      <div className="header-section">
        <div className="container">
          <nav className="navbar navbar-expand-lg header-navbar">
            <a
              className="navbar-brand navbar-logo scroll"
              style={{ color: "#173967", fontWeight: "bold", fontSize: "20px" }}
              href="#wrapper"
              onClick={(event) => {
                toggleNavigationHiden();
                headerScroll(event);
              }}
            >
              <img src={logo} alt="logo" srcSet={logo} />
            </a>
            <button
              className="navbar-toggler btn-navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target=".nav-menu"
              aria-expanded="true"
              aria-label="Toggle navigation"
              ref={btnNavbarTogglerRef}
              onClick={toggleNavigation}
            >
              <span className="fa fa-bars" />
            </button>
            <div
              ref={navMenuRef}
              className="nav-menu collapse navbar-collapse navbar-collapse justify-content-end py-0"
            >
              <ul className="navbar-nav header-navbar-nav">
                <li>
                  <a
                    className="nav-link scroll"
                    href="#wrapper"
                    onClick={(event) => {
                      toggleNavigationHiden();
                      headerScroll(event);
                    }}
                  >
                    Inicio
                  </a>
                </li>
                <li>
                  <a
                    className="nav-link scroll"
                    href="#about"
                    onClick={(event) => {
                      toggleNavigationHiden();
                      aboutScroll(event);
                    }}
                  >
                    Acerca de
                  </a>
                </li>
                <li>
                  <a
                    className="nav-link scroll"
                    href="#changeyourlife"
                    onClick={(event) => {
                      toggleNavigationHiden();
                      changeyourlifeScroll(event);
                    }}
                  >
                    Consultoría
                  </a>
                </li>
                <li>
                  <a
                    className="nav-link scroll"
                    href="#choose-your-coach"
                    onClick={(event) => {
                      toggleNavigationHiden();
                      chooseyourcoachScroll(event);
                    }}
                  >
                    Elige tu Coach
                  </a>
                </li>
                <li>
                  <a
                    className="nav-link scroll"
                    href="#faq"
                    onClick={(event) => {
                      toggleNavigationHiden();
                      faqScroll(event);
                    }}
                  >
                    Faq
                  </a>
                </li>
                <li>
                  <a
                    className="nav-link scroll"
                    href="#courses"
                    onClick={(event) => {
                      toggleNavigationHiden();
                      coursesScroll(event);
                    }}
                  >
                    Cursos
                  </a>
                </li>
                <li className="mb-3 mb-lg-0">
                  <a
                    className="nav-link scroll"
                    href="#contact"
                    onClick={(event) => {
                      toggleNavigationHiden();
                      contactScroll(event);
                    }}
                  >
                    Contactos
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export { Header };
