import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import DavidSculpture from "./components/DavidSculpture";

function Box(props: JSX.IntrinsicElements["mesh"]) {
  const mesh = useRef<THREE.Mesh>(null!);
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  useFrame((state, delta) => (mesh.current.rotation.x += 0.01));
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
}
const HomeContainer = () => {
  return (
    <div className="max-w-4xl w-screen h-screen my-2 sm:my-8 px-4 dark:text-github-gray">
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[0, 0, 0]} />
        <DavidSculpture />
      </Canvas>
    </div>
  );
};

export default HomeContainer;