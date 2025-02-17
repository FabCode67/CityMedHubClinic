import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import {
  MessageSquare,
  Phone,
  PhoneCall,
  Calendar
} from "lucide-react";
import AppointmentModal from './AppointmentModel';
import { useRouter } from 'next/navigation';

const HeroSection = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [showPhoneNumber, setShowPhoneNumber] = useState(false);
  const [showAppointment, setShowAppointment] = useState(false);
  const phoneNumber = "(+250) 780-553-772";
  const bookAppointment = "Book Appointment";
  const route = useRouter();

  return (
    <div className="relative overflow-hidden w-full min-h-screen flex items-center bg-white">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white opacity-70 z-0" />
      <div className="container lg:py-0 py-12 px-4 md:px-8 max-w-7xl w-full mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
              Welcome to
              <span className="text-blue-800 text-4xl md:text-4xl"> City MedHub Clinic
              </span> <br /><span className='text-2xl md:text-3xl'>Your health and wellbeing are our main responsibility.</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Located at the heart of the community, we offer a wide range of medical services designed to meet the unique needs of individuals and families. Our clinic is dedicated to providing high-quality, compassionate, and personalized care in a modern, welcoming environment.
            </p>
            <div className="space-y-3">
              {[
                { icon: PhoneCall, text: "+250 3323 322 322", link: "tel:+2503323322322" },
                { icon: MessageSquare, text: "info@citymedhubclinic.rw", link: "mailto:info@citymedhubclinic.rw" }
              ].map(({ icon: Icon, text, link }, index) => (
                <div key={index} className="flex items-center space-x-3 text-[#E95143]">
                  <Icon className="w-4 h-4" />
                  <a href={
                    link
                  } className="text-base font-medium">{text}</a>
                </div>
              ))}
            </div>
            <div className="flex flex-row space-x-4">
              <Button
                onClick={() => setModalOpen(true)}
                className="bg-blue-800 text-white hover:bg-blue-900 rounded-md transition-colors duration-300"
              >
                Book Appointment
              </Button>
              <Button
                variant="outline"
                onClick={() => route.push('#contact')}
                className="text-blue-800 border-blue-800 hover:bg-blue-50 transition-colors duration-300 gap-2"
              >
                <Phone className="w-5 h-5" />
                Contact Us
              </Button>
            </div>
          </div>
          <div className="relative md:flex hidden items-center justify-center">
            <div className="relative overflow-hidden rounded-2xl shadow-lg w-full max-w-lg">
              <img
                src="/images/usepic.jpg"
                alt="Medical Consultation"
                className="object-cover h-full w-full transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-blue-800/10 mix-blend-multiply" />
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Phone Button with Hover Effect */}
      <div 
        className="fixed bottom-24 right-6 z-50"
        onMouseEnter={() => setShowPhoneNumber(true)}
        onMouseLeave={() => setShowPhoneNumber(false)}
      >
        <div className="relative">
          {showPhoneNumber && (
            <a 
              href={`tel:${phoneNumber.replace(/\s+/g, '')}`}
              className="absolute right-16 bottom-0 bg-white/80 backdrop-blur-sm py-2 px-4 rounded-full  text-blue-800 font-medium whitespace-nowrap transition-all duration-300 animate-fadeIn"
              style={{
                animation: 'pulse 2s infinite'
              }}
            >
              {phoneNumber}
            </a>
          )}
          <a
            href={`tel:${phoneNumber.replace(/\s+/g, '')}`}>
          
          <button 
            // href={`tel:${phoneNumber.replbuttonce(/\s+/g, '')}`}
            className="bg-blue-800/60  text-white rounded-full p-4  transition-all duration-300 hover:scale-110 backdrop-blur-sm"
            style={{
              boxShadow: '0 0  rgba(59, 130, 246, 0.5), 0 0 30px rgba(59, 130, 246, 0.3)',
              animation: 'pulse 2s infinite'
            }}
            
          >
            <Phone className="w-6 h-6" />
          </button>
          </a>
        </div>
      </div>

      {/* Fixed Appointment Button */}
      <div className="fixed bottom-6 right-6 z-50"
        onMouseEnter={() => setShowAppointment(true)}
        onMouseLeave={() => setShowAppointment(false)}
      >
        <div className="relative">
          {showAppointment && (
            <button 
              onClick={() => setModalOpen(true)}
              className="absolute right-16 bottom-0 bg-white/80 backdrop-blur-sm py-2 px-4 rounded-full  text-blue-800 font-medium whitespace-nowrap transition-all duration-300 animate-fadeIn"
              style={{
                animation: 'pulse 2s infinite'
              }}
            >
              {bookAppointment}
            </button>
          )}
          <button 
            onClick={() => setModalOpen(true)}
            className="bg-blue-800/60 text-white rounded-full p-4  transition-all duration-300 hover:scale-110 "
            style={{
              animation: 'pulse 2s infinite'
            }}
          >
            <Calendar className="w-6 h-6" />
          </button>
        </div>
      </div>


      {/* CSS for animations */}
      <style jsx>{`
        @keyframes pulse {
          0% {
            box-shadow: 0 0 5px rgba(233,81,67), 0 0 5px rgba(233,81,67);
          }
          50% {
            box-shadow: 0 0 5px rgba(59, 130, 246, 0.7), 0 0 4px rgba(233,81,67);
          }
          100% {
            box-shadow: 0 0 5px rgba(233,81,67), 0 0 3px rgba(233,81,67);
          }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>

      <AppointmentModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
};

export default HeroSection;