import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock
} from "lucide-react";

const LocationContactPage = () => {
  return (
    <section id='contact' className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center">
                <MapPin className="w-8 h-8 mr-3 text-green-700" />
                Our Location
              </h2>
              <div className="bg-white rounded-xl shadow-lg p-6">
                <p className="text-gray-700 mb-4">
                  <strong>Address:</strong> Gahanga Sector, Kicukiro District, Kigali, KK 15 Rd
                </p>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.4722034049407!2d30.098514!3d-1.9703659999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwNTgnMTMuMyJTIDMwwrAwNSczMC43IkU!5e0!3m2!1sen!2srw!4v1684234567890!5m2!1sen!2srw"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>

           
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Get In Touch
            </h2>
            <p className="text-gray-600">
              {"For immediate assistance or to schedule an appointment, please call our clinic directly. Were available 24/7 to address your healthcare needs."}
            </p>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                <Phone className="w-6 h-6 mr-3 text-green-700" />
                Contact Information
              </h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 text-green-700" />
                  <span className="text-gray-700">(+250) 780-553-772</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-3 text-green-700" />
                  <span className="text-gray-700">info@citymedhubclinic.rw</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-3 text-green-700" />
                  <span className="text-gray-700">24/7 Emergency Services</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationContactPage;