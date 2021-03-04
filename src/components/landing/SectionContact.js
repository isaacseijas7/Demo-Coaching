import React from "react";
import { FormContact } from "components/landing/FormContact";

const SectionContact = ({ refProp }) => {
  return (
    <section ref={refProp} id="contact" className="bg-primary spacer-double-lg">
      <div className="container position-relative z-index-2">
        <div className="row justify-content-lg-between align-items-center">
          <div className="col-lg-5 text-white mb-7 mb-lg-0">
            <div className="mb-6">
              <h2 className="h1 text-white">
                Estamos aquí para ayudarte, ponte en contacto con nosotros.
              </h2>
              <p className="text-white">
                Para obtener más información sobre nuestros productos y precios,
                no dude en para ponerse en contacto con nuestro
                <a className="text-info font-weight-medium" href="./">
                  Centro de ayuda.
                </a>
              </p>
            </div>
            <div className="row">
              <div className="col-sm-6 mb-5">
                <span className="rounded-icon-size-1 bg-soft-white rounded-circle mb-3 d-block">
                  <span className="fa fa-envelope icon-rounded-inner" />
                </span>
                <h4 className="h5 mb-0 text-white">Consultas generales</h4>
                <a className="text-white-70 font-size-15" href="./">
                  hello@democoaching.com
                </a>
              </div>
              <div className="col-sm-6 mb-5">
                <span className="rounded-icon-size-1 bg-soft-white rounded-circle mb-3 d-block">
                  <span className="fa fa-phone icon-rounded-inner" />
                </span>
                <h4 className="h5 mb-0 text-white">Número de teléfono</h4>
                <a className="text-white-70 font-size-15" href="./">
                  (513) 352-3209
                </a>
              </div>
              <div className="col-sm-6">
                <span className="rounded-icon-size-1 bg-soft-white rounded-circle mb-3 d-block">
                  <span className="fa fa-map-marker icon-rounded-inner" />
                </span>
                <h4 className="h5 mb-0 text-white">Dirección</h4>
                <a className="text-white-70 font-size-15" href="./">
                  Central Park New York, USA
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mt-5 mt-lg-0">
            <FormContact />
          </div>
        </div>
      </div>
    </section>
  );
};

export { SectionContact };
