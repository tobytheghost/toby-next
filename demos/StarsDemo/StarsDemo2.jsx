import React from "react";
import { Canvas } from "react-three-fiber";
import { Stars } from "@react-three/drei";

const StarsDemo2 = () => {
  return (
    <div
      className="stars"
      style={{
        background:
          "radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%)",
        height: "300px",
        marginBottom: "1rem",
      }}
    >
      <Canvas>
        <Stars />
      </Canvas>
    </div>
  );
};

export default StarsDemo2;
