import { ContactShadows } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import DavidSculpture from "./components/DavidSculpture";
import Loader from "./components/Loader";
import Triangle from "./components/Triangle";
const HomeContainer = () => {
  return (
    <div className="h-screen flex flex-col items-center dark:text-github-gray ">
      <h1 className="absolute text-white font-['Abhaya\\Libre'] mt-20 text-6xl ">
        Deiv.re
      </h1>
      <Canvas shadows>
        <Suspense fallback={<Loader />}>
          <spotLight
            position={[15, 40, 45]}
            angle={0.3}
            penumbra={0.2}
            intensity={0.2}
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
    </div>
  );
};

export default HomeContainer;
