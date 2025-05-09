import { RoundedBox } from "@react-three/drei"
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react"
import * as THREE from "three";

export const RenderStars = () => {
    const starRef = useRef<THREE.Mesh>(null);
    const [spin,setSpin] = useState(false);
    useFrame(() => {
        if (starRef.current) {
            starRef.current.position.x += 0.01;
        }
    })
  return (
    <mesh ref={starRef} onClick={() => setSpin(!spin)}>
        <boxGeometry args={[1,0.05,0.01]}/>
        <meshBasicMaterial color="white"/>
    </mesh>
  )
}
