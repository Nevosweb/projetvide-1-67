
import React from 'react';
import ScrollButton from '@/components/ui/ScrollButton';
import { Star, Quote, Heart, Coffee, Users, Award } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  quote: string;
}

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Marie",
      role: "Cliente régulière",
      image: "https://randomuser.me/api/portraits/women/42.jpg",
      quote: "Un véritable havre de paix dans le quartier. Le cappuccino est parfait et les pâtisseries divines. L'équipe est attentionnée et l'ambiance chaleureuse."
    },
    {
      id: 2,
      name: "Pierre",
      role: "Client du weekend",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      quote: "Le brunch du dimanche est devenu notre rituel familial. Qualité irréprochable, service souriant et cadre magnifique. Que demander de plus ?"
    },
    {
      id: 3,
      name: "Sophie",
      role: "Télétravaileuse",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      quote: "J'y passe souvent mes après-midis de travail. Le wifi est rapide, le café excellent et l'ambiance parfaite pour la concentration. Un lieu qui change du bureau !"
    },
    {
      id: 4,
      name: "Thomas",
      role: "Habitué du matin",
      image: "https://randomuser.me/api/portraits/men/76.jpg",
      quote: "Je commence chaque journée par un détour au Café template. Leur pain au chocolat est le meilleur de la ville et le personnel se souvient toujours de ma commande."
    },
    {
      id: 5,
      name: "Camille",
      role: "Étudiante",
      image: "https://randomuser.me/api/portraits/women/14.jpg",
      quote: "L'endroit idéal pour réviser. Ambiance studieuse mais pas trop silencieuse, café délicieux et prix abordables avec la carte étudiante. Je recommande !"
    },
    {
      id: 6,
      name: "Lucas",
      role: "Amateur de café",
      image: "https://randomuser.me/api/portraits/men/52.jpg",
      quote: "En tant que passionné de café, je peux affirmer que leur espresso est d'une qualité exceptionnelle. La torréfaction maison fait toute la différence."
    },
    {
      id: 7,
      name: "Émilie",
      role: "Blogueuse culinaire",
      image: "https://randomuser.me/api/portraits/women/89.jpg",
      quote: "Les pâtisseries du Café template sont dignes des meilleures boutiques parisiennes. J'adore particulièrement leur tartelette au citron, un équilibre parfait entre acidité et douceur."
    },
    {
      id: 8,
      name: "Antoine",
      role: "Voisin du café",
      image: "https://randomuser.me/api/portraits/men/22.jpg",
      quote: "Habitant juste à côté, ce café est devenu mon deuxième salon. L'équipe est devenue comme une famille et la qualité est constante. Un vrai bonheur au quotidien."
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-cafe-creme via-cafe-creme to-cafe-olive/10 py-20 md:py-28 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 bg-cafe-ocre rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-cafe-brun rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-cafe-olive rounded-full blur-2xl"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-lg mb-8 group hover:scale-110 transition-transform duration-300">
              <Heart className="w-10 h-10 text-cafe-ocre group-hover:text-cafe-brun transition-colors duration-300" />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-playfair mb-6 bg-gradient-to-r from-cafe-brun via-cafe-ocre to-cafe-brun bg-clip-text text-transparent">
              Ils nous recommandent
            </h1>
            
            <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
              Découvrez ce que nos clients disent de leur expérience au Café template.
            </p>
            
            {/* Stats preview */}
            <div className="flex flex-wrap justify-center gap-6 text-center">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-lg">
                <div className="flex items-center justify-center gap-1 text-yellow-500 mb-1">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                </div>
                <p className="text-sm font-medium text-gray-700">4.9/5 étoiles</p>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-lg">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <Users className="w-5 h-5 text-cafe-ocre" />
                  <span className="text-2xl font-bold text-cafe-brun">500+</span>
                </div>
                <p className="text-sm font-medium text-gray-700">Clients satisfaits</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {/* Section header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-cafe-creme rounded-full mb-6">
              <Quote className="w-8 h-8 text-cafe-ocre" />
            </div>
            <h2 className="text-3xl md:text-4xl font-playfair mb-4 bg-gradient-to-r from-cafe-brun to-cafe-ocre bg-clip-text text-transparent">
              Témoignages authentiques
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Chaque avis compte pour nous. Découvrez les expériences uniques de nos clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id} 
                className="group relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-cafe-ocre/20 hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Quote icon */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-cafe-ocre to-cafe-brun rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Quote className="w-6 h-6 text-white" />
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  <blockquote className="text-gray-700 mb-6 leading-relaxed text-base italic group-hover:text-gray-800 transition-colors duration-300">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  {/* Author */}
                  <div className="flex items-center">
                    <div className="relative">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-14 h-14 rounded-full object-cover border-3 border-white shadow-md group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-cafe-ocre rounded-full flex items-center justify-center">
                        <Coffee className="w-3 h-3 text-white" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-playfair font-semibold text-gray-800 group-hover:text-cafe-brun transition-colors duration-300">
                        {testimonial.name}
                      </h3>
                      <p className="text-cafe-ocre text-sm font-medium">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
                
                {/* Background decoration */}
                <div className="absolute inset-0 bg-gradient-to-br from-cafe-creme/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Rating Section */}
      <section className="py-20 bg-gradient-to-br from-cafe-creme via-cafe-creme to-cafe-olive/10 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 bg-cafe-ocre rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-cafe-brun rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            {/* Header */}
            <div className="mb-16">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-xl mb-8 group hover:scale-110 transition-transform duration-300">
                <Award className="w-10 h-10 text-cafe-ocre group-hover:text-cafe-brun transition-colors duration-300" />
              </div>
              <h2 className="text-3xl md:text-5xl font-playfair mb-6 bg-gradient-to-r from-cafe-brun via-cafe-ocre to-cafe-brun bg-clip-text text-transparent">
                Nos clients nous notent
              </h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                La satisfaction de nos clients est notre plus belle récompense
              </p>
            </div>
            
            {/* Rating cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
              <div className="group bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/50 hover:border-cafe-ocre/30 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-xl">G</span>
                </div>
                <div className="flex items-center justify-center gap-1 text-yellow-400 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-cafe-brun to-cafe-ocre bg-clip-text text-transparent">4.9/5</div>
                <p className="text-gray-600 font-medium">Google</p>
                <p className="text-sm text-gray-500 mt-2">127 avis</p>
              </div>
              
              <div className="group bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/50 hover:border-cafe-ocre/30 hover:-translate-y-2" style={{animationDelay: '100ms'}}>
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-xl">T</span>
                </div>
                <div className="flex items-center justify-center gap-1 text-yellow-400 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-cafe-brun to-cafe-ocre bg-clip-text text-transparent">4.8/5</div>
                <p className="text-gray-600 font-medium">TripAdvisor</p>
                <p className="text-sm text-gray-500 mt-2">89 avis</p>
              </div>
              
              <div className="group bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/50 hover:border-cafe-ocre/30 hover:-translate-y-2" style={{animationDelay: '200ms'}}>
                <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-xl">F</span>
                </div>
                <div className="flex items-center justify-center gap-1 text-yellow-400 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-cafe-brun to-cafe-ocre bg-clip-text text-transparent">9.2/10</div>
                <p className="text-gray-600 font-medium">TheFork</p>
                <p className="text-sm text-gray-500 mt-2">156 avis</p>
              </div>
            </div>
            
            {/* Call to action */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50 max-w-3xl mx-auto">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Heart className="w-6 h-6 text-cafe-ocre" />
                <span className="text-lg font-semibold text-gray-800">Votre avis compte !</span>
                <Heart className="w-6 h-6 text-cafe-ocre" />
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Vous avez apprécié votre expérience chez nous ? N'hésitez pas à partager votre avis en ligne !
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="bg-gradient-to-r from-cafe-ocre to-cafe-brun text-white px-6 py-3 rounded-2xl font-medium hover:shadow-lg transition-all duration-300 hover:scale-105">
                  Laisser un avis Google
                </button>
                <button className="bg-white text-cafe-brun border-2 border-cafe-ocre px-6 py-3 rounded-2xl font-medium hover:bg-cafe-creme transition-all duration-300 hover:scale-105">
                  Partager sur TripAdvisor
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default Testimonials;
