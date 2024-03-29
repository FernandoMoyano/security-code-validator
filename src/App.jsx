import { UseState } from "./Usestate.jsx";
import { ClassState } from "./ClassState.jsx";
import "./index.css";

function App() {
  return (
    <div className='App'>
      <UseState name='UseState' />
      <ClassState name='ClassState' />
    </div>
  );
}

export default App;
