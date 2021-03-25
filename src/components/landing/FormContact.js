import React from "react";

const FormContact = () => {
  return (
    <form className="card border-0 shadow-soft p-6">
      <div className="mb-4">
        <h3 className="h5">Envíanos un mensaje</h3>
      </div>
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
            <select className="custom-select" defaultValue={"Individual"}>
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
      <div className="mb-3">
        <div className="custom-control custom-checkbox d-flex align-items-center text-muted">
          <input
            type="checkbox"
            className="custom-control-input"
            id="newsletterCheckbox"
            name="newsletterCheckbox"
          />
          <label className="custom-control-label" htmlFor="newsletterCheckbox">
            <small>Reciba boletines de Coaching.</small>
          </label>
        </div>
      </div>
      <button
        type="submit"
        className="btn btn-secondary btn-radius-bottom-right"
      >
        <span className="mn-top">Enviar mensaje</span>
      </button>
    </form>
  );
};

export { FormContact };
