import { useState } from "react";
import { motion } from "framer-motion";
import { Package, Scale, Monitor, Cloud, Infinity as InfinityIcon, Repeat, MessageCircle, Wrench, type LucideIcon } from "lucide-react";
import { PremiumButton } from "@/components/ui/premium-button";
import { whatsappUrl } from "@/lib/links";

// "Arma tu AXIS": el mismo sistema base, combinando cómo vende, dónde trabaja y cómo se paga.
// El visitante elige una opción por fila y el WhatsApp sale con su combinación ya escrita.

interface Option {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  short: string; // para el resumen y el mensaje de WhatsApp
}

interface Choice {
  id: string;
  question: string;
  options: [Option, Option];
}

const CHOICES: Choice[] = [
  {
    id: "venta",
    question: "¿Cómo vendes?",
    options: [
      { id: "unidad", icon: Package, title: "Por unidad", short: "por unidad",
        description: "Productos que se cuentan: con código de barras, número de serie y garantía." },
      { id: "peso", icon: Scale, title: "Por peso o volumen", short: "por peso o volumen",
        description: "Kilos, gramos, litros o metros: carnicerías, queserías, venta a granel." },
    ],
  },
  {
    id: "lugar",
    question: "¿Dónde trabaja?",
    options: [
      { id: "pc", icon: Monitor, title: "En tu computadora", short: "en mi computadora",
        description: "Sin internet. Tus datos se quedan en tu PC, con respaldo diario." },
      { id: "nube", icon: Cloud, title: "En la nube", short: "en la nube",
        description: "Varias sucursales conectadas, stock de todas y acceso desde el celular." },
    ],
  },
  {
    id: "pago",
    question: "¿Cómo lo pagas?",
    options: [
      { id: "vida", icon: InfinityIcon, title: "Licencia de por vida", short: "licencia de por vida",
        description: "Un solo pago y es tuyo. Sin mensualidades." },
      { id: "mensual", icon: Repeat, title: "Suscripción mensual", short: "suscripción mensual",
        description: "Incluye servidor, actualizaciones y soporte." },
    ],
  },
];

const BuildYourAxis = () => {
  const [picked, setPicked] = useState<Record<string, string>>({ venta: "unidad", lugar: "pc", pago: "vida" });

  const summary = CHOICES.map((c) => c.options.find((o) => o.id === picked[c.id])!.short);
  const message = `Hola, quiero cotizar AXIS: ${summary.join(", ")}.`;

  return (
    <section id="arma-tu-axis" className="py-32 bg-surface-2 relative overflow-hidden scroll-mt-20">
      <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            Arma tu AXIS
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-medium mb-6">
            Un sistema, <span className="text-gradient-gold">a la medida de tu negocio</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Partimos de la misma base y la armamos según cómo trabajas. Elige una opción de cada fila.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {CHOICES.map((choice, row) => (
            <motion.div
              key={choice.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: row * 0.1 }}
            >
              <h3 className="font-serif text-xl font-medium mb-3">{choice.question}</h3>
              <div className="grid sm:grid-cols-2 gap-4" role="radiogroup" aria-label={choice.question}>
                {choice.options.map((option) => {
                  const active = picked[choice.id] === option.id;
                  return (
                    <button
                      key={option.id}
                      type="button"
                      role="radio"
                      aria-checked={active}
                      onClick={() => setPicked((p) => ({ ...p, [choice.id]: option.id }))}
                      className={`flex items-start gap-4 text-left p-5 rounded-lg border transition-all duration-300 ${
                        active
                          ? "border-primary bg-primary/10 shadow-gold-sm"
                          : "border-border/60 bg-surface-1 hover:border-primary/40"
                      }`}
                    >
                      <div className={`w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0 ${active ? "bg-primary/20" : "bg-primary/10"}`}>
                        <option.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium mb-1">{option.title}</div>
                        <p className="text-muted-foreground text-sm leading-relaxed">{option.description}</p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          ))}

          {/* Resumen + cotización */}
          <div className="rounded-lg border border-primary/30 bg-surface-1 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <div className="text-sm text-muted-foreground mb-1">Tu AXIS</div>
              <div className="font-serif text-xl md:text-2xl">
                <span className="text-gradient-gold">{summary.join(" · ")}</span>
              </div>
            </div>
            <PremiumButton size="lg" asChild>
              <a href={whatsappUrl(message)} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                Pedir cotización
              </a>
            </PremiumButton>
          </div>

          <p className="flex items-center justify-center gap-2 text-muted-foreground text-sm text-center">
            <Wrench className="w-4 h-4 text-primary flex-shrink-0" />
            ¿Necesitas algo más específico? También desarrollamos funciones a medida para tu negocio.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BuildYourAxis;
