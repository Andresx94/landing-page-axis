import { motion } from "framer-motion";
import { X, AlertTriangle, Clock } from "lucide-react";

const problems = [
  {
    icon: X,
    title: "Interfaces confusas",
    description: "Sistemas complicados que requieren horas de capacitación y generan errores costosos.",
  },
  {
    icon: AlertTriangle,
    title: "Falta de control",
    description: "Sin visibilidad real sobre quién accede a qué, ni capacidad de auditoría efectiva.",
  },
  {
    icon: Clock,
    title: "Procesos lentos",
    description: "Tareas que deberían tomar segundos consumen minutos valiosos de tu equipo.",
  },
];

const ProblemSection = () => {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" 
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            El problema
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-medium mb-6">
            La realidad de la gestión <br className="hidden md:block" />
            <span className="text-muted-foreground">empresarial tradicional</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="text-center p-6"
            >
              <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center mx-auto mb-6">
                <problem.icon className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="font-serif text-xl font-medium mb-3">{problem.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{problem.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
