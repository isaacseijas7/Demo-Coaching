import React from "react";

const SectionSubscribeNewsletter = () => {
  return (
    <>
      <section className="bg-secondary spacer-double-lg">
        <div className="bg-checkerboard d-none d-md-block" />
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="mb-5 pb-5 text-center">
                <h2 className="display-4">Suscríbete al boletín</h2>
                <p className="w-md-60 mx-auto mb-0 lead">
                  Nuestro trabajo con los clientes siempre ha estado en la
                  intersección de profunda experiencia en la industria y amplias
                  capacidades.
                </p>
              </div>
            </div>
          </div>
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-7">
              <form>
                <div className="d-flex flex-column flex-sm-row form-group">
                  <input
                    className="form-control form-control-lg mr-sm-3 mb-2 mb-sm-0 h-100"
                    name="email"
                    placeholder="Dirección de correo electrónico"
                    type="email"
                  />
                  <button
                    className="btn btn-wide btn-lg btn-secondary btn-radius-bottom-left"
                    type="submit"
                  >
                    <span className="mn-top">Enviar</span>
                  </button>
                </div>
                <div className="small text-muted text-center pb-5">
                  * Nunca compartiremos su correo electrónico con terceros.
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <div className="curved-shape-container position-relative mt-4 d-none d-md-block">
        <div className="curved-shape">
          <svg
            version="1.1"
            className="svg-blue"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 2560 67"
            enableBackground="new 0 0 2560 67;"
            xmlSpace="preserve"
          >
            <style type="text/css" dangerouslySetInnerHTML={{ __html: "" }} />
            <path
              className="st0"
              d="M0,0c21.8,1.4,43.5,2.9,65.3,4.3c14.8,0.9,29.6,1.8,44.4,2.6c19.1,1.1,38.3,2.2,57.4,3.2
               c17.8,1,35.6,1.9,53.4,2.8c25.7,1.3,51.4,2.6,77.1,3.9c19.8,1,39.6,1.8,59.4,2.7c25.1,1.1,50.3,2.2,75.4,3.2c23.5,1,47,1.9,70.4,2.8
               c35.7,1.3,71.4,2.6,107.2,3.8c29.6,1,59.3,1.9,88.9,2.7c41.1,1.1,82.3,2.2,123.4,3.3c26.2,0.6,52.3,1.3,78.5,1.7
               c73.4,1.1,146.8,2.2,220.2,3.1c126.6,1.5,253.1,1.4,379.7,0.4c54.1-0.4,108.2-1,162.2-1.9c51.4-0.8,102.8-2.1,154.2-3.3
               c34.2-0.8,68.3-1.6,102.5-2.7c41.1-1.3,82.3-2.8,123.4-4.3c26.2-1,52.5-2,78.7-3.2c31-1.4,61.9-2.8,92.9-4.3
               c25-1.2,49.9-2.4,74.9-3.7c25.4-1.3,50.7-2.8,76.1-4.3c20.7-1.2,41.4-2.4,62.1-3.7c21.5-1.4,43.1-2.8,64.6-4.3
               c17.9-1.2,35.7-2.5,53.6-3.7c4.7-0.3,9.3-0.7,14-1c0,22.3,0,44.7,0,67C1706.7,67,853.3,67,0,67C0,44.7,0,22.3,0,0z"
            />
          </svg>
        </div>
      </div>
    </>
  );
};

export { SectionSubscribeNewsletter };
