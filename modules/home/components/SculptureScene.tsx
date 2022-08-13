import { ContactShadows } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import DavidSculpture from "./DavidSculpture";
import Loader from "./Loader";
import Triangle from "./Triangle";

const PostProcessingDynamic = dynamic(() => import("./PostProcessing"), {
  ssr: false,
});

function SculptureScene() {
  return (
    <Canvas shadows>
      <hemisphereLight intensity={0.2} color="#eaeaea" groundColor="black" />

      <spotLight
        position={[25, 0, -35]}
        angle={0.3}
        penumbra={0.2}
        intensity={1.25}
      />

      <Suspense fallback={<Loader />}>
        <Triangle
          scale={0.025}
          rotation={[0, 0, Math.PI / 3]}
          position={[0, -4.5, -5]}
        />
        <DavidSculpture scale={0.8} position={[-1.5, -4, -3.5]} />
        <PostProcessingDynamic />
      </Suspense>
    </Canvas>
  );
}

export default SculptureScene;
