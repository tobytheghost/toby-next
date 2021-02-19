import React, { useRef } from "react";
import { Canvas, useFrame } from "react-three-fiber";
import { OrbitControls, Stars } from "drei";

const RotatingStars = () => {
  const stars = useRef();

  useFrame(() => {
    stars.current.rotation.x = stars.current.rotation.y += 0.0005;
  });

  return <Stars ref={stars} />;
};

const StarsCanvas = ({ orbit }) => {
  return (
    <div className="canvas">
      <Canvas>
        <ambientLight />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <RotatingStars />
        {orbit && <OrbitControls />}
        {/* <Box position={[-1.2, -2, 0]} pivot={[0, 0, 0]} /> */}
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
