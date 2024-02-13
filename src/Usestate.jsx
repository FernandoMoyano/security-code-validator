import React from "react";

/* eslint-disable react/prop-types */
function UseState(props) {
  const [error, setError] = React.useState(false);
  return (
    <div>
      <h2>Eliminar {props.name}</h2>

      <p>Por favor, escribe el código de seguridad.</p>
      {error && <p>Error: El codigo es incorrecto</p>}

      <input placeholder='Código de seguridad' />
      <button onClick={() => setError(!error)}>Comprobar</button>
    </div>
  );
}

export { UseState };
