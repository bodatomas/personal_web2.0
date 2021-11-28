import {useRef} from 'react';
import S_polymodel from './polymodel.module.scss';

import { Canvas, useFrame } from '@react-three/fiber';

const Box = () => {
    const mesh = useRef(null);
    useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01))
    return (
        <mesh castShadow ref={mesh}>
            <boxBufferGeometry attach='geometry' args={[4,4,4]} />
            <meshStandardMaterial attach='material' />
        </mesh>
    )
}

const PolyModel = () => {
    return (
        <>
            <Canvas shadowMap className={S_polymodel.model_canvas} colorManagement camera={{position: [-5,2,10], fov: 80}}>
                <ambientLight intensity={0.3} />
                <directionalLight 
                    castShadow
                    position={[0,10,0]}
                    intensity={4}
                    shadow-mapSize-width={1024}
                    shadow-mapSize-height={1024}
                    shadow-camera-far={50}
                    shadow-camera-left={-10}
                    shadow-camera-right={-10}
                    shadow-camera-top={10}
                    shadow-camera-bottom={-10}
                />

                <group>
                    <mesh 
                        receiveShadow
                        rotation={[-Math.PI / 2, 0 ,0]} 
                        position={[0,-4,0]}
                    >
                        <planeBufferGeometry attach="geometry" args={[100,100]} />
                        <meshStandardMaterial attach="material" color={"black"} />
                    </mesh>
                </group>

                <Box />
            </Canvas>
        </>
    )
}

export default PolyModel;