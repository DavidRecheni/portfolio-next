import { Euler, useFrame, useLoader, Vector3 } from "@react-three/fiber";
import { useMemo, useRef, useState } from "react";
import { Group } from "three";
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader";

interface Props {
  color: string;
  scale: number;
  rotation: Euler;
  position: Vector3;
  [key: string]: any;
}
function Triangle({ color, ...props }: Props) {
  const ref = useRef<Group>(null);
  const [r] = useState(() => Math.random() * 10000);
  useFrame((_) => {
    if (ref?.current?.position)
      return (ref.current.position.y =
        -1.75 + Math.sin(_.clock.elapsedTime + r) / 10);
  });

  const { paths: [path] } = useLoader(SVGLoader, '/assets/triangle.svg') // prettier-ignore
  const geom = useMemo(
    () =>
      SVGLoader.pointsToStroke(
        path.subPaths[0].getPoints(),
        path?.userData?.style
      ),
    []
  );
  return (
    <group ref={ref}>
      <mesh geometry={geom} {...props}>
        <meshBasicMaterial color={color} toneMapped={false} />
      </mesh>
    </group>
  );
}

export default Triangle;
