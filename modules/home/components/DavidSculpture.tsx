import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";
const DavidSculpture = () => {
  const obj = useLoader(GLTFLoader, "./Model/scene.gltf");
  return obj && <primitive object={obj} position={[0, 0, 0]} />;
};

export default DavidSculpture;
