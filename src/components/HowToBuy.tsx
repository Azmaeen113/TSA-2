import React, { useState } from 'react';
import { Wallet, ArrowRight, Copy, ExternalLink, CheckCircle } from 'lucide-react';

const HowToBuy = () => {
  const [copiedAddress, setCopiedAddress] = useState(false);
  const contractAddress = "A7p24frdJyzNA8CUSicfDY38t7VM6P7JrWte96zepump";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2000);
  };

  const steps = [
    {
      number: "01",
      title: "Get a Solana Wallet",
      description: "Download Phantom, Solflare, or any Solana-compatible wallet",
      icon: "👛",
      action: "Download Phantom"
    },
    {
      number: "02", 
      title: "Buy Some SOL",
      description: "Purchase SOL from any major exchange and transfer to your wallet",
      icon: "💰",
      action: "Buy SOL"
    },
    {
      number: "03",
      title: "Connect to DEX",
      description: "Visit Jupiter or Raydium and connect your wallet",
      icon: "🔗",
      action: "Go to Jupiter"
    },
    {
      number: "04",
      title: "Swap for $TSA",
      description: "Enter the contract address and swap your SOL for $TSA",
      icon: "🚀",
      action: "Start Trading"
    }
  ];

  return (
    <section id="how-to-buy" className="py-20 bg-gradient-to-b from-black to-red-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 text-4xl text-yellow-300/20 animate-pulse">💎</div>
        <div className="absolute top-40 right-20 text-4xl text-orange-300/20 animate-bounce">🚀</div>
        <div className="absolute bottom-40 left-20 text-4xl text-red-300/20 animate-pulse delay-1000">⭐</div>
        <div className="absolute bottom-20 right-10 text-4xl text-yellow-300/20 animate-bounce delay-500">🌙</div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            Ready to{' '}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Join the Revolution?
            </span>
          </h2>
          <p className="text-xl text-orange-200 max-w-3xl mx-auto">
            Getting $TSA is easier than explaining to your bank why you need your own money. 
            Follow these simple steps and escape financial mediocrity forever.
          </p>
        </div>

        {/* Contract Address */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-black/40 backdrop-blur-md rounded-2xl p-8 border border-orange-500/30">
            <h3 className="text-2xl font-bold text-white text-center mb-6">$TSA Contract Address</h3>
            <div className="flex items-center justify-between bg-gray-900/50 rounded-lg p-4 border border-orange-500/20">
              <code className="text-yellow-400 font-mono text-sm md:text-base break-all">
                {contractAddress}
              </code>
              <button
                onClick={copyToClipboard}
                className="ml-4 flex items-center space-x-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition-colors"
              >
                {copiedAddress ? <CheckCircle size={20} /> : <Copy size={20} />}
                <span className="hidden sm:inline">
                  {copiedAddress ? 'Copied!' : 'Copy'}
                </span>
              </button>
            </div>
            <p className="text-orange-200 text-center mt-4 text-sm">
              Always verify the contract address before trading!
            </p>
          </div>
        </div>

        {/* Steps */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-orange-500 to-transparent z-0"></div>
                )}
                
                <div className="bg-black/40 backdrop-blur-md rounded-2xl p-8 border border-orange-500/30 hover:border-yellow-400/50 transition-all duration-300 transform hover:scale-105 relative z-10">
                  <div className="text-center">
                    <div className="text-4xl mb-4">{step.icon}</div>
                    <div className="text-orange-400 font-bold text-lg mb-2">Step {step.number}</div>
                    <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                    <p className="text-orange-200 mb-6 text-sm leading-relaxed">
                      {step.description}
                    </p>
                    <button className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-6 py-3 rounded-full font-bold transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 mx-auto">
                      <span>{step.action}</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Buy Buttons */}
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-white mb-8">Quick Buy Options</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
            <button className="group bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-full font-bold transition-all duration-300 transform hover:scale-105 flex items-center space-x-3 shadow-lg shadow-purple-500/30">
              <div className="text-2xl">🪐</div>
              <span>Buy on Jupiter</span>
              <ExternalLink className="group-hover:animate-bounce" size={20} />
            </button>
            
            <button className="group bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white px-8 py-4 rounded-full font-bold transition-all duration-300 transform hover:scale-105 flex items-center space-x-3 shadow-lg shadow-green-500/30">
              <div className="text-2xl">⚡</div>
              <span>Buy on Raydium</span>
              <ExternalLink className="group-hover:animate-bounce" size={20} />
            </button>
          </div>
        </div>

        {/* Warning Section */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-red-900/30 backdrop-blur-md rounded-2xl p-8 border border-red-500/50">
            <div className="text-center">
              <div className="text-4xl mb-4">⚠️</div>
              <h3 className="text-2xl font-bold text-red-400 mb-4">Important Reminders</h3>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">🔍 Always Verify</h4>
                  <p className="text-orange-200 text-sm">
                    Double-check the contract address before any transaction. 
                    Scammers love to create fake tokens!
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">💰 Start Small</h4>
                  <p className="text-orange-200 text-sm">
                    Only invest what you can afford to lose. 
                    Crypto is volatile, but the moon is worth it!
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">🚫 No Financial Advice</h4>
                  <p className="text-orange-200 text-sm">
                    This is not financial advice. We're just here for the memes 
                    and the technology!
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">🤝 Join the Community</h4>
                  <p className="text-orange-200 text-sm">
                    Follow our social channels for updates, memes, 
                    and alpha calls!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToBuy;