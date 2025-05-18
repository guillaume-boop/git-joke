
import React from 'react';
import { Check } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="bg-white">
      <div className="container">
        <div className="section-title">
          <h2>À propos</h2>
          <p className="text-vhs-green-medium mt-4 max-w-2xl mx-auto">
            Une équipe professionnelle à votre service depuis plus de 10 ans
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1518495973542-4542c06a5843" 
                alt="Notre équipe au travail" 
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-8 -right-8 bg-vhs-green-dark text-white p-4 rounded-lg shadow-lg">
                <div className="text-4xl font-bold">10+</div>
                <div>années d'expérience</div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-6">Notre expertise à votre service</h3>
            <p className="text-gray-600 mb-6">
              Vert Horizon Services est une entreprise familiale spécialisée dans l'entretien des jardins et 
              espaces verts. Notre équipe de professionnels qualifiés met tout son savoir-faire à votre service 
              pour embellir et entretenir vos extérieurs.
            </p>
            <p className="text-gray-600 mb-8">
              Basés dans la région lyonnaise, nous intervenons chez les particuliers, les entreprises et les 
              collectivités. Notre philosophie : un travail soigné, des conseils personnalisés et un respect 
              total de l'environnement.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start space-x-3">
                <div className="bg-vhs-green-dark rounded-full p-1 mt-1">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="text-base font-semibold">Professionnalisme</h4>
                  <p className="text-sm text-gray-600">Personnel qualifié et formé</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="bg-vhs-green-dark rounded-full p-1 mt-1">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="text-base font-semibold">Respect des délais</h4>
                  <p className="text-sm text-gray-600">Ponctualité et rigueur</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="bg-vhs-green-dark rounded-full p-1 mt-1">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="text-base font-semibold">Assurance professionnelle</h4>
                  <p className="text-sm text-gray-600">Garantie et sécurité</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="bg-vhs-green-dark rounded-full p-1 mt-1">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="text-base font-semibold">Écoute client</h4>
                  <p className="text-sm text-gray-600">Conseils personnalisés</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
