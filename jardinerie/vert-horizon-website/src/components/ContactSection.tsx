
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    service: '',
    message: '',
    fichier: null as File | null,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, fichier: e.target.files![0] }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      toast({
        title: "Demande envoyée !",
        description: "Nous vous recontacterons dans les plus brefs délais.",
        duration: 5000,
      });
      setFormData({
        nom: '',
        email: '',
        telephone: '',
        service: '',
        message: '',
        fichier: null,
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="bg-white">
      <div className="container">
        <div className="section-title">
          <h2>Contact</h2>
          <p className="text-vhs-green-medium mt-4 max-w-2xl mx-auto">
            Demandez un devis gratuit ou contactez-nous pour plus d'informations
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact information */}
          <div className="lg:col-span-1">
            <div className="bg-vhs-green-dark text-white p-8 rounded-lg h-full">
              <h3 className="text-white mb-6">Informations de contact</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Phone className="w-5 h-5 mt-1" />
                  <div>
                    <div className="font-medium">Téléphone</div>
                    <a href="tel:+33472000000" className="text-vhs-beige hover:underline">04 72 00 00 00</a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Mail className="w-5 h-5 mt-1" />
                  <div>
                    <div className="font-medium">Email</div>
                    <a href="mailto:contact@verthorizon.fr" className="text-vhs-beige hover:underline">contact@verthorizon.fr</a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <MapPin className="w-5 h-5 mt-1" />
                  <div>
                    <div className="font-medium">Adresse</div>
                    <address className="not-italic text-vhs-beige">
                      123 Rue des Jardins<br />
                      69000 Lyon<br />
                      France
                    </address>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Clock className="w-5 h-5 mt-1" />
                  <div>
                    <div className="font-medium">Horaires</div>
                    <div className="text-vhs-beige">
                      Lundi - Vendredi: 8h - 18h<br />
                      Samedi: 9h - 12h<br />
                      Dimanche: Fermé
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="mb-6">Demande de devis gratuit</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-1">
                      Nom complet *
                    </label>
                    <input 
                      type="text" 
                      id="nom"
                      name="nom"
                      value={formData.nom}
                      onChange={handleChange}
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-vhs-green-dark"
                      placeholder="Votre nom"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email *
                    </label>
                    <input 
                      type="email" 
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-vhs-green-dark"
                      placeholder="votre.email@exemple.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="telephone" className="block text-sm font-medium text-gray-700 mb-1">
                      Téléphone *
                    </label>
                    <input 
                      type="tel" 
                      id="telephone"
                      name="telephone"
                      value={formData.telephone}
                      onChange={handleChange}
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-vhs-green-dark"
                      placeholder="06 00 00 00 00"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                      Service souhaité *
                    </label>
                    <select 
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-vhs-green-dark bg-white"
                    >
                      <option value="">Sélectionner un service</option>
                      <option value="tonte">Tonte de pelouse</option>
                      <option value="taille">Taille de haies</option>
                      <option value="elagage">Élagage et abattage</option>
                      <option value="debroussaillage">Débroussaillage</option>
                      <option value="entretien">Entretien de massifs</option>
                      <option value="nettoyage">Nettoyage de terrasse</option>
                      <option value="autre">Autre service</option>
                    </select>
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Votre message *
                  </label>
                  <textarea 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-vhs-green-dark"
                    placeholder="Décrivez votre projet ou posez-nous vos questions..."
                  ></textarea>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="fichier" className="block text-sm font-medium text-gray-700 mb-1">
                    Joindre une photo (optionnel)
                  </label>
                  <input 
                    type="file" 
                    id="fichier"
                    name="fichier"
                    onChange={handleFileChange}
                    accept="image/*"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-vhs-green-dark file:mr-4 file:py-2 file:px-4
                    file:rounded-md file:border-0 file:text-sm file:font-semibold
                    file:bg-vhs-green-dark file:text-white
                    hover:file:bg-vhs-green-medium"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Formats acceptés : JPG, PNG, GIF (max 5 Mo)
                  </p>
                </div>
                
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="btn-primary w-full flex justify-center items-center"
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Envoi en cours...
                    </span>
                  ) : (
                    'Envoyer ma demande'
                  )}
                </button>
                
                <p className="mt-4 text-xs text-gray-500 text-center">
                  En soumettant ce formulaire, vous acceptez que vos informations soient utilisées uniquement 
                  dans le cadre de votre demande et de la relation commerciale qui peut en découler.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
