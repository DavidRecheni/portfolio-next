import { Canvas } from "@react-three/fiber";
import Models from "./Models";

function SculptureScene() {
  return (
    <Canvas shadows>
      <hemisphereLight intensity={0.2} color="#eaeaea" groundColor="black" />

      <spotLight
        position={[25, 0, -35]}
        angle={0.3}
        penumbra={0.2}
        intensity={1.25}
      />

      <Models />
    </Canvas>
  );
}

export default SculptureScene;
