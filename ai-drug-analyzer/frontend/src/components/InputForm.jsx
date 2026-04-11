import { useState } from "react";

const InputForm = ({ onSubmit }) => {
  const [drugName, setDrugName] = useState("");
  const [symptoms, setSymptoms] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({
      drugName,
      symptoms: symptoms.split(",").map(s => s.trim()),
    });
  };

  return (
    <form onSubmit={handleSubmit} className="card">
      <h2>Enter Drug Details</h2>

      <input
        className="input"
        placeholder="Drug Name"
        value={drugName}
        onChange={(e) => setDrugName(e.target.value)}
      />

      <input
        className="input"
        placeholder="Symptoms (comma separated)"
        value={symptoms}
        onChange={(e) => setSymptoms(e.target.value)}
      />

      <button className="button">Analyze</button>
    </form>
  );
};

export default InputForm;