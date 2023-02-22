import { Html, useProgress } from "@react-three/drei";

function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="flex flex-col text-white">
        <div className="text-3xl">{Math.round(progress)}%</div>
        <div className="text-lg">loaded</div>
      </div>
    </Html>
  );
}

export default Loader;
