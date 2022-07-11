import { ContactShadows } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import DavidSculpture from "./DavidSculpture";
import Loader from "./Loader";
import Triangle from "./Triangle";

function SculptureScene() {
  return (
    <Canvas shadows>
      <Suspense fallback={<Loader />}>
        <spotLight
          position={[15, 40, 45]}
          angle={0.3}
          penumbra={0.2}
          intensity={0.25}
        />

        <spotLight
          position={[0, 40, 35]}
          angle={0.3}
          penumbra={0.2}
          intensity={0.2}
        />
        <Triangle
          color="white"
          scale={0.04}
          rotation={[0, 0, Math.PI / 3]}
          position={[0.3, -3, -5]}
        />

        <DavidSculpture />
        <ContactShadows
          position={[0.7, -5.3, 0]}
          opacity={1}
          scale={14}
          blur={2}
          far={6}
        />
      </Suspense>
    </Canvas>
  );
}

export default SculptureScene;