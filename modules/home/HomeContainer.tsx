import { Cloud, Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import DavidSculpture from "./components/DavidSculpture";
import Loader from "./components/Loader";
const HomeContainer = () => {
  return (
    <div className="max-w-4xl w-screen h-screen my-2 sm:my-8 px-4 dark:text-github-gray">
      <Canvas>
        <Suspense fallback={<Loader />}>
          <pointLight position={[20, 10, 20]} intensity={0.5} />
          <DavidSculpture />
          <OrbitControls />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default HomeContainer;
