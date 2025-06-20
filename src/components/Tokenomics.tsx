import React from 'react';
import { PieChart, Lock, Users, Rocket, Gift } from 'lucide-react';

const Tokenomics = () => {
  const tokenData = [
    {
      category: "Community",
      percentage: 40,
      amount: "400M",
      color: "from-yellow-400 to-orange-500",
      icon: <Users size={24} />,
      description: "For the people, by the people"
    },
    {
      category: "Liquidity Pool",
      percentage: 30,
      amount: "300M",
      color: "from-blue-400 to-purple-500",
      icon: <PieChart size={24} />,
      description: "Ensuring smooth trading"
    },
    {
      category: "Development",
      percentage: 15,
      amount: "150M",
      color: "from-green-400 to-blue-500",
      icon: <Rocket size={24} />,
      description: "Building the future"
    },
    {
      category: "Marketing",
      percentage: 10,
      amount: "100M",
      color: "from-pink-400 to-red-500",
      icon: <Gift size={24} />,
      description: "Spreading the word"
    },
    {
      category: "Team (Locked)",
      percentage: 5,
      amount: "50M",
      color: "from-gray-400 to-gray-600",
      icon: <Lock size={24} />,
      description: "Locked for 2 years"
    }
  ];

  return (
    <section id="tokenomics" className="py-20 bg-gradient-to-b from-red-900 to-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2280%22%20height%3D%2280%22%20viewBox%3D%220%200%2080%2080%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23FFD700%22%20fill-opacity%3D%220.3%22%3E%3Cpath%20d%3D%22M50%2050c0-5.5-4.5-10-10-10s-10%204.5-10%2010%204.5%2010%2010%2010%2010-4.5%2010-10zM10%2010c0-5.5-4.5-10-10-10s-10%204.5-10%2010%204.5%2010%2010%2010%2010-4.5%2010-10zM90%2090c0-5.5-4.5-10-10-10s-10%204.5-10%2010%204.5%2010%2010%2010%2010-4.5%2010-10z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Tokenomics
            </span>{' '}
            That Make Sense
          </h2>
          <p className="text-xl text-orange-200 max-w-3xl mx-auto">
            No complicated schemes, no hidden agendas. Just a fair distribution 
            designed to reward the community and fuel growth.
          </p>
        </div>

        {/* Total Supply */}
        <div className="text-center mb-16">
          <div className="bg-black/40 backdrop-blur-md rounded-3xl p-8 border border-orange-500/30 max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">Total Supply</h3>
            <div className="text-6xl font-black text-yellow-400 mb-4">1B</div>
            <div className="text-xl text-orange-200">$TSA Tokens</div>
            <div className="mt-4 text-sm text-orange-300">
              Fixed supply • No inflation • Deflationary mechanisms
            </div>
          </div>
        </div>

        {/* Distribution Chart */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Visual Chart */}
            <div className="relative">
              <div className="bg-black/40 backdrop-blur-md rounded-3xl p-8 border border-orange-500/30">
                <h3 className="text-2xl font-bold text-white text-center mb-8">Distribution Breakdown</h3>
                
                {/* Pie Chart Representation */}
                <div className="relative w-80 h-80 mx-auto mb-8">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-400 via-orange-500 to-red-600 animate-spin-slow"></div>
                  <div className="absolute inset-4 rounded-full bg-black flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl mb-2">🚀</div>
                      <div className="text-white font-bold">$TSA</div>
                      <div className="text-orange-300 text-sm">1B Total</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Distribution Details */}
            <div className="space-y-6">
              {tokenData.map((item, index) => (
                <div 
                  key={index}
                  className="bg-black/30 backdrop-blur-md rounded-2xl p-6 border border-orange-500/30 hover:border-yellow-400/50 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${item.color}`}>
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white">{item.category}</h4>
                        <p className="text-orange-200 text-sm">{item.description}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-yellow-400">{item.percentage}%</div>
                      <div className="text-orange-200 text-sm">{item.amount} tokens</div>
                    </div>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full bg-gradient-to-r ${item.color}`}
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-black/40 backdrop-blur-md rounded-2xl p-8 border border-green-500/30 text-center">
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="text-2xl font-bold text-green-400 mb-4">No Rugs</h3>
            <p className="text-orange-200">
              Team tokens locked for 2 years. Liquidity locked permanently. 
              Your investment is safe with us.
            </p>
          </div>
          
          <div className="bg-black/40 backdrop-blur-md rounded-2xl p-8 border border-blue-500/30 text-center">
            <div className="text-4xl mb-4">🔥</div>
            <h3 className="text-2xl font-bold text-blue-400 mb-4">Deflationary</h3>
            <p className="text-orange-200">
              Regular token burns reduce supply over time, 
              increasing scarcity and potential value.
            </p>
          </div>
          
          <div className="bg-black/40 backdrop-blur-md rounded-2xl p-8 border border-purple-500/30 text-center">
            <div className="text-4xl mb-4">👥</div>
            <h3 className="text-2xl font-bold text-purple-400 mb-4">Community First</h3>
            <p className="text-orange-200">
              40% allocated to community rewards, airdrops, 
              and ecosystem growth initiatives.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;