import React from "react";

import image2 from "assets/img/2.jpg";

const SectionFreeConsultation = () => {
  return (
    <section className="pt-8 pt-md-0 border-bottom">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <img
              className="d-md-none img-mobile"
              src={image2}
              alt="image2"
              srcSet={image2}
            />
            <div className="position-relative h-100 vw-50 float-right d-none d-md-block">
              <div className="w-100 h-100">
                <img
                  className="bg-image"
                  src={image2}
                  alt="image2"
                  srcSet={image2}
                />
              </div>
              <div className="edge-shape edge-shape-right edge-nudge d-none d-md-block">
                <svg
                  version="1.1"
                  className="svg-white"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 38.3185 589.7157"
                  enableBackground="new 0 0 38.3185 589.7157"
                  xmlSpace="preserve"
                >
                  <g>
                    <path
                      d="M38.1863,589.7157C25.4621,393.2148,12.738,196.714,0,0c12.7731,0,25.4604,0,38.3185,0c0,196.5318,0,393.1221,0,589.7125
                              C38.2744,589.7136,38.2304,589.7147,38.1863,589.7157z"
                    />
                  </g>
                </svg>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-5 offset-lg-1 spacer-double-lg">
            <h3 className="h1">
              Obtenga una consulta gratuita y actualice hoy
            </h3>
            <p className="lead">
              Nuestro trabajo con los clientes siempre ha estado en la
              intersección de profunda experiencia en la industria y amplias
              capacidades.
            </p>
            <form>
              <div className="d-flex flex-column form-group">
                <input
                  className="form-control mb-3 h-100"
                  name="email"
                  placeholder="Dirección de correo electrónico"
                  type="email"
                />
                <button
                  className="btn btn-secondary btn-radius-bottom-right btn-loading"
                  type="submit"
                  data-loading-text="Sending"
                >
                  <span className="mn-top">Obtenga una cuenta gratis</span>
                </button>
              </div>
              <div className="custom-control custom-checkbox d-flex align-items-center">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="consultantCheckbox"
                  name="consultantCheckbox"
                />
                <label
                  className="custom-control-label"
                  htmlFor="consultantCheckbox"
                >
                  <small>
                    Estoy de acuerdo con los
                    <a className="link-muted" href="./">
                      Términos y Condiciones
                    </a>
                  </small>
                </label>
              </div>
              <div className="small text-muted mt-3">
                Comience su prueba gratuita de 14 días, cancele en cualquier
                momento.
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export { SectionFreeConsultation };
