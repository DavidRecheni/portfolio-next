import { useFrame, useLoader, Vector3 } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh, TextureLoader } from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";

interface Props {
  scale?: number;
  position?: Vector3;
}
const DavidSculpture = ({ scale, position }: Props) => {
  const [texture, occlusion] = useLoader(TextureLoader, [
    "./assets/DavidSculpture/material0_normal.jpg",
    "./assets/DavidSculpture/material0_occlusion.jpg",
  ]);
  const obj = useLoader(OBJLoader, "./assets/DavidSculpture/rapid.obj");

  const ref = useRef<Mesh>(null);

  useFrame((_) => {
    if (ref?.current?.position)
      return (ref.current.position.y =
        -4.4 + Math.sin(_.clock.elapsedTime) / 8);
  });

  return (
    <mesh position={position} scale={scale} castShadow receiveShadow ref={ref}>
      <primitive object={obj} />;
      <meshStandardMaterial
        attach="material"
        map={texture}
        alphaMap={occlusion}
      />
    </mesh>
  );
};

export default DavidSculpture;
