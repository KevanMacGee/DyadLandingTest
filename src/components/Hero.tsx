"use client";

import React from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16 md:py-24 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Expert Financial Guidance for Your Business Success
            </h1>
            <p className="mt-6 text-xl text-gray-600">
              Trusted accounting services tailored to small businesses. Let us handle your finances while you focus on growing your business.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg" 
                onClick={() => scrollToSection("contact")}
              >
                Schedule Consultation
              </Button>
              <Button 
                variant="outline" 
                className="px-8 py-3 text-lg border-blue-600 text-blue-600 hover:bg-blue-50" 
                onClick={() => scrollToSection("services")}
              >
                Our Services
              </Button>
            </div>
            <div className="mt-8 flex items-center">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-blue-200 border-2 border-white"></div>
                <div className="w-10 h-10 rounded-full bg-green-200 border-2 border-white"></div>
                <div className="w-10 h-10 rounded-full bg-yellow-200 border-2 border-white"></div>
              </div>
              <p className="ml-4 text-gray-600">
                <span className="font-semibold">500+ satisfied clients</span> trust our services
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <div className="bg-blue-600 rounded-lg w-80 h-80 md:w-96 md:h-96 flex items-center justify-center">
                <div className="bg-white rounded-lg p-6 w-64 h-64 md:w-80 md:h-80 flex flex-col items-center justify-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
                  <div className="text-lg font-semibold text-gray-800 mb-4">Client Retention</div>
                  <div className="text-gray-600 text-center">
                    Our clients trust us year after year for their financial needs
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-yellow-400 rounded-lg p-4 shadow-lg">
                <div className="text-lg font-bold text-gray-900">15+ Years</div>
                <div className="text-sm text-gray-700">Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;