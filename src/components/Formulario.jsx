import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";

const Formulario = ({ agregarCita }) => {
  const [error, setError] = useState(false);

  const currentDate = new Date().toISOString().split("T")[0];
  const currentTime = new Date()
    .toLocaleTimeString()
    .split(":")
    .slice(0, 2)
    .join(":");

  const [cita, setCita] = useState({
    pet: "",
    owner: "",
    date: currentDate,
    time: currentTime,
    symptoms: "",
  });

  const handleChange = (e) => {
    setCita({
      ...cita,
      [e.target.name]: e.target.value,
    });
    // console.log(cita);
  };
  //extraer datos
  const { pet, owner, date, time, symptoms } = cita;

  const handleSubmit = (e) => {
    e.preventDefault();
    //validar
    if (
      pet.trim() === "" ||
      owner.trim() === "" ||
      date.trim() === "" ||
      time.trim() === "" ||
      symptoms.trim() === ""
    ) {
      setError(true);

      return;
    }
    setError(false);
    //asignar id
    cita.id = uuidv4();
    //console.log(cita);
    //crear cita
    agregarCita(cita);
    //resetear formulario
    setCita({
      pet: "",
      owner: "",
      date: currentDate,
      time: currentTime,
      symptoms: "",
    });
  };

  return (
    <>
      <h2>Create Appointment</h2>
      {error ? <p className="alerta-error">All fields are required</p> : null}
      <form onSubmit={handleSubmit}>
        <label htmlFor="pet">Pet Name</label>
        <input
          onChange={handleChange}
          type="text"
          name="pet"
          id="pet"
          className="u-full-width"
          placeholder="Pet Name"
          value={pet}
        />
        <label htmlFor="owner">Pet Owner</label>
        <input
          onChange={handleChange}
          type="text"
          name="owner"
          id="owner"
          className="u-full-width"
          placeholder="Pet Owner"
          value={owner}
        />
        <label htmlFor="date">Date</label>
        <input
          onChange={handleChange}
          type="date"
          name="date"
          id="date"
          className="u-full-width"
          value={date}
        />
        <label htmlFor="time">Hour</label>
        <input
          onChange={handleChange}
          type="time"
          name="time"
          id="time"
          className="u-full-width"
          value={time}
        />
        <label htmlFor="symptoms">Symptoms</label>
        <textarea
          onChange={handleChange}
          className="u-full-width"
          name="symptoms"
          id="symptoms"
          rows="4"
          placeholder="Describe the symptoms..."
          value={symptoms}
        ></textarea>
        <button type="submit" className="u-full-width button-primary">
          add appointment
        </button>
      </form>
    </>
  );
};

Formulario.propTypes = {
  agregarCita: PropTypes.func,
  cita: PropTypes.object,
  setCita: PropTypes.func,
  error: PropTypes.bool,
  setError: PropTypes.func,
  currentDate: PropTypes.string,
  currentTime: PropTypes.string,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
};

export default Formulario;
