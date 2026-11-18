import { MessageCircle } from "lucide-react";
import { DEMO_URL, WHATSAPP_INFO } from "@/lib/links";
import BrandMark from "./BrandMark";

const Footer = () => {
  return (
    <footer className="py-16 bg-background border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <BrandMark />

          {/* Links */}
          <nav className="flex items-center gap-8">
            <a href={DEMO_URL} className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Demo
            </a>
            <a
              href={WHATSAPP_INFO}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp 79363675
            </a>
          </nav>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © 2026 Busti Systems. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
