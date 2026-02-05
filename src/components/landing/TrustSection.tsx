import { motion } from "framer-motion";
import { Shield, Key, Lock, Eye } from "lucide-react";

const trustFeatures = [
  {
    icon: Shield,
    title: "Tus Datos, Tu Control",
    description: "Información protegida y accesible solo para quien tú decidas.",
  },
  {
    icon: Key,
    title: "Roles y Permisos",
    description: "Define exactamente qué puede ver y hacer cada miembro de tu equipo.",
  },
  {
    icon: Lock,
    title: "Acceso Seguro",
    description: "Cada usuario con sus credenciales. Sin accesos compartidos ni riesgos.",
  },
  {
    icon: Eye,
    title: "Visibilidad Total",
    description: "Historial de movimientos y acciones para una operación transparente.",
  },
];

const TrustSection = () => {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
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
            Control y accesos
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-medium mb-6">
            Tu negocio, <span className="text-gradient-gold">bajo tu control</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            AXIS te da las herramientas para gestionar quién accede a qué, sin complicaciones técnicas.
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
