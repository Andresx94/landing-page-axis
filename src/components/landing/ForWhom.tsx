import { motion } from "framer-motion";
import { Cctv, Wrench, Truck, Beef, ShoppingBasket, Building2 } from "lucide-react";

const audiences = [
  {
    icon: Cctv,
    title: "Electrónica y cámaras",
    description: "Cada equipo con su número de serie: sabes a quién se vendió y hasta cuándo tiene garantía.",
  },
  {
    icon: Wrench,
    title: "Ferreterías y repuestos",
    description: "Cientos de productos con código de barras, stock por lotes y venta rápida en mostrador.",
  },
  {
    icon: Truck,
    title: "Distribuidoras e instaladores",
    description: "Precios distintos para cliente final, instalador o distribuidor, y proformas profesionales en PDF.",
  },
  {
    icon: Beef,
    title: "Carnicerías, queserías y granel",
    description: "Vende por kilo, gramo o litro: el precio se calcula según lo que pesa cada venta.",
  },
  {
    icon: ShoppingBasket,
    title: "Minimarkets y librerías",
    description: "Ventas del día, productos que se acaban y ganancia real, sin depender del cuaderno.",
  },
  {
    icon: Building2,
    title: "Negocios con sucursales",
    description: "Todas tus tiendas conectadas: si una no tiene stock, ves al instante cuál sí tiene.",
  },
];

const ForWhom = () => {
  return (
    <section id="para-quien" className="py-32 bg-surface-1 scroll-mt-20">
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
            Para tiendas de todo tipo, <span className="text-gradient-gold">de una a varias</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {audiences.map((audience, index) => (
            <motion.div
              key={audience.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className="group text-center p-8 rounded-lg border border-border/50 bg-surface-2 hover:border-primary/30 transition-all duration-500"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:shadow-gold-sm transition-shadow duration-500">
                <audience.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-medium mb-4">{audience.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{audience.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForWhom;
