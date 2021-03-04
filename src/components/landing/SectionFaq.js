import React, { useRef, createRef } from "react";

const faqs = [
  {
    question: "¿Qué es el comercio de divisas?",
  },
  {
    question: "¿Vale la pena operar en forex?",
  },
  {
    question: "¿Quién es el comerciante de forex más rico?",
  },
  {
    question: "¿Puedes hacerte rico intercambiando divisas?",
  },
  {
    question: "¿Cuánto dinero necesito para operar?",
  },
];

const SectionFaq = ({ refProp }) => {
  const elementsRef = useRef(faqs.map(() => createRef()));

  const collapseFaq = (ref) => {
    if (ref && ref.current && typeof ref.current === "object") {
      ref.current.classList.toggle("show");
    }
  };

  return (
    <section ref={refProp} id="faq" className="spacer-double-lg">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="mb-5 pb-5 text-center">
              <h2 className="display-4">¿Cómo podemos ayudar?</h2>
              <p className="w-md-60 mx-auto mb-0 lead">
                Nuestro trabajo con los clientes siempre ha estado en la
                intersección de profunda experiencia en la industria y amplias
                capacidades.
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div id="faq-accordion">
              {faqs.map((faq, key) => {
                return (
                  <div key={key} className="card card-collapse mb-3">
                    <div className="card-header accordion-header">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link btn-block d-flex justify-content-between accordion-collapse-btn collapsed"
                          onClick={() => collapseFaq(elementsRef.current[key])}
                        >
                          {faq.question}
                          <span className="accordion-arrow">
                            <span className="fa fa-angle-down accordion-arrow-inner" />
                          </span>
                        </button>
                      </h5>
                    </div>
                    <div className="collapse-faq" ref={elementsRef.current[key]}>
                      <div className="card-body accordion-body">
                        El marketing web se refiere a una amplia categoría de
                        publicidad. que toma muchas formas diferentes, pero
                        generalmente involucra cualquier actividad de marketing
                        realizada en línea. Los comercializadores tienen cambió
                        sus esfuerzos en línea porque tiende a ser
                        significativamente menos costoso.
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="w-75 mx-auto mt-4 text-center">
          <p className="mb-0 text-muted">
            ¿No encontraste lo que buscas? Visita el
            <a href="./" className="hover-arrow text-info">
              {" "}
              centro de ayuda <span className="fa fa-arrow-right" />
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export { SectionFaq };
