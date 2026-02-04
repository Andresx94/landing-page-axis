import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-16 bg-background border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-gold flex items-center justify-center">
              <span className="font-serif text-xl font-bold text-primary-foreground">V</span>
            </div>
            <span className="font-serif text-xl font-medium">Velox</span>
          </div>

          {/* Links */}
          <nav className="flex items-center gap-8">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Términos
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacidad
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Contacto
            </a>
          </nav>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © 2026 Velox. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
