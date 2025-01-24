import React from 'react';
import { Button } from "@/components/ui/button";
import {
  Phone,
  Stethoscope,
  HeartPulse,
  ShieldCheck
} from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden w-full min-h-screen flex items-center bg-white">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-white opacity-70 z-0" />

      {/* Content Container */}
      <div className="container px-4 md:px-8 max-w-7xl w-full mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-block px-4 py-2 bg-green-100/80 text-green-800 rounded-full text-base font-medium tracking-wide">
              Community Health Partner
            </div>

            {/* Heading */}
            <h1 className="text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight">
              Your Health, Our Commitment at <span className="text-green-800 text-3xl lg:text-5xl">City MedHub Clinic</span>
            </h1>

            {/* Description */}
            <p className="text-lg text-gray-600 leading-relaxed">
              At City MedHub Clinic, we provide comprehensive medical services tailored to individuals and families,
              combining advanced technology with compassionate, personalized care.
            </p>

            {/* Features List */}
            <div className="space-y-3">
              {[ // Feature List
                { icon: Stethoscope, text: "Comprehensive Medical Services" },
                { icon: HeartPulse, text: "Personalized Patient Care" },
                { icon: ShieldCheck, text: "Advanced Medical Technology" }
              ].map(({ icon: Icon, text }, index) => (
                <div key={index} className="flex items-center space-x-3 text-green-800">
                  <Icon className="w-6 h-6" />
                  <span className="text-base font-medium">{text}</span>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button
                size="lg"
                className="bg-green-800 text-white hover:bg-green-900 transition-colors duration-300 w-full sm:w-auto"
              >
                Book Appointment
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-green-800 border-green-800 hover:bg-green-50 transition-colors duration-300 w-full sm:w-auto gap-2"
              >
                <Phone className="w-5 h-5" />
                Contact Us
              </Button>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative flex items-center justify-center">
            <div className="relative overflow-hidden rounded-2xl shadow-lg w-full max-w-lg">
              <img
                src="https://st.depositphotos.com/1594308/2526/i/450/depositphotos_25265551-stock-photo-medical-consultation.jpg"
                alt="Medical Consultation"
                className="object-cover h-full w-full transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-green-800/10 mix-blend-multiply" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
