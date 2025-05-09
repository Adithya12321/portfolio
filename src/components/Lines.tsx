import { Edges, OrbitControls } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useEffect, useRef } from "react"
import * as THREE from "three"


const Lines = () => {
    const boxR = useRef<THREE.Mesh>(null);
   
  return (
    
    <>
        <OrbitControls />
        <ambientLight />
        <pointLight position={[0, 10, 10]} />
        <mesh ref={boxR}>
            <boxGeometry args={[1,1,1]} />
            <meshStandardMaterial />
            <Edges color="black"/>
        </mesh>
    </>
  )
}

export default Lines