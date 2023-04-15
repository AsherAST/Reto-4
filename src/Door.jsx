import { useTexture } from "@react-three/drei";
import { DoubleSide } from "three";

export default function Cubo() {
  const path = "/static/textures/cubo/";

  const props = useTexture({
    map: path + "madera.jpg",
  });

  return (
    <mesh castShadow={true} rotation-y={Math.PI / 12}>
      <boxGeometry args={[1, 1]} />
      <meshStandardMaterial {...props} side={DoubleSide} />
    </mesh>
  );
}
