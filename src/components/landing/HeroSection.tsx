import { motion } from "framer-motion";
import { PremiumButton } from "@/components/ui/premium-button";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import { DEMO_URL, WHATSAPP_INFO } from "@/lib/links";
import Starfield from "./Starfield";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-radial-gold opacity-30 blur-3xl" />
      <Starfield />
      
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
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">
              Sin internet o en la nube · Pago único o mensual
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight leading-[1.1]"
          >
            Vende, controla tu stock
            <br />
            <span className="text-gradient-gold">y sabe cuánto ganas.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed"
          >
            AXIS se arma a la medida de tu negocio: vende por unidad, por kilo o por litro,
            en una computadora sin internet o con todas tus sucursales conectadas.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <PremiumButton size="lg" className="group" asChild>
              <a href={DEMO_URL}>
                Probar demo
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </PremiumButton>
            <PremiumButton variant="outline" size="lg" asChild>
              <a href={WHATSAPP_INFO} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                Hablar por WhatsApp
              </a>
            </PremiumButton>
          </motion.div>

          {/* Powered by */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="text-sm text-muted-foreground/60 pt-4"
          >
            La demo abre en tu navegador, con datos de ejemplo. Sin instalar nada.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
