
import React from 'react';
import ScrollButton from '@/components/ui/ScrollButton';

const Identity = () => {
  return <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-cafe-creme via-cafe-creme to-amber-50 py-20 md:py-32 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-cafe-ocre/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-cafe-brun/5 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-cafe-ocre rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-cafe-brun rounded-full animate-ping"></div>
        
        <div className="container-custom relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg mb-8 animate-bounce">
              <svg className="w-8 h-8 text-cafe-brun" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-playfair mb-8 bg-gradient-to-r from-cafe-brun to-cafe-ocre bg-clip-text text-transparent leading-tight">
              Notre identité
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-light">
              Découvrez l'histoire et les valeurs qui font du Café template un lieu unique et authentique.
            </p>
            
            {/* Scroll indicator */}
            <div className="mt-12 animate-bounce">
              <svg className="w-6 h-6 mx-auto text-cafe-brun" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </section>
      
      {/* Main Content Section */}
      <section className="section-padding bg-white relative">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column: Text */}
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-cafe-creme/30 to-transparent p-8 rounded-2xl border-l-4 border-cafe-ocre">
                <h2 className="text-4xl font-playfair mb-6 text-cafe-brun">Notre concept</h2>
                <p className="mb-6 text-gray-700 leading-relaxed text-lg">
                  Le Café template est né d'une passion commune pour l'art du café et la pâtisserie fine. 
                  Fondé en 2023 par deux amis de longue date, Claire et Thomas, ce lieu se veut bien plus qu'un simple café : 
                  c'est un espace de vie, de partage et de découverte gustative.
                </p>
                
                <p className="mb-6 text-gray-700 leading-relaxed text-lg">
                  Installé dans un ancien atelier de couture entièrement rénové, notre café conserve l'esprit artisanal 
                  du lieu d'origine tout en y apportant une touche contemporaine. Les grandes fenêtres, le mobilier en 
                  bois clair et les plantes vertes créent une atmosphère à la fois élégante et chaleureuse où il fait bon s'attarder.
                </p>
              </div>
              
              <div>
                <h3 className="text-3xl font-playfair mb-8 text-cafe-brun text-center">Nos valeurs</h3>
                <div className="grid gap-6">
                  <div className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-cafe-ocre/30">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cafe-ocre to-amber-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-xl mb-2 text-cafe-brun group-hover:text-cafe-ocre transition-colors">Qualité et authenticité</h4>
                        <p className="text-gray-600 leading-relaxed">
                          Nous sélectionnons méticuleusement nos fournisseurs et nos ingrédients pour vous offrir des produits d'exception.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-cafe-ocre/30">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-xl mb-2 text-cafe-brun group-hover:text-cafe-ocre transition-colors">Éthique et durabilité</h4>
                        <p className="text-gray-600 leading-relaxed">
                          Notre café est issu du commerce équitable et nous privilégions les circuits courts pour nos pâtisseries.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-cafe-ocre/30">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-xl mb-2 text-cafe-brun group-hover:text-cafe-ocre transition-colors">Convivialité</h4>
                        <p className="text-gray-600 leading-relaxed">
                          Nous créons un espace où chacun se sent bienvenu, qu'il vienne pour travailler, se détendre ou partager un moment entre amis.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <ScrollButton to="/la-carte" variant="primary">
                  Découvrir notre carte
                </ScrollButton>
              </div>
            </div>
            
            {/* Right Column: Image */}
            <div className="order-first lg:order-last relative">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-cafe-ocre to-cafe-brun rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
                <img src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80" alt="L'intérieur du Café template" className="relative w-full h-auto rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-300" />
                
                {/* Floating badge */}
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-full shadow-lg border-4 border-cafe-creme">
                  <svg className="w-8 h-8 text-cafe-brun" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="section-padding bg-gradient-to-br from-cafe-creme via-cafe-creme/80 to-amber-50 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 left-0 w-40 h-40 bg-cafe-ocre/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-60 h-60 bg-cafe-brun/5 rounded-full blur-3xl"></div>
        
        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg mb-6">
              <svg className="w-8 h-8 text-cafe-brun" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
              </svg>
            </div>
            <h2 className="text-4xl md:text-5xl font-playfair mb-4 bg-gradient-to-r from-cafe-brun to-cafe-ocre bg-clip-text text-transparent">Notre équipe</h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">Rencontrez les artisans passionnés qui donnent vie à votre expérience café</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Team Member 1 */}
            <div className="group relative">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img alt="Claire, Fondatrice" className="w-full h-80 object-cover object-center group-hover:scale-110 transition-transform duration-500" src="https://images.pexels.com/photos/2159129/pexels-photo-2159129.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Badge */}
                  <div className="absolute top-4 right-4 bg-cafe-ocre text-white px-3 py-1 rounded-full text-sm font-medium">
                    Fondatrice
                  </div>
                </div>
                
                <div className="p-8 text-center">
                  <h3 className="text-2xl font-playfair mb-2 text-cafe-brun">Claire</h3>
                  <p className="text-cafe-ocre mb-4 font-medium text-lg">Fondatrice & Barista</p>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Passionnée de café depuis plus de 10 ans, Claire a perfectionné son art dans les meilleurs cafés de Melbourne et Paris.
                  </p>
                  
                  {/* Skills */}
                  <div className="flex flex-wrap justify-center gap-2">
                    <span className="bg-cafe-creme text-cafe-brun px-3 py-1 rounded-full text-sm">Latte Art</span>
                    <span className="bg-cafe-creme text-cafe-brun px-3 py-1 rounded-full text-sm">Torréfaction</span>
                    <span className="bg-cafe-creme text-cafe-brun px-3 py-1 rounded-full text-sm">Management</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Team Member 2 */}
            <div className="group relative">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img alt="Lucas, Barista" className="w-full h-80 object-cover object-center group-hover:scale-110 transition-transform duration-500" src="https://images.pexels.com/photos/4790061/pexels-photo-4790061.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Badge */}
                  <div className="absolute top-4 right-4 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Champion
                  </div>
                </div>
                
                <div className="p-8 text-center">
                  <h3 className="text-2xl font-playfair mb-2 text-cafe-brun">Lucas</h3>
                  <p className="text-cafe-ocre mb-4 font-medium text-lg">Barista Expert</p>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Champion régional de latte art, Lucas transforme chaque tasse de café en une véritable œuvre d'art.
                  </p>
                  
                  {/* Skills */}
                  <div className="flex flex-wrap justify-center gap-2">
                    <span className="bg-cafe-creme text-cafe-brun px-3 py-1 rounded-full text-sm">Latte Art</span>
                    <span className="bg-cafe-creme text-cafe-brun px-3 py-1 rounded-full text-sm">Espresso</span>
                    <span className="bg-cafe-creme text-cafe-brun px-3 py-1 rounded-full text-sm">Formation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Call to action */}
          <div className="text-center mt-16">
            <p className="text-lg text-gray-700 mb-6">Envie de rejoindre notre équipe passionnée ?</p>
            <ScrollButton to="/contact" variant="secondary">
              Nous contacter
            </ScrollButton>
          </div>
        </div>
      </section>
      
      {/* Gallery Section */}
      <section className="section-padding bg-white relative">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cafe-ocre to-amber-400 rounded-full shadow-lg mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-4xl md:text-5xl font-playfair mb-4 bg-gradient-to-r from-cafe-brun to-cafe-ocre bg-clip-text text-transparent">Notre univers</h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">Plongez dans l'atmosphère chaleureuse et authentique de notre café</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Image 1 - Large */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 md:col-span-2 md:row-span-2">
              <img src="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" alt="Café préparation" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                <h3 className="text-xl font-playfair mb-1">L'art du café</h3>
                <p className="text-sm">Préparation artisanale</p>
              </div>
            </div>
            
            {/* Image 2 */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
              <img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" alt="Café" className="w-full h-48 md:h-52 object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-3 left-3 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                <h3 className="text-lg font-playfair mb-1">Café signature</h3>
                <p className="text-xs">Blend maison</p>
              </div>
            </div>
            
            {/* Image 3 */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
              <img alt="Pâtisserie" className="w-full h-48 md:h-52 object-cover group-hover:scale-110 transition-transform duration-700" src="https://i.pinimg.com/736x/11/91/67/1191679b67ec87b4855fc156df2a1e69.jpg" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-3 left-3 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                <h3 className="text-lg font-playfair mb-1">Pâtisseries</h3>
                <p className="text-xs">Fait maison</p>
              </div>
            </div>
            
            {/* Image 4 */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
              <img alt="Espace de travail" className="w-full h-48 md:h-52 object-cover group-hover:scale-110 transition-transform duration-700" src="https://i.pinimg.com/736x/08/ea/5f/08ea5f788f203cd6cf6340c0ca203fe3.jpg" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-3 left-3 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                <h3 className="text-lg font-playfair mb-1">Espace coworking</h3>
                <p className="text-xs">Wifi gratuit</p>
              </div>
            </div>
            
            {/* Image 5 */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
              <img src="https://images.unsplash.com/photo-1497636577773-f1231844b336?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80" alt="Café art" className="w-full h-48 md:h-52 object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-3 left-3 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                <h3 className="text-lg font-playfair mb-1">Latte Art</h3>
                <p className="text-xs">Créations uniques</p>
              </div>
            </div>
            
            {/* Image 6 - Large */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 md:col-span-2">
              <img alt="Terrasse" className="w-full h-48 md:h-64 object-cover group-hover:scale-110 transition-transform duration-700" src="https://i.pinimg.com/736x/bd/f4/97/bdf4977d36ab2d6f4b7720819c519a51.jpg" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                <h3 className="text-xl font-playfair mb-1">Notre terrasse</h3>
                <p className="text-sm">Détente en plein air</p>
              </div>
            </div>
            
            {/* Image 7 */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
              <img alt="Pâtisserie maison" className="w-full h-48 md:h-52 object-cover group-hover:scale-110 transition-transform duration-700" src="https://i.pinimg.com/736x/b6/df/8a/b6df8a5c7776ad3f230dccc8735ae08d.jpg" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-3 left-3 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                <h3 className="text-lg font-playfair mb-1">Gourmandises</h3>
                <p className="text-xs">Recettes secrètes</p>
              </div>
            </div>
            
            {/* Image 8 */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
              <img alt="Brunch weekend" className="w-full h-48 md:h-52 object-cover group-hover:scale-110 transition-transform duration-700" src="https://i.pinimg.com/736x/7f/35/8b/7f358bc3261ccf60b115840cbbf011be.jpg" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-3 left-3 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                <h3 className="text-lg font-playfair mb-1">Brunch</h3>
                <p className="text-xs">Weekend spécial</p>
              </div>
            </div>
          </div>
          
          {/* Gallery CTA */}
          <div className="text-center mt-16">
            <p className="text-lg text-gray-700 mb-6">Découvrez encore plus de photos sur nos réseaux sociaux</p>
            <div className="flex justify-center space-x-4">
              <a href="#" className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full hover:from-pink-600 hover:to-rose-600 transition-all duration-300 transform hover:scale-105">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                Instagram
              </a>
              <a href="#" className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Facebook
              </a>
            </div>
          </div>
        </div>
      </section>
      

    </>;
};
export default Identity;
