import React from 'react';
import { Button } from "@/components/ui/button";
import {
  Phone,
} from "lucide-react";
import AppointmentModal from './AppointmentModel';


const HeroSection = () => {

  const [modalOpen, setModalOpen] = React.useState(false);

  return (
    <div className="relative overflow-hidden w-full min-h-screen flex items-center bg-white">


      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white opacity-70 z-0" />
      <div className="container lg:py-0 py-12 px-4 md:px-8 max-w-7xl w-full mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
              Welcome to
              <span className="text-blue-800 text-4xl md:text-4xl"> City MedHub Clinic
              </span> <br /><span className='text-2xl md:text-3xl'>Your health and wellbeing are our main responsibility.</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Located at the heart of the community, we offer a wide range of medical services designed to meet the unique needs of individuals and families. Our clinic is dedicated to providing high-quality, compassionate, and personalized care in a modern, welcoming environment.
            </p>
            {/* <div className="space-y-3">
              {[
                { icon: Stethoscope, text: "Comprehensive Medical Services" },
                { icon: HeartPulse, text: "Personalized Patient Care" },
                { icon: ShieldCheck, text: "Advanced Medical Technology" }
              ].map(({ icon: Icon, text }, index) => (
                <div key={index} className="flex items-center space-x-3 text-[#E95143]">
                  <Icon className="w-6 h-6" />
                  <span className="text-base font-medium">{text}</span>
                </div>
              ))}
            </div> */}
            <div className="flex flex-row space-x-4">
              <Button
                // size="lg"
                onClick={() => setModalOpen(true)}
                className="bg-blue-800 text-white hover:bg-blue-900 rounded-md transition-colors duration-300 "
              >
                Book Appointment
              </Button>
              <Button
                variant="outline"
                // size="lg"
                className="text-blue-800 border-blue-800 hover:bg-blue-50 transition-colors duration-300  gap-2"
              >
                <Phone className="w-5 h-5" />
                Contact Us
              </Button>
            </div>
          </div>
          {/* <div className="relative md:flex hidden items-center justify-center">
            <div className="relative overflow-hidden rounded-2xl shadow-lg w-full max-w-lg">
              <img
                src="/images/bunner.jpg"
                alt="Medical Consultation"
                className="object-cover h-full w-full transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-blue-800/10 mix-blend-multiply" />
            </div>
          </div> */}
        </div>
      </div>
      <AppointmentModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
};

export default HeroSection;
