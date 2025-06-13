
import React, { useState } from 'react';
import { Milk, Droplets, Coffee, IceCream, Settings, Lightbulb, Coffee as HotDrink, GlassWater, Cookie } from "lucide-react";

interface MenuItem {
  name: string;
  description: string;
  price: string;
  image?: string;
}

interface MenuCategory {
  id: string;
  name: string;
  emoji?: string;
  items: MenuItem[];
}

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState<string>('hot-drinks');
  
  const menuCategories: MenuCategory[] = [
    {
      id: 'hot-drinks',
      name: 'Boissons Chaudes',
      emoji: '☕',
      items: [
        {
          name: 'Espresso Intenso',
          description: 'Double shot d\'espresso, arômes puissants et concentrés.',
          price: '3,00 €',
          image: 'https://i.pinimg.com/736x/8a/50/9e/8a509e80a255b25b54774a4437debf0e.jpg'
        },
        {
          name: 'Latte Signature',
          description: 'Espresso, lait micro-moussé, fine couche de velouté.',
          price: '4,50 €',
          image: 'https://images.unsplash.com/photo-1534687941688-651ccaafbff8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80'
        },
        {
          name: 'Caramel Macchiato',
          description: 'Lait chaud, mousse légère, shot d\'espresso et filet de caramel.',
          price: '5,20 €',
          image: 'https://i.pinimg.com/736x/b7/55/6a/b7556a0097eceef54f77ebebb8a71b42.jpg'
        },
        {
          name: 'Chai Latte Épicé',
          description: 'Mélange de thés noirs, épices (cannelle, cardamome), lait doux.',
          price: '4,80 €',
          image: 'https://i.pinimg.com/736x/94/97/67/949767aa27458926d960083c21e34136.jpg'
        },
        {
          name: 'Matcha Latte Japonais',
          description: 'Poudre de matcha fouettée, lait onctueux, mousse légère.',
          price: '5,00 €',
          image: 'https://i.pinimg.com/736x/f6/6a/c5/f66ac5e668beff381baf9dca7c159ff1.jpg'
        },
        {
          name: 'Pumpkin Spice Latte (saisonnier)',
          description: 'Espresso, lait chaud, sirop citrouille et épices automnales.',
          price: '5,50 €',
          image: 'https://i.pinimg.com/736x/0d/b2/53/0db25332a0c77bfe34f149bd4a9dcbe9.jpg'
        }
      ]
    },
    {
      id: 'cold-drinks',
      name: 'Boissons Froides',
      emoji: '🥤',
      items: [
        {
          name: 'Iced Latte',
          description: 'Espresso sur glaçons, lait frais, finition mousse légère.',
          price: '4,70 €',
          image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80'
        },
        {
          name: 'Cold Brew Premium',
          description: 'Infusion lente 16 h à froid, goût doux, faible acidité.',
          price: '5,20 €',
          image: 'https://i.pinimg.com/736x/bd/f4/97/bdf4977d36ab2d6f4b7720819c519a51.jpg'
        },
        {
          name: 'Frappuccino Café',
          description: 'Café frappé, glace pilée, lait, chantilly et sirop vanille.',
          price: '5,90 €',
          image: 'https://i.pinimg.com/736x/06/8f/c8/068fc85071371dccc8e8cd4f0e610d2b.jpg'
        },
        {
          name: 'Frappuccino Chocolat & Cookies',
          description: 'Base crème, morceaux de cookie, coulis chocolat, chantilly.',
          price: '6,20 €',
          image: 'https://i.pinimg.com/736x/b4/b3/c7/b4b3c78addfe39d323561ccd80d84821.jpg'
        },
        {
          name: 'Matcha Frappuccino',
          description: 'Base matcha, lait, glace pilée, touche de chantilly.',
          price: '6,00 €',
          image: 'https://i.pinimg.com/736x/2e/74/1c/2e741ca49a1a40ae1e51aba423b482cc.jpg'
        },
        {
          name: 'Pink Berry Refresher',
          description: 'Infusion fruits rouges, hibiscus, morceaux de fraise, servi frais.',
          price: '5,50 €',
          image: 'https://i.pinimg.com/736x/b6/df/8a/b6df8a5c7776ad3f230dccc8735ae08d.jpg'
        }
      ]
    },
    {
      id: 'bakery',
      name: 'Douceurs & Bakery',
      emoji: '🍪',
      items: [
        {
          name: 'Muffin Myrtille & Citron',
          description: 'Muffin moelleux, myrtilles juteuses et zestes de citron.',
          price: '3,80 €',
          image: 'https://i.pinimg.com/736x/7f/35/8b/7f358bc3261ccf60b115840cbbf011be.jpg'
        },
        {
          name: 'Cookie Triple Chocolat',
          description: 'Cookie généreux, pépites de chocolat noir, lait et blanc.',
          price: '2,50 €',
          image: 'https://i.pinimg.com/736x/c0/e4/26/c0e426d775a0c7cd809869d6ccd45c90.jpg'
        },
        {
          name: 'Brownie Fondant au Chocolat',
          description: 'Carré intense, fondant cœur chocolat, éclats de noix.',
          price: '3,90 €',
          image: 'https://i.pinimg.com/736x/08/ea/5f/08ea5f788f203cd6cf6340c0ca203fe3.jpg'
        },
        {
          name: 'Scone Vanille & Raisins',
          description: 'Scone tiède, raisins moelleux, servi avec confiture maison.',
          price: '3,50 €',
          image: 'https://i.pinimg.com/736x/d6/47/62/d64762be3b12e9866c0fa2af016ae625.jpg'
        },
        {
          name: 'Tartelette Citron Meringuée',
          description: 'Pâte sablée, crème citron acidulée et meringue dorée.',
          price: '4,50 €',
          image: 'https://i.pinimg.com/736x/11/91/67/1191679b67ec87b4855fc156df2a1e69.jpg'
        }
      ]
    }
  ];
  
  const activeItems = menuCategories.find(category => category.id === activeCategory)?.items || [];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-cafe-creme py-20 md:py-28">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-playfair mb-6">La Carte</h1>
            <p className="text-lg text-gray-600">
              Découvrez nos spécialités préparées avec passion et des ingrédients soigneusement sélectionnés.
            </p>
          </div>
        </div>
      </section>
      
      {/* Menu Categories Navigation */}
      <section className="py-6 border-b border-gray-200 sticky top-16 md:top-20 bg-white z-10 shadow-sm">
        <div className="container-custom">
          {/* Mobile: Grid layout */}
          <div className="md:hidden">
            <div className="grid grid-cols-1 gap-3">
              {menuCategories.map(category => {
                const IconComponent = category.id === 'hot-drinks' ? HotDrink : 
                                    category.id === 'cold-drinks' ? GlassWater : Cookie;
                return (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-300 border-2 ${
                      activeCategory === category.id
                        ? 'bg-cafe-ocre text-white border-cafe-ocre shadow-lg'
                        : 'bg-white hover:bg-cafe-creme border-gray-200 text-gray-700 hover:border-cafe-ocre/30'
                    }`}
                  >
                    <IconComponent className={`w-5 h-5 flex-shrink-0 ${
                      activeCategory === category.id ? 'text-white' : 'text-cafe-ocre'
                    }`} />
                    <span className="font-medium text-left">{category.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
          
          {/* Desktop: Centered layout */}
          <div className="hidden md:flex justify-center gap-4">
            {menuCategories.map(category => {
              const IconComponent = category.id === 'hot-drinks' ? HotDrink : 
                                  category.id === 'cold-drinks' ? GlassWater : Cookie;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-3 px-8 py-4 rounded-2xl transition-all duration-300 border-2 ${
                    activeCategory === category.id
                      ? 'bg-cafe-ocre text-white border-cafe-ocre shadow-lg transform scale-105'
                      : 'bg-white hover:bg-cafe-creme border-gray-200 text-gray-700 hover:border-cafe-ocre/30 hover:shadow-md'
                  }`}
                >
                  <IconComponent className={`w-6 h-6 ${
                    activeCategory === category.id ? 'text-white' : 'text-cafe-ocre'
                  }`} />
                  <span className="font-medium text-lg">{category.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>
      
      {/* Menu Items */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair flex items-center justify-center gap-3 mb-4">
              {(() => {
                const activeItem = menuCategories.find(category => category.id === activeCategory);
                const IconComponent = activeCategory === 'hot-drinks' ? HotDrink : 
                                    activeCategory === 'cold-drinks' ? GlassWater : Cookie;
                return (
                  <>
                    <IconComponent className="w-8 h-8 text-cafe-ocre" />
                    <span className="text-cafe-brun">{activeItem?.name}</span>
                  </>
                );
              })()}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cafe-ocre to-cafe-olive mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {activeItems.map((item, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col md:flex-row border border-cafe-ocre/10 w-full"
              >
                {/* Image uniquement sur desktop */}
                {item.image && (
                  <div className="hidden md:block md:w-2/5">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                
                {/* Contenu principal */}
                <div className={`${item.image ? 'md:w-3/5' : 'w-full'} p-4 md:p-6 flex flex-col justify-between relative min-w-0`}>
                  {/* Icône décorative mobile */}
                  <div className="md:hidden absolute top-3 right-3 w-10 h-10 bg-cafe-ocre/10 rounded-full flex items-center justify-center flex-shrink-0">
                    {activeCategory === 'hot-drinks' ? <HotDrink className="w-5 h-5 text-cafe-brun" /> : 
                     activeCategory === 'cold-drinks' ? <GlassWater className="w-5 h-5 text-cafe-olive" /> : 
                     activeCategory === 'bakery' ? <Cookie className="w-5 h-5 text-cafe-ocre" /> : <GlassWater className="w-5 h-5 text-cafe-olive" />}
                  </div>
                  
                  <div className="min-w-0">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 pr-12 sm:pr-0 gap-2">
                      <h3 className="text-lg md:text-xl font-playfair text-cafe-brun font-semibold leading-tight break-words">{item.name}</h3>
                      <div className="flex-shrink-0">
                        <span className="text-cafe-ocre font-bold text-base md:text-lg bg-cafe-ocre/10 px-2 md:px-3 py-1 rounded-full whitespace-nowrap">{item.price}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base break-words">{item.description}</p>
                  </div>
                  
                  {/* Barre décorative */}
                  <div className="mt-3 md:mt-4 h-1 w-12 md:w-16 bg-gradient-to-r from-cafe-ocre to-cafe-olive rounded-full"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Personnalisation Section */}
      <section className="py-12 bg-cafe-creme">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-playfair mb-8 text-center text-cafe-brun flex items-center justify-center gap-3">
              <Settings className="w-8 h-8 text-cafe-ocre" />
              Personnalisation
            </h3>
            
            {/* Grid responsive pour mobile */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
              {/* Laits alternatifs */}
              <div className="bg-white rounded-2xl p-4 md:p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-cafe-ocre/10">
                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-cafe-olive/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Milk className="w-5 h-5 md:w-6 md:h-6 text-cafe-olive" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-playfair font-semibold text-cafe-brun mb-2 text-sm md:text-base">Laits alternatifs</h4>
                    <div className="space-y-1 text-xs md:text-sm text-gray-600">
                      <div className="flex justify-between items-center">
                        <span>Soja</span>
                        <span className="text-cafe-ocre font-medium whitespace-nowrap">+ 0,60 €</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Avoine</span>
                        <span className="text-cafe-ocre font-medium whitespace-nowrap">+ 0,60 €</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Amande</span>
                        <span className="text-cafe-ocre font-medium whitespace-nowrap">+ 0,60 €</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Sirops aromatisés */}
              <div className="bg-white rounded-2xl p-4 md:p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-cafe-ocre/10">
                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-cafe-ocre/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Droplets className="w-5 h-5 md:w-6 md:h-6 text-cafe-ocre" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-playfair font-semibold text-cafe-brun mb-2 text-sm md:text-base">Sirops aromatisés</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-xs md:text-sm text-gray-600">
                      <div className="flex justify-between">
                        <span>Vanille</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Caramel</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Noisette</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Noix de coco</span>
                      </div>
                    </div>
                    <div className="mt-2 text-cafe-ocre font-medium text-xs md:text-sm whitespace-nowrap">+ 0,50 € chacun</div>
                  </div>
                </div>
              </div>
              
              {/* Shot d'espresso */}
              <div className="bg-white rounded-2xl p-4 md:p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-cafe-ocre/10">
                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-cafe-brun/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Coffee className="w-5 h-5 md:w-6 md:h-6 text-cafe-brun" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-playfair font-semibold text-cafe-brun mb-2 text-sm md:text-base">Shot d'espresso</h4>
                    <p className="text-xs md:text-sm text-gray-600 mb-2">Supplémentaire</p>
                    <div className="text-cafe-ocre font-bold text-base md:text-lg whitespace-nowrap">+ 1,10 €</div>
                  </div>
                </div>
              </div>
              
              {/* Chantilly maison */}
              <div className="bg-white rounded-2xl p-4 md:p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-cafe-ocre/10">
                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-cafe-creme/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <IceCream className="w-5 h-5 md:w-6 md:h-6 text-cafe-brun" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-playfair font-semibold text-cafe-brun mb-2 text-sm md:text-base">Chantilly maison</h4>
                    <p className="text-xs md:text-sm text-gray-600 mb-2">Fraîchement préparée</p>
                    <div className="text-cafe-ocre font-bold text-base md:text-lg whitespace-nowrap">+ 0,80 €</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Note informative */}
            <div className="mt-6 md:mt-8 bg-white/50 rounded-xl p-3 md:p-4 text-center">
              <p className="text-xs md:text-sm text-gray-600 flex items-center justify-center gap-2 flex-wrap">
                <Lightbulb className="w-4 h-4 text-cafe-ocre flex-shrink-0" />
                <span className="font-medium text-cafe-brun">Astuce :</span> 
                <span>Toutes les personnalisations peuvent être combinées selon vos goûts !</span>
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Allergies Notice */}
      <section className="py-8 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-xl font-playfair mb-4">Informations sur les allergènes</h3>
            <p className="text-gray-600">
              Nous vous invitons à nous signaler toute allergie ou intolérance alimentaire lors de votre commande.
              La liste complète des allergènes présents dans nos produits est disponible sur demande.
            </p>
          </div>
        </div>
      </section>
      

    </>
  );
};

export default Menu;

