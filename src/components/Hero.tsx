"use client";

import React from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16 md:py-24">
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
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
                Schedule Consultation
              </Button>
              <Button variant="outline" className="px-8 py-3 text-lg border-blue-600 text-blue-600 hover:bg-blue-50">
                Our Services
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96 flex items-center justify-center text-gray-500">
              Professional Accounting Illustration
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;