import { motion } from "framer-motion";
import { PremiumButton } from "@/components/ui/premium-button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-radial-gold opacity-30 blur-3xl" />
      <div className="absolute top-20 right-20 w-2 h-2 rounded-full bg-primary animate-pulse-gold" />
      <div className="absolute bottom-40 left-32 w-1 h-1 rounded-full bg-primary/60" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-surface-1"
          >
            <span className="text-sm text-muted-foreground">
              Gestión operativa de alto nivel
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight leading-[1.1]"
          >
            Tu operación.
            <br />
            <span className="text-gradient-gold">Tu marca. Tu sistema.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed"
          >
            AXIS centraliza ventas, inventario, clientes y operaciones multi-sucursal 
            en un sistema inteligente que se adapta a tu identidad.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <PremiumButton size="lg" className="group">
              Solicitar demo personalizada
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </PremiumButton>
            <PremiumButton variant="outline" size="lg">
              Conocer la plataforma
            </PremiumButton>
          </motion.div>

          {/* Powered by */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="text-sm text-muted-foreground/60 pt-4"
          >
            Powered by AXIS
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
