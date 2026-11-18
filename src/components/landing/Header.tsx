import { motion } from "framer-motion";
import { PremiumButton } from "@/components/ui/premium-button";
import { DEMO_URL } from "@/lib/links";
import BrandMark from "./BrandMark";

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 py-4 bg-background/80 backdrop-blur-md border-b border-border/50"
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <BrandMark />

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Plataforma
          </a>
          <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Cómo funciona
          </a>
          <a href="#security" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Control
          </a>
        </nav>

        {/* CTA */}
        <PremiumButton size="sm" asChild>
          <a href={DEMO_URL}>Probar demo</a>
        </PremiumButton>
      </div>
    </motion.header>
  );
};

export default Header;
