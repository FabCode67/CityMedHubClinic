// components/TeamSection.tsx
import Image from 'next/image';
import { useState } from 'react';
import AppointmentModal from './AppointmentModel';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  availability: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Dr. Jean Paul Basabose",
    role: "Internist-Cardiologist",
    image: "/images/paul.jpg",
    availability: "Thursdays & Saturdays"
  },
  {
    id: 2,
    name: "Dr. Linda MUNEZERO",
    role: "Head of Clinical Activities",
    image: "/linda.jpg",
    availability: "Monday - Friday"
  },
  {
    id: 3,
    name: "Dr. Flora F. RWIYAMILIRA",
    role: "Pediatrician",
    image: "/images/flora.jpg",
    availability: "TMonday - Friday"
  },
  {
    id: 4,
    name: "Dr. Aimable MURAMIRA",
    role: "General Practitioner",
    image: "/images/aimable.jpg",
    availability: "Monday - Friday"
  },
  {
    id: 5,
    name: "Dr. Lyse BUTUNGANE",
    role: "General Practitione",
    image: "/images/lyse.jpg",
    availability: "Monday - Friday"
  },
  {
    id: 6,
    name: "Stephen Kalisa",
    role: "Dentist",
    image: "/images/kalisa.jpg",
    availability: "Monday - Friday"
  }
];

const TeamSection = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Expert Medical Team
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our highly qualified healthcare professionals are dedicated to providing
            the best medical care with compassion and expertise.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  objectFit='contain'
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium mb-2">
                  {member.role}
                </p>


                <div className="pt-4 border-t border-gray-200">
                  <h4 className="text-sm font-semibold text-gray-900 mb-1">
                    Availability
                  </h4>
                  <p className="text-sm text-gray-600">
                    {member.availability}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            Ready to schedule an appointment with one of our specialists?
          </p>
          <button
            onClick={() => setModalOpen(true)}
            className="bg-blue-800 text-white px-8 py-3 rounded-full hover:bg-blue-900 transition-colors duration-300"
          >
            Book an Appointment
          </button>
        </div>
      </div>
      <AppointmentModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
};

export default TeamSection;