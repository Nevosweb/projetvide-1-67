
import React from 'react';
import Button from '@/components/ui/Button';
import ScrollButton from '@/components/ui/ScrollButton';

const Home = () => {
  return <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-cover bg-center" style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80')`
    }}>
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-white mb-4 animate-fade-in">
            Votre lieu préféré pour des pauses gourmandes
          </h1>
          <p className="text-xl text-white mb-8 animate-fade-in">Café créé en 2023</p>
          <div className="flex flex-wrap justify-center gap-4">
            <ScrollButton to="/la-carte" variant="primary" className="min-w-[200px]">
              Découvrir la Carte
            </ScrollButton>
            <ScrollButton to="/contact" variant="secondary" className="min-w-[200px] bg-transparent text-white border-white hover:bg-white hover:text-cafe-brun">
              Nous contacter
            </ScrollButton>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="section-padding bg-cafe-creme">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-playfair mb-6">Bienvenue au Café template</h2>
            <p className="text-lg mb-8">
              Un lieu chaleureux où le temps s'arrête, où les arômes de café fraîchement torréfié se mêlent aux délices de nos pâtisseries maison. 
              Notre établissement vous accueille dans une ambiance à la fois élégante et décontractée.
            </p>
            <ScrollButton to="/notre-identite" variant="primary">
              Découvrir notre histoire
            </ScrollButton>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-playfair text-center mb-12">Nos Spécialités</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Product 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <img src="https://images.unsplash.com/photo-1534687941688-651ccaafbff8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80" alt="Café torréfié sur place" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-playfair mb-2">Café torréfié sur place</h3>
                <p className="text-gray-600 mb-4">Une sélection de cafés des meilleurs producteurs, torréfiés avec passion dans notre atelier.</p>
                <ScrollButton to="/la-carte" variant="secondary" className="w-full">Découvrir</ScrollButton>
              </div>
            </div>
            
            {/* Product 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <img alt="Pâtisseries artisanales" className="w-full h-64 object-cover" src="https://i.pinimg.com/736x/11/91/67/1191679b67ec87b4855fc156df2a1e69.jpg" />
              <div className="p-6">
                <h3 className="text-xl font-playfair mb-2">Pâtisseries artisanales</h3>
                <p className="text-gray-600 mb-4">Des créations uniques préparées chaque matin par notre chef pâtissier avec des ingrédients locaux.</p>
                <ScrollButton to="/la-carte" variant="secondary" className="w-full">Découvrir</ScrollButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Preview */}
      <section className="section-padding bg-cafe-olive text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-playfair mb-8">Ce qu'en disent nos clients</h2>
          
          <blockquote className="max-w-3xl mx-auto italic text-xl mb-6">
            "Un véritable havre de paix dans le quartier. Le cappuccino est parfait et les pâtisseries divines. L'équipe est attentionnée et l'ambiance chaleureuse."
          </blockquote>
          <div className="flex justify-center items-center">
            <img src="https://randomuser.me/api/portraits/women/42.jpg" alt="Marie" className="w-12 h-12 rounded-full mr-4" />
            <span className="font-medium">Marie, cliente régulière</span>
          </div>
          
          <div className="mt-10">
            <ScrollButton to="/temoignages" variant="secondary" className="bg-transparent text-white border-white hover:bg-white hover:text-cafe-olive">
              Voir tous les témoignages
            </ScrollButton>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="section-padding bg-cafe-creme">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-playfair mb-6">Envie de nous rejoindre ?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Passez simplement nous voir pour déguster nos spécialités dans une ambiance conviviale.
          </p>
          <div className="flex flex-wrap justify-center">
            <ScrollButton to="/contact" variant="primary">
              Nous trouver
            </ScrollButton>
          </div>
        </div>
      </section>
    </>;
};
export default Home;
