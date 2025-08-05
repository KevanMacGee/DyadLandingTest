"use client";

import React from "react";
import { MadeWithDyad } from "@/components/made-with-dyad";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center">
              <div className="bg-blue-600 text-white font-bold text-xl p-2 rounded mr-2">AA</div>
              <span className="text-xl font-bold">AccuCount Advisors</span>
            </div>
            <p className="mt-4 text-gray-400 max-w-md">
              Providing expert accounting services to small businesses since 2008. We help you navigate financial complexities so you can focus on what you do best.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-400 hover:text-white">Services</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-white">Testimonials</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Tax Preparation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Bookkeeping</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Financial Planning</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Audit Support</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">© 2023 AccuCount Advisors. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <MadeWithDyad />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;