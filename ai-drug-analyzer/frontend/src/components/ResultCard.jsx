const ResultCard = ({ result }) => {
  if (!result) return null;

  let data;
  try {
    data = JSON.parse(result);
  } catch {
    return <pre>{result}</pre>;
  }

  const getRiskClass = (risk) => {
    if (!risk) return "";
    const r = risk.toLowerCase();
    if (r.includes("high")) return "high";
    if (r.includes("medium")) return "medium";
    if (r.includes("low")) return "low";
    return "";
  };

  return (
    <div className="card">
      <h2>Analysis Result</h2>

      <p>
        <b>Risk Level:</b>{" "}
        <span className={getRiskClass(data.riskLevel)}>
          {data.riskLevel}
        </span>
      </p>

      <p><b>Side Effects:</b></p>
      <ul className="list">
        {data.sideEffects?.map((e, i) => (
          <li key={i}>{e}</li>
        ))}
      </ul>

      <p><b>Interactions:</b></p>
      <ul className="list">
        {data.interactions?.map((i, idx) => (
          <li key={idx}>{i}</li>
        ))}
      </ul>

      <p><b>Explanation:</b> {data.explanation}</p>
    </div>
  );
};

export default ResultCard;