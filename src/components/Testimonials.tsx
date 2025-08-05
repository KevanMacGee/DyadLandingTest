"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "Boutique Bakery",
      content: "AccuCount Advisors transformed our financial management. Their attention to detail and proactive advice helped us save thousands in taxes last year. Highly recommended!"
    },
    {
      name: "Michael Chen",
      company: "TechStart Solutions",
      content: "As a growing tech company, we needed accounting expertise that understood our industry. The team at AccuCount provided exactly that and more. They're an invaluable partner."
    },
    {
      name: "Robert Williams",
      company: "Williams Construction",
      content: "I've worked with several accounting firms, but none compare to AccuCount. Their personalized service and deep understanding of construction accounting is unmatched."
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
            <Card key={index} className="border border-gray-200">
              <CardContent className="p-8">
                <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
                <p className="text-gray-600 italic">"{testimonial.content}"</p>
                <div className="mt-6">
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-gray-600">{testimonial.company}</p>
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