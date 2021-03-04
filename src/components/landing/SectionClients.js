import React from "react";

import logo1 from "assets/svg/logo-1.svg";
import logo2 from "assets/svg/logo-2.svg";
import logo3 from "assets/svg/logo-3.svg";
import logo4 from "assets/svg/logo-4.svg";
import logo5 from "assets/svg/logo-5.svg";

const SectionClients = () => {
  return (
    <section className="bg-primary spacer-double-sm mt-n">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-auto">
            <ul className="list-unstyled d-flex flex-wrap justify-content-center mb-0">
              <li className="my-3 mx-3 mx-lg-4">
                <h3 className="h5 text-white">Confiado por</h3>
              </li>
              <li className="my-3 mx-3 mx-lg-4">
                <img
                  className="icon-logo-svg"
                  src={logo1}
                  alt="logo1"
                  srcSet={logo1}
                />
              </li>
              <li className="my-3 mx-3 mx-lg-4">
                <img
                  className="icon-logo-svg"
                  src={logo2}
                  alt="logo2"
                  srcSet={logo2}
                />
              </li>
              <li className="my-3 mx-3 mx-lg-4">
                <img
                  className="icon-logo-svg"
                  src={logo3}
                  alt="logo3"
                  srcSet={logo3}
                />
              </li>
              <li className="my-3 mx-3 mx-lg-4">
                <img
                  className="icon-logo-svg"
                  src={logo4}
                  alt="logo4"
                  srcSet={logo4}
                />
              </li>
              <li className="my-3 mx-3 mx-lg-4">
                <img
                  className="icon-logo-svg"
                  src={logo5}
                  alt="logo5"
                  srcSet={logo5}
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export { SectionClients };
