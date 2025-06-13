
import React from 'react';
import ScrollButton from '@/components/ui/ScrollButton';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-cafe-creme p-4">
      <div className="text-center max-w-lg">
        <h1 className="text-6xl md:text-7xl font-playfair text-cafe-brun mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-playfair mb-6">Page non trouvée</h2>
        <p className="text-gray-600 mb-8">
          La page que vous recherchez n'existe pas ou a été déplacée. 
          Pourquoi ne pas prendre une pause café en attendant ?
        </p>
        <ScrollButton 
          to="/" 
          variant="primary"
        >
          Revenir à l'accueil
        </ScrollButton>
      </div>
    </div>
  );
};

export default NotFound;
