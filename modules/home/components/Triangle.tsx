import { Euler, useFrame, useLoader, Vector3 } from "@react-three/fiber";
import { useMemo, useRef, useState } from "react";
import { Group } from "three";
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader";

interface Props {
  scale: number;
  rotation: Euler;
  position: Vector3;
  [key: string]: any;
}
function Triangle(props: Props) {
  const {
    paths: [path],
  } = useLoader(SVGLoader, "/assets/triangle.svg");

  const geom = useMemo(
    () =>
      SVGLoader.pointsToStroke(path.subPaths[0].getPoints(), {
        ...path?.userData?.style,
        strokeWidth: 70,
        strokeColor: "rgb(255)",
      }),
    []
  );

  return (
    <group>
      <mesh geometry={geom} {...props}>
        <meshBasicMaterial />
      </mesh>
    </group>
  );
}

export default Triangle;
