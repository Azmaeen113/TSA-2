import React, { useState } from 'react';
import { Menu, X, Wallet } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-orange-500/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/solana logo.jpg" 
              alt="$TSA Logo" 
              className="w-12 h-12 rounded-full border-2 border-orange-500 shadow-lg shadow-orange-500/50"
            />
            <div className="text-2xl font-bold text-white">
              <span className="text-orange-400">$</span>TSA
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-white hover:text-orange-400 transition-colors font-medium">About</a>
            <a href="#tokenomics" className="text-white hover:text-orange-400 transition-colors font-medium">Tokenomics</a>
            <a href="#how-to-buy" className="text-white hover:text-orange-400 transition-colors font-medium">How to Buy</a>
            <a href="#community" className="text-white hover:text-orange-400 transition-colors font-medium">Community</a>
            <a href="#roadmap" className="text-white hover:text-orange-400 transition-colors font-medium">Roadmap</a>
          </nav>

          {/* Connect Wallet Button */}
          <button className="hidden md:flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-6 py-3 rounded-full font-bold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-orange-500/30">
            <Wallet size={20} />
            <span>Connect Wallet</span>
          </button>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-orange-500/20">
            <nav className="flex flex-col space-y-4 mt-4">
              <a href="#about" className="text-white hover:text-orange-400 transition-colors">About</a>
              <a href="#tokenomics" className="text-white hover:text-orange-400 transition-colors">Tokenomics</a>
              <a href="#how-to-buy" className="text-white hover:text-orange-400 transition-colors">How to Buy</a>
              <a href="#community" className="text-white hover:text-orange-400 transition-colors">Community</a>
              <a href="#roadmap" className="text-white hover:text-orange-400 transition-colors">Roadmap</a>
              <button className="flex items-center justify-center space-x-2 bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 py-3 rounded-full font-bold mt-4">
                <Wallet size={20} />
                <span>Connect Wallet</span>
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;