import { useEffect, useRef } from "react";

const MoleculeViewer = ({ drugName }) => {
  const viewerRef = useRef(null);

  useEffect(() => {
    if (!drugName || !window.$3Dmol) return;

    const viewer = window.$3Dmol.createViewer(viewerRef.current, {
      backgroundColor: "white",
    });

    fetch(
      `https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/${drugName}/SDF`
    )
      .then((res) => res.text())
      .then((data) => {
        if (!data || data.length < 50) return;

        viewer.clear();
        viewer.addModel(data, "sdf");
        viewer.setStyle({}, { stick: {} });
        viewer.zoomTo();
        viewer.render();
      });
  }, [drugName]);

  return <div ref={viewerRef} className="viewer"></div>;
};

export default MoleculeViewer;