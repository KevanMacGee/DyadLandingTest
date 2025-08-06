"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const textShadowClass = isScrolled ? "drop-shadow-[0_1px_1px_rgba(0,0,0,0.35)]" : "";

  return (
    <nav
      className={cn(
        "py-4 px-4 md:px-8 fixed w-full top-0 z-50 transition-colors duration-300",
        isScrolled
          ? "bg-white/50 backdrop-blur-md border-b border-black/5"
          : "bg-white shadow-sm"
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center transition-all">
        <div className={cn("flex items-center", textShadowClass)}>
          <div className={cn("bg-blue-600 text-white font-bold text-xl p-2 rounded mr-2", textShadowClass)}>AA</div>
          <span className={cn("text-xl font-bold text-gray-800", textShadowClass)}>AccuCount Advisors</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection("services")}
            className={cn("text-gray-600 hover:text-blue-600 font-medium transition-colors", textShadowClass)}
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className={cn("text-gray-600 hover:text-blue-600 font-medium transition-colors", textShadowClass)}
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("testimonials")}
            className={cn("text-gray-600 hover:text-blue-600 font-medium transition-colors", textShadowClass)}
          >
            Testimonials
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className={cn("text-gray-600 hover:text-blue-600 font-medium transition-colors", textShadowClass)}
          >
            Contact
          </button>
          <Button className="bg-blue-600 hover:bg-blue-700">Get Started</Button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button variant="ghost" onClick={toggleMenu} size="icon" className={textShadowClass}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 py-4 border-t">
          <div className="flex flex-col space-y-4">
            <button
              onClick={() => scrollToSection("services")}
              className={cn("text-gray-600 hover:text-blue-600 font-medium text-left transition-colors", textShadowClass)}
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className={cn("text-gray-600 hover:text-blue-600 font-medium text-left transition-colors", textShadowClass)}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className={cn("text-gray-600 hover:text-blue-600 font-medium text-left transition-colors", textShadowClass)}
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className={cn("text-gray-600 hover:text-blue-600 font-medium text-left transition-colors", textShadowClass)}
            >
              Contact
            </button>
            <Button className="bg-blue-600 hover:bg-blue-700 w-full">Get Started</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;