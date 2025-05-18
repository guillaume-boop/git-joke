
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Transformation complète de jardin",
    description: "Réaménagement d'un espace extérieur avec taille de haies, tonte de pelouse et création de massifs floraux.",
    beforeImage: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3",
    afterImage: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
  },
  {
    id: 2,
    title: "Entretien de grand domaine",
    description: "Entretien régulier d'un domaine de 5000m² avec tonte, débroussaillage et taille d'arbustes.",
    beforeImage: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
    afterImage: "https://images.unsplash.com/photo-1518495973542-4542c06a5843",
  },
  {
    id: 3,
    title: "Nettoyage et remise en état",
    description: "Nettoyage complet d'un jardin laissé à l'abandon et remise en état avec tonte et plantations.",
    beforeImage: "https://images.unsplash.com/photo-1433086966358-54859d0ed716",
    afterImage: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
  }
];

const testimonials = [
  {
    id: 1,
    name: "Marie D.",
    location: "Lyon",
    rating: 5,
    text: "Une équipe sérieuse et professionnelle qui a totalement transformé mon jardin. Je recommande vivement leurs services !"
  },
  {
    id: 2,
    name: "Pierre L.",
    location: "Saint-Étienne",
    rating: 5,
    text: "Travail soigné, équipe ponctuelle et à l'écoute de mes besoins. Excellent rapport qualité-prix."
  },
  {
    id: 3,
    name: "Sophie M.",
    location: "Villeurbanne",
    rating: 4,
    text: "Très satisfaite du résultat. Ils ont su me conseiller sur les meilleures options pour mon petit jardin urbain."
  },
  {
    id: 4,
    name: "Jean-Claude P.",
    location: "Bron",
    rating: 5,
    text: "Cela fait maintenant 3 ans que je fais appel à leurs services pour l'entretien de ma propriété et je n'ai jamais été déçu."
  }
];

const GallerySection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="realisations">
      <div className="container">
        <div className="section-title">
          <h2>Nos réalisations</h2>
          <p className="text-vhs-green-medium mt-4 max-w-2xl mx-auto">
            Découvrez quelques-unes de nos récentes transformations
          </p>
        </div>

        {/* Projects gallery */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="grid grid-cols-2">
                <div className="relative h-64">
                  <span className="absolute top-2 left-2 bg-vhs-beige px-2 py-1 text-sm font-medium rounded">Avant</span>
                  <img src={project.beforeImage} alt="Avant" className="w-full h-full object-cover" />
                </div>
                <div className="relative h-64">
                  <span className="absolute top-2 left-2 bg-vhs-green-dark text-white px-2 py-1 text-sm font-medium rounded">Après</span>
                  <img src={project.afterImage} alt="Après" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="bg-vhs-beige/30 rounded-xl py-10 px-4 md:px-8">
          <h3 className="text-center mb-8">Ce que disent nos clients</h3>
          
          <div className="relative max-w-3xl mx-auto">
            <div className="testimony-card min-h-[200px] flex flex-col justify-center items-center text-center p-8">
              <div className="flex mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-lg italic mb-4">"{testimonials[currentTestimonial].text}"</blockquote>
              <div className="font-semibold">{testimonials[currentTestimonial].name}</div>
              <div className="text-gray-500 text-sm">{testimonials[currentTestimonial].location}</div>
            </div>
            
            <button 
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <button 
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full ${
                    currentTestimonial === index ? 'bg-vhs-green-dark' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
