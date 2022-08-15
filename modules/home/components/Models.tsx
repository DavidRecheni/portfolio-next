import React from "react";
import DavidSculpture from "./DavidSculpture";
import Triangle from "./Triangle";
import dynamic from "next/dynamic";

const PostProcessingDynamic = dynamic(() => import("./PostProcessing"), {
  ssr: false,
});

const Models = () => {
  return (
    <>
      <Triangle
        scale={0.025}
        rotation={[0, 0, Math.PI / 3]}
        position={[0, -4.5, -5]}
      />
      <DavidSculpture scale={0.8} position={[-1.5, -4, -3.5]} />
      <PostProcessingDynamic />
    </>
  );
};

export default Models;
