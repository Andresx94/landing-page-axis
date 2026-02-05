import { motion } from "framer-motion";
import { Check } from "lucide-react";

const benefits = [
  "Productos compuestos con consumo automático de componentes",
  "Sucursales y almacén central sincronizados en tiempo real",
  "Control de accesos por rol: administrador, ventas, bodega",
  "Marca blanca que refleja tu identidad, no la nuestra",
];

const SolutionSection = () => {
  return (
    <section className="py-32 bg-surface-1 relative overflow-hidden">
      {/* Gold accent glow */}
      <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/5 blur-3xl" />
      
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
              La solución
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-medium mb-6">
              Claridad.
              <br />
              <span className="text-gradient-gold">Control. Propiedad.</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              AXIS integra ventas, inventario, clientes y gastos en una plataforma 
              que entiende la complejidad de tu operación y la presenta con simplicidad.
            </p>

            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground">{benefit}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Decorative elements */}
              <div className="absolute inset-4 rounded-2xl border border-primary/20 bg-surface-2" />
              <div className="absolute inset-8 rounded-xl border border-border bg-surface-3 shadow-gold-sm" />
              
              {/* Central element */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 rounded-2xl bg-gradient-gold flex items-center justify-center shadow-gold animate-float">
                  <span className="font-serif text-4xl font-bold text-primary-foreground">A</span>
                </div>
              </div>

              {/* Orbiting dots */}
              <div className="absolute top-1/4 right-1/4 w-3 h-3 rounded-full bg-primary animate-pulse" />
              <div className="absolute bottom-1/3 left-1/4 w-2 h-2 rounded-full bg-primary/60" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
