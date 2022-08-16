import dynamic from "next/dynamic";
import { Suspense } from "react";
import DavidSculpture from "./DavidSculpture";
import Loader from "./Loader";
import Triangle from "./Triangle";

const PostProcessingDynamic = dynamic(() => import("./PostProcessing"), {
  ssr: false,
});

const Models = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Triangle
        scale={0.025}
        rotation={[0, 0, Math.PI / 3]}
        position={[1, -4.5, -5]}
      />
      <DavidSculpture scale={0.8} position={[-1.5, -4, -3.5]} />
      <PostProcessingDynamic />
    </Suspense>
  );
};

export default Models;
