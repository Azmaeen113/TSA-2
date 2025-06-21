import React from 'react';
import { Rocket, TrendingUp, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-600 via-red-600 to-orange-800">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23FFD700%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse"></div>
        
        {/* Floating Stars */}
        <div className="absolute top-20 left-10 text-yellow-300 animate-bounce">⭐</div>
        <div className="absolute top-40 right-20 text-yellow-300 animate-pulse">✨</div>
        <div className="absolute bottom-40 left-20 text-yellow-300 animate-bounce delay-1000">🌟</div>
        <div className="absolute bottom-20 right-10 text-yellow-300 animate-pulse delay-500">⭐</div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Main Logo */}
        <div className="mb-8 flex justify-center">
          <img 
            src="/solanaaa.jpeg" 
            alt="$TSA Banner" 
            className="max-w-md w-full h-auto rounded-2xl shadow-2xl shadow-orange-500/50 border-4 border-yellow-400"
          />
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
          Why Settle for{' '}
          <span className="text-red-300 line-through">0.1%</span>{' '}
          <br />
          When You Can Have{' '}
          <span className="text-yellow-300 animate-pulse">INFINITE</span>{' '}
          <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
            Gains?
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-orange-100 mb-8 max-w-3xl mx-auto font-medium">
          <span className="text-yellow-300 font-bold">$TSA</span> - The Traditional Solana Account That Actually Works
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button className="group bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-black px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-110 shadow-2xl shadow-yellow-500/50 flex items-center space-x-2">
            <Rocket className="group-hover:animate-bounce" size={24} />
            <span>Join the Revolution</span>
          </button>
          
          <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
            <TrendingUp size={24} />
            <span>View Chart</span>
          </button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-black/30 backdrop-blur-md rounded-2xl p-6 border border-orange-500/30">
            <div className="text-3xl font-bold text-yellow-400 mb-2">🚀</div>
            <div className="text-white font-bold text-lg">Lightning Fast</div>
            <div className="text-orange-200">Solana-Powered Speed</div>
          </div>
          
          <div className="bg-black/30 backdrop-blur-md rounded-2xl p-6 border border-orange-500/30">
            <div className="text-3xl font-bold text-yellow-400 mb-2">💎</div>
            <div className="text-white font-bold text-lg">Diamond Hands</div>
            <div className="text-orange-200">HODL for Maximum Gains</div>
          </div>
          
          <div className="bg-black/30 backdrop-blur-md rounded-2xl p-6 border border-orange-500/30">
            <div className="text-3xl font-bold text-yellow-400 mb-2">🌙</div>
            <div className="text-white font-bold text-lg">To The Moon</div>
            <div className="text-orange-200">Infinite Potential</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;