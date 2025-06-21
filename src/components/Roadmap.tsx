import React from 'react';
import { CheckCircle, Clock, Star, Rocket } from 'lucide-react';

const Roadmap = () => {
  const phases = [
    {
      phase: "Phase 1",
      title: "Foundation",
      status: "completed",
      icon: "🚀",
      items: [
        "Token Launch on Solana",
        "Initial Liquidity Pool",
        "Community Building",
        "Social Media Presence",
        "Website Launch"
      ]
    },
    {
      phase: "Phase 2", 
      title: "Growth",
      status: "in-progress",
      icon: "📈",
      items: [
        "DEX Listings (Jupiter, Raydium)",
        "Influencer Partnerships",
        "Meme Contest Launch",
        "Community Governance",
        "First Token Burn Event"
      ]
    },
    {
      phase: "Phase 3",
      title: "Expansion",
      status: "upcoming",
      icon: "🌍",
      items: [
        "CEX Listings",
        "Mobile App Development",
        "DeFi Integrations",
        "Cross-chain Bridge",
        "NFT Collection Launch"
      ]
    },
    {
      phase: "Phase 4",
      title: "Domination",
      status: "future",
      icon: "👑",
      items: [
        "Traditional Finance Integration",
        "Banking Partnerships",
        "Global Marketing Campaign",
        "Metaverse Presence",
        "World Domination (Obviously)"
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'border-green-500 bg-green-500/20';
      case 'in-progress': return 'border-yellow-500 bg-yellow-500/20';
      case 'upcoming': return 'border-blue-500 bg-blue-500/20';
      case 'future': return 'border-purple-500 bg-purple-500/20';
      default: return 'border-gray-500 bg-gray-500/20';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return <CheckCircle className="text-green-400" size={24} />;
      case 'in-progress': return <Clock className="text-yellow-400" size={24} />;
      case 'upcoming': return <Star className="text-blue-400" size={24} />;
      case 'future': return <Rocket className="text-purple-400" size={24} />;
      default: return <Clock className="text-gray-400" size={24} />;
    }
  };

  return (
    <section id="roadmap" className="py-20 bg-gradient-to-b from-orange-900 to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 text-6xl text-yellow-300/10 animate-pulse">🗺️</div>
        <div className="absolute top-40 right-20 text-6xl text-orange-300/10 animate-bounce">🎯</div>
        <div className="absolute bottom-40 left-20 text-6xl text-red-300/10 animate-pulse delay-1000">🚀</div>
        <div className="absolute bottom-20 right-10 text-6xl text-yellow-300/10 animate-bounce delay-500">⭐</div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            The{' '}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              $TSA Roadmap
            </span>
          </h2>
          <p className="text-xl text-orange-200 max-w-3xl mx-auto">
            From humble beginnings to global domination. Here's how we're going to 
            revolutionize finance and make traditional banks obsolete.
          </p>
        </div>

        {/* Roadmap Timeline */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {phases.map((phase, index) => (
              <div key={index} className="relative">
                {/* Connector Line */}
                {index < phases.length - 1 && (
                  <div className="hidden lg:block absolute top-20 left-full w-full h-0.5 bg-gradient-to-r from-orange-500 to-transparent z-0"></div>
                )}
                
                <div className={`bg-black/40 backdrop-blur-md rounded-2xl p-6 border-2 ${getStatusColor(phase.status)} relative z-10 h-full`}>
                  {/* Phase Header */}
                  <div className="text-center mb-6">
                    <div className="text-4xl mb-3">{phase.icon}</div>
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      {getStatusIcon(phase.status)}
                      <span className="text-orange-300 font-bold text-sm uppercase tracking-wide">
                        {phase.phase}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white">{phase.title}</h3>
                  </div>

                  {/* Phase Items */}
                  <div className="space-y-3">
                    {phase.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-start space-x-3">
                        <div className="mt-1">
                          {phase.status === 'completed' ? (
                            <CheckCircle className="text-green-400" size={16} />
                          ) : phase.status === 'in-progress' && itemIndex < 2 ? (
                            <CheckCircle className="text-green-400" size={16} />
                          ) : (
                            <div className="w-4 h-4 rounded-full border-2 border-orange-400"></div>
                          )}
                        </div>
                        <span className="text-orange-200 text-sm leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Status Badge */}
                  <div className="mt-6 text-center">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${
                      phase.status === 'completed' ? 'bg-green-500/20 text-green-400' :
                      phase.status === 'in-progress' ? 'bg-yellow-500/20 text-yellow-400' :
                      phase.status === 'upcoming' ? 'bg-blue-500/20 text-blue-400' :
                      'bg-purple-500/20 text-purple-400'
                    }`}>
                      {phase.status === 'in-progress' ? 'In Progress' : phase.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Current Focus */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-black/40 backdrop-blur-md rounded-3xl p-8 border border-yellow-500/50">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-white mb-6 flex items-center justify-center">
                <Clock className="text-yellow-400 mr-3" size={32} />
                Current Focus: Phase 2
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold text-yellow-400 mb-4">🎯 Immediate Goals</h4>
                  <ul className="text-orange-200 space-y-2 text-left">
                    <li>• Expand DEX presence and liquidity</li>
                    <li>• Launch community governance platform</li>
                    <li>• Execute first major token burn</li>
                    <li>• Partner with crypto influencers</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-yellow-400 mb-4">📅 Timeline</h4>
                  <div className="text-orange-200 space-y-2 text-left">
                    <div>Q1 2025: DEX expansion complete</div>
                    <div>Q2 2025: Governance launch</div>
                    <div>Q3 2025: First burn event</div>
                    <div>Q4 2025: Phase 3 begins</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-orange-600/20 to-red-600/20 rounded-2xl p-8 border border-orange-500/30 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Want to Shape the Future?</h3>
            <p className="text-orange-200 mb-6">
              Join our community and help us build the financial revolution. 
              Your voice matters in the $TSA ecosystem.
            </p>
            <button className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg shadow-orange-500/30">
              Join the Movement
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;