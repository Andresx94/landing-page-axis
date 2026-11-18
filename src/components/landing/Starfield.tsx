import { useMemo } from "react";

// Fondo de estrellas doradas: titilan, flotan lento y de vez en cuando cruza una estrella fugaz.
// CSS puro (sin JS por cuadro). Con "reducir movimiento" activado quedan quietas (ver index.css).

// Aleatorio con semilla: las mismas posiciones en cada carga
function seeded(seed: number) {
  return () => {
    seed = (seed * 1664525 + 1013904223) % 4294967296;
    return seed / 4294967296;
  };
}

interface StarfieldProps {
  count?: number;
  shooting?: number; // cuántas estrellas fugaces (0 = ninguna)
  seed?: number;
}

const Starfield = ({ count = 140, shooting = 3, seed = 7 }: StarfieldProps) => {
  const { stars, shooters } = useMemo(() => {
    const rand = seeded(seed);
    const stars = Array.from({ length: count }, (_, i) => {
      const r = rand();
      const size = r < 0.06 ? 3.5 : r < 0.25 ? 2.5 : r < 0.6 ? 1.5 : 1;
      return {
        id: i,
        left: `${rand() * 100}%`,
        top: `${rand() * 100}%`,
        size,
        twinkle: `${1.8 + rand() * 4}s`,
        drift: `${14 + rand() * 18}s`,
        delay: `-${rand() * 30}s`,
        opacity: size > 2 ? 0.9 : 0.3 + rand() * 0.6,
        dx: `${(rand() - 0.5) * 50}px`,
        dy: `${-40 - rand() * 90}px`,
      };
    });
    const shooters = Array.from({ length: shooting }, (_, i) => ({
      id: i,
      left: `${45 + rand() * 55}%`,
      top: `${rand() * 45}%`,
      duration: `${7 + rand() * 6}s`,
      delay: `${1.5 + i * 3.5 + rand() * 2}s`,
    }));
    return { stars, shooters };
  }, [count, shooting, seed]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {stars.map((s) => (
        <span
          key={s.id}
          className="star"
          style={{
            left: s.left,
            top: s.top,
            width: s.size,
            height: s.size,
            opacity: s.opacity,
            animationDuration: `${s.twinkle}, ${s.drift}`,
            animationDelay: `${s.delay}, ${s.delay}`,
            ["--dx" as string]: s.dx,
            ["--dy" as string]: s.dy,
          }}
        />
      ))}
      {shooters.map((s) => (
        <span
          key={`shoot-${s.id}`}
          className="shooting-star"
          style={{ left: s.left, top: s.top, animationDuration: s.duration, animationDelay: s.delay }}
        />
      ))}
    </div>
  );
};

export default Starfield;
