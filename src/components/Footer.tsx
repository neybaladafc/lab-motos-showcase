import { Bike } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-secondary">
      {/* Announcement Bar */}
      <div className="bg-lab-black text-white py-2 overflow-hidden">
        <div className="whitespace-nowrap">
          <span className="inline-block font-medium text-sm tracking-wider">
            ANUNCIO ANUNCIO ANUNCIO ANUNCIO ANUNCIO ANUNCIO ANUNCIO ANUNCIO ANUNCIO ANUNCIO
          </span>
        </div>
      </div>

      {/* Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          {/* Logo */}
          <div className="flex items-center justify-center gap-2">
            <Bike className="h-10 w-10 text-primary" />
            <span className="text-3xl font-bold text-primary-foreground">
              LAB <span className="text-primary">Motos</span>
            </span>
          </div>

          {/* Description */}
          <p className="text-secondary-foreground text-lg leading-relaxed">
            A LAB MOTOS nasceu da paixão por motos e do compromisso em elevar o
            padrão das oficinas, unindo técnica, confiança e transparência.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center gap-6">
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center hover:bg-primary/90 transition-all hover:scale-110"
              aria-label="WhatsApp"
            >
              <FontAwesomeIcon icon={faWhatsapp} className="text-xl" />
            </a>
            <a
              href="https://instagram.com/labmotos"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center hover:bg-primary/90 transition-all hover:scale-110"
              aria-label="Instagram"
            >
              <FontAwesomeIcon icon={faInstagram} className="text-xl" />
            </a>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-secondary-foreground/20">
            <p className="text-secondary-foreground/70 text-sm">
              © 2025 Lab Motos - Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
