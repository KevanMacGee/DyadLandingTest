"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="pt-20 pb-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Get In Touch</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to take control of your finances? Contact us today for a free consultation.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                    First Name
                  </label>
                  <Input id="firstName" placeholder="John" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name
                  </label>
                  <Input id="lastName" placeholder="Doe" />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <Input id="email" type="email" placeholder="john@example.com" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone
                </label>
                <Input id="phone" type="tel" placeholder="(123) 456-7890" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <Textarea id="message" placeholder="Tell us about your accounting needs..." rows={4} />
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700 w-full py-3">
                Send Message
              </Button>
            </form>
          </div>

          <div>
            <div className="bg-white p-8 rounded-lg shadow-lg h-full">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">Phone</h4>
                    <p className="mt-1 text-gray-600">(555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">Email</h4>
                    <p className="mt-1 text-gray-600">info@acccountadvisors.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">Office</h4>
                    <p className="mt-1 text-gray-600">
                      123 Financial District<br />
                      Suite 400<br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h4 className="text-lg font-medium text-gray-900">Office Hours</h4>
                <ul className="mt-2 space-y-1 text-gray-600">
                  <li>Monday - Friday: 9:00 AM - 6:00 PM</li>
                  <li>Saturday: 10:00 AM - 2:00 PM</li>
                  <li>Sunday: Closed</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;