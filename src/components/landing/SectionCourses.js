import React from "react";

import avatar1 from "assets/img/avatar-1.jpg";
import avatar2 from "assets/img/avatar-2.jpg";
import avatar3 from "assets/img/avatar-3.jpg";
import avatar4 from "assets/img/avatar-4.jpg";
import image8 from "assets/img/8.jpg";
import image9 from "assets/img/9.jpg";
import image10 from "assets/img/10.jpg";

const SectionCourses = ({ refProp }) => {
  return (
    <section ref={refProp} id="courses" className="spacer-double-lg">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="mb-5 pb-5 text-center">
              <h2 className="display-4">Cursos recientes</h2>
              <p className="w-md-60 mx-auto mb-0 lead">
                Nuestro trabajo con los clientes siempre ha estado en la
                intersección de profunda experiencia en la industria y amplias
                capacidades.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-4 mb-5 mb-lg-0">
            <article className="card shadow h-100">
              <div className="position-relative">
                <img
                  className="card-img-top"
                  src={image8}
                  alt="image8"
                  srcSet={image8}
                />
                <span className="badge badge-success badge-lg ml-1 position-absolute mr-5">
                  Gratis
                </span>
              </div>
              <div className="card-body p-5">
                <a
                  className="d-inline-block text-muted text-uppercase small mb-2"
                  href="./"
                >
                  Eventos en vivo
                </a>
                <h2 className="h5">
                  <a href="./">Domina cada área de tu vida</a>
                </h2>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi
                  sequi cupiditate odit.
                </p>
              </div>
              <div className="card-footer border-0 pt-0 pb-5 px-0 mx-5">
                <div className="media align-items-center">
                  <div className="media-body d-flex justify-content-left text-muted font-size-15 ml-2">
                    <span className="mr-3">33 estudiantes</span>
                    <span>8 Lecciones</span>
                  </div>
                  <div className="avatar-group">
                    <img
                      className="avatar-sm img-fluid rounded-circle img-fluid avatar-bordered rounded-circle"
                      src={avatar2}
                      alt="avatar1"
                      srcSet={avatar1}
                    />
                    <img
                      className="ml-offset-2 avatar-sm img-fluid rounded-circle img-fluid avatar-bordered rounded-circle"
                      src={avatar1}
                      alt="avatar1"
                      srcSet={avatar1}
                    />
                  </div>
                </div>
              </div>
            </article>
          </div>
          <div className="col-md-6 col-lg-4 mb-5 mb-lg-0">
            <article className="card shadow h-100">
              <div className="position-relative">
                <img
                  className="card-img-top"
                  src={image9}
                  alt="image9"
                  srcSet={image9}
                />
                <span className="badge badge-secondary badge-lg ml-1 position-absolute mr-5">
                  50$
                </span>
              </div>
              <div className="card-body p-5">
                <a
                  className="d-inline-block text-muted text-uppercase small mb-2"
                  href="./"
                >
                  Coaching privado
                </a>
                <h3 className="h5">
                  <a href="./">Empiece a vivir la vida de sus sueños</a>
                </h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi
                  sequi cupiditate odit.
                </p>
              </div>
              <div className="card-footer border-0 pt-0 pb-5 px-0 mx-5">
                <div className="media align-items-center">
                  <div className="media-body d-flex justify-content-left text-muted font-size-15 ml-2">
                    <span className="mr-3">53 estudiantes</span>
                    <span>7 Lecciones</span>
                  </div>
                  <div className="avatar-group">
                    <img
                      className="avatar-sm img-fluid rounded-circle img-fluid avatar-bordered rounded-circle"
                      src={avatar3}
                      alt="avatar2"
                      srcSet={avatar3}
                    />
                    <img
                      className="ml-offset-2 avatar-sm img-fluid rounded-circle img-fluid avatar-bordered rounded-circle"
                      src={avatar4}
                      alt="avatar4"
                      srcSet={avatar4}
                    />
                  </div>
                </div>
              </div>
            </article>
          </div>
          <div className="col-md-6 col-lg-4">
            <article className="card shadow h-100">
              <div className="position-relative">
                <img
                  className="card-img-top"
                  src={image10}
                  alt="image10"
                  srcSet={image10}
                />
                <span className="badge badge-secondary badge-lg ml-1 position-absolute mr-5">
                  50$
                </span>
              </div>
              <div className="card-body p-5">
                <a
                  className="d-inline-block text-muted text-uppercase small mb-2"
                  href="./"
                >
                  Programas de entrenamiento
                </a>
                <h3 className="h5">
                  <a href="./">
                    Domine su tiempo para hacer más y lograr más resultados
                    significativos
                  </a>
                </h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi
                  sequi cupiditate odit.
                </p>
              </div>
              <div className="card-footer border-0 pt-0 pb-5 px-0 mx-5">
                <div className="media align-items-center">
                  <div className="media-body d-flex justify-content-left text-muted font-size-15 ml-2">
                    <span className="mr-3">23 estudiantes</span>
                    <span>3 Lecciones</span>
                  </div>
                  <div className="avatar-group">
                    <img
                      className="avatar-sm img-fluid rounded-circle img-fluid avatar-bordered rounded-circle"
                      src={avatar1}
                      alt="avatar1"
                      srcSet={avatar1}
                    />
                    <img
                      className="ml-offset-2 avatar-sm img-fluid rounded-circle img-fluid avatar-bordered rounded-circle"
                      src={avatar2}
                      alt="avatar2"
                      srcSet={avatar2}
                    />
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="mt-6 pt-6 text-center">
              <a
                className="mr-2 btn btn-secondary btn-radius-bottom-left mb-lg-0"
                href="./"
              >
                <span className="mn-top">Ver todos los cursos</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { SectionCourses };
