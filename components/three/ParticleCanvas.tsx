'use client';
import { useEffect, useRef } from 'react';

interface Props {
  color?: number;
  count?: number;
  opacity?: number;
}

export default function ParticleCanvas({ color = 0xE8192C, count = 500, opacity = 0.5 }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    let animId: number;

    const init = async () => {
      const THREE = await import('three');
      const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      const setSize = () => {
        const w = canvas.parentElement?.offsetWidth || window.innerWidth;
        const h = canvas.parentElement?.offsetHeight || window.innerHeight;
        renderer.setSize(w, h);
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
      };

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(70, 1, 0.1, 1000);
      camera.position.z = 20;
      setSize();

      const pos = new Float32Array(count * 3);
      for (let i = 0; i < count; i++) {
        pos[i * 3]     = (Math.random() - 0.5) * 60;
        pos[i * 3 + 1] = (Math.random() - 0.5) * 40;
        pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
      }
      const g = new THREE.BufferGeometry();
      g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
      const m = new THREE.PointsMaterial({ color, size: 0.12, transparent: true, opacity });
      scene.add(new THREE.Points(g, m));

      const loop = () => {
        animId = requestAnimationFrame(loop);
        scene.rotation.y += 0.0008;
        scene.rotation.x += 0.0003;
        renderer.render(scene, camera);
      };
      loop();

      window.addEventListener('resize', setSize);
      return () => {
        window.removeEventListener('resize', setSize);
        cancelAnimationFrame(animId);
        renderer.dispose();
      };
    };

    const cleanup = init();
    return () => { cleanup.then(fn => fn && fn()); };
  }, [color, count, opacity]);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }} />;
}
