"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator, FileText, TrendingUp, Shield } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Calculator className="h-10 w-10 text-blue-600" />,
      title: "Tax Preparation",
      description: "Accurate and timely tax preparation for individuals and businesses to maximize deductions and minimize liabilities."
    },
    {
      icon: <FileText className="h-10 w-10 text-blue-600" />,
      title: "Bookkeeping",
      description: "Organized financial record-keeping to ensure compliance and provide clear insights into your business finances."
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-blue-600" />,
      title: "Financial Planning",
      description: "Strategic financial planning to help you achieve your short and long-term business goals."
    },
    {
      icon: <Shield className="h-10 w-10 text-blue-600" />,
      title: "Audit Support",
      description: "Comprehensive support during audits to ensure smooth processes and favorable outcomes."
    }
  ];

  return (
    <section id="services" className="pt-20 pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive accounting solutions tailored to meet your business needs
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border border-gray-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mb-4">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;