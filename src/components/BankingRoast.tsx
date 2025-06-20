import React from 'react';
import { TrendingDown, Frown, Clock, DollarSign } from 'lucide-react';

const BankingRoast = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-red-900 to-orange-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%22100%22%20height%3D%22100%22%20viewBox%3D%220%200%20100%20100%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M11%2018c3.866%200%207-3.134%207-7s-3.134-7-7-7-7%203.134-7%207%203.134%207%207%207zm48%2025c3.866%200%207-3.134%207-7s-3.134-7-7-7-7%203.134-7%207%203.134%207%207%207zm-43-7c1.657%200%203-1.343%203-3s-1.343-3-3-3-3%201.343-3%203%201.343%203%203%203zm63%2031c1.657%200%203-1.343%203-3s-1.343-3-3-3-3%201.343-3%203%201.343%203%203%203zM34%2090c1.657%200%203-1.343%203-3s-1.343-3-3-3-3%201.343-3%203%201.343%203%203%203zm56-76c1.657%200%203-1.343%203-3s-1.343-3-3-3-3%201.343-3%203%201.343%203%203%203zM12%2086c2.21%200%204-1.79%204-4s-1.79-4-4-4-4%201.79-4%204%201.79%204%204%204zm28-65c2.21%200%204-1.79%204-4s-1.79-4-4-4-4%201.79-4%204%201.79%204%204%204zm23-11c2.76%200%205-2.24%205-5s-2.24-5-5-5-5%202.24-5%205%202.24%205%205%205zm-6%2060c2.21%200%204-1.79%204-4s-1.79-4-4-4-4%201.79-4%204%201.79%204%204%204zm29%2022c2.76%200%205-2.24%205-5s-2.24-5-5-5-5%202.24-5%205%202.24%205%205%205zM32%2063c2.76%200%205-2.24%205-5s-2.24-5-5-5-5%202.24-5%205%202.24%205%205%205zm57-13c2.76%200%205-2.24%205-5s-2.24-5-5-5-5%202.24-5%205%202.24%205%205%205zm-9-21c1.105%200%202-.895%202-2s-.895-2-2-2-2%20.895-2%202%20.895%202%202%202zM60%2091c1.105%200%202-.895%202-2s-.895-2-2-2-2%20.895-2%202%20.895%202%202%202zM35%2041c1.105%200%202-.895%202-2s-.895-2-2-2-2%20.895-2%202%20.895%202%202%202zM12%2060c1.105%200%202-.895%202-2s-.895-2-2-2-2%20.895-2%202%20.895%202%202%202z%22%20fill%3D%22%23FFD700%22%20fill-opacity%3D%220.4%22%20fill-rule%3D%22evenodd%22/%3E%3C/svg%3E')]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            Traditional Banks: Where Your{' '}
            <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              Money Goes to Die
            </span>
          </h2>
          <p className="text-xl text-orange-200 max-w-3xl mx-auto">
            Tired of watching your savings account grow slower than a sloth on sedatives? 
            Welcome to the graveyard of financial dreams.
          </p>
        </div>

        {/* Comparison Chart */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="bg-black/40 backdrop-blur-md rounded-3xl p-8 border border-orange-500/30">
            <h3 className="text-3xl font-bold text-white text-center mb-8">
              The Brutal Truth: Traditional vs $TSA
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Traditional Banking */}
              <div className="bg-gray-800/50 rounded-2xl p-6 border-2 border-red-500">
                <div className="text-center mb-6">
                  <h4 className="text-2xl font-bold text-red-400 mb-2">Traditional Banking</h4>
                  <div className="text-6xl mb-4">😴</div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 text-red-300">
                    <TrendingDown className="text-red-500" size={20} />
                    <span>0.1% APY (if you're lucky)</span>
                  </div>
                  <div className="flex items-center space-x-3 text-red-300">
                    <Clock className="text-red-500" size={20} />
                    <span>3-5 business days for transfers</span>
                  </div>
                  <div className="flex items-center space-x-3 text-red-300">
                    <DollarSign className="text-red-500" size={20} />
                    <span>Hidden fees everywhere</span>
                  </div>
                  <div className="flex items-center space-x-3 text-red-300">
                    <Frown className="text-red-500" size={20} />
                    <span>Your money loses value to inflation</span>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-red-900/50 rounded-lg">
                  <div className="text-center">
                    <div className="text-sm text-red-300">$1000 after 1 year:</div>
                    <div className="text-2xl font-bold text-red-400">$1001</div>
                    <div className="text-xs text-red-500">Congratulations, you can buy a candy bar! 🍭</div>
                  </div>
                </div>
              </div>

              {/* $TSA */}
              <div className="bg-gradient-to-br from-orange-600/20 to-yellow-600/20 rounded-2xl p-6 border-2 border-yellow-400 relative overflow-hidden">
                <div className="absolute top-2 right-2 text-2xl animate-spin">🚀</div>
                
                <div className="text-center mb-6">
                  <h4 className="text-2xl font-bold text-yellow-400 mb-2">$TSA Power</h4>
                  <div className="text-6xl mb-4">🌙</div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 text-yellow-300">
                    <div className="text-green-400">🚀</div>
                    <span>TO THE MOON potential</span>
                  </div>
                  <div className="flex items-center space-x-3 text-yellow-300">
                    <div className="text-green-400">⚡</div>
                    <span>Instant Solana transactions</span>
                  </div>
                  <div className="flex items-center space-x-3 text-yellow-300">
                    <div className="text-green-400">💎</div>
                    <span>Minimal fees, maximum gains</span>
                  </div>
                  <div className="flex items-center space-x-3 text-yellow-300">
                    <div className="text-green-400">🎯</div>
                    <span>Built for the future</span>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-gradient-to-r from-yellow-600/30 to-orange-600/30 rounded-lg border border-yellow-400/50">
                  <div className="text-center">
                    <div className="text-sm text-yellow-300">$1000 potential:</div>
                    <div className="text-2xl font-bold text-yellow-400 animate-pulse">🚀 INFINITE 🚀</div>
                    <div className="text-xs text-yellow-500">Now we're talking! 🔥</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pain Points */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="text-center">
            <div className="text-6xl mb-4">😭</div>
            <h3 className="text-2xl font-bold text-white mb-4">Inflation Eats Your Lunch</h3>
            <p className="text-orange-200">
              While your savings earn 0.1%, inflation runs at 3-8%. 
              You're literally paying the bank to hold your money!
            </p>
          </div>
          
          <div className="text-center">
            <div className="text-6xl mb-4">🐌</div>
            <h3 className="text-2xl font-bold text-white mb-4">Slower Than a Snail</h3>
            <p className="text-orange-200">
              Wire transfers take days, international transfers take weeks. 
              Meanwhile, $TSA moves at the speed of light on Solana.
            </p>
          </div>
          
          <div className="text-center">
            <div className="text-6xl mb-4">🏦</div>
            <h3 className="text-2xl font-bold text-white mb-4">Banks Get Rich, You Don't</h3>
            <p className="text-orange-200">
              They lend your money at 20% interest and give you 0.1%. 
              Time to cut out the middleman and join the revolution!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BankingRoast;