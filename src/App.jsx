import { useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import "./index.css";
import Cita from "./components/Cita";

const App = () => {
  let initialCitas = JSON.parse(localStorage.getItem("citas"));
  if (!initialCitas) {
    initialCitas = [];
  }
  const [citas, setCitas] = useState(initialCitas);

  useEffect(() => {
    if (initialCitas) {
      localStorage.setItem("citas", JSON.stringify(citas));
    } else {
      localStorage.setItem("citas", JSON.stringify([]));
    }
  }, [citas]);

  const agregarCita = (cita) => {
    const nuevasCitas = [...citas, cita];
    setCitas(nuevasCitas);
    localStorage.setItem("citas", JSON.stringify(nuevasCitas));
  };

  const deleteCita = (id) => {
    const nuevasCitas = citas.filter((cita) => cita.id !== id);
    setCitas(nuevasCitas);
  };

  const title =
    citas.length === 0 ? "No appointments" : "Manage your appointments";

  return (
    <>
      <h1>Patient Administrator</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario agregarCita={agregarCita} />
          </div>
          <div className="one-half column">
            <h2>{title}</h2>
            {citas.map((cita) => (
              <Cita key={cita.id} cita={cita} deleteCita={deleteCita} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
