import { Html, OrbitControls, PerspectiveCamera, View } from "@react-three/drei"
import Lights from "./Lights"
import { Suspense } from "react"
import  Iphone  from "./Iphone"
import * as THREE from 'three'

function ModelView( {index, groupRef, gsapType, controlRef, setRotationSize, size, item} ) {
  return (
    <View
      index = {index}
      id = {gsapType}
      className= {` w-full h-full absolute ${index === 2  ? 'right-[-100%]': "" }` }
    >

    {/* ambient lighting */}
      <ambientLight intensity={0.3} />

      <PerspectiveCamera makeDefault position={[0,0,4]}/>

      <Lights />



      <OrbitControls
        makeDefault
        ref = {controlRef}
        enableZoom = {false}
        enablePan = {false}
        rotateSpeed = {0.4}
        target = {new THREE.Vector3(0,0,0)}
        onEnd={ () => setRotationState(controlRef.current, getAzimuthaAngle())}
        >
      </OrbitControls>

      <group ref= {groupRef} name = {`${index === 1 } ? 'small' : 'large'`} position ={[0, 0, 0]}>

      </group>


      <Suspense fallback={<Html><div>Loading</div></Html>}>
        <Iphone
          scale = {index ===1 ? [ 15, 15 , 15 ] : [ 17, 17 , 17 ] } 
          item = {item} 
          size = {size}
        />
      </Suspense>
    </View>
  )
}

export default ModelView
