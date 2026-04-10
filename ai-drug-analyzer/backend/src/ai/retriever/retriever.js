import { drugData } from "../../data/drugData.js";

export const retrieveDrugInfo = (drugName, symptoms) => {
  const results = drugData.filter(d =>
    d.drug.toLowerCase().includes(drugName.toLowerCase())
  );

  return results.map(r => JSON.stringify(r)).join("\n");
};