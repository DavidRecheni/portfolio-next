import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

const DavidSculpture = () => {
  const [texture, occlusion] = useLoader(TextureLoader, [
    "./assets/DavidSculpture/material0_normal.jpg",
    "./assets/DavidSculpture/material0_occlusion.jpg",
  ]);
  const obj = useLoader(OBJLoader, "./assets/DavidSculpture/rapid.obj");

  return (
    <mesh position={[0, -4, -3.5]} castShadow receiveShadow>
      <primitive object={obj} />;
      <meshStandardMaterial attach="material" map={texture} />
    </mesh>
  );
};

export default DavidSculpture;
