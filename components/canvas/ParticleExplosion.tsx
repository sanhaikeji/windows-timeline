'use client';

import React, { useRef, useMemo, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface ParticleExplosionProps {
  trigger?: boolean;
  color?: string;
  count?: number;
  onComplete?: () => void;
}

export const ParticleExplosion: React.FC<ParticleExplosionProps> = ({
  trigger = false,
  color = '#ffffff',
  count = 2048,
  onComplete
}) => {
  const pointsRef = useRef<THREE.Points>(null);
  const geometryRef = useRef<THREE.BufferGeometry>(null);
  const materialRef = useRef<THREE.PointsMaterial>(null);
  
  // Particle state arrays
  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const velocities = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    const life = new Float32Array(count);
    
    const colorObj = new THREE.Color(color);
    
    for (let i = 0; i < count; i++) {
      // Initial position at center
      positions[i * 3] = 0;
      positions[i * 3 + 1] = 0;
      positions[i * 3 + 2] = 0;
      
      // Random velocities (8 px/ms initial speed)
      const angle = Math.random() * Math.PI * 2;
      const speed = 8 + Math.random() * 4; // 8-12 px/ms
      const elevation = (Math.random() - 0.5) * Math.PI * 0.5; // -45° to 45°
      
      velocities[i * 3] = Math.cos(angle) * Math.cos(elevation) * speed;
      velocities[i * 3 + 1] = Math.sin(elevation) * speed;
      velocities[i * 3 + 2] = Math.sin(angle) * Math.cos(elevation) * speed;
      
      // Color with variation
      const variation = 0.8 + Math.random() * 0.4;
      colors[i * 3] = colorObj.r * variation;
      colors[i * 3 + 1] = colorObj.g * variation;
      colors[i * 3 + 2] = colorObj.b * variation;
      
      // Random sizes
      sizes[i] = Math.random() * 4 + 2;
      
      // Life (1.2s duration)
      life[i] = 1.0;
    }
    
    return { positions, velocities, colors, sizes, life };
  }, [count, color]);

  // Create geometry and material
  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(particles.positions, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(particles.colors, 3));
    geo.setAttribute('size', new THREE.BufferAttribute(particles.sizes, 1));
    return geo;
  }, [particles]);

  const material = useMemo(() => {
    return new THREE.PointsMaterial({
      size: 3,
      vertexColors: true,
      transparent: true,
      opacity: 1,
      sizeAttenuation: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });
  }, []);

  // Animation state
  const animationState = useRef({
    isActive: false,
    startTime: 0,
    gravity: 0.4, // px/ms²
    damping: 0.98
  });

  // Trigger explosion
  useEffect(() => {
    if (trigger) {
      animationState.current.isActive = true;
      animationState.current.startTime = Date.now();
      
      // Reset particle positions and life
      for (let i = 0; i < count; i++) {
        particles.positions[i * 3] = 0;
        particles.positions[i * 3 + 1] = 0;
        particles.positions[i * 3 + 2] = 0;
        particles.life[i] = 1.0;
      }
      
      if (geometryRef.current) {
        geometryRef.current.attributes.position.needsUpdate = true;
      }
    }
  }, [trigger, count, particles]);

  // Animation loop
  useFrame(() => {
    if (!animationState.current.isActive || !pointsRef.current || !geometryRef.current) return;
    
    const currentTime = Date.now();
    const elapsed = currentTime - animationState.current.startTime;
    const duration = 1200; // 1.2 seconds
    
    if (elapsed >= duration) {
      animationState.current.isActive = false;
      if (onComplete) {
        onComplete();
      }
      return;
    }
    
    const deltaTime = Math.min(elapsed / 1000, 0.016); // Cap at 16ms
    const progress = elapsed / duration;
    
    // Update particles
    for (let i = 0; i < count; i++) {
      // Apply gravity
      particles.velocities[i * 3 + 1] -= animationState.current.gravity * deltaTime * 1000;
      
      // Apply damping
      particles.velocities[i * 3] *= animationState.current.damping;
      particles.velocities[i * 3 + 1] *= animationState.current.damping;
      particles.velocities[i * 3 + 2] *= animationState.current.damping;
      
      // Update position
      particles.positions[i * 3] += particles.velocities[i * 3] * deltaTime;
      particles.positions[i * 3 + 1] += particles.velocities[i * 3 + 1] * deltaTime;
      particles.positions[i * 3 + 2] += particles.velocities[i * 3 + 2] * deltaTime;
      
      // Update life (fade out at the end)
      particles.life[i] = 1.0 - progress;
      
      // Update opacity based on life
      const opacity = particles.life[i] > 0.8 ? 1.0 : particles.life[i] / 0.8;
      particles.colors[i * 3 + 3] = opacity;
    }
    
    // Update geometry
    geometryRef.current.attributes.position.needsUpdate = true;
    geometryRef.current.attributes.color.needsUpdate = true;
    
    // Update material opacity
    if (materialRef.current) {
      materialRef.current.opacity = 1.0 - progress;
    }
  });

  // Store refs
  useEffect(() => {
    geometryRef.current = geometry;
    materialRef.current = material;
  }, [geometry, material]);

  return (
    <points
      ref={pointsRef}
      geometry={geometry}
      material={material}
      position={[0, 0, 0]}
    />
  );
};
