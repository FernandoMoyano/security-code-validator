/* eslint-disable react/prop-types */
import React from "react";
import { Loading } from "./Loading";

const SECURITY_CODE = "paradigma";
class ClassState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      error: false,
      loading: false,
    };
  }

  UNSAFE_componentWillMount() {
    //El componente se va a montar
    //deprecado!
    console.log("componentWillMount");
  }

  componentDidMount() {
    //El componente se montó
    console.log("componentDidMount");
  }

  componentDidUpdate() {
    console.log("Actualizacion");
    if (this.state.loading) {
      setTimeout(() => {
        console.log("Haciendo la validación");
        if (this.state.value === SECURITY_CODE) {
          this.setState({ loading: false });
        } else {
          this.setState({ error: true, loading: false });
        }
        console.log("Terminando la validación");
      }, 3000);
    }
  }

  render() {
    return (
      <div>
        <h2>Eliminar {this.props.name}</h2>

        <p>Por favor, escribe el código de seguridad.</p>
        {this.state.error && <p>Error: El codigo es incorrecto</p>}

        {this.state.loading && <Loading />}

        <input
          placeholder='Código de seguridad'
          value={this.state.value}
          onChange={(event) => this.setState({ value: event.target.value })}
        />
        <button onClick={() => this.setState({ loading: true, error: false })}>
          Comprobar
        </button>
      </div>
    );
  }
}

export { ClassState };
