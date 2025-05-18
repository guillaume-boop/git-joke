
import React from 'react';

const HeroSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="accueil"
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ 
        backgroundImage: `url('https://images.unsplash.com/photo-1500673922987-e212871fec22')` 
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      
      <div className="relative container text-center text-white z-10">
        <h1 className="mb-6 animate-fade-in">Redonnez vie à vos extérieurs</h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-fade-in opacity-90">
          Services professionnels d'entretien de jardins et espaces verts dans votre région
        </p>
        <button onClick={scrollToContact} className="btn-primary text-lg animate-fade-in-up">
          Demander un devis gratuit
        </button>
      </div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
