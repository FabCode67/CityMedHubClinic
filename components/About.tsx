import React from 'react';
import {  ShieldCheck, HeartPulse, Stethoscope } from "lucide-react";

const AboutSection = () => {
  return (
    <section id='about' className="min-h-screen flex items-center bg-white">
      <div className="container mx-auto px-4 py-16 md:px-8 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
              <img
                src="https://african.land/oc-content/plugins/blog/img/blog/1550.jpg"
                alt="City MedHub Clinic Interior"
                className="w-full h-[600px] object-cover"
              />
            </div>
            <div className="absolute bottom-4 right-4 bg-orange-800 text-white px-4 py-2 rounded-lg shadow-lg">
              <p className="text-sm">Modern Healthcare Facility</p>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-orange-900 mb-6">About City MedHub Clinic</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                City MedHub Clinic stands as a beacon of compassionate healthcare, 
                dedicated to delivering high-quality medical services in a modern, 
                welcoming environment. Our experienced healthcare professionals 
                leverage advanced technology to provide exceptional patient care.
              </p>
            </div>

            <div className="bg-orange-50 p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-orange-800 mb-6">Our Core Vision</h3>
              <div className="space-y-4">
                {[
                  { 
                    icon: Stethoscope, 
                    text: "Become a trusted hub of medical services in the region" 
                  },
                  { 
                    icon: HeartPulse, 
                    text: "Deliver accessible, compassionate, and innovative care" 
                  },
                  { 
                    icon: ShieldCheck, 
                    text: "Improve community health and individual well-being" 
                  }
                ].map(({ icon: Icon, text }, index) => (
                  <div 
                    key={index} 
                    className="flex items-start space-x-4 text-gray-700"
                  >
                    <Icon className="w-6 h-6 text-orange-800 flex-shrink-0 mt-1" />
                    <span className="text-base">{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;