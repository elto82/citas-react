import { useState } from "react";

const Formulario = () => {
  const [cita, setCita] = useState({
    pet: "",
    owner: "",
    date: "",
    time: "",
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

  return (
    <>
      <h2>Create Appointment</h2>
      <form>
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

export default Formulario;
