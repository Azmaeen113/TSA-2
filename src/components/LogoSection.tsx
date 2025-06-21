import React from 'react';

const LogoSection = () => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText('ArVZ1VM8J9k4fDbkuDt6VAacDesbcztPSqrWGuP7pump');
    // You could add a toast notification here if you want
  };

  return (
    <section className="pt-24 pb-16 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center text-center">
          {/* Logo */}
          <div className="mb-8">
            <img 
              src="/logo 2.jpg" 
              alt="TSA Logo" 
              className="w-64 h-64 md:w-96 md:h-96 rounded-2xl border-4 border-orange-500 shadow-2xl shadow-orange-500/50 transform hover:scale-105 transition-all duration-300"
            />
          </div>
          
          {/* Lettering */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              <span className="text-orange-400">$</span>TSA
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-medium">
              The Solana Alternative
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Revolutionizing the future of decentralized finance with cutting-edge technology and community-driven innovation
            </p>
          </div>

          {/* Contract Address */}
          <div className="mt-8 p-4 bg-gray-800/50 rounded-xl border border-orange-500/30">
            <p className="text-sm text-gray-400 mb-2">Contract Address (CA)</p>
            <div className="flex items-center justify-center space-x-3">
              <code className="text-orange-400 font-mono text-sm md:text-base break-all">
                ArVZ1VM8J9k4fDbkuDt6VAacDesbcztPSqrWGuP7pump
              </code>
              <button 
                onClick={copyToClipboard}
                className="text-orange-400 hover:text-orange-300 transition-colors"
                title="Copy to clipboard"
              >
                📋
              </button>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a 
              href="https://x.com/i/communities/1935188067452932308" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-orange-500/30 inline-block"
            >
              Join the Revolution
            </a>
            <button className="border-2 border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoSection; 