import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as random from 'maath/random'

const StarField = () => {
  const ref = useRef<any>()
  const sphere = random.inSphere(new Float32Array(2000), { radius: 1.5 })
  const mouse = useRef({ x: 0, y: 0 })
  const autoRotation = useRef({ x: 0, y: 0 })

  if (typeof window !== 'undefined') {
    window.onmousemove = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 0.8
      mouse.current.y = (e.clientY / window.innerHeight - 0.5) * 0.8
    }
  }

  useFrame((_state, delta) => {
    if (ref.current) {
      autoRotation.current.x -= delta / 25
      autoRotation.current.y -= delta / 35

      ref.current.rotation.x = autoRotation.current.x + mouse.current.y * 0.3
      ref.current.rotation.y = autoRotation.current.y + mouse.current.x * 0.3
    }
  })

  return (
    <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#a855f7"
        size={0.005}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </Points>
  )
}

const Background3D = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <StarField />
      </Canvas>
    </div>
  )
}

export default Background3D