
import React, { useState } from 'react';
import { useToast } from "@/components/ui/use-toast";
import Button from '@/components/ui/Button';
import { MapPin, Clock, Mail, Phone, Send, Coffee, Users, Star, Heart } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Erreur",
        description: "Veuillez remplir tous les champs du formulaire.",
        variant: "destructive"
      });
      return;
    }
    
    // In a real app, you would send the form data to a server here
    console.log("Form data:", formData);
    
    toast({
      title: "Message envoyé",
      description: "Nous vous répondrons dans les plus brefs délais.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <>
      {/* Contact Form */}
      <section className="py-20 bg-gradient-to-br from-white via-cafe-creme/20 to-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-40 h-40 bg-cafe-ocre rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-32 h-32 bg-cafe-brun rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Section header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-2xl mb-8 group hover:scale-110 transition-transform duration-300">
                <Send className="w-10 h-10 text-cafe-ocre group-hover:text-cafe-brun transition-colors duration-300" />
              </div>
              <h2 className="text-3xl md:text-5xl font-playfair mb-6 bg-gradient-to-r from-cafe-brun via-cafe-ocre to-cafe-brun bg-clip-text text-transparent">
                Contactez-nous
              </h2>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed max-w-3xl mx-auto">
                Vous avez une question, une suggestion ou une demande spéciale ? 
                N'hésitez pas à nous laisser un message et nous vous répondrons dans les plus brefs délais.
              </p>
            </div>
            
            {/* Contact form */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Name field */}
                  <div className="group">
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                      <Users className="w-4 h-4 text-cafe-ocre" />
                      Nom
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 focus:ring-4 focus:ring-cafe-ocre/20 focus:border-cafe-ocre outline-none transition-all duration-300 bg-white/80 backdrop-blur-sm group-hover:border-cafe-ocre/50"
                      placeholder="Votre nom complet"
                    />
                  </div>
                  
                  {/* Email field */}
                  <div className="group">
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                      <Mail className="w-4 h-4 text-cafe-ocre" />
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 focus:ring-4 focus:ring-cafe-ocre/20 focus:border-cafe-ocre outline-none transition-all duration-300 bg-white/80 backdrop-blur-sm group-hover:border-cafe-ocre/50"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>
                
                {/* Message field */}
                <div className="group">
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                    <Send className="w-4 h-4 text-cafe-ocre" />
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 focus:ring-4 focus:ring-cafe-ocre/20 focus:border-cafe-ocre outline-none transition-all duration-300 bg-white/80 backdrop-blur-sm group-hover:border-cafe-ocre/50 resize-none"
                    placeholder="Décrivez votre demande, vos questions ou suggestions..."
                  ></textarea>
                </div>
                
                {/* Submit button */}
                <div className="text-center pt-4">
                  <Button
                    type="submit"
                    variant="primary"
                    className="bg-gradient-to-r from-cafe-ocre to-cafe-brun hover:from-cafe-brun hover:to-cafe-ocre text-white font-semibold py-4 px-12 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center gap-3 mx-auto"
                  >
                    <Send className="w-5 h-5" />
                    Envoyer le message
                  </Button>
                  <p className="text-sm text-gray-500 mt-4">
                    Nous vous répondrons sous 24h
                  </p>
                </div>
              </form>
            </div>
            
            {/* Additional contact info */}
            <div className="mt-16 text-center">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50 max-w-2xl mx-auto">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Coffee className="w-6 h-6 text-cafe-ocre" />
                  <span className="text-lg font-semibold text-gray-800">Besoin d'une réponse immédiate ?</span>
                </div>
                <p className="text-gray-700 mb-6">
                  N'hésitez pas à nous appeler directement ou à passer nous voir au café !
                </p>
                <div className="flex flex-wrap justify-center gap-6">
                  <a href="tel:0147474747" className="flex items-center gap-2 bg-gradient-to-r from-cafe-ocre to-cafe-brun text-white px-6 py-3 rounded-2xl font-medium hover:shadow-lg transition-all duration-300 hover:scale-105">
                    <Phone className="w-5 h-5" />
                    Appeler maintenant
                  </a>
                  <button className="flex items-center gap-2 bg-white text-cafe-brun border-2 border-cafe-ocre px-6 py-3 rounded-2xl font-medium hover:bg-cafe-creme transition-all duration-300 hover:scale-105">
                    <MapPin className="w-5 h-5" />
                    Voir l'itinéraire
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Information */}
      <section className="py-20 bg-gradient-to-b from-white to-cafe-creme/30">
        <div className="container-custom">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair mb-4 bg-gradient-to-r from-cafe-brun to-cafe-ocre bg-clip-text text-transparent">
              Informations pratiques
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Toutes les informations dont vous avez besoin pour nous rendre visite
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Address */}
            <div className="group text-center bg-white/90 backdrop-blur-sm p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/50 hover:border-cafe-ocre/30 hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-cafe-ocre to-cafe-brun rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <MapPin className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-2xl font-playfair mb-4 text-gray-800">Adresse</h2>
              <div className="space-y-2">
                <p className="text-gray-700 font-medium">47 Avenue des Cafés</p>
                <p className="text-gray-600">75011 Paris, France</p>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-100">
                <button className="text-cafe-ocre hover:text-cafe-brun font-medium transition-colors duration-300">
                  Voir sur la carte →
                </button>
              </div>
            </div>
            
            {/* Hours */}
            <div className="group text-center bg-white/90 backdrop-blur-sm p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/50 hover:border-cafe-ocre/30 hover:-translate-y-2" style={{animationDelay: '100ms'}}>
              <div className="w-20 h-20 bg-gradient-to-br from-cafe-brun to-cafe-olive rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Clock className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-2xl font-playfair mb-4 text-gray-800">Horaires</h2>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">Lun - Ven</span>
                  <span className="text-gray-600">7h30 - 19h00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">Samedi</span>
                  <span className="text-gray-600">8h00 - 19h00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">Dimanche</span>
                  <span className="text-gray-600">9h00 - 17h00</span>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-100">
                <span className="inline-flex items-center gap-2 text-green-600 font-medium">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  Ouvert maintenant
                </span>
              </div>
            </div>
            
            {/* Contact */}
            <div className="group text-center bg-white/90 backdrop-blur-sm p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/50 hover:border-cafe-ocre/30 hover:-translate-y-2" style={{animationDelay: '200ms'}}>
              <div className="w-20 h-20 bg-gradient-to-br from-cafe-olive to-cafe-ocre rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <div className="flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white mr-1" />
                  <Mail className="w-6 h-6 text-white ml-1" />
                </div>
              </div>
              <h2 className="text-2xl font-playfair mb-4 text-gray-800">Contact</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-center gap-3">
                  <Phone className="w-5 h-5 text-cafe-ocre" />
                  <a href="tel:0147474747" className="text-gray-700 hover:text-cafe-ocre transition-colors duration-300 font-medium">
                    01 47 47 47 47
                  </a>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <Mail className="w-5 h-5 text-cafe-ocre" />
                  <a href="mailto:bonjour@47cafe.fr" className="text-gray-700 hover:text-cafe-ocre transition-colors duration-300 font-medium">
                    bonjour@47cafe.fr
                  </a>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-100">
                <p className="text-sm text-gray-500">
                  Réponse sous 24h
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-20 bg-gradient-to-b from-cafe-creme/30 to-white">
        <div className="container-custom">
          {/* Section header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-xl mb-6 group hover:scale-110 transition-transform duration-300">
              <MapPin className="w-8 h-8 text-cafe-ocre group-hover:text-cafe-brun transition-colors duration-300" />
            </div>
            <h2 className="text-3xl md:text-4xl font-playfair mb-4 bg-gradient-to-r from-cafe-brun to-cafe-ocre bg-clip-text text-transparent">
              Nous trouver
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Situé au cœur du 11ème arrondissement, notre café vous attend dans un cadre chaleureux
            </p>
          </div>
          
          {/* Map container */}
          <div className="bg-white/90 backdrop-blur-sm p-6 rounded-3xl shadow-2xl border border-white/50 mb-12">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9914410396194!2d2.370336076238652!3d48.85837060081235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66d4f4f4a8b67%3A0x3349595400000000!2sRepublic%20of%20Cofffee!5e0!3m2!1sfr!2sfr!4v1681698780000!5m2!1sfr!2sfr" 
              width="100%" 
              height="450" 
              style={{ border: 0, borderRadius: '1rem' }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps"
              className="rounded-2xl"
            ></iframe>
          </div>
          
          {/* Access information */}
          <div className="">
            <h3 className="text-2xl font-playfair mb-8 text-center text-gray-800">Comment nous rejoindre</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Public transport */}
              <div className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center">
                    <span className="text-white font-bold text-lg">M</span>
                  </div>
                  <h4 className="text-xl font-playfair text-gray-800">Transports en commun</h4>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-blue-600 rounded-full text-white text-center leading-10 font-medium flex-shrink-0">
                      <span className="text-sm">8</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Ligne 8 - Station Ledru-Rollin</p>
                      <p className="text-sm text-gray-600">3 minutes à pied</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-green-600 rounded-full text-white text-center leading-10 font-medium flex-shrink-0">
                      <span className="text-sm">B</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Bus 61, 76 - Arrêt Bastille</p>
                      <p className="text-sm text-gray-600">5 minutes à pied</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              {/* Parking */}
              <div className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-cafe-ocre to-cafe-brun rounded-2xl flex items-center justify-center">
                    <span className="text-white font-bold text-lg">P</span>
                  </div>
                  <h4 className="text-xl font-playfair text-gray-800">Stationnement</h4>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gray-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs font-bold">🚗</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Parking public "Bastille"</p>
                      <p className="text-sm text-gray-600">300 mètres du café</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs font-bold">🚲</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Station Vélib' n°11032</p>
                      <p className="text-sm text-gray-600">150 mètres du café</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </>
  );
};

export default Contact;
