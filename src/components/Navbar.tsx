"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm py-4 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <div className="bg-blue-600 text-white font-bold text-xl p-2 rounded mr-2">AA</div>
          <span className="text-xl font-bold text-gray-800">AccuCount Advisors</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-gray-600 hover:text-blue-600 font-medium">Services</a>
          <a href="#about" className="text-gray-600 hover:text-blue-600 font-medium">About</a>
          <a href="#testimonials" className="text-gray-600 hover:text-blue-600 font-medium">Testimonials</a>
          <a href="#contact" className="text-gray-600 hover:text-blue-600 font-medium">Contact</a>
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
            <a href="#services" className="text-gray-600 hover:text-blue-600 font-medium" onClick={toggleMenu}>Services</a>
            <a href="#about" className="text-gray-600 hover:text-blue-600 font-medium" onClick={toggleMenu}>About</a>
            <a href="#testimonials" className="text-gray-600 hover:text-blue-600 font-medium" onClick={toggleMenu}>Testimonials</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 font-medium" onClick={toggleMenu}>Contact</a>
            <Button className="bg-blue-600 hover:bg-blue-700 w-full">Get Started</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;