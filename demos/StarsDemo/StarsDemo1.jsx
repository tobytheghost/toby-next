import React from "react";
import StarsCanvas from "../../components/Stars/Stars";

const StarsDemo1 = () => {
  return (
    <div
      className="stars-demo"
      style={{
        position: "relative",
        width: "100%",
        height: "300px",
        marginBottom: "1rem",
      }}
    >
      <StarsCanvas orbit={true} noOrbitals={true} />
    </div>
  );
};

export default StarsDemo1;
