"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { User, Award, Users } from "lucide-react";

const About = () => {
  const stats = [
    { icon: <User className="h-8 w-8 text-blue-600" />, value: "15+", label: "Years Experience" },
    { icon: <Users className="h-8 w-8 text-blue-600" />, value: "500+", label: "Clients Served" },
    { icon: <Award className="h-8 w-8 text-blue-600" />, value: "98%", label: "Client Retention" }
  ];

  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">About AccuCount Advisors</h2>
            <p className="mt-6 text-lg text-gray-600">
              Founded in 2008, AccuCount Advisors has been providing exceptional accounting services to small businesses across the region. Our team of certified professionals is dedicated to helping you navigate the complexities of financial management.
            </p>
            <p className="mt-4 text-lg text-gray-600">
              We believe in building long-term relationships with our clients based on trust, transparency, and results. Our personalized approach ensures that every client receives the attention and expertise they deserve.
            </p>
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-900">Our Mission</h3>
              <p className="mt-2 text-gray-600">
                To empower small businesses with accurate financial information and strategic insights that drive growth and success.
              </p>
            </div>
          </div>
          <div>
            <Card className="bg-white shadow-lg">
              <CardContent className="p-8">
                <div className="grid grid-cols-3 gap-6 text-center">
                  {stats.map((stat, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <div className="mb-3">
                        {stat.icon}
                      </div>
                      <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <div className="mt-8 bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900">Why Choose Us?</h3>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 text-blue-600 mt-0.5">✓</div>
                  <p className="ml-2 text-gray-600">Personalized service for every client</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 text-blue-600 mt-0.5">✓</div>
                  <p className="ml-2 text-gray-600">Certified accounting professionals</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 text-blue-600 mt-0.5">✓</div>
                  <p className="ml-2 text-gray-600">Cutting-edge accounting technology</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 text-blue-600 mt-0.5">✓</div>
                  <p className="ml-2 text-gray-600">Transparent pricing with no hidden fees</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;