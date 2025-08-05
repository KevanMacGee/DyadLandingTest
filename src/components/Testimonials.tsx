"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "Boutique Bakery",
      content: "AccuCount Advisors transformed our financial management. Their attention to detail and proactive advice helped us save thousands in taxes last year. Highly recommended!",
      role: "Owner"
    },
    {
      name: "Michael Chen",
      company: "TechStart Solutions",
      content: "As a growing tech company, we needed accounting expertise that understood our industry. The team at AccuCount provided exactly that and more. They're an invaluable partner.",
      role: "CEO"
    },
    {
      name: "Robert Williams",
      company: "Williams Construction",
      content: "I've worked with several accounting firms, but none compare to AccuCount. Their personalized service and deep understanding of construction accounting is unmatched.",
      role: "President"
    }
  ];

  return (
    <section id="testimonials" className="pt-20 pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">What Our Clients Say</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it - hear from businesses we've helped
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border border-gray-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <Quote className="h-8 w-8 text-blue-600 mb-4" />
                <p className="text-gray-600 italic">"{testimonial.content}"</p>
                <div className="mt-6 flex items-center">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                  <div className="ml-4">
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-gray-600">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;