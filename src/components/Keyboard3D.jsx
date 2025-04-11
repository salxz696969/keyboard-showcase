import React, { useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { Link } from "react-router-dom";

// Responsive Keyboard component
function Keyboard() {
    const { scene } = useGLTF("/assets/three-d/hyperx_alloy_origins_60_rgb_mechanical_keyboard_gltf/key2.gltf", true);
    const [scale, setScale] = useState(16);
    const [position, setPosition] = useState([0, 0, 0]);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;

            if (width < 768) {
                setScale(8); // Smaller scale for phones
                setPosition([0, -0.5, 0]);
            } else if (width < 1024) {
                setScale(12); // Medium scale for tablets
                setPosition([0, -0.25, 0]);
            } else {
                setScale(16); // Full scale for desktops
                setPosition([0, 0, 0]);
            }
        };

        handleResize(); // Run on mount
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Initial angle
    scene.rotation.x = 0.5;

    // Rotation animation
    useFrame(() => {
        scene.rotation.y += 0.002;
    });

    return <primitive object={scene} scale={scale} position={position} />;
}

// Canvas + container
function Keyboard3D() {
    return (
        <div className="w-full h-screen relative overflow-hidden">
            <a href="#" className="absolute top-4 left-4 z-10">
                <img src="/images/close.png" alt="close" className="w-[40px] sm:w-[50px]" />
            </a>

            <Link to="/" className="absolute top-4 left-4 z-10">
                <img src="/images/close.png" alt="close" className="w-[40px] sm:w-[50px]" />
            </Link>
            <Canvas
                className="w-full h-full"
                style={{ backgroundColor: "transparent" }}
            >
                <ambientLight intensity={1} />
                <spotLight position={[10, 10, 10]} intensity={1} />
                <Keyboard />
            </Canvas>
        </div>
    );
}

export default Keyboard3D;
