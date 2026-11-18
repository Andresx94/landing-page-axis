import { useMemo } from "react";

// Fondo de estrellas doradas que titilan y suben lento (CSS puro, sin JS por cuadro).
// Con "reducir movimiento" activado en el sistema quedan quietas (ver index.css).

// Aleatorio con semilla: las mismas posiciones en cada carga (sin saltos al hidratar)
function seeded(seed: number) {
  return () => {
    seed = (seed * 1664525 + 1013904223) % 4294967296;
    return seed / 4294967296;
  };
}

const Starfield = ({ count = 70 }: { count?: number }) => {
  const stars = useMemo(() => {
    const rand = seeded(7);
    return Array.from({ length: count }, (_, i) => {
      const size = rand() < 0.15 ? 3 : rand() < 0.5 ? 2 : 1;
      return {
        id: i,
        left: `${rand() * 100}%`,
        top: `${rand() * 100}%`,
        size,
        twinkle: `${2.5 + rand() * 4}s`,
        drift: `${18 + rand() * 24}s`,
        delay: `-${rand() * 20}s`,
        opacity: 0.35 + rand() * 0.6,
      };
    });
  }, [count]);

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
          }}
        />
      ))}
    </div>
  );
};

export default Starfield;
