import React from 'react';
import { Zap, Shield, TrendingUp, Users, Rocket, Star } from 'lucide-react';

const WhyTSA = () => {
  const features = [
    {
      icon: <Zap className="text-yellow-400" size={32} />,
      title: "Lightning Speed",
      description: "Powered by Solana's blazing-fast blockchain. Transactions complete in seconds, not days.",
      emoji: "⚡"
    },
    {
      icon: <TrendingUp className="text-green-400" size={32} />,
      title: "Actual Returns",
      description: "Say goodbye to pathetic 0.1% APY. $TSA is built for real gains in the crypto economy.",
      emoji: "📈"
    },
    {
      icon: <Shield className="text-blue-400" size={32} />,
      title: "Solana Security",
      description: "Built on one of the most secure and efficient blockchains in existence.",
      emoji: "🛡️"
    },
    {
      icon: <Users className="text-purple-400" size={32} />,
      title: "Community Driven",
      description: "Join thousands of investors who've ditched traditional banking for the future.",
      emoji: "👥"
    },
    {
      icon: <Rocket className="text-orange-400" size={32} />,
      title: "Future Ready",
      description: "While banks cling to outdated systems, $TSA embraces the financial revolution.",
      emoji: "🚀"
    },
    {
      icon: <Star className="text-yellow-400" size={32} />,
      title: "Meme Magic",
      description: "Serious technology with a sense of humor. Because finance doesn't have to be boring.",
      emoji: "✨"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-orange-900 to-red-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 text-6xl text-yellow-300/20 animate-pulse">🌟</div>
        <div className="absolute top-40 right-20 text-6xl text-orange-300/20 animate-bounce">🚀</div>
        <div className="absolute bottom-40 left-20 text-6xl text-red-300/20 animate-pulse delay-1000">💎</div>
        <div className="absolute bottom-20 right-10 text-6xl text-yellow-300/20 animate-bounce delay-500">⭐</div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            Meet <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">$TSA</span>: 
            Your Money's New Best Friend
          </h2>
          <p className="text-xl text-orange-200 max-w-3xl mx-auto">
            Finally, a financial solution that works as hard as you do. 
            Built on Solana, powered by community, destined for greatness.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-black/30 backdrop-blur-md rounded-2xl p-8 border border-orange-500/30 hover:border-yellow-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20"
            >
              <div className="text-center mb-6">
                <div className="text-4xl mb-4 group-hover:animate-bounce">{feature.emoji}</div>
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
              </div>
              <p className="text-orange-200 text-center leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Key Benefits Section */}
        <div className="bg-black/40 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-orange-500/30 max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold text-white text-center mb-12">
            Why $TSA is Different
          </h3>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="text-3xl">🎯</div>
                <div>
                  <h4 className="text-xl font-bold text-yellow-400 mb-2">Unmatched Liquidity</h4>
                  <p className="text-orange-200">Trade instantly, no waiting periods. Your money, your rules, your timeline.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="text-3xl">💰</div>
                <div>
                  <h4 className="text-xl font-bold text-yellow-400 mb-2">Robust Returns</h4>
                  <p className="text-orange-200">Higher-than-average potential with the power of decentralized finance.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="text-3xl">🔮</div>
                <div>
                  <h4 className="text-xl font-bold text-yellow-400 mb-2">Forward-Thinking</h4>
                  <p className="text-orange-200">Blockchain innovation over legacy systems. Welcome to the future of finance.</p>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-br from-yellow-400/20 to-orange-600/20 rounded-2xl p-8 border border-yellow-400/50">
                <h4 className="text-2xl font-bold text-white mb-4">The $TSA Promise</h4>
                <div className="text-6xl mb-4">🤝</div>
                <p className="text-orange-200 mb-6">
                  No rugs, only gains. Built by the community, for the community.
                </p>
                <div className="bg-black/50 rounded-lg p-4">
                  <div className="text-yellow-400 font-bold text-lg">Community First</div>
                  <div className="text-orange-200 text-sm">Transparency • Security • Growth</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyTSA;