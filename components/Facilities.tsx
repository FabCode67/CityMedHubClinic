import React from 'react';
import {
  Target,
  HeartHandshake,
  ShieldCheck,
  Users,
  Trophy,
  Clock
} from "lucide-react";

const FacilitiesPage = () => {
  const coreValues = [
    {
      icon: Trophy,
      title: "Professionalism and Excellence",
      description: "Maintaining the highest standards of medical care and professional conduct."
    },
    {
      icon: HeartHandshake,
      title: "Compassion and Care",
      description: "Treating every patient with empathy, respect, and personalized attention."
    },
    {
      icon: ShieldCheck,
      title: "Integrity and Stewardship",
      description: "Upholding ethical practices and responsible management of healthcare resources."
    },
    {
      icon: Users,
      title: "Teamwork",
      description: "Collaborating seamlessly to provide comprehensive, integrated patient care."
    }
  ];

  return (
    <section id='facilities' className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Mission Statement */}
          <div className="bg-green-50 lg:p-10 md:p-5 p-2 rounded-2xl shadow-lg">
            <div className="bg-green-50 lg:p-10 md:p-5 p-2 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <Target className="w-12 h-12 text-green-800 mr-4" />
                <h2 className="text-3xl font-bold text-green-900">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                To provide high-quality, patient-centered healthcare services in a compassionate
                and efficient manner. We strive to promote wellness, prevent illness, and treat
                medical conditions with the latest advancements in medical technology, all while
                fostering a supportive and caring environment for our patients and their families.
              </p>
            </div>
            <div className="mt-16 bg-green-50 rounded-xl p-8 text-center">
              <div className="flex items-center justify-center mb-4">
                <Clock className="w-10 h-10 text-green-700 mr-3" />
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
          </div>

          {/* Core Values */}
          <div>
            <h3 className="text-3xl font-bold text-green-900 mb-8 text-center md:text-left">
              Our Core Values
            </h3>
            <div className="space-y-6">
              {coreValues.map(({ icon: Icon, title, description }, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 flex items-start space-x-6"
                >
                  <div className="bg-green-50 p-3 rounded-xl">
                    <Icon className="w-8 h-8 text-green-800" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-green-900 mb-2">{title}</h4>
                    <p className="text-gray-600">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacilitiesPage;