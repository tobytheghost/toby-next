import React, { useRef } from "react";
import { Canvas, useFrame } from "react-three-fiber";
import { Stars } from "@react-three/drei";

const StarsDemo3 = () => {
  const RotatingStars = () => {
    const stars = useRef();

    useFrame(() => {
      stars.current.rotation.x = stars.current.rotation.y += 0.00015;
    });

    return <Stars ref={stars} />;
  };

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
        <RotatingStars />
      </Canvas>
    </div>
  );
};

export default StarsDemo3;
