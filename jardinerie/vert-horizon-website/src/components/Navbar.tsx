
import React, { useState, useEffect } from 'react';
import { Menu, X } from "lucide-react";
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      'fixed w-full z-50 transition-all duration-300',
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    )}>
      <div className="container flex justify-between items-center">
        <div className="flex items-center">
          <a href="#" className="flex items-center">
            <span className="text-vhs-green-dark font-playfair font-bold text-2xl">Vert Horizon</span>
            <span className="text-vhs-green-medium font-playfair ml-1">Services</span>
          </a>
        </div>
        
        {/* Desktop navigation */}
        <div className="hidden md:flex space-x-8">
          <button onClick={() => scrollToSection('accueil')} className="font-medium hover:text-vhs-green-dark">Accueil</button>
          <button onClick={() => scrollToSection('services')} className="font-medium hover:text-vhs-green-dark">Services</button>
          <button onClick={() => scrollToSection('realisations')} className="font-medium hover:text-vhs-green-dark">Réalisations</button>
          <button onClick={() => scrollToSection('about')} className="font-medium hover:text-vhs-green-dark">À propos</button>
          <button onClick={() => scrollToSection('zone')} className="font-medium hover:text-vhs-green-dark">Zone d'intervention</button>
          <button onClick={() => scrollToSection('contact')} className="font-medium hover:text-vhs-green-dark">Contact</button>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="p-2">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full border-t border-gray-100 shadow-md">
          <div className="flex flex-col p-4 space-y-3">
            <button onClick={() => scrollToSection('accueil')} className="font-medium hover:text-vhs-green-dark py-2">Accueil</button>
            <button onClick={() => scrollToSection('services')} className="font-medium hover:text-vhs-green-dark py-2">Services</button>
            <button onClick={() => scrollToSection('realisations')} className="font-medium hover:text-vhs-green-dark py-2">Réalisations</button>
            <button onClick={() => scrollToSection('about')} className="font-medium hover:text-vhs-green-dark py-2">À propos</button>
            <button onClick={() => scrollToSection('zone')} className="font-medium hover:text-vhs-green-dark py-2">Zone d'intervention</button>
            <button onClick={() => scrollToSection('contact')} className="font-medium hover:text-vhs-green-dark py-2">Contact</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
