import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { useLoader } from "@react-three/fiber";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";

const DavidSculpture = () => {
  const materials = useLoader(MTLLoader, "./assets/DavidSculpture/rapid.mtl");
  const obj = useLoader(
    OBJLoader,
    "./assets/DavidSculpture/rapid.obj",
    (loader) => {
      materials.preload();
    }
  );
  return <primitive object={obj} />;
};

export default DavidSculpture;
