import React from 'react';
import {HeartPulse } from "lucide-react";

const PartnersPage = () => {
  const insuranceLogos = [
    "/rssb.png",
    "/mmi.png",
    "/old.png", 
    "/radiant.png",
    "/eden.png",
    "/sanlam.jpg",
    "/prime.jpg",
    "/britam.png",
    "/itm.png",
    "/bar.png",
    "/equity.png",
    "/urwego.png",
    "/psf.png",
    "/buzima.png",
    "/magerwa.jpg",
  ];

  // const insuranceFeatures = [
  //   {
  //     icon: Shield,
  //     title: "Extensive Coverage",
  //     description: "We work with a wide network of insurance providers to maximize your coverage."
  //   },
  //   {
  //     icon: FileCheck,
  //     title: "Simplified Billing",
  //     description: "Our team helps navigate insurance claims and paperwork efficiently."
  //   },
  //   {
  //     icon: CreditCard,
  //     title: "Flexible Payment Options",
  //     description: "Multiple payment plans and financial assistance programs available."
  //   }
  // ];

  return (
    <section id='partners' className="bg-blue-50 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="text-center mb-12">
          <HeartPulse className="mx-auto w-16 h-16 text-blue-800 mb-4" />
          <h2 className="text-4xl font-bold text-blue-900 mb-4">
          Our Partners
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We work with a wide network of insurance providers to maximize your covarage.
          </p>
        </div>

        <div className="grid md:grid-cols-1 gap-12">
        <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-blue-900 mb-8 text-center">
              Accepted Insurance Providers
            </h3>
            <div className="grid md:grid-cols-4 grid-cols-3 gap-3">
              {insuranceLogos.map((logo, index) => (
                <div 
                  key={index} 
                  className="flex items-center justify-center p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors"
                  // className="flex items-center justify-center p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors"
                >
                  <img 
                    src={logo} 
                    alt={`Insurance Provider ${index + 1}`}
                    className="max-h-16 max-w-full transition-all"

                    // className="max-h-16 max-w-full grayscale hover:grayscale-0 transition-all"
                  />
                </div>
              ))}
            </div>
          </div>
          {/* Insurance Features */}
          {/* <div className="space-y-6">
            {insuranceFeatures.map(({ icon: Icon, title, description }, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center space-x-6"
              >
                <div className="bg-blue-50 p-4 rounded-xl">
                  <Icon className="w-8 h-8 text-[#E95143]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-2">{title}</h3>
                  <p className="text-gray-600">{description}</p>
                </div>
              </div>
            ))}
          </div> */}

          {/* Insurance Logos */}
          
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Not sure about your coverage? Our financial counselors are ready to help you understand 
            your insurance benefits and explore payment options.
          </p>
          <div className="mt-8">
          <a href='#contact'
           className=" px-8 py-3 bg-blue-800 text-white rounded-full hover:bg-blue-900 transition-colors">
            Contact Us
          </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersPage;