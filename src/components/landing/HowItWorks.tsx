import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Conecta",
    description: "Integra tu negocio en minutos. Sin configuraciones complejas ni largas implementaciones.",
  },
  {
    number: "02",
    title: "Configura",
    description: "Personaliza permisos, flujos y alertas según las necesidades específicas de tu operación.",
  },
  {
    number: "03",
    title: "Controla",
    description: "Gestiona todo desde un panel centralizado con visibilidad total y control absoluto.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            Cómo funciona
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-medium">
            Tres pasos hacia el <span className="text-gradient-gold">control total</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative flex gap-8 pb-16 last:pb-0"
            >
              {/* Connecting line */}
              {index < steps.length - 1 && (
                <div className="absolute left-[39px] top-20 w-px h-[calc(100%-80px)] bg-gradient-to-b from-primary/50 to-transparent" />
              )}

              {/* Number */}
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-full border border-primary/30 bg-surface-1 flex items-center justify-center">
                  <span className="font-serif text-2xl text-primary font-medium">{step.number}</span>
                </div>
              </div>

              {/* Content */}
              <div className="pt-4">
                <h3 className="font-serif text-2xl font-medium mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed max-w-md">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
