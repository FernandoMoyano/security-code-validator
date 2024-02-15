import React from "react";

class Loading extends React.Component {
  componentWillUnmmount() {
    //El componente se va a desmontar
    console.log("componentWillunmmount");
  }
  render() {
    return <p>Cargando...</p>;
  }
}

export { Loading };
