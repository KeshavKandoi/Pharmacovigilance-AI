import axios from "axios";

const ReportUpload = () => {
  const handleUpload = async (e) => {
    const file = e.target.files[0];

    const formData = new FormData();
    formData.append("file", file);

    const res = await axios.post(
      "http://localhost:5000/api/analyze/report",
      formData
    );

    console.log(res.data);
  };

  return (
    <div className="card">
      <h3>Upload Medical Report</h3>
      <input type="file" className="input" onChange={handleUpload} />
    </div>
  );
};

export default ReportUpload;