import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function BirthdayCakeModel() {
  const { scene } = useGLTF("/models/cake.glb");
  return <primitive object={scene} scale={0.5} />;
}

export default function CakeScene() {
  return (
    <div style={{ height: "400px", width: "100%" }} className="pb-10">
      <Canvas>
        <ambientLight intensity={3} />
        <directionalLight position={[2, 2, 2]} />
        <Suspense fallback={null}>
          <BirthdayCakeModel />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  );
}
