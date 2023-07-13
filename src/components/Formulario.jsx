import { useState } from "react";

const Formulario = () => {
  const [cita, setCita] = useState({
    pet: "",
    owner: "",
    date: "",
    time: "",
    symptoms: "",
  });

  const handleChange = (e) => {};
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
        />
        <label htmlFor="owner">Pet Owner</label>
        <input
          onChange={handleChange}
          type="text"
          name="owner"
          id="owner"
          className="u-full-width"
          placeholder="Pet Owner"
        />
        <label htmlFor="date">Date</label>
        <input
          onChange={handleChange}
          type="date"
          name="date"
          id="date"
          className="u-full-width"
        />
        <label htmlFor="time">Hour</label>
        <input
          onChange={handleChange}
          type="time"
          name="time"
          id="time"
          className="u-full-width"
        />
        <label htmlFor="symptoms">Symptoms</label>
        <textarea
          onChange={handleChange}
          className="u-full-width"
          name="symptoms"
          id="symptoms"
          rows="4"
          placeholder="Describe the symptoms..."
        ></textarea>
        <button type="submit" className="u-full-width button-primary">
          add appointment
        </button>
      </form>
    </>
  );
};

export default Formulario;
