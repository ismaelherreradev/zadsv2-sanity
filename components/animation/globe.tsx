import createGlobe from 'cobe';
import { useSpring } from 'framer-motion';
import { useEffect, useRef } from 'react';

export default function Globe() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const r = useSpring(0, { restDelta: 1e-4, restSpeed: 1e-4 });

  useEffect(() => {
    let phi = 0;

    const globe = createGlobe(canvasRef.current as HTMLCanvasElement, {
      devicePixelRatio: 2,
      width: 800 * 2,
      height: 800 * 2,
      phi: 0,
      dark: 1,
      theta: 0.3,
      diffuse: 2,
      mapSamples: 2e4,
      mapBrightness: 20,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
      markers: [
        // longitude latitude
        // { location: [37.7595, -122.4367], size: 0.03 },
        // { location: [40.7128, -74.006], size: 0.1 },
      ],
      onRender: (state) => {
        // Called on every animation frame.
        // `state` will be an empty object, return updated params.
        state.phi = phi + r.get();
        phi += 1 / 200;
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <canvas
      className="absolute -right-72 -top-48 z-10 aspect-square h-full w-auto overflow-hidden rounded-xl mix-blend-screen md:rounded-2xl lg:rounded-3xl"
      ref={canvasRef}
      style={{ width: 800, height: 800, maxWidth: '100%' }}
    />
  );
}
