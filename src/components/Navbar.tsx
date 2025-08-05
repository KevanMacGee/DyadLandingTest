"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

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

  return (
    <nav className="bg-white shadow-sm py-4 px-4 md:px-8 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <div className="bg-blue-600 text-white font-bold text-xl p-2 rounded mr-2">AA</div>
          <span className="text-xl font-bold text-gray-800">AccuCount Advisors</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <button onClick={() => scrollToSection("services")} className="text-gray-600 hover:text-blue-600 font-medium">Services</button>
          <button onClick={() => scrollToSection("about")} className="text-gray-600 hover:text-blue-600 font-medium">About</button>
          <button onClick={() => scrollToSection("testimonials")} className="text-gray-600 hover:text-blue-600 font-medium">Testimonials</button>
          <button onClick={() => scrollToSection("contact")} className="text-gray-600 hover:text-blue-600 font-medium">Contact</button>
          <Button className="bg-blue-600 hover:bg-blue-700">Get Started</Button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button variant="ghost" onClick={toggleMenu} size="icon">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 py-4 border-t">
          <div className="flex flex-col space-y-4">
            <button onClick={() => scrollToSection("services")} className="text-gray-600 hover:text-blue-600 font-medium text-left">Services</button>
            <button onClick={() => scrollToSection("about")} className="text-gray-600 hover:text-blue-600 font-medium text-left">About</button>
            <button onClick={() => scrollToSection("testimonials")} className="text-gray-600 hover:text-blue-600 font-medium text-left">Testimonials</button>
            <button onClick={() => scrollToSection("contact")} className="text-gray-600 hover:text-blue-600 font-medium text-left">Contact</button>
            <Button className="bg-blue-600 hover:bg-blue-700 w-full">Get Started</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;