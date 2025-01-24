import React from 'react';
import { 
  Stethoscope, 
  MapPin, 
  Phone, 
  Mail, 
  Clock 
} from "lucide-react";
import Link from 'next/link';

const Footer = () => {
  const services = [
    "Pediatrics",
    "Internal Medicine",
    "Gynecology & Obstetrics",
    "General Medicine",
    "Dentistry",
    "Laboratory Services"
  ];

  const quickLinks = [
    "Home",
    "About",
    "Services",
    "Team",
    "Partners",
    "Contact"
  ];

  return (
    <footer className="bg-blue-900 text-white py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Stethoscope className="w-8 h-8 mr-3 text-white" />
              <h3 className="text-xl font-bold">City MedHub Clinic</h3>
            </div>
            <p className="text-gray-300 text-sm">
              Your trusted healthcare partner, dedicated to providing compassionate and innovative medical care.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index} className="text-gray-300 hover:text-white transition">
                  {service}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index} className="text-gray-300 hover:text-white transition">
                  <a href={`#${link.toLowerCase().replace(' ', '-')}`}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-3 text-white" />
                <span className="text-gray-300">Gahanga Sector, Kicukiro District, Kigali</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-white" />
                <span className="text-gray-300">(+250) 780-553-772</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-white" />
                <span className="text-gray-300">info@citymedhubclinic.rw</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-3 text-white" />
                <span className="text-gray-300">24/7 Emergency Services</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-blue-800 text-center">
          <p className="text-gray-300">
            © {new Date().getFullYear()} <Link
              href="https://xanahealth.io"
            >
              XanaHealth
            </Link>.
              All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;