import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { useLoader, Vector3 } from "@react-three/fiber";
import { TextureLoader } from "three";

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

  return (
    <mesh position={position} scale={scale} castShadow receiveShadow>
      <primitive object={obj} />;
      <meshStandardMaterial attach="material" map={texture} />
    </mesh>
  );
};

export default DavidSculpture;
