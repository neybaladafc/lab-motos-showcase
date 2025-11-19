import { useState } from "react";
import { Menu, X, Bike } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Contato", href: "#contato" },
    { name: "Quem Somos", href: "#quem-somos" },
    { name: "Serviços", href: "#servicos", active: true },
  ];

  return (
    <nav className="bg-secondary sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Bike className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-primary-foreground">
              LAB <span className="text-primary">Motos</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`font-medium transition-colors hover:text-primary ${
                  item.active
                    ? "text-primary border-b-2 border-primary pb-1"
                    : "text-secondary-foreground"
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Auth Buttons Desktop */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" className="text-secondary-foreground hover:text-primary">
              LOG IN
            </Button>
            <Button variant="default" className="bg-primary hover:bg-primary/90">
              SIGN UP
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-secondary-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-6 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`block py-2 font-medium transition-colors hover:text-primary ${
                  item.active ? "text-primary" : "text-secondary-foreground"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="flex flex-col gap-3 pt-4">
              <Button variant="ghost" className="text-secondary-foreground hover:text-primary w-full">
                LOG IN
              </Button>
              <Button variant="default" className="bg-primary hover:bg-primary/90 w-full">
                SIGN UP
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
