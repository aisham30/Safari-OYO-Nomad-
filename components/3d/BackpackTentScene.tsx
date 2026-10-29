"use client";

import React, { useRef, useState, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Html, Float, ContactShadows, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";

export type SceneMode = "backpack" | "transform" | "shelter" | "exploded";

export interface Hotspot {
  id: string;
  position: [number, number, number];
  title: string;
  description: string;
  category: "core" | "shelter" | "sleep";
}

const HOTSPOTS: Hotspot[] = [
  {
    id: "pod",
    position: [0, -0.65, 0.45],
    title: "Nomad Tent Module",
    description: "Detachable 1.2kg self-contained shelter capsule with quick-release nylon buckle release.",
    category: "shelter",
  },
  {
    id: "straps",
    position: [-0.4, 0.2, -0.3],
    title: "Safari Load Harness",
    description: "High-density EVA foam straps engineered by Safari for balanced trekking ergonomics.",
    category: "core",
  },
  {
    id: "laptop",
    position: [0, 0.5, -0.28],
    title: "Suspended Laptop Sleeve",
    description: "Water-resistant 16-inch compartment isolated from outdoor moisture.",
    category: "core",
  },
  {
    id: "poles",
    position: [0.38, 0, 0.1],
    title: "Aero-Grade Pole Sleeve",
    description: "Reinforced side sleeve holding four-segment anodized aluminium alloy shock-cord poles.",
    category: "shelter",
  },
  {
    id: "fabric",
    position: [0, 0.4, 0.5],
    title: "Technical Ripstop Canvas",
    description: "Proposed lightweight composite fabric balancing packability with UV and wind shielding.",
    category: "shelter",
  },
];

interface ModelProps {
  mode: SceneMode;
  transformProgress: number; // 0 to 1
  highlightedPart: string | null;
  onSelectHotspot?: (hotspot: Hotspot) => void;
  showHotspots: boolean;
}

function SceneContent({ mode, transformProgress, highlightedPart, onSelectHotspot, showHotspots }: ModelProps) {
  const groupRef = useRef<THREE.Group>(null);
  const backpackRef = useRef<THREE.Group>(null);
  const tentRef = useRef<THREE.Group>(null);
  const tentPodRef = useRef<THREE.Group>(null);
  const polesRef = useRef<THREE.Group>(null);

  // Materials
  const materials = useMemo(() => {
    return {
      fabricCharcoal: new THREE.MeshStandardMaterial({
        color: "#212529",
        roughness: 0.85,
        metalness: 0.1,
      }),
      fabricOlive: new THREE.MeshStandardMaterial({
        color: "#3F483D",
        roughness: 0.88,
        metalness: 0.05,
      }),
      safariRed: new THREE.MeshStandardMaterial({
        color: "#D8292F",
        roughness: 0.5,
        metalness: 0.2,
      }),
      oyoRedGlow: new THREE.MeshStandardMaterial({
        color: "#EE2E35",
        roughness: 0.3,
        metalness: 0.1,
        emissive: "#EE2E35",
        emissiveIntensity: 0.25,
      }),
      aluminiumPoles: new THREE.MeshStandardMaterial({
        color: "#C5CBD3",
        roughness: 0.25,
        metalness: 0.85,
      }),
      tentCanopy: new THREE.MeshStandardMaterial({
        color: "#2E3A33",
        roughness: 0.75,
        metalness: 0.15,
        side: THREE.DoubleSide,
      }),
      tentInnerMesh: new THREE.MeshStandardMaterial({
        color: "#181B1E",
        roughness: 0.95,
        transparent: true,
        opacity: 0.8,
        wireframe: false,
      }),
      tentFloor: new THREE.MeshStandardMaterial({
        color: "#111417",
        roughness: 0.9,
        metalness: 0.1,
      }),
      trimBlack: new THREE.MeshStandardMaterial({
        color: "#0F1113",
        roughness: 0.6,
      }),
      highlightGlow: new THREE.MeshStandardMaterial({
        color: "#FF3344",
        emissive: "#FF3344",
        emissiveIntensity: 0.7,
        roughness: 0.2,
      }),
    };
  }, []);

  // Frame animation for smooth interpolation
  useFrame((state, delta) => {
    if (!backpackRef.current || !tentRef.current || !tentPodRef.current || !polesRef.current) return;

    // Target values based on mode & transformProgress
    let targetBackpackY = 0;
    let targetBackpackZ = 0;
    let targetBackpackScale = 1;
    let targetTentScale = 0;
    let targetTentY = -0.5;
    let targetTentZ = 0;
    let targetPodY = -0.65;
    let targetPodZ = 0.25;
    let targetPodScale = 1;
    let targetPolesDeploy = 0;

    if (mode === "backpack") {
      targetBackpackY = 0;
      targetBackpackZ = 0;
      targetBackpackScale = 1;
      targetTentScale = 0.001;
      targetPodY = -0.65;
      targetPodZ = 0.25;
    } else if (mode === "transform") {
      const p = transformProgress;
      // Pod detaches and slides out
      targetPodY = -0.65 + p * 0.4;
      targetPodZ = 0.25 + p * 1.2;
      targetPodScale = 1 - p * 0.5;
      // Poles deploy
      targetPolesDeploy = p;
      // Tent grows out from pod position
      targetTentScale = Math.max(0.001, p * 1.0);
      targetTentY = -0.5 + p * 0.2;
      targetTentZ = p * 0.6;
      // Backpack moves back to gear station
      targetBackpackZ = -p * 1.4;
      targetBackpackScale = 1 - p * 0.15;
    } else if (mode === "shelter") {
      targetBackpackY = -0.5;
      targetBackpackZ = -1.6;
      targetBackpackScale = 0.85;
      targetTentScale = 1;
      targetTentY = -0.5;
      targetTentZ = 0.2;
      targetPodScale = 0.001;
      targetPolesDeploy = 1;
    } else if (mode === "exploded") {
      targetBackpackScale = 1;
      targetTentScale = 0.001;
    }

    // Lerp positions
    backpackRef.current.position.y = THREE.MathUtils.lerp(backpackRef.current.position.y, targetBackpackY, delta * 4);
    backpackRef.current.position.z = THREE.MathUtils.lerp(backpackRef.current.position.z, targetBackpackZ, delta * 4);
    backpackRef.current.scale.setScalar(THREE.MathUtils.lerp(backpackRef.current.scale.x, targetBackpackScale, delta * 4));

    tentRef.current.scale.setScalar(THREE.MathUtils.lerp(tentRef.current.scale.x, targetTentScale, delta * 4));
    tentRef.current.position.y = THREE.MathUtils.lerp(tentRef.current.position.y, targetTentY, delta * 4);
    tentRef.current.position.z = THREE.MathUtils.lerp(tentRef.current.position.z, targetTentZ, delta * 4);

    tentPodRef.current.position.y = THREE.MathUtils.lerp(tentPodRef.current.position.y, targetPodY, delta * 4);
    tentPodRef.current.position.z = THREE.MathUtils.lerp(tentPodRef.current.position.z, targetPodZ, delta * 4);
    tentPodRef.current.scale.setScalar(THREE.MathUtils.lerp(tentPodRef.current.scale.x, targetPodScale, delta * 4));
  });

  const isExploded = mode === "exploded";

  return (
    <group ref={groupRef}>
      {/* ================= BACKPACK ASSEMBLY ================= */}
      <group ref={backpackRef}>
        {/* 1. Main Storage Compartment */}
        <mesh
          position={[0, isExploded ? 0.3 : 0, 0]}
          material={highlightedPart === "main" ? materials.highlightGlow : materials.fabricCharcoal}
          castShadow
          receiveShadow
        >
          <boxGeometry args={[0.7, 1.1, 0.42]} />
        </mesh>

        {/* Safari Red Accent Seam Stripe */}
        <mesh position={[0, isExploded ? 0.3 : 0, 0.215]} material={materials.safariRed}>
          <boxGeometry args={[0.04, 1.05, 0.01]} />
        </mesh>

        {/* 2. Front Technical Organizer Pouch */}
        <mesh
          position={[0, isExploded ? 0.2 : -0.1, isExploded ? 0.6 : 0.25]}
          material={highlightedPart === "laptop" ? materials.highlightGlow : materials.fabricOlive}
          castShadow
        >
          <boxGeometry args={[0.58, 0.65, 0.12]} />
        </mesh>

        {/* 3. Suspended Laptop Compartment (Back Panel side) */}
        <mesh
          position={[0, isExploded ? 0.4 : 0.05, isExploded ? -0.5 : -0.23]}
          material={highlightedPart === "laptop" ? materials.highlightGlow : materials.trimBlack}
        >
          <boxGeometry args={[0.62, 0.95, 0.05]} />
        </mesh>

        {/* 4. Ergonomic Padded Back Panel */}
        <mesh
          position={[0, isExploded ? 0.1 : 0, isExploded ? -0.7 : -0.27]}
          material={highlightedPart === "backpanel" ? materials.highlightGlow : materials.fabricCharcoal}
        >
          <boxGeometry args={[0.55, 0.9, 0.04]} />
        </mesh>

        {/* Air mesh channels on back panel */}
        {[-0.15, 0.15].map((x, i) => (
          <mesh key={i} position={[x, isExploded ? 0.1 : 0, isExploded ? -0.73 : -0.29]} material={materials.trimBlack}>
            <boxGeometry args={[0.16, 0.8, 0.02]} />
          </mesh>
        ))}

        {/* 5. Ergonomic Shoulder Straps */}
        <group position={[0, isExploded ? 0.3 : 0.2, isExploded ? -0.9 : -0.32]}>
          {/* Left Strap */}
          <mesh position={[-0.22, -0.2, 0]} rotation={[0.1, 0, -0.05]} material={materials.trimBlack}>
            <boxGeometry args={[0.1, 0.75, 0.03]} />
          </mesh>
          {/* Right Strap */}
          <mesh position={[0.22, -0.2, 0]} rotation={[0.1, 0, 0.05]} material={materials.trimBlack}>
            <boxGeometry args={[0.1, 0.75, 0.03]} />
          </mesh>
          {/* Sternum Cross Buckle */}
          <mesh position={[0, -0.15, 0.03]} material={materials.safariRed}>
            <boxGeometry args={[0.38, 0.025, 0.02]} />
          </mesh>
        </group>

        {/* 6. Side Compression Straps (Left & Right) */}
        <group>
          {/* Left Straps */}
          <mesh position={[-0.36, isExploded ? 0.6 : 0.25, 0]} material={materials.safariRed}>
            <boxGeometry args={[0.02, 0.03, 0.38]} />
          </mesh>
          <mesh position={[-0.36, isExploded ? 0.4 : -0.15, 0]} material={materials.safariRed}>
            <boxGeometry args={[0.02, 0.03, 0.38]} />
          </mesh>
          {/* Right Straps */}
          <mesh position={[0.36, isExploded ? 0.6 : 0.25, 0]} material={materials.safariRed}>
            <boxGeometry args={[0.02, 0.03, 0.38]} />
          </mesh>
          <mesh position={[0.36, isExploded ? 0.4 : -0.15, 0]} material={materials.safariRed}>
            <boxGeometry args={[0.02, 0.03, 0.38]} />
          </mesh>
        </group>

        {/* 7. Side Modular Pockets / Pole Holsters */}
        <mesh
          position={[isExploded ? 0.65 : 0.38, isExploded ? 0.1 : -0.1, 0]}
          material={highlightedPart === "poles" ? materials.highlightGlow : materials.trimBlack}
        >
          <cylinderGeometry args={[0.07, 0.07, 0.45, 16]} />
        </mesh>
        <mesh
          position={[isExploded ? -0.65 : -0.38, isExploded ? 0.1 : -0.1, 0]}
          material={materials.trimBlack}
        >
          <cylinderGeometry args={[0.07, 0.07, 0.45, 16]} />
        </mesh>

        {/* Folded Aluminium Poles (inside holster) */}
        <group
          ref={polesRef}
          position={[isExploded ? 0.65 : 0.38, isExploded ? 0.5 : 0.1, 0]}
        >
          {[-0.02, 0.02].map((off, idx) => (
            <mesh key={idx} position={[off, 0, off]} material={materials.aluminiumPoles}>
              <cylinderGeometry args={[0.012, 0.012, 0.55, 12]} />
            </mesh>
          ))}
        </group>

        {/* Top Grab Handle & Safari Badge */}
        <mesh position={[0, isExploded ? 0.95 : 0.6, -0.05]} material={materials.trimBlack}>
          <boxGeometry args={[0.2, 0.04, 0.03]} />
        </mesh>
        <mesh position={[0, isExploded ? 0.38 : 0.08, isExploded ? 0.68 : 0.32]} material={materials.oyoRedGlow}>
          <boxGeometry args={[0.14, 0.04, 0.01]} />
        </mesh>
      </group>

      {/* ================= NOMAD CORE TENT POD (Detachable lower pod) ================= */}
      <group ref={tentPodRef}>
        <mesh
          position={[0, 0, 0]}
          rotation={[0, 0, Math.PI / 2]}
          material={highlightedPart === "pod" ? materials.highlightGlow : materials.fabricOlive}
          castShadow
        >
          <cylinderGeometry args={[0.18, 0.18, 0.68, 20]} />
        </mesh>
        {/* Quick Release Webbing Clamps */}
        {[-0.2, 0.2].map((x, idx) => (
          <mesh key={idx} position={[x, 0, 0.02]} rotation={[0, 0, Math.PI / 2]} material={materials.safariRed}>
            <cylinderGeometry args={[0.185, 0.185, 0.04, 20]} />
          </mesh>
        ))}
      </group>

      {/* ================= DEPLOYED TENT (STATE C & TRANSFORMATION) ================= */}
      <group ref={tentRef} position={[0, -0.5, 0]}>
        {/* 1. Ground Tub Floor (Waterproof Perimeter) */}
        <mesh position={[0, 0.02, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow material={materials.tentFloor}>
          <planeGeometry args={[1.5, 2.4]} />
        </mesh>

        {/* Perimeter Tub Rim */}
        <mesh position={[0, 0.06, 0]} material={materials.trimBlack}>
          <boxGeometry args={[1.52, 0.08, 2.42]} />
        </mesh>

        {/* 2. Geodesic / Tunnel Canopy Fabric */}
        <mesh position={[0, 0.55, 0]} rotation={[0, 0, -Math.PI / 2]} material={materials.tentCanopy} castShadow>
          <cylinderGeometry
            args={[0.68, 0.75, 2.3, 16, 1, false, 0, Math.PI]}
          />
        </mesh>

        {/* 3. Cross Frame Arched Poles (Structural Skeleton) */}
        {/* Arch 1 - Front */}
        <mesh position={[0, 0.56, 0.7]} rotation={[0, 0, -Math.PI / 2]} material={materials.aluminiumPoles}>
          <torusGeometry args={[0.76, 0.016, 8, 24, Math.PI]} />
        </mesh>
        {/* Arch 2 - Center */}
        <mesh position={[0, 0.58, 0]} rotation={[0, 0, -Math.PI / 2]} material={materials.aluminiumPoles}>
          <torusGeometry args={[0.77, 0.016, 8, 24, Math.PI]} />
        </mesh>
        {/* Arch 3 - Rear */}
        <mesh position={[0, 0.52, -0.7]} rotation={[0, 0, -Math.PI / 2]} material={materials.aluminiumPoles}>
          <torusGeometry args={[0.73, 0.016, 8, 24, Math.PI]} />
        </mesh>

        {/* Ridge Pole along apex */}
        <mesh position={[0, 1.34, 0]} rotation={[Math.PI / 2, 0, 0]} material={materials.aluminiumPoles}>
          <cylinderGeometry args={[0.014, 0.014, 2.32, 12]} />
        </mesh>

        {/* 4. Entrance Door Flap (Vestibule Zipper) */}
        <mesh position={[0, 0.55, 1.15]} material={materials.safariRed}>
          <boxGeometry args={[0.03, 1.0, 0.02]} />
        </mesh>

        {/* Entry Mesh Window */}
        <mesh position={[0.2, 0.65, 1.13]} material={materials.tentInnerMesh}>
          <planeGeometry args={[0.35, 0.6]} />
        </mesh>

        {/* 5. Apex Roof Ventilation Hood */}
        <mesh position={[0, 1.38, 0.2]} rotation={[0, Math.PI / 4, 0]} material={materials.trimBlack}>
          <coneGeometry args={[0.25, 0.12, 4]} />
        </mesh>

        {/* 6. Reflective Guy-lines & Ground Anchors */}
        {[
          [-0.85, 0.05, 1.1],
          [0.85, 0.05, 1.1],
          [-0.85, 0.05, -1.1],
          [0.85, 0.05, -1.1],
        ].map((pos, i) => (
          <group key={i} position={pos as [number, number, number]}>
            {/* Stake Peg */}
            <mesh material={materials.safariRed} rotation={[0.2, 0, 0.2]}>
              <cylinderGeometry args={[0.01, 0.005, 0.14, 6]} />
            </mesh>
          </group>
        ))}

        {/* Interior Sleeping Mat Preview */}
        <mesh position={[0, 0.05, 0]} material={materials.safariRed}>
          <boxGeometry args={[0.65, 0.04, 1.9]} />
        </mesh>
      </group>

      {/* ================= INTERACTIVE HOTSPOTS ================= */}
      {showHotspots &&
        mode !== "transform" &&
        HOTSPOTS.map((spot) => {
          // Adjust hotspot position if in shelter mode
          let pos: [number, number, number] = spot.position;
          if (mode === "shelter") {
            if (spot.id === "fabric") pos = [0, 0.3, 0.4];
            if (spot.id === "poles") pos = [0.75, 0.1, 0];
            if (spot.id === "pod") pos = [0, -0.4, -1.4];
            if (spot.id === "straps") pos = [-0.3, -0.4, -1.8];
          }

          return (
            <group key={spot.id} position={pos}>
              <Html distanceFactor={4} position={[0, 0, 0]}>
                <button
                  onClick={() => onSelectHotspot && onSelectHotspot(spot)}
                  className="group relative flex items-center justify-center p-1 focus:outline-none"
                  title={spot.title}
                >
                  <span className="absolute inline-flex h-6 w-6 animate-ping rounded-full bg-[#EE2E35] opacity-50"></span>
                  <span className="relative flex h-5 w-5 items-center justify-center rounded-full border border-white/60 bg-[#D8292F] text-[10px] font-bold text-white shadow-lg transition-transform hover:scale-125">
                    +
                  </span>
                  <span className="pointer-events-none absolute left-7 whitespace-nowrap rounded border border-white/10 bg-[#171A1D]/90 px-2 py-0.5 text-[10px] uppercase tracking-wider text-[#F5F3EE] opacity-0 backdrop-blur-md transition-opacity group-hover:opacity-100">
                    {spot.title}
                  </span>
                </button>
              </Html>
            </group>
          );
        })}
    </group>
  );
}

export default function BackpackTentScene({
  mode,
  transformProgress = 0,
  highlightedPart = null,
  onSelectHotspot,
  showHotspots = true,
}: {
  mode: SceneMode;
  transformProgress?: number;
  highlightedPart?: string | null;
  onSelectHotspot?: (hotspot: Hotspot) => void;
  showHotspots?: boolean;
}) {
  const controlsRef = useRef<any>(null);

  const resetCamera = () => {
    if (controlsRef.current) {
      controlsRef.current.reset();
    }
  };

  return (
    <div className="relative h-full w-full">
      <Canvas
        shadows
        className="h-full w-full bg-gradient-to-b from-[#121417] via-[#171A1D] to-[#121417]"
        gl={{ antialias: true, alpha: true }}
      >
        <PerspectiveCamera makeDefault position={[2.4, 1.2, 2.8]} fov={42} />
        
        {/* Studio Lighting Rig */}
        <ambientLight intensity={0.7} />
        
        {/* Key Light */}
        <directionalLight
          position={[5, 6, 4]}
          intensity={1.4}
          castShadow
          shadow-mapSize={2048}
          shadow-bias={-0.0001}
        />
        
        {/* Soft Cool Fill Light */}
        <directionalLight position={[-4, 3, -2]} intensity={0.6} color="#A0B0C0" />
        
        {/* Safari Warm Red Accent Rim Light */}
        <pointLight position={[1, -1, -3]} intensity={0.8} color="#D8292F" distance={6} />
        <pointLight position={[-2, 1, 3]} intensity={0.5} color="#536B54" distance={5} />

        {/* Scene Model */}
        <Float speed={mode === "shelter" ? 0 : 1} rotationIntensity={0.1} floatIntensity={0.15}>
          <SceneContent
            mode={mode}
            transformProgress={transformProgress}
            highlightedPart={highlightedPart}
            onSelectHotspot={onSelectHotspot}
            showHotspots={showHotspots}
          />
        </Float>

        {/* Ground Floor Shadow Plane */}
        <ContactShadows
          position={[0, -0.92, 0]}
          opacity={0.65}
          scale={7}
          blur={2.4}
          far={3}
          resolution={512}
          color="#000000"
        />

        {/* Interactive Orbit Controls */}
        <OrbitControls
          ref={controlsRef}
          enablePan={false}
          minDistance={1.6}
          maxDistance={5.5}
          maxPolarAngle={Math.PI / 2 + 0.05} // don't go below ground
          dampingFactor={0.05}
          autoRotate={false}
        />
      </Canvas>
    </div>
  );
}
