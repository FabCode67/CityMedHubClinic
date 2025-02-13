import React from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock
} from "lucide-react";

const LocationContactPage = () => {
  return (
    <section id='contact' className="bg-gray-50 md:py-16 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="md:mb-8 mb-2">
              <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center">
                Our Location
              </h2>
              <div className="bg-white rounded-xl shadow-lg md:p-6 p-1">

                <img
                  src="/home2.jpg"
                  alt="City MedHub Clinic Location"
                  width={800}
                  height={600}
                  className="rounded-xl"
                />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl md:p-8 p-2">
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
            <p className="text-gray-700 mt-4 flex">
              <MapPin className="  mr-2 text-green-700" />

              <strong className='mr-1'>Address:</strong> Gahanga Sector, Kicukiro District, Kigali, KK 15 Rd
            </p>
          </div>
        </div>
       

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.3138177530163!2d30.09796958527671!3d-2.0302266926695864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca90e59976157%3A0x40c41787cb1ad53c!2sCity%20MedHub%20Clinic!5e0!3m2!1sen!2srw!4v1739459900093!5m2!1sen!2srw" width="100%"
          height="300" style={{ border: 0 }}
          allowFullScreen
           loading="lazy" ></iframe>
      </div>
    </section>
  );
};

export default LocationContactPage;