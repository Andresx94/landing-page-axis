import { motion } from "framer-motion";
import { Check } from "lucide-react";

const benefits = [
  "Proformas en PDF (con fotos, plazo y validez) que pasan a venta con un clic",
  "Ventas con adelanto: el cliente paga una parte y el saldo queda registrado",
  "Números de serie y garantía: buscas una serie y sabes a quién se vendió",
  "Precios por tipo de cliente: final, instalador o distribuidor",
  "Vendedores con su propio usuario y permisos",
  "Tu logo y tu nombre en el sistema, los tickets y las proformas",
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
              Más que un punto de venta
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-medium mb-6">
              Todo lo de tu tienda,
              <br />
              <span className="text-gradient-gold">en un solo lugar.</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Además de vender y controlar el stock, AXIS resuelve lo que en una tienda real
              se complica: cotizaciones, adelantos, garantías y clientes con precios distintos.
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
              <div className="absolute inset-4 rounded-2xl border border-primary/30 bg-gradient-gold-subtle" />
              <div className="absolute inset-8 rounded-xl border border-primary/40 bg-primary/5 shadow-gold-sm" />
              
              {/* Central element */}
              <div className="absolute inset-0 flex items-center justify-center p-[10%]">
                <img src={`${import.meta.env.BASE_URL}logo.png`} alt="AXIS" className="w-full h-full object-contain" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
