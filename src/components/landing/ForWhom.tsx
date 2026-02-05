import { motion } from "framer-motion";
import { Store, UserCog, Users } from "lucide-react";

const audiences = [
  {
    icon: Store,
    title: "Retail y Perfumerías",
    description: "Negocios con productos compuestos, variantes y necesidad de control preciso de inventario.",
  },
  {
    icon: UserCog,
    title: "Dueños y Administradores",
    description: "Visibilidad completa de la operación, desde ventas hasta gastos, en un solo lugar.",
  },
  {
    icon: Users,
    title: "Equipos de Ventas",
    description: "Interfaz clara para el día a día. Sin curvas de aprendizaje ni procesos complicados.",
  },
];

const ForWhom = () => {
  return (
    <section className="py-32 bg-surface-1">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            Para quién es AXIS
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-medium">
            Diseñado para negocios <span className="text-gradient-gold">que crecen</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {audiences.map((audience, index) => (
            <motion.div
              key={audience.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group text-center p-8 rounded-lg border border-border/50 bg-surface-2 hover:border-primary/30 transition-all duration-500"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:shadow-gold-sm transition-shadow duration-500">
                <audience.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-serif text-2xl font-medium mb-4">{audience.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{audience.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForWhom;
