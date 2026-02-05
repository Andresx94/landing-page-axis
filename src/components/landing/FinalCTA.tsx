import { motion } from "framer-motion";
import { PremiumButton } from "@/components/ui/premium-button";
import { ArrowRight } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-32 bg-surface-1 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full bg-primary/10 blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="font-serif text-4xl md:text-6xl font-medium mb-6">
            Tu operación merece <br />
            <span className="text-gradient-gold">un sistema a la altura</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-xl mx-auto">
            Conversemos sobre cómo AXIS puede adaptarse a tu negocio. 
            Sin compromisos, sin procesos automatizados. Una demo personalizada para ti.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <PremiumButton size="lg" className="group min-w-[200px]">
              Solicitar demo
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </PremiumButton>
            <PremiumButton variant="outline" size="lg" className="min-w-[200px]">
              Conocer más
            </PremiumButton>
          </div>

          <p className="text-muted-foreground text-sm mt-8">
            Proceso personalizado • Configuración asistida • Soporte dedicado
          </p>

          <p className="text-muted-foreground/50 text-xs mt-12">
            Construido sobre AXIS
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
