
import React from 'react';

const MapSection = () => {
  // Les communes desservies par l'entreprise
  const communes = [
    "Lyon", "Villeurbanne", "Bron", "Vénissieux", "Saint-Priest",
    "Vaulx-en-Velin", "Caluire-et-Cuire", "Rillieux-la-Pape", "Décines-Charpieu",
    "Meyzieu", "Saint-Fons", "Oullins", "Pierre-Bénite", "Saint-Genis-Laval",
    "Écully", "Tassin-la-Demi-Lune", "Francheville", "Sainte-Foy-lès-Lyon"
  ];
  
  const [searchTerm, setSearchTerm] = React.useState('');
  
  const filteredCommunes = communes.filter(commune => 
    commune.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="zone" className="bg-vhs-beige/30">
      <div className="container">
        <div className="section-title">
          <h2>Zone d'intervention</h2>
          <p className="text-vhs-green-medium mt-4 max-w-2xl mx-auto">
            Nous intervenons dans Lyon et sa périphérie
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden h-96">
            {/* OpenStreetMap iframe */}
            <iframe 
              src="https://www.openstreetmap.org/export/embed.html?bbox=4.7543716430664075%2C45.7077366847994%2C4.9014091491699226%2C45.80577109301874&amp;layer=mapnik" 
              className="w-full h-full border-0"
              title="Zone d'intervention"
              loading="lazy"
            ></iframe>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="mb-6">Communes desservies</h3>
            
            <div className="mb-6">
              <input 
                type="text" 
                placeholder="Rechercher une commune..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-vhs-green-dark"
              />
            </div>
            
            <div className="h-64 overflow-y-auto pr-2">
              <ul className="grid grid-cols-2 gap-2">
                {filteredCommunes.length > 0 ? (
                  filteredCommunes.map((commune, index) => (
                    <li 
                      key={index}
                      className="bg-gray-50 p-2 rounded flex items-center"
                    >
                      <svg className="w-4 h-4 text-vhs-green-dark mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                      {commune}
                    </li>
                  ))
                ) : (
                  <li className="col-span-2 text-center py-4 text-gray-500">Aucune commune trouvée</li>
                )}
              </ul>
            </div>
            
            <p className="mt-4 text-gray-600 text-sm">
              Vous ne trouvez pas votre commune ? Contactez-nous pour vérifier si nous pouvons intervenir chez vous !
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
