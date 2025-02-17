import React from 'react';
import { Clock } from "lucide-react";

const AboutSection = () => {
  return (
    <section id='about' className="flex min-h-fit items-center bg-white">
      <div className="container mx-auto px-4 py-16 md:px-8 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Section */}

          <div className="relative md:block hidden">
            <div className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
              <img
                src="/imge.jpg"
                alt="City MedHub Clinic Interior"
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="absolute bottom-4 right-4 bg-blue-800 text-white px-4 py-2 rounded-lg shadow-lg">
              <p className="text-sm">Modern Healthcare Facility</p>
            </div>
          </div>

          {/* Content Section */}
          <div>
            <h2 className="text-4xl font-bold text-blue-900 mb-6">About City MedHub Clinic</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              With a team of experienced healthcare professionals, advanced medical technology, and a commitment to patient-centered care, we strive to deliver the best possible outcomes and support for every patient we serve. Whether you’re here for a routine check-up, specialized treatment, or preventive care, City MedHub Clinic is your trusted partner in health.
            </p>
            <div className="mt-16 bg-blue-50 rounded-xl p-8 text-centern">
              <div className="flex mb-4">
                <Clock className="w-10 h-10 text-blue-700 mr-3" />
                <h2 className="text-2xl font-bold text-gray-800">
                  Clinic Working Hours
                </h2>
              </div>
              <p className="text-lg text-gray-700">
                24/7 Emergency and Comprehensive Care
              </p>
              <p className="text-gray-600 mt-2">
                Always available to serve your healthcare needs
              </p>
            </div>
            <div className="space-y-8">



            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;