import React from 'react';
import { Twitter, MessageCircle, Users, ExternalLink, Shield } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22%23FFD700%22%20fill-opacity%3D%220.4%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22M20%2020c0-5.5-4.5-10-10-10s-10%204.5-10%2010%204.5%2010%2010%2010%2010-4.5%2010-10zM0%200h40v40H0V0z%22/%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/solana logo.jpg" 
                alt="$TSA Logo" 
                className="w-12 h-12 rounded-full border-2 border-orange-500"
              />
              <div className="text-3xl font-bold">
                <span className="text-orange-400">$</span>TSA
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              The Traditional Solana Account that actually works. 
              Revolutionizing finance, one meme at a time.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <Shield size={16} />
              <span>Built on Solana • Community Driven • Meme Powered</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-orange-400 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-300 hover:text-orange-400 transition-colors">About</a></li>
              <li><a href="#tokenomics" className="text-gray-300 hover:text-orange-400 transition-colors">Tokenomics</a></li>
              <li><a href="#how-to-buy" className="text-gray-300 hover:text-orange-400 transition-colors">How to Buy</a></li>
              <li><a href="#community" className="text-gray-300 hover:text-orange-400 transition-colors">Community</a></li>
              <li><a href="#roadmap" className="text-gray-300 hover:text-orange-400 transition-colors">Roadmap</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-bold text-orange-400 mb-4">Join Us</h3>
            <div className="space-y-3">
              <a href="https://x.com/soltsa" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors group">
                <Twitter size={20} />
                <span>Twitter</span>
                <ExternalLink size={14} className="group-hover:animate-bounce" />
              </a>
              <a href="https://x.com/i/communities/1935188067452932308" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors group">
                <Users size={20} />
                <span>Twitter Community</span>
                <ExternalLink size={14} className="group-hover:animate-bounce" />
              </a>
            </div>
          </div>
        </div>

        {/* Contract Address */}
        <div className="bg-gray-900/50 rounded-lg p-6 mb-8 border border-orange-500/20">
          <h3 className="text-lg font-bold text-orange-400 mb-3">Contract Address</h3>
          <code className="text-yellow-400 font-mono text-sm break-all">
            A7p24frdJyzNA8CUSicfDY38t7VM6P7JrWte96zepump
          </code>
          <p className="text-gray-400 text-xs mt-2">
            Always verify the contract address before trading!
          </p>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-gray-800 pt-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-lg font-bold text-red-400 mb-3">⚠️ Important Disclaimer</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                $TSA is a meme token created for entertainment purposes. 
                This is not financial advice. Cryptocurrency investments are highly volatile and risky. 
                Only invest what you can afford to lose. Do your own research.
              </p>
            </div>
            <div className="text-center md:text-right">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-lg px-4 py-2 border border-purple-500/30">
                <img 
                  src="/solana logo.jpg" 
                  alt="Solana" 
                  className="w-6 h-6 rounded-full"
                />
                <span className="text-purple-400 font-bold">Built on Solana</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 mt-8 text-center">
          <p className="text-gray-500 text-sm">
            © 2025 $TSA Traditional Solana Account. All rights reserved. 
            <span className="text-orange-400 ml-2">🚀 To the Moon!</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;