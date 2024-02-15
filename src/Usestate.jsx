import React, { useState } from "react";

/* eslint-disable react/prop-types */

const SECURITY_CODE = "paradigme";
function UseState(props) {
  const [value, setValue] = useState("");
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = useState(false);

  React.useEffect(() => {
    console.log("Empezando el efecto");

    if (loading) {
      setError(false);
      setTimeout(() => {
        console.log("Haciendo la validación");
        if (value === SECURITY_CODE) {
          setLoading(false);
        } else {
          setError(true);
          setLoading(false);
        }
        console.log("Terminando la validación");
      }, 3000);
    }

    console.log("Terminando el efecto");
  }, [loading, value]);

  return (
    <div>
      <h2>Eliminar {props.name}</h2>

      <p>Por favor, escribe el código de seguridad.</p>
      {error && <p>Error: El codigo es incorrecto</p>}
      {loading && <p>Cargando...</p>}

      <input
        placeholder='Código de seguridad'
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <button onClick={() => setLoading(true)}>Comprobar</button>
    </div>
  );
}

export { UseState };
