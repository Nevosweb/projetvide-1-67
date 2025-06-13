
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { MapPin, Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  // Détection du scroll pour le header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fermeture du menu lors du changement de route
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // Navigation mobile avec scroll to top optimisé
  const handleMobileNavigation = (path: string, e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
    }
    
    navigate(path);
    
    setTimeout(() => {
      setMobileMenuOpen(false);
      // Triple scroll to top pour compatibilité
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, 150);
  };

  const handleNavClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Items de navigation
  const navItems = [
    { name: 'Accueil', path: '/' },
    { name: 'Notre identité', path: '/notre-identite' },
    { name: 'La Carte', path: '/la-carte' },
    { name: 'Témoignages', path: '/temoignages' }
  ];

  // Styles dynamiques du header
  const headerStyle = isScrolled 
    ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-cafe-ocre/10'
    : 'bg-white/90 backdrop-blur-md shadow-sm';

  return (
    <header className={`py-4 fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${headerStyle}`}>
      <div className="container-custom flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" onClick={handleNavClick} className="flex items-center group">
          <h1 className="text-2xl md:text-3xl font-playfair font-bold text-cafe-brun group-hover:text-cafe-ocre transition-all duration-300">
            Café template
          </h1>
        </Link>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link 
              key={item.name}
              to={item.path} 
              className={`${isActive(item.path) ? 'text-cafe-ocre' : 'text-cafe-brun'} hover:text-cafe-ocre transition-colors font-medium`}
              onClick={handleNavClick}
            >
              {item.name}
            </Link>
          ))}
          <Link 
            to="/contact" 
            className="flex items-center gap-2 bg-cafe-ocre hover:bg-cafe-brun text-white py-2 px-4 rounded-md transition-all duration-300 hover:shadow-lg transform hover:scale-105"
            onClick={handleNavClick}
          >
            <MapPin size={16} /> Nous trouver
          </Link>
        </nav>

        {/* Bouton Burger Mobile Optimisé */}
        <button 
          className={`md:hidden text-cafe-brun p-3 min-h-[48px] min-w-[48px] flex items-center justify-center transition-all duration-500 ease-out hover:scale-110 rounded-2xl hover:shadow-xl active:scale-95 border backdrop-blur-sm group relative overflow-hidden ${
            mobileMenuOpen 
              ? 'bg-cafe-ocre/20 border-cafe-ocre/30 shadow-lg' 
              : 'hover:bg-cafe-ocre/10 border-cafe-brun/20'
          }`} 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
          aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={mobileMenuOpen}
          style={{ WebkitTapHighlightColor: 'transparent' }}
        >
          <div className="absolute inset-0 bg-cafe-ocre/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative z-10">
            {mobileMenuOpen ? (
              <X size={24} className="transform rotate-0 group-hover:rotate-90 transition-transform duration-300 text-cafe-brun" />
            ) : (
              <Menu size={24} className="transform group-hover:scale-110 transition-transform duration-300 text-cafe-brun" />
            )}
          </div>
        </button>
      </div>
      
      {/* Menu Mobile Optimisé avec Animations */}
       <div className={`md:hidden absolute top-full left-0 right-0 bg-cafe-blanc shadow-2xl border-b-2 border-cafe-ocre transition-all duration-500 ease-out transform ${
         mobileMenuOpen 
           ? 'opacity-100 translate-y-0 scale-100' 
           : 'opacity-0 -translate-y-4 scale-95 pointer-events-none'
       }`}>
        <div className="container-custom py-6 px-4 flex flex-col space-y-3">
          
          {navItems.map((item, index) => (
            <button 
              key={item.name}
              onClick={(e) => handleMobileNavigation(item.path, e)}
              className={`font-medium px-5 py-4 min-h-[52px] text-left flex items-center rounded-2xl transition-all duration-300 border backdrop-blur-sm group relative overflow-hidden transform ${
                mobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
              } ${
                isActive(item.path) 
                  ? 'bg-cafe-ocre/20 text-cafe-brun border-cafe-ocre/30 shadow-md' 
                  : 'hover:bg-cafe-ocre/10 text-cafe-brun hover:text-cafe-brun border-cafe-brun/10 hover:border-cafe-ocre/20'
              }`}
              style={{ 
                transitionDelay: mobileMenuOpen ? `${index * 100}ms` : '0ms',
                WebkitTapHighlightColor: 'transparent'
              }}
            >
              <div className="absolute inset-0 bg-cafe-ocre/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10 group-hover:translate-x-1 transition-transform duration-300">{item.name}</span>
            </button>
          ))}
          
          {/* Bouton Contact Mobile */}
          <button 
            onClick={(e) => handleMobileNavigation('/contact', e)}
            className={`flex items-center justify-center gap-2 bg-cafe-ocre hover:bg-cafe-brun text-white py-4 px-6 min-h-[52px] rounded-2xl transition-all duration-300 border border-cafe-ocre hover:shadow-xl active:scale-95 group relative overflow-hidden transform ${
              mobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
            }`}
            style={{ 
              transitionDelay: mobileMenuOpen ? `${navItems.length * 100 + 200}ms` : '0ms',
              WebkitTapHighlightColor: 'transparent'
            }}
          >
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative z-10 group-hover:scale-105 transition-transform duration-300 font-medium">Nous trouver</span>
            <MapPin className="w-4 h-4 ml-2 relative z-10 group-hover:translate-x-1 group-hover:scale-110 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
