import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";
import sculpture from "../assets/DavidSculpture/source/scene.gltf";
const DavidSculpture = () => {
  const obj = useLoader(GLTFLoader, sculpture);

  return obj && <primitive object={obj} />;
};

export default DavidSculpture;
