import { useState } from "react";
import "../Styles/Form.css";
import { useDentistStates } from "../Context/Context";

const Form = () => {
  const [usuario, setUsuario] = useState({ nombre: "", email: "", consulta: "" });
  const [formEnviado, setFormEnviado] = useState(false);
  const [error, setError] = useState(false);
  const { state } = useDentistStates();

  const handleSubmit = (e) => {
    e.preventDefault();

    const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const regexNombre = /^[a-zA-ZÀ-ÿ\s]{3,40}$/;
    const regexConsulta = /^[a-zA-ZÀ-ÿ\s]{3,200}$/;

    if (regexEmail.test(usuario.email) && regexNombre.test(usuario.nombre) && regexConsulta.test(usuario.consulta)) {
      setFormEnviado(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <>
      {formEnviado ? (
        <h2>Gracias por enviar tus datos</h2>
      ) : (
        <>
          <h2>Quieres saber más?</h2>
          <p>Envíanos tus consultas y nos contactaremos contigo</p>
          <form
            className={`contact-form contact-form-${state.theme}`}
            onSubmit={handleSubmit}
          >
            <label>Nombre:</label>
            <input
              type="text"
              className={`input-${state.theme}`}
              value={usuario.nombre}
              onChange={(e) =>
                setUsuario({ ...usuario, nombre: e.target.value })
              }
            />
            <label>Email:</label>
            <input
              type="email"
              className={`input-${state.theme}`}
              value={usuario.email}
              onChange={(e) =>
                setUsuario({ ...usuario, email: e.target.value })
              }
            />
            <label>Consulta:</label>
            <textarea
              className={`input-${state.theme}`}
              placeholder="Escribe aquí tu consulta"
            ></textarea>
            <button type="submit">Enviar</button>
            {error && (
              <p style={{ color: "red" }}>
                Por favor, ingrese un nombre y email válidos y complete la consulta
              </p>
            )}
          </form>
        </>
      )}
    </>
  );
};

export default Form;
