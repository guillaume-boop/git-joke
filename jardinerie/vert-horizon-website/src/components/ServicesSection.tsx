
import React, { useState } from 'react';
import { Scissors, TreePine, Flower, Shovel, Palmtree, House } from "lucide-react";

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
}

const services: Service[] = [
  {
    id: 'tonte',
    title: 'Tonte de pelouse',
    description: 'Entretien régulier de votre pelouse avec ramassage des déchets verts, pour un gazon parfaitement entretenu tout au long de l\'année.',
    icon: <Flower className="w-10 h-10 text-vhs-green-dark" />,
    image: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86'
  },
  {
    id: 'taille',
    title: 'Taille de haies',
    description: 'Taille et entretien de vos haies et arbustes selon les règles de l\'art, permettant à vos plantes de se développer harmonieusement.',
    icon: <Scissors className="w-10 h-10 text-vhs-green-dark" />,
    image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9'
  },
  {
    id: 'elagage',
    title: 'Élagage et abattage',
    description: 'Élagage d\'arbres, suppression de branches mortes, et abattage contrôlé lorsque nécessaire, par des professionnels qualifiés.',
    icon: <TreePine className="w-10 h-10 text-vhs-green-dark" />,
    image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027'
  },
  {
    id: 'debroussaillage',
    title: 'Débroussaillage',
    description: 'Nettoyage et dégagement des terrains envahis par la végétation, permettant de prévenir les risques d\'incendie et d\'améliorer l\'accessibilité.',
    icon: <Shovel className="w-10 h-10 text-vhs-green-dark" />,
    image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb'
  },
  {
    id: 'entretien',
    title: 'Entretien de massifs',
    description: 'Désherbage, binage et entretien de vos massifs floraux et potagers, pour des espaces colorés et bien entretenus.',
    icon: <Palmtree className="w-10 h-10 text-vhs-green-dark" />,
    image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843'
  },
  {
    id: 'nettoyage',
    title: 'Nettoyage de terrasse',
    description: 'Nettoyage haute pression de vos terrasses, allées et surfaces extérieures pour retrouver leur aspect d\'origine.',
    icon: <House className="w-10 h-10 text-vhs-green-dark" />,
    image: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716'
  },
];

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <section id="services" className="bg-vhs-beige/30">
      <div className="container">
        <div className="section-title">
          <h2>Nos services</h2>
          <p className="text-vhs-green-medium mt-4 max-w-2xl mx-auto">
            Des solutions sur mesure pour l'entretien et l'embellissement de vos espaces verts
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="service-card cursor-pointer"
              onClick={() => setSelectedService(service)}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="mb-4">{service.icon}</div>
                <h3 className="mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Service Details Modal */}
        {selectedService && (
          <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="h-64 overflow-hidden">
                <img 
                  src={selectedService.image} 
                  alt={selectedService.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <h3 className="mb-4">{selectedService.title}</h3>
                  <button 
                    onClick={() => setSelectedService(null)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <p className="text-gray-600 mb-4">{selectedService.description}</p>
                <div className="text-gray-700">
                  <h4 className="text-lg font-medium mb-2">Ce que nous proposons:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Service personnalisé selon vos besoins</li>
                    <li>Équipe professionnelle et expérimentée</li>
                    <li>Matériel de qualité et adapté</li>
                    <li>Respect des normes environnementales</li>
                    <li>Devis gratuit et sans engagement</li>
                  </ul>
                </div>
                <button 
                  onClick={() => {
                    setSelectedService(null);
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="btn-primary mt-6"
                >
                  Demander un devis
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServicesSection;
