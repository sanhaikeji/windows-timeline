import React, { useRef, useMemo, useEffect } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { useTimelineStore } from './useTimelineStore';

export const ParallaxParticles = () => {
  const groupRef = useRef<THREE.Group>(null);
  const { activeEra, particleCount } = useTimelineStore();

  // Era color mapping
  const eraColors = useMemo(() => ({
    dos: new THREE.Color('#0a0a0a'),
    '95': new THREE.Color('#008080'),
    '98': new THREE.Color('#4682b4'),
    me: new THREE.Color('#4169e1'),
    xp: new THREE.Color('#228b22'),
    vista: new THREE.Color('#1ba1e2'),
    '7': new THREE.Color('#436eee'),
    '8': new THREE.Color('#00bcf2'),
    '10': new THREE.Color('#0078d4'),
    '11': new THREE.Color('#0067c0')
  }), []);

  // Create particle system
  useEffect(() => {
    if (!groupRef.current) return;

    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);

    const currentColor = eraColors[activeEra] || eraColors.dos;

    for (let i = 0; i < particleCount; i++) {
      // Random positions in a sphere
      const radius = 50 + Math.random() * 100;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);

      // Color with variation
      const variation = 0.8 + Math.random() * 0.4;
      colors[i * 3] = currentColor.r * variation;
      colors[i * 3 + 1] = currentColor.g * variation;
      colors[i * 3 + 2] = currentColor.b * variation;

      // Random sizes
      sizes[i] = Math.random() * 3 + 1;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    const material = new THREE.PointsMaterial({
      size: 2,
      vertexColors: true,
      transparent: true,
      opacity: 0.6,
      sizeAttenuation: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });

    const points = new THREE.Points(geometry, material);
    groupRef.current.add(points);

    return () => {
      groupRef.current?.remove(points);
      geometry.dispose();
      material.dispose();
    };
  }, [particleCount, activeEra, eraColors]);

  // Animate particles
  useFrame((state) => {
    if (!groupRef.current) return;

    const time = state.clock.getElapsedTime();
    const points = groupRef.current.children[0] as THREE.Points;
    
    if (points) {
      points.rotation.y = time * 0.001;
      points.rotation.x = time * 0.0005;

      // Gentle floating motion
      const positions = points.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        const originalY = positions[i * 3 + 1];
        positions[i * 3 + 1] = originalY + Math.sin(time + i) * 0.5;
      }
      points.geometry.attributes.position.needsUpdate = true;
    }

    // Mouse parallax
    const mouseX = (state.mouse.x * 0.5 + 0.5) * 2 - 1;
    const mouseY = (state.mouse.y * 0.5 + 0.5) * 2 - 1;
    
    groupRef.current.position.x = mouseX * 5;
    groupRef.current.position.y = mouseY * 5;
  });

  return groupRef;
};