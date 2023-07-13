import Formulario from "./components/Formulario";
import "./index.css";

const App = () => {
  return (
    <>
      <h1>Patient Administrator</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario />
          </div>
          <div className="one-half column">2</div>
        </div>
      </div>
    </>
  );
};

export default App;
