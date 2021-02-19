import React, { useRef } from "react";
import { Canvas, useFrame } from "react-three-fiber";
import { OrbitControls, Stars } from "@react-three/drei";

const RotatingStars = () => {
  const stars = useRef();

  useFrame(() => {
    stars.current.rotation.x = stars.current.rotation.y += 0.00015;
  });

  return <Stars ref={stars} />;
};

const StarsCanvas = ({ orbit }) => {
  return (
    <div className="canvas">
      <Canvas>
        <RotatingStars />
        {orbit && <OrbitControls />}
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
