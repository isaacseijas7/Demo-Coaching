import React from "react";

const Footer = ({ chooseyourcoachScroll }) => {
  return (
    <footer className="container spacer-double-md">
      <div className="row text-center">
        <div className="col">
          <button
            type="button"
            className="btn font-weight-400 font-size-16 btn-secondary btn-radius-bottom-left text-left mb-2 mb-sm-0 mr-1"
            onClick={chooseyourcoachScroll}
          >
            Empezar
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <hr className="my-6" />
        </div>
      </div>
      <div className="row align-items-md-center">
        <div className="col-md-4 mb-4 mb-md-0">
          <div className="d-flex align-items-center">
            <p className="font-size-14 mb-0">
              <span className="text-muted">
                © 2020 todos los derechos reservados
              </span>
            </p>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 mb-4 mb-sm-0">
          <ul className="list-inline list-group-flush text-md-center mb-0 mn-top">
            <li className="list-inline-item px-2">
              <a className="list-group-item-action" href="./">
                Ayuda
              </a>
            </li>
            <li className="list-inline-item px-2">
              <a className="list-group-item-action" href="./">
                Términos
              </a>
            </li>
            <li className="list-inline-item px-2">
              <a className="list-group-item-action" href="./">
                Politicas
              </a>
            </li>
          </ul>
        </div>
        <div className="col-sm-6 col-md-4">
          <ul className="list-inline text-sm-right mb-0 font-size-14 mn-top">
            <li className="list-inline-item px-2">
              <a className="list-group-item-action" href="./">
                <span className="fa fa-facebook-f" />
              </a>
            </li>
            <li className="list-inline-item px-2">
              <a className="list-group-item-action" href="./">
                <span className="fa fa-google" />
              </a>
            </li>
            <li className="list-inline-item px-2">
              <a className="list-group-item-action" href="./">
                <span className="fa fa-twitter" />
              </a>
            </li>
            <li className="list-inline-item px-2">
              <a className="list-group-item-action" href="./">
                <span className="fa fa-github" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
