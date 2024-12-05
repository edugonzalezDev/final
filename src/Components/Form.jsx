import { useState } from "react";

const Form = () => {
  const [usuario, setUsuario] = useState({ nombre: "", email: "" });
  const [formEnviado, setFormEnviado] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const regexNombre = /^[a-zA-ZÀ-ÿ\s]{3,40}$/;

    if (regexEmail.test(usuario.email) && regexNombre.test(usuario.nombre)) {
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
      <form onSubmit={handleSubmit}>
        <label>Nombre:</label>
        <input
          type="text"
          value={usuario.nombre}
          onChange={(e) => setUsuario({ ...usuario, nombre: e.target.value })}
        />
        <label>Email:</label>
        <input
          type="email"
          value={usuario.email}
          onChange={(e) => setUsuario({ ...usuario, email: e.target.value })}
        />
        <button type="submit">Enviar</button>
        {error && (
          <p style={{ color: "red" }}>Por favor, ingrese un nombre y email válidos</p>
        )}
      </form>
    )}
    </>
  );
};

export default Form;
