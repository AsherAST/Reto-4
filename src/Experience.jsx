import { OrbitControls, SpotLight } from "@react-three/drei";
import { useHelper } from "@react-three/drei";
import { Perf } from "r3f-perf";
import Door from "./Door";
import Floor from "./Floor";
import { useRef } from "react";
import {
  DirectionalLightHelper,
  HemisphereLightHelper,
  SpotLightHelper,
} from "three";

export default function Experience() {
  const directionalLightRef = useRef();
  const hemisphereLightRef = useRef();
  const rectareaLightRef = useRef();
  const spotLightRef = useRef();
  // useHelper(directionalLightRef, DirectionalLightHelper, 1)
  //useHelper(hemisphereLightRef, HemisphereLightHelper, 1)
  //useHelper(spotLightRef,SpotLightHelper, 1)

  return (
    <>
      <Perf position="top-left" />

      <OrbitControls makeDefault />
{/*
      <directionalLight
        ref={directionalLightRef}
        castShadow
        position={[2, 4, -6]}
        intensity={1}
      />
      <hemisphereLight
        ref={hemisphereLightRef}
        castShadow
        position={[0, 5, 0]}
        intensity={1}
      />
      <spotLight
        ref={spotLightRef}
        castShadow
        position={[2, 4, 6]}
        intensity={1}
      /> */}
      <rectAreaLight
        ref={rectareaLightRef}
        castShadow
        position={[2, 5, 2]}
        intensity={1}
      /> 
      <ambientLight intensity={0.5} />
      <Door />
      <Floor />
    </>
  );
}
