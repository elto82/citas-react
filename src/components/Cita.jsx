const Cita = ({ cita, deleteCita }) => {
  const { pet, owner, date, time, symptoms, id } = cita;
  return (
    <div className="cita">
      <p>
        Pet: <span>{pet}</span>
      </p>
      <p>
        Owner: <span>{owner}</span>
      </p>
      <p>
        Date: <span>{date}</span>
      </p>
      <p>
        Time: <span>{time}</span>
      </p>
      <p>
        Symptoms: <span>{symptoms}</span>
      </p>
      <button
        onClick={() => deleteCita(id)}
        className="button eliminar u-full-width"
      >
        Delete &times;
      </button>
    </div>
  );
};

export default Cita;
