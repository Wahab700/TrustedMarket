'use client';
import { useEffect, useRef } from 'react';

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let animId: number;
    let THREE: typeof import('three');

    const init = async () => {
      THREE = await import('three');

      const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(canvas.offsetWidth, canvas.offsetHeight);

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(60, canvas.offsetWidth / canvas.offsetHeight, 0.1, 1000);
      camera.position.z = 30;

      // Particles
      const count = 1400;
      const positions = new Float32Array(count * 3);
      const colors = new Float32Array(count * 3);

      for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        positions[i3]     = (Math.random() - 0.5) * 100;
        positions[i3 + 1] = (Math.random() - 0.5) * 70;
        positions[i3 + 2] = (Math.random() - 0.5) * 50;
        const isRed = Math.random() > 0.72;
        colors[i3]     = isRed ? 0.91 : 0.2 + Math.random() * 0.1;
        colors[i3 + 1] = isRed ? 0.1  : 0.2 + Math.random() * 0.05;
        colors[i3 + 2] = isRed ? 0.17 : 0.2 + Math.random() * 0.05;
      }

      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geo.setAttribute('color',    new THREE.BufferAttribute(colors, 3));
      const mat = new THREE.PointsMaterial({ size: 0.14, vertexColors: true, transparent: true, opacity: 0.85 });
      const particles = new THREE.Points(geo, mat);
      scene.add(particles);

      // Grid
      const lineMat = new THREE.LineBasicMaterial({ color: 0x1a1a1a, transparent: true, opacity: 0.4 });
      for (let i = -10; i <= 10; i += 2) {
        const hGeo = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(-60, i * 2.5, -8), new THREE.Vector3(60, i * 2.5, -8)]);
        const vGeo = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(i * 6, -40, -8), new THREE.Vector3(i * 6, 40, -8)]);
        scene.add(new THREE.Line(hGeo, lineMat));
        scene.add(new THREE.Line(vGeo, lineMat));
      }

      // Torus rings
      const ringMat = new THREE.LineBasicMaterial({ color: 0xE8192C, transparent: true, opacity: 0.22 });
      const ring1 = new THREE.LineLoop(new THREE.TorusGeometry(10, 0.08, 2, 90), ringMat);
      ring1.position.set(22, 2, -12);
      scene.add(ring1);
      const ring2 = new THREE.LineLoop(new THREE.TorusGeometry(6, 0.06, 2, 60), ringMat.clone());
      ring2.position.set(24, 3, -9);
      ring2.rotation.x = 1.2;
      scene.add(ring2);
      const ring3 = new THREE.LineLoop(new THREE.TorusGeometry(14, 0.04, 2, 100), new THREE.LineBasicMaterial({ color: 0x333333, transparent: true, opacity: 0.15 }));
      ring3.position.set(-20, -5, -20);
      scene.add(ring3);

      let mouseX = 0, mouseY = 0;
      const onMouse = (e: MouseEvent) => {
        mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
        mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
      };
      document.addEventListener('mousemove', onMouse);

      const onResize = () => {
        if (!canvas) return;
        renderer.setSize(canvas.offsetWidth, canvas.offsetHeight);
        camera.aspect = canvas.offsetWidth / canvas.offsetHeight;
        camera.updateProjectionMatrix();
      };
      window.addEventListener('resize', onResize);

      const animate = () => {
        animId = requestAnimationFrame(animate);
        const t = Date.now() * 0.0005;
        particles.rotation.y = t * 0.04 + mouseX * 0.08;
        particles.rotation.x = mouseY * 0.04;
        ring1.rotation.z = t * 0.25;
        ring1.rotation.y = t * 0.08;
        ring2.rotation.x = t * 0.35;
        ring2.rotation.z = t * 0.15;
        ring3.rotation.y = t * 0.05;
        ring3.rotation.x = t * 0.03;
        renderer.render(scene, camera);
      };
      animate();

      return () => {
        document.removeEventListener('mousemove', onMouse);
        window.removeEventListener('resize', onResize);
        cancelAnimationFrame(animId);
        renderer.dispose();
      };
    };

    const cleanup = init();
    return () => { cleanup.then(fn => fn && fn()); };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ zIndex: 0 }}
    />
  );
}
