import { useState } from "react";
import InputForm from "../components/InputForm";
import ResultCard from "../components/ResultCard";
import ReportUpload from "../components/ReportUpload";
import MoleculeViewer from "../components/MoleculeViewer";
import { analyzeDrug } from "../services/api";

const Home = () => {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [drug, setDrug] = useState("");
  const [showMolecule, setShowMolecule] = useState(false);

  const handleSubmit = async (data) => {
    try {
      setLoading(true);
      setDrug(data.drugName);
      setShowMolecule(true);

      const res = await analyzeDrug(data);
      setResult(res.data.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1 className="title">AI Drug Safety Analyzer</h1>

      <InputForm onSubmit={handleSubmit} />

      {loading && <div className="spinner"></div>}

      <ResultCard result={result} />

      <ReportUpload />

      {drug && (
        <button
          className="button"
          onClick={() => setShowMolecule(!showMolecule)}
        >
          {showMolecule ? "Hide Molecule" : "Show Molecule"}
        </button>
      )}

      {showMolecule && (
        <div className="card">
          <h3>Molecular Structure of {drug}</h3>
          <MoleculeViewer drugName={drug} />
        </div>
      )}
    </div>
  );
};

export default Home;