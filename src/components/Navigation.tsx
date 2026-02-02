import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import itmLogow from "@/assets/logo/whitew_rlogo.png";
import itmLogob from "@/assets/logo/black_rlogo.png";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const textColorClass = isScrolled
    ? "text-foreground"
    : "text-primary-foreground";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">

          {/* LOGO – SAME LOGIC AS LOGIN */}
          <a href="#home" className="flex items-center">
            <img
              src={isScrolled ? itmLogob : itmLogow}
              alt="ITM logo"
              className="h-16 w-auto object-contain transition-all duration-300"
            />
          </a>

          {/* DESKTOP */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/login"
              className={`text-sm font-medium ${textColorClass} border ${
                isScrolled
                  ? "border-border hover:bg-secondary"
                  : "border-primary-foreground/30 hover:bg-primary-foreground/10"
              } px-5 py-2 transition-colors`}
            
            style={{ fontFamily: "serif-Scotch, serif" }}>
              Login
            </Link>
          </div>

          {/* MOBILE BUTTON */}
          <button
            className={`md:hidden p-2 ${textColorClass}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background border-t border-border py-4">
            <Link
              to="/login"
              className="block py-3 px-4 text-foreground font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            style={{ fontFamily: "serif-Scotch, serif" }}>
              Login
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
