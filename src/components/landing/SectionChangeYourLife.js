import React from "react";

import startupIcon from "assets/svg/startup-icon.svg";
import image7 from "assets/img/7.jpg";
import ideaIcon from "assets/svg/idea-icon.svg";
import image5 from "assets/img/5.jpg";
import targetIcon from "assets/svg/target-icon.svg";
import image6 from "assets/img/6.jpg";

const SectionChangeYourLife = ({ chooseyourcoachScroll, refProp }) => {
  return (
    <section
      ref={refProp}
      id="changeyourlife"
      className="bg-secondary spacer-double-lg"
    >
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="mb-5 pb-5 text-center">
              <h2 className="display-4">Cambia tu vida</h2>
              <p className="w-md-60 mx-auto mb-0 lead">
                Nuestro trabajo con los clientes siempre ha estado en la
                intersección de profunda experiencia en la industria y amplias
                capacidades.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 mb-4 mb-lg-0">
            <div className="position-relative px-3">
              <div className="position-relative z-index-2">
                <img
                  className="max-width-5 mb-2"
                  src={startupIcon}
                  alt="startupIcon"
                  srcSet={startupIcon}
                />
                <h4>Coaching</h4>
                <p className="mb-6">
                  La investigación de usuarios se centra en comprender los
                  comportamientos de los usuarios, necesidades y motivaciones a
                  través de técnicas de observación.
                </p>
                <img
                  src={image7}
                  alt="image7"
                  srcSet={image7}
                  className="img-fluid rounded radius-top-left z-index-2"
                />
              </div>
              <span
                className="position-absolute number text-white d-none d-lg-block"
                data-jarallax-element="0 60"
              >
                1
              </span>
            </div>
          </div>
          <div className="col-md-4 mb-4 mb-lg-0">
            <div className="position-relative px-3">
              <div className="position-relative z-index-2">
                <img
                  className="max-width-5 mb-2"
                  src={ideaIcon}
                  alt="ideaIcon"
                  srcSet={ideaIcon}
                />
                <h4>Consultante</h4>
                <p className="mb-6">
                  La investigación de usuarios se centra en comprender los
                  comportamientos de los usuarios, necesidades y motivaciones a
                  través de técnicas de observación.
                </p>
                <img
                  src={image5}
                  alt="image5"
                  srcSet={image5}
                  className="img-fluid rounded radius-bottom-right z-index-2"
                />
              </div>
              <span
                className="position-absolute number text-white d-none d-lg-block"
                data-jarallax-element="0 60"
              >
                2
              </span>
            </div>
          </div>
          <div className="col-md-4">
            <div className="position-relative px-3">
              <div className="position-relative z-index-2">
                <img
                  className="max-width-5 mb-2"
                  src={targetIcon}
                  alt="targetIcon"
                  srcSet={targetIcon}
                />
                <h4>Cursos</h4>
                <p className="mb-6">
                  La investigación de usuarios se centra en comprender los
                  comportamientos de los usuarios, necesidades y motivaciones a
                  través de técnicas de observación.
                </p>
                <img
                  src={image6}
                  alt="image6"
                  srcSet={image6}
                  className="img-fluid rounded radius-top-right z-index-2"
                />
              </div>
              <span
                className="position-absolute number text-white d-none d-lg-block"
                data-jarallax-element="0 60"
              >
                3
              </span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="mt-6 pt-6 text-center">
              <a
                className="mr-2 btn btn-primary btn-radius-bottom-left mb-2 mb-sm-0"
                href="#choose-your-coach"
                onClick={chooseyourcoachScroll}
              >
                <span className="mn-top">Elige tu Coach</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { SectionChangeYourLife };
