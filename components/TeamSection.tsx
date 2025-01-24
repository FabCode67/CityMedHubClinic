import React, { useEffect } from 'react';
import {
  Stethoscope,
  Users,
  GraduationCap,
  Phone,
  MessageSquare,
  LinkedinIcon
} from "lucide-react";
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

type TeamMember = {
  id: number;
  name: string;
  role: string;
  specialty?: string;
  image?: string;
  qualifications?: string[];
  contact?: {
    phone?: string;
    email?: string;
  };
};

const TeamPage = () => {

  return (
    <section id='team' className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <Stethoscope className="mx-auto w-12 h-12 text-orange-700 mb-4" />
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Our Dedicated Healthcare Team
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Committed to providing compassionate and comprehensive medical care
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-xl shadow-md text-center"
          >
            <Users className="mx-auto w-10 h-10 text-orange-700 mb-4" />
            <h3 className="font-semibold text-gray-800 mb-2">Experienced Professionals</h3>
            <p className="text-gray-600">Skilled doctors with diverse medical expertise</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-xl shadow-md text-center"
          >
            <GraduationCap className="mx-auto w-10 h-10 text-orange-700 mb-4" />
            <h3 className="font-semibold text-gray-800 mb-2">Continuous Learning</h3>
            <p className="text-gray-600">Regular training and medical education</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-xl shadow-md text-center"
          >
            <Stethoscope className="mx-auto w-10 h-10 text-orange-700 mb-4" />
            <h3 className="font-semibold text-gray-800 mb-2">Comprehensive Care</h3>
            <p className="text-gray-600">Personalized treatment approaches</p>
          </motion.div>
        </div>
        <div className="flex md:flex-row flex-col w-full md:space-x-4 space-x-0">
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="p-6 shadow rounded-xl flex flex-col items-center md:w-[30%] w-full md:h-[33rem] h-fit space-y-4"
          >
            <img src="/gm1.jpg" alt="team" className="object-cover h-[70%]" />
            <div className="text-center">
              <h3 className="text-lg font-medium text-gray-800">Godfrey Gafirita</h3>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mt-0 text-gray-800">Managing Director</h3>
            </div>
            <div className="flex space-x-4 text-teal-600 mt-4">
              <a target="_blank" rel="noopener noreferrer" href="in/gafirita-godfrey">
                <LinkedinIcon size={20} />
              </a>
              <a target="_blank" rel="noopener noreferrer" href="tel:+2500784012286">
                <Phone size={20} />
              </a>
              <a target="_blank" href="mailto:dentalimaging100@gmail.com" rel="noopener noreferrer">
                <MessageSquare size={20} />
              </a>
              <a target="_blank" rel="noopener noreferrer" href="https://wa.me/+2500784012286">
                <FaWhatsapp size={20} />
              </a>
            </div>
          </motion.div>             </div>
      </div>
    </section>
  );
};

export default TeamPage;