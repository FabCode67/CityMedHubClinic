import { useState } from 'react';
import { Button } from './ui/button';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';
import Image from 'next/image';
import AppointmentModal from './AppointmentModel';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 md:px-8 px-2">
        <Link href="/" className="text-medblue font-bold text-xl">
          <Image height={300} width={300} src="/logoo.jpg" alt="Amaris" className=" object-cover" />
        </Link>
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-medblue focus:outline-none">
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
        <div className={`md:flex space-x-8 text-medblue ${menuOpen ? 'block' : 'hidden'} md:block hidden`}>
          <Link href="/" className="hover:text-blue-900">Home</Link>
          <Link href="#about" className="hover:text-blue-900">About us</Link>
          <Link href="#partners" className="hover:text-blue-900">Partners</Link>
          <Link href="#services" className="hover:text-blue-900">Services</Link>
          <Link href="#team" className="hover:text-blue-900">Team</Link>
          <Link href="#facilities" className="hover:text-blue-900">Facilities</Link>
          <Link href="#contact" className="hover:text-blue-900">Contact us</Link>
        </div>
        <div className="space-x-4 hidden md:block">
          <Button
            onClick={() => setModalOpen(true)}
            className="text-white border-medblue bg-blue-800 rounded-full">BOOK APPOINTMENT</Button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-white py-4">
          <Link onClick={() => setMenuOpen(!menuOpen)} href="/" className="block px-8 py-2 text-medblue hover:text-blue-900">Home</Link>
          <Link onClick={() => setMenuOpen(!menuOpen)} href="#about" className="block px-8 py-2 text-medblue hover:text-blue-900">About us</Link>
          <Link onClick={() => setMenuOpen(!menuOpen)} href="#partners" className="block px-8 py-2 text-medblue hover:text-blue-900">Partners</Link>
          <Link onClick={() => setMenuOpen(!menuOpen)} href="#services" className="block px-8 py-2 text-medblue hover:text-blue-900">Services</Link>
          <Link onClick={() => setMenuOpen(!menuOpen)} href="#team" className="block px-8 py-2 text-medblue hover:text-blue-900">Team</Link>
          <Link onClick={() => setMenuOpen(!menuOpen)} href="#facilities" className="block px-8 py-2 text-medblue hover:text-blue-900">facilities</Link>
          <Link onClick={() => setMenuOpen(!menuOpen)} href="#contact" className="block px-8 py-2 text-medblue hover:text-blue-900">Contact us</Link>
        </div>
      )}
      <AppointmentModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </nav>
  );
};

export default Navbar;
