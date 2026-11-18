import { motion } from "framer-motion";
import { PremiumButton } from "@/components/ui/premium-button";
import { ArrowRight, MessageCircle } from "lucide-react";
import { DEMO_URL, WHATSAPP_INSTALL, WHATSAPP_QUOTE } from "@/lib/links";
import Starfield from "./Starfield";

const FinalCTA = () => {
  return (
    <section className="py-32 bg-surface-1 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full bg-primary/10 blur-3xl" />
      <Starfield count={45} shooting={1} seed={21} />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="font-serif text-4xl md:text-6xl font-medium mb-6">
            Pruébalo ahora, <br />
            <span className="text-gradient-gold">sin instalar nada</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-xl mx-auto">
            Entra a la demo con datos de ejemplo y recorre todo el sistema. Cuando estés listo,
            te lo instalamos en tu computadora.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <PremiumButton size="lg" className="group min-w-[220px]" asChild>
              <a href={DEMO_URL}>
                Probar demo
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </PremiumButton>
            <PremiumButton variant="outline" size="lg" className="min-w-[220px]" asChild>
              <a href={WHATSAPP_INSTALL} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                Agenda una instalación
              </a>
            </PremiumButton>
          </div>

          <p className="text-muted-foreground text-sm mt-8">
            Pago único o mensual • Instalación asistida • Desarrollo a medida
          </p>
          <p className="text-muted-foreground/70 text-xs mt-2">
            La demo muestra AXIS por unidad, en computadora.
          </p>
          <p className="text-sm mt-3">
            <a
              href={WHATSAPP_QUOTE}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline-offset-4 hover:underline"
            >
              Pide tu cotización
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
