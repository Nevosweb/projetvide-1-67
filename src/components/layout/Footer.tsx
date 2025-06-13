
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-cafe-brun to-cafe-brun/90 text-white relative overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full border border-white/20"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 rounded-full border border-white/20"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full border border-white/20"></div>
      </div>
      
      <div className="container-custom py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-cafe-ocre rounded-full flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              </div>
              <h3 className="text-2xl font-playfair text-white">Café template</h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Votre lieu préféré pour des pauses gourmandes depuis 2023. 
              Un espace chaleureux où tradition et modernité se rencontrent.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-cafe-ocre hover:scale-110 transition-all duration-300" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://facebook.com" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-cafe-ocre hover:scale-110 transition-all duration-300" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
              <a href="https://twitter.com" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-cafe-ocre hover:scale-110 transition-all duration-300" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-playfair mb-6 text-cafe-ocre">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cafe-ocre mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div className="text-gray-300">
                  <p>47 Avenue des Cafés</p>
                  <p>75011 Paris, France</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cafe-ocre flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-gray-300">01 47 47 47 47</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cafe-ocre flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-300">bonjour@47cafe.fr</span>
              </div>
            </div>
          </div>
          
          {/* Opening Hours */}
          <div>
            <h3 className="text-xl font-playfair mb-6 text-cafe-ocre">Horaires</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-white/10">
                <span className="text-gray-300">Lun - Ven</span>
                <span className="text-white font-medium">7h30 - 19h00</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-white/10">
                <span className="text-gray-300">Samedi</span>
                <span className="text-white font-medium">8h00 - 19h00</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-300">Dimanche</span>
                <span className="text-white font-medium">9h00 - 17h00</span>
              </div>
            </div>
          </div>
          
          {/* Navigation */}
          <div>
            <h3 className="text-xl font-playfair mb-6 text-cafe-ocre">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-cafe-ocre transition-colors duration-300 flex items-center group">
                  <span className="w-2 h-2 bg-cafe-ocre rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/notre-identite" className="text-gray-300 hover:text-cafe-ocre transition-colors duration-300 flex items-center group">
                  <span className="w-2 h-2 bg-cafe-ocre rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  Notre identité
                </Link>
              </li>
              <li>
                <Link to="/la-carte" className="text-gray-300 hover:text-cafe-ocre transition-colors duration-300 flex items-center group">
                  <span className="w-2 h-2 bg-cafe-ocre rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  La Carte
                </Link>
              </li>
              <li>
                <Link to="/temoignages" className="text-gray-300 hover:text-cafe-ocre transition-colors duration-300 flex items-center group">
                  <span className="w-2 h-2 bg-cafe-ocre rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  Témoignages
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-cafe-ocre transition-colors duration-300 flex items-center group">
                  <span className="w-2 h-2 bg-cafe-ocre rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  Nous contacter
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Newsletter Section */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-playfair mb-4 text-cafe-ocre">Restez connectés</h3>
            <p className="text-gray-300 mb-6">
              Inscrivez-vous à notre newsletter pour recevoir nos dernières actualités et offres spéciales.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cafe-ocre focus:border-transparent"
              />
              <button className="px-6 py-3 bg-cafe-ocre text-white rounded-lg hover:bg-cafe-ocre/90 transition-colors duration-300 font-medium">
                S'inscrire
              </button>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              <p>© 2023-2024 Café template. Tous droits réservés.</p>
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-cafe-ocre transition-colors duration-300">Mentions légales</a>
              <a href="#" className="hover:text-cafe-ocre transition-colors duration-300">Politique de confidentialité</a>
              <a href="#" className="hover:text-cafe-ocre transition-colors duration-300">CGU</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
