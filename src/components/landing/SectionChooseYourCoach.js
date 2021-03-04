import React, { useState } from "react";
import { Formik } from "formik";

const initialForm = {
  firstName: "",
  lasstName: "",
  type: "Individual",
  email: "",
  phone: "",
  subject: "",
  description: "",
};

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

  const handleSubmitFormik = (values, { setSubmitting }) => {
    setTimeout(() => {
      console.log(values);
      setSubmitting(false);
      handleCloseModal();
    }, 1000);
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
            <>
              <Formik
                initialValues={initialForm}
                validate={(values) => {
                  const errors = {};
                  if (!values.email) {
                    errors.email = "Requerido";
                  } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                      values.email
                    )
                  ) {
                    errors.email = "Dirección de correo electrónico inválida";
                  }
                  if (!values.firstName) {
                    errors.firstName = "Requerido";
                  }
                  if (!values.lasstName) {
                    errors.lasstName = "Requerido";
                  }
                  if (!values.type) {
                    errors.type = "Requerido";
                  }
                  if (!values.phone) {
                    errors.phone = "Requerido";
                  } else if (!/^\d{11}$/.test(values.phone)) {
                    errors.phone = "Número de telefónico inválido";
                  }
                  if (!values.description) {
                    errors.description = "Requerido";
                  }
                  return errors;
                }}
                onSubmit={handleSubmitFormik}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                  /* and other goodies */
                }) => (
                  <form className="modal-content" onSubmit={handleSubmit}>
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
                              className={
                                errors.firstName &&
                                touched.firstName &&
                                errors.firstName
                                  ? "form-control is-invalid"
                                  : "form-control"
                              }
                              name="firstName"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.firstName}
                              placeholder="Nombre"
                              aria-label="Nombre"
                            />
                            <div className="invalid-feedback">
                              {errors.firstName &&
                                touched.firstName &&
                                errors.firstName}
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 mb-3">
                          <div className="input-group">
                            <input
                              type="text"
                              className={
                                errors.lasstName &&
                                touched.lasstName &&
                                errors.lasstName
                                  ? "form-control is-invalid"
                                  : "form-control"
                              }
                              name="lasstName"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.lasstName}
                              placeholder="Apellido"
                            />
                            <div className="invalid-feedback">
                              {errors.lasstName &&
                                touched.lasstName &&
                                errors.lasstName}
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 mb-3">
                          <div className="input-group">
                            <select
                              name="type"
                              className={
                                errors.type && touched.type && errors.type
                                  ? "custom-select is-invalid"
                                  : "custom-select"
                              }
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.type}
                            >
                              <option value="Individual">Individual</option>
                              <option value="Compañía">Compañía</option>
                            </select>
                            <div className="invalid-feedback">
                              {errors.type && touched.type && errors.type}
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 mb-3">
                          <div className="input-group">
                            <input
                              type="text"
                              className={
                                errors.email && touched.email && errors.email
                                  ? "form-control is-invalid"
                                  : "form-control"
                              }
                              name="email"
                              placeholder="Tu correo electrónico"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.email}
                            />
                            <div className="invalid-feedback">
                              {errors.email && touched.email && errors.email}
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 mb-3">
                          <div className="input-group">
                            <input
                              type="text"
                              className={
                                errors.phone && touched.phone && errors.phone
                                  ? "form-control is-invalid"
                                  : "form-control"
                              }
                              name="phone"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.phone}
                              placeholder="Número de teléfono"
                            />
                            <div className="invalid-feedback">
                              {errors.phone && touched.phone && errors.phone}
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 mb-3">
                          <div className="input-group">
                            <input
                              type="text"
                              className={
                                errors.subject &&
                                touched.subject &&
                                errors.subject
                                  ? "form-control is-invalid"
                                  : "form-control"
                              }
                              name="subject"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.subject}
                              placeholder="Asunto"
                            />
                            <div className="invalid-feedback">
                              {errors.subject &&
                                touched.subject &&
                                errors.subject}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mb-5">
                        <label className="sr-only">
                          ¿como podemos ayudarte?
                        </label>
                        <div className="input-group">
                          <textarea
                            className={
                              errors.description &&
                              touched.description &&
                              errors.description
                                ? "form-control is-invalid"
                                : "form-control"
                            }
                            rows={4}
                            name="description"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.description}
                            placeholder="Hola, me gustaría ..."
                            aria-label="Hola, me gustaría ..."
                          />
                          <div className="invalid-feedback">
                            {errors.description &&
                              touched.description &&
                              errors.description}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn btn-wide btn-radius-bottom-left btn-primary btn-md mr-2 mb-3 mb-md-0"
                      >
                        {isSubmitting
                          ? "Enviando mensaje..."
                          : "Enviar mensaje"}
                      </button>
                      <button
                        type="button"
                        className="btn btn-secondary btn-radius-bottom-right btn-md mb-3 mb-md-0"
                        data-dismiss="modal"
                        onClick={handleCloseModal}
                      >
                        Cerrar
                      </button>
                    </div>
                  </form>
                )}
              </Formik>
            </>
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
