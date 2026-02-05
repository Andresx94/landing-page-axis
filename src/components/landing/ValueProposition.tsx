import { motion } from "framer-motion";
import { Layers, GitBranch, Palette } from "lucide-react";

const features = [
  {
    icon: Layers,
    title: "Inventario Inteligente",
    description: "Entiende el consumo real de tus productos, incluyendo componentes como fragancias, frascos y materiales. No solo descuenta ítems.",
  },
  {
    icon: GitBranch,
    title: "Multi-Sucursal Nativo",
    description: "Gestiona varias tiendas y un almacén central desde un solo lugar. Diseñado para crecer contigo.",
  },
  {
    icon: Palette,
    title: "Tu Marca, Tu Sistema",
    description: "AXIS se adapta a tu identidad visual. Tu equipo y clientes lo verán como tu propia plataforma.",
  },
];

const ValueProposition = () => {
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
          <h2 className="font-serif text-4xl md:text-5xl font-medium mb-6">
            Inteligencia operativa, <span className="text-gradient-gold">no solo inventario</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            AXIS fue construido para negocios que necesitan claridad y control real sobre sus operaciones diarias.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative p-8 rounded-lg bg-surface-2 border border-border/50 hover:border-primary/30 transition-all duration-500"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-lg bg-gradient-gold-subtle opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:shadow-gold-sm transition-shadow duration-500">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-serif text-2xl font-medium mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
