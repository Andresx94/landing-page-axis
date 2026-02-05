import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Conecta tu negocio",
    description: "Configura tus productos, sucursales y usuarios. Sin implementaciones largas ni capacitaciones extensas.",
  },
  {
    number: "02",
    title: "Personaliza tu sistema",
    description: "Ajusta roles, permisos y la identidad visual. AXIS se adapta a cómo trabajas, no al revés.",
  },
  {
    number: "03",
    title: "Opera con claridad",
    description: "Ventas, inventario y operaciones centralizadas. Información precisa para decisiones informadas.",
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
            De una tienda a varias, <span className="text-gradient-gold">sin complicaciones</span>
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
