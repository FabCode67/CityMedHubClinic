import React, { useState, useEffect } from 'react';
import { 
  Stethoscope, 
  Users, 
  GraduationCap, 
  Phone, 
  Mail, 
  Calendar 
} from "lucide-react";
import { motion } from 'framer-motion';

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
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);

  // Mock data - in a real app, this would come from an API
  useEffect(() => {
    const mockTeamData: TeamMember[] = [
      {
        id: 1,
        name: "Dr. Emily Rodriguez",
        role: "Medical Director",
        specialty: "Family Medicine",
        image: "https://pngimg.com/d/doctor_PNG15957.png",
        qualifications: [
          "Board Certified",
          "15+ Years Experience",
          "Community Health Advocate"
        ],
        contact: {
          phone: "+1 (555) 123-4567",
          email: "emily.rodriguez@clinicname.com"
        }
      },
      {
        id: 2,
        name: "Dr. Michael Chen",
        role: "Senior Physician",
        specialty: "Internal Medicine",
        image: "https://png.pngtree.com/png-vector/20240104/ourmid/pngtree-doctor-of-african-american-descent-standing-alone-against-a-png-image_10944813.png",
        qualifications: [
          "Chronic Disease Management",
          "Preventive Care Specialist",
          "Patient-Centered Approach"
        ],
        contact: {
          phone: "+1 (555) 234-5678",
          email: "michael.chen@clinicname.com"
        }
      }
    ];

    setTeamMembers(mockTeamData);
  }, []);

 

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <Stethoscope className="mx-auto w-12 h-12 text-green-700 mb-4" />
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Our Dedicated Healthcare Team
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Committed to providing compassionate and comprehensive medical care
          </p>
        </div>

        {/* Team Highlights */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-xl shadow-md text-center"
          >
            <Users className="mx-auto w-10 h-10 text-green-700 mb-4" />
            <h3 className="font-semibold text-gray-800 mb-2">Experienced Professionals</h3>
            <p className="text-gray-600">Skilled doctors with diverse medical expertise</p>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-xl shadow-md text-center"
          >
            <GraduationCap className="mx-auto w-10 h-10 text-green-700 mb-4" />
            <h3 className="font-semibold text-gray-800 mb-2">Continuous Learning</h3>
            <p className="text-gray-600">Regular training and medical education</p>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-xl shadow-md text-center"
          >
            <Stethoscope className="mx-auto w-10 h-10 text-green-700 mb-4" />
            <h3 className="font-semibold text-gray-800 mb-2">Comprehensive Care</h3>
            <p className="text-gray-600">Personalized treatment approaches</p>
          </motion.div>
        </div>

        {/* Team Members */}
        <div className="grid md:grid-cols-2 gap-8">
          {teamMembers.map((doctor) => (
            <motion.div 
              key={doctor.id}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="grid md:grid-cols-2">
                <div>
                  <img 
                    src={doctor.image} 
                    alt={doctor.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {doctor.name}
                  </h3>
                  <p className="text-green-700 mb-3">{doctor.role}</p>
                  <p className="text-gray-600 mb-4">
                    Specialty: {doctor.specialty}
                  </p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-700 mb-2">
                      Professional Highlights
                    </h4>
                    <ul className="space-y-1 text-gray-600">
                      {doctor.qualifications?.map((qual, index) => (
                        <li key={index} className="flex items-center">
                          <GraduationCap className="w-4 h-4 mr-2 text-green-600" />
                          {qual}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex space-x-3 mt-4">
                    <a 
                      href={`tel:${doctor.contact?.phone}`} 
                      className="text-green-700 hover:text-green-900"
                    >
                      <Phone className="w-5 h-5" />
                    </a>
                    <a 
                      href={`mailto:${doctor.contact?.email}`} 
                      className="text-green-700 hover:text-green-900"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>

                  <button 
                    className="mt-4 w-full bg-green-700 text-white py-2 rounded-full hover:bg-green-800 transition flex items-center justify-center"
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    Book Appointment
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamPage;