import { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, OrbitControls, Environment, ContactShadows } from '@react-three/drei'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Car = () => {
    const { scene } = useGLTF('/models/car.glb')
    const carRef = useRef()

    useFrame(() => {
        if (carRef.current) {
            carRef.current.rotation.y += 0.003
        }
    })

    return (
        <primitive
            ref={carRef}
            object={scene}
            scale={3}
            position={[0, -1, 0]}
            rotation={[0, Math.PI / 4, 0]}
        />
    )
}
const CarViewer = () => {
    useGSAP(() => {
        gsap.from(".car-title", {
            y: 60,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: "#car-viewer",
                start: "top center",
            }
        })
        gsap.from(".car-subtitle", {
            y: 40,
            opacity: 0,
            duration: 1,
            delay: 0.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: "#car-viewer",
                start: "top center",
            }
        })
    }, [])

    return (
        <section id="car-viewer" className="py-20 bg-black flex flex-col items-center">

            <div className="text-center mb-10 px-5">
                <p className="car-title text-[#00D2BE] font-bold text-sm tracking-widest uppercase mb-4">
                    W14 — 2023
                </p>
                <h2 className="car-title text-white font-bold text-4xl md:text-6xl">
                    Veja de perto.
                </h2>
                <p className="car-subtitle text-white/40 mt-4 text-lg">
                    Arraste para girar.
                </p>
            </div>

            <div className="w-full h-[60vh] md:h-[80vh] max-w-6xl">
                <Canvas
                    camera={{ position: [6, 2, 6], fov: 45 }}
                    gl={{ antialias: true }}
                >
                    <Suspense fallback={null}>

                        <ambientLight intensity={0.5} />
                        <spotLight
                            position={[10, 10, 10]}
                            angle={0.15}
                            penumbra={1}
                            intensity={2}
                            castShadow
                        />
                        <spotLight
                            position={[-10, 5, -10]}
                            angle={0.15}
                            penumbra={1}
                            intensity={1}
                            color="#00D2BE"
                        />

                        <Car />

                        <ContactShadows
                            position={[0, -1.2, 0]}
                            opacity={0.4}
                            scale={20}
                            blur={2}
                        />

                        <Environment preset="city" />

                        <OrbitControls
                            enableZoom={false}
                            enablePan={false}
                            enableRotate={true}
                            minPolarAngle={Math.PI / 2.2}
                            maxPolarAngle={Math.PI / 2.2}
                            autoRotate={false}
                        />

                    </Suspense>
                </Canvas>
            </div>

            <div className="grid grid-cols-3 gap-10 mt-10 px-5">
                {[
                    { label: "Motor", value: "V6 Híbrido" },
                    { label: "Potência", value: "1000cv" },
                    { label: "Peso", value: "798kg" },
                ].map((spec) => (
                    <div key={spec.label} className="text-center">
                        <p className="text-[#00D2BE] font-bold text-xl">{spec.value}</p>
                        <p className="text-white/40 text-sm mt-1">{spec.label}</p>
                    </div>
                ))}
            </div>

        </section>
    )
}

export default CarViewer