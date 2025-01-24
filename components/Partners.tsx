import React from 'react';
import { Shield, FileCheck, CreditCard, HeartPulse } from "lucide-react";

const PartnersPage = () => {
  const insuranceLogos = [
    "/eden.png",
    "/old.png", 
    "/radiant.png",
    "/eden.png",
    "/old.png", 
    "/radiant.png",
  ];

  const insuranceFeatures = [
    {
      icon: Shield,
      title: "Extensive Coverage",
      description: "We work with a wide network of insurance providers to maximize your coverage."
    },
    {
      icon: FileCheck,
      title: "Simplified Billing",
      description: "Our team helps navigate insurance claims and paperwork efficiently."
    },
    {
      icon: CreditCard,
      title: "Flexible Payment Options",
      description: "Multiple payment plans and financial assistance programs available."
    }
  ];

  return (
    <section id='partners' className="bg-green-50 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="text-center mb-12">
          <HeartPulse className="mx-auto w-16 h-16 text-green-800 mb-4" />
          <h2 className="text-4xl font-bold text-green-900 mb-4">
            Insurance & Financial Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We work with multiple insurance providers to make your healthcare affordable and accessible.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Insurance Features */}
          <div className="space-y-6">
            {insuranceFeatures.map(({ icon: Icon, title, description }, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center space-x-6"
              >
                <div className="bg-green-50 p-4 rounded-xl">
                  <Icon className="w-8 h-8 text-green-800" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-green-900 mb-2">{title}</h3>
                  <p className="text-gray-600">{description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Insurance Logos */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-green-900 mb-8 text-center">
              Accepted Insurance Providers
            </h3>
            <div className="grid grid-cols-3 gap-6">
              {insuranceLogos.map((logo, index) => (
                <div 
                  key={index} 
                  className="flex items-center justify-center p-4 bg-green-50 rounded-xl hover:bg-green-100 transition-colors"
                >
                  <img 
                    src={logo} 
                    alt={`Insurance Provider ${index + 1}`}
                    className="max-h-16 max-w-full grayscale hover:grayscale-0 transition-all"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Not sure about your coverage? Our financial counselors are ready to help you understand 
            your insurance benefits and explore payment options.
          </p>
          <div className="mt-8">
          <a href='#contact'
           className=" px-8 py-3 bg-green-800 text-white rounded-full hover:bg-green-900 transition-colors">
            Contact Us
          </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersPage;