'use client';

import React, { useRef, useMemo, useEffect } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { Plane } from '@react-three/drei';
import * as THREE from 'three';

interface WallpaperMorphProps {
  fromTexture?: string;
  toTexture?: string;
  progress?: number;
  trigger?: boolean;
}

const vertexShader = `
  varying vec2 vUv;
  
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform sampler2D uFromTexture;
  uniform sampler2D uToTexture;
  uniform float uProgress;
  uniform float uTime;
  uniform vec2 uResolution;
  
  varying vec2 vUv;
  
  void main() {
    vec2 uv = vUv;
    
    // Add subtle distortion effect during transition
    float distortion = sin(uTime * 2.0 + uv.x * 10.0) * 0.02 * uProgress;
    uv.x += distortion;
    uv.y += distortion * 0.5;
    
    // Sample both textures
    vec4 fromColor = texture2D(uFromTexture, uv);
    vec4 toColor = texture2D(uToTexture, uv);
    
    // Smooth interpolation with easing
    float easedProgress = smoothstep(0.0, 1.0, uProgress);
    
    // Mix colors with slight brightness adjustment
    vec4 finalColor = mix(fromColor, toColor, easedProgress);
    finalColor.rgb *= 1.0 + easedProgress * 0.1;
    
    // Add subtle vignette effect
    float vignette = 1.0 - length(uv - 0.5) * 0.3;
    finalColor.rgb *= vignette;
    
    gl_FragColor = finalColor;
  }
`;

export const WallpaperMorph: React.FC<WallpaperMorphProps> = ({
  fromTexture = '/wallpapers/dos-black.webp',
  toTexture = '/wallpapers/95-clouds.webp',
  progress = 0,
  trigger = false
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  
  // Load textures
  const textures = useLoader(THREE.TextureLoader, [fromTexture, toTexture]);
  const [fromMap, toMap] = textures;

  // Configure textures
  useEffect(() => {
    textures.forEach(texture => {
      texture.wrapS = texture.wrapT = THREE.ClampToEdgeWrapping;
      texture.minFilter = THREE.LinearFilter;
      texture.magFilter = THREE.LinearFilter;
    });
  }, [textures]);

  // Create shader material
  const material = useMemo(() => {
    return new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        uFromTexture: { value: fromMap },
        uToTexture: { value: toMap },
        uProgress: { value: 0 },
        uTime: { value: 0 },
        uResolution: { value: new THREE.Vector2(1024, 576) }
      },
      transparent: false
    });
  }, [fromMap, toMap]);

  // Animate progress when triggered
  useEffect(() => {
    if (!materialRef.current) return;

    let animationId: number;
    const startTime = Date.now();
    const duration = 800; // ms

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const currentProgress = Math.min(elapsed / duration, 1);
      
      // Ease out back function
      const c1 = 1.70158;
      const c3 = c1 + 1;
      const eased = 1 + c3 * Math.pow(currentProgress - 1, 3) + c1 * Math.pow(currentProgress - 1, 2);
      
      materialRef.current!.uniforms.uProgress.value = eased;
      
      if (currentProgress < 1) {
        animationId = requestAnimationFrame(animate);
      }
    };

    if (trigger) {
      animate();
    } else {
      materialRef.current.uniforms.uProgress.value = progress;
    }

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [trigger, progress]);

  // Update shader uniforms
  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.getElapsedTime();
    }
  });

  return (
    <Plane
      ref={meshRef}
      args={[16, 9]} // 16:9 aspect ratio
      material={material}
    />
  );
};