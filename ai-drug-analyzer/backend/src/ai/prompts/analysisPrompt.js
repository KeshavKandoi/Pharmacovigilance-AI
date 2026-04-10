export const analysisPrompt = `
You are a medical AI assistant.

Use the context below to answer:

Context:
{context}

Drug: {drugName}
Symptoms: {symptoms}

Tasks:
1. Identify side effects
2. Identify interactions
3. Assign risk level (Low/Medium/High)
4. Explain simply

Return JSON:
{
  "sideEffects": [],
  "interactions": [],
  "riskLevel": "",
  "explanation": ""
}
`;