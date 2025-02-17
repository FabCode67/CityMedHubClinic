import React from 'react';
import { motion } from 'framer-motion';
import { FaTooth } from 'react-icons/fa';
import { Baby, Heart, BookOpen, Stethoscope, Microscope, Activity, Syringe, Radio, Building } from "lucide-react";
const ServicesPage = () => {


const services = [
  {
    icon: <Baby className="w-12 h-12 text-[#E95143]" />,
    title: "Pediatrics",
    description: "Comprehensive healthcare for infants, children, and adolescents."
  },
  {
    icon: <Heart className="w-12 h-12 text-[#E95143]" />,
    title: "Internal Medicine",
    description: "Specialized care for adult health conditions and preventive medicine."
  },
  {
    icon: <BookOpen className="w-12 h-12 text-[#E95143]" />,
    title: "Gynecology & Obstetrics",
    description: "Women's health services from routine check-ups to specialized care."
  },
  {
    icon: <Stethoscope className="w-12 h-12 text-[#E95143]" />,
    title: "General Medicine",
    description: "Comprehensive medical care for patients of all ages."
  },
  {
    icon: <FaTooth className="w-12 h-12 text-[#E95143]" />,
    title: "Dentistry",
    description: "Complete dental care and oral health services."
  },
  {
    icon: <Microscope className="w-12 h-12 text-[#E95143]" />,
    title: "Laboratory Services",
    description: "Advanced diagnostic testing and medical laboratory analysis."
  },
  {
    icon: <Activity className="w-12 h-12 text-[#E95143]" />,
    title: "Family Planning",
    description: "Reproductive health services, counseling, and contraceptive options."
  },
  {
    icon: <Syringe className="w-12 h-12 text-[#E95143]" />,
    title: "Vaccination",
    description: "Preventive immunization services for all age groups."
  },
  {
    icon: <Radio className="w-12 h-12 text-[#E95143]" />,
    title: "Ultrasound",
    description: "Diagnostic imaging services for pregnancy monitoring and other conditions."
  },
  {
    icon: <Building className="w-12 h-12 text-[#E95143]" />,
    title: "Hospitalization",
    description: "Inpatient care facilities with 24/7 medical supervision."
  }
];

  return (
    <section id='services' className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <Stethoscope className="mx-auto w-16 h-16 text-blue-700 mb-4" />
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Our Medical Services
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive healthcare solutions tailored to your needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl shadow-lg p-6 text-center"
            >
              <div className="mb-4 flex justify-center">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

     
      </div>
    </section>
  );
};

export default ServicesPage;