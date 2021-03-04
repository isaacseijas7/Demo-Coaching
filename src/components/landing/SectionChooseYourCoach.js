import React, { useState } from "react";
const SectionChooseYourCoach = ({ refProp }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectCoach, setSelectCoach] = useState(null);

  const handleOpenModal = () => {
    document.querySelector("html").style.overflowY = "hidden";
    setShowModal(true);
  };

  const handleCloseModal = () => {
    document.querySelector("html").style.overflowY = "auto";
    setShowModal(false);
    setSelectCoach(null);
  };

  const createCoach = (title, image, text, post) => {
    return { title, image, text, post };
  };

  const coachs = [
    createCoach(
      "Marcela Estrada",
      "https://i.pravatar.cc/200?img=1",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis expedita omnis modi.",
      "Coaching Personal"
    ),
    createCoach(
      "Fanny T Mantilla",
      "https://i.pravatar.cc/200?img=10",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis expedita omnis modi.",
      "Coaching Organizacional"
    ),
    createCoach(
      "Mario Ramírez",
      "https://i.pravatar.cc/200?img=3",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis expedita omnis modi.",
      "Coaching Deportivo"
    ),
    createCoach(
      "Paula P",
      "https://i.pravatar.cc/200?img=9",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis expedita omnis modi.",
      "Coaching Personal"
    ),
    createCoach(
      "Julián G. B",
      "https://i.pravatar.cc/200?img=5",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis expedita omnis modi.",
      "Coaching Sistémico"
    ),
    createCoach(
      "Gastón K.",
      "https://i.pravatar.cc/200?img=7",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis expedita omnis modi.",
      "Coaching Ontológico"
    ),
  ];

  return (
    <>
      <div
        className={showModal ? "modal fade show" : "modal"}
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalLiveLabel"
        style={
          showModal
            ? {
                display: "block",
                paddingRight: "15px",
                overflowY: "auto",
                background: "#333333bd",
              }
            : {}
        }
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          {selectCoach && (
            <form className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">
                  <div className="title-flex">
                    <img
                      src={selectCoach.image}
                      className="avatar"
                      alt="team"
                      srcSet={selectCoach.image}
                    />{" "}
                    {selectCoach.title}
                  </div>
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={handleCloseModal}
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="row mx-gutters-2">
                  <div className="col-md-6 mb-3">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        name="firstName"
                        placeholder="Nombre"
                        aria-label="Nombre"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        name="lasstName"
                        placeholder="Apellido"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="input-group">
                      <select
                        className="custom-select"
                        defaultValue={"Individual"}
                      >
                        <option value="Individual">Individual</option>
                        <option value="budget">Compañía</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        name="email"
                        placeholder="Tu correo electrónico"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        name="phone"
                        placeholder="Número de teléfono"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        name="subject"
                        placeholder="Asunto"
                      />
                    </div>
                  </div>
                </div>
                <div className="mb-5">
                  <label className="sr-only">¿como podemos ayudarte?</label>
                  <div className="input-group">
                    <textarea
                      className="form-control"
                      rows={4}
                      name="description"
                      placeholder="Hola, me gustaría ..."
                      aria-label="Hola, me gustaría ..."
                      defaultValue={""}
                    />
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-wide btn-radius-bottom-left btn-primary btn-md mr-2 mb-3 mb-md-0"
                >
                  Enviar mensaje
                </button>
                <button
                  type="button"
                  className="btn btn-secondary btn-radius-bottom-right btn-md mb-3 mb-md-0"
                  data-dismiss="modal"
                  onClick={handleCloseModal}
                >
                  Close
                </button>
              </div>
            </form>
          )}
        </div>
      </div>

      <section
        id="choose-your-coach"
        ref={refProp}
        className="bg-primary mt-n spacer-double-lg"
      >
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="mb-5 pb-5 text-center">
                <h2 className="display-4 text-white">Elige tu Coach</h2>
                <p className="w-md-60 mx-auto mb-0 lead text-white">
                  Revisa los perfiles de nuestros coaches para elegir quién
                  quieres que te acompañe en tu proceso.
                </p>
              </div>
            </div>
          </div>
          <div className="grid-our-teams">
            {coachs.map((coach, key) => {
              return (
                <div className="our-team" key={key}>
                  <div className="pic">
                    <img src={coach.image} alt="team" srcSet={coach.image} />
                  </div>
                  <div className="team-content">
                    <h3 className="title">{coach.title}</h3>
                    <span className="post">{coach.post}</span>
                    <p className="text">{coach.text}</p>
                    <div className="team-footer">
                      <button
                        className="btn"
                        onClick={() => {
                          setSelectCoach(coach);
                          handleOpenModal();
                        }}
                      >
                        Elegir
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="row justify-content-center mt-5 pt-5">
            <div className="col-auto">
              <div className="alert bg-soft-white btn-radius-bottom-left mb-0 text-center font-weight-600">
                <p className="mb-0 text-white">
                  <span className="mn-top">
                    * Los precios del plan pueden cambiar. Lea nuestros
                    <a className="text-light" href="./">
                      Términos
                    </a>{" "}
                    para obtener más información.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export { SectionChooseYourCoach };
