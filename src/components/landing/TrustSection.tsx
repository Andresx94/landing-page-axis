import { motion } from "framer-motion";
import { WifiOff, Smartphone, DatabaseBackup, UserCheck } from "lucide-react";

const trustFeatures = [
  {
    icon: WifiOff,
    title: "En tu PC, sin internet",
    description: "Vendes aunque se corte el internet. Tus datos se quedan en tu computadora.",
  },
  {
    icon: Smartphone,
    title: "En la nube, desde el celular",
    description: "Todas tus sucursales en un solo lugar, y tus ventas a mano estés donde estés.",
  },
  {
    icon: DatabaseBackup,
    title: "Respaldo automático",
    description: "Una copia de seguridad cada día, y puedes exportar tus ventas y productos cuando quieras.",
  },
  {
    icon: UserCheck,
    title: "Permisos por usuario",
    description: "Cada vendedor con su usuario: vende y carga, pero no edita ni borra. Cada venta queda con su nombre.",
  },
];

const TrustSection = () => {
  return (
    <section id="tus-datos" className="py-32 bg-background relative overflow-hidden scroll-mt-20">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            Tus datos
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-medium mb-6">
            Tus datos, <span className="text-gradient-gold">donde tú decidas</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            En tu computadora o en la nube: tus ventas, clientes y productos siempre protegidos y bajo tu control.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {trustFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group p-6 rounded-lg border border-border/50 bg-surface-1 hover:bg-surface-2 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:shadow-gold-sm transition-shadow duration-300">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-serif text-lg font-medium mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
