import { Edges } from "@react-three/drei"
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

const RenderCube = () => {
    const cubeRef = useRef<THREE.Mesh>(null);
    useFrame(() => {
        if (cubeRef.current) {
            cubeRef.current.rotation.x += 0.009;
            cubeRef.current.rotation.z += 0.009;
        }
    })
  return (
    <mesh ref={cubeRef}>
        <boxGeometry args={[3,3,3]} />
        <meshBasicMaterial color="#1E1E1E"/>
        <Edges />
    </mesh>
  )
}

export default RenderCube