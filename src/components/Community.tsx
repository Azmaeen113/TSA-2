import React from 'react';
import { Twitter, MessageCircle, Users, Heart, Zap, TrendingUp } from 'lucide-react';

const Community = () => {
  const socialLinks = [
    {
      name: "Twitter",
      icon: <Twitter size={32} />,
      followers: "50K+",
      description: "Daily memes, updates, and alpha",
      color: "from-blue-400 to-blue-600",
      emoji: "🐦"
    },
    {
      name: "Telegram",
      icon: <MessageCircle size={32} />,
      followers: "25K+",
      description: "Real-time chat and community",
      color: "from-blue-500 to-cyan-500",
      emoji: "💬"
    },
    {
      name: "Discord",
      icon: <Users size={32} />,
      followers: "15K+",
      description: "Deep discussions and AMAs",
      color: "from-purple-500 to-indigo-600",
      emoji: "🎮"
    }
  ];

  const testimonials = [
    {
      name: "CryptoChad",
      handle: "@cryptochad2024",
      text: "Finally ditched my savings account earning 0.01%. $TSA to the moon! 🚀",
      avatar: "👨‍💼"
    },
    {
      name: "DiamondHands",
      handle: "@diamondhands",
      text: "Been holding $TSA since day one. Best decision I ever made! 💎🙌",
      avatar: "💎"
    },
    {
      name: "MoonGirl",
      handle: "@moongirl",
      text: "My bank called asking why I withdrew everything. Told them about $TSA! 😂",
      avatar: "👩‍🚀"
    }
  ];

  const stats = [
    {
      number: "50K+",
      label: "Holders",
      icon: "👥",
      color: "text-yellow-400"
    },
    {
      number: "$2M+",
      label: "Market Cap",
      icon: "💰",
      color: "text-green-400"
    },
    {
      number: "100K+",
      label: "Transactions",
      icon: "⚡",
      color: "text-blue-400"
    },
    {
      number: "24/7",
      label: "Community",
      icon: "🌍",
      color: "text-purple-400"
    }
  ];

  return (
    <section id="community" className="py-20 bg-gradient-to-b from-red-900 to-orange-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23FFD700%22%20fill-opacity%3D%220.6%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            Join the{' '}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              $TSA Army
            </span>
          </h2>
          <p className="text-xl text-orange-200 max-w-3xl mx-auto">
            We're not just a token, we're a movement. Join thousands of investors 
            who've said goodbye to traditional banking and hello to the future.
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-black/40 backdrop-blur-md rounded-2xl p-6 border border-orange-500/30 text-center">
              <div className="text-4xl mb-3">{stat.icon}</div>
              <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.number}</div>
              <div className="text-orange-200 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          {socialLinks.map((social, index) => (
            <div key={index} className="group">
              <div className="bg-black/40 backdrop-blur-md rounded-2xl p-8 border border-orange-500/30 hover:border-yellow-400/50 transition-all duration-300 transform hover:scale-105 text-center">
                <div className="text-4xl mb-4">{social.emoji}</div>
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${social.color} mb-6`}>
                  {social.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{social.name}</h3>
                <div className="text-yellow-400 font-bold text-lg mb-3">{social.followers}</div>
                <p className="text-orange-200 mb-6">{social.description}</p>
                <button className={`bg-gradient-to-r ${social.color} hover:opacity-90 text-white px-6 py-3 rounded-full font-bold transition-all duration-300 transform group-hover:scale-105`}>
                  Join Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="max-w-6xl mx-auto mb-16">
          <h3 className="text-4xl font-bold text-white text-center mb-12">
            What the Community Says
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-black/40 backdrop-blur-md rounded-2xl p-6 border border-orange-500/30">
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-3">{testimonial.avatar}</div>
                  <div>
                    <div className="text-white font-bold">{testimonial.name}</div>
                    <div className="text-orange-300 text-sm">{testimonial.handle}</div>
                  </div>
                </div>
                <p className="text-orange-200 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>

        {/* Community Features */}
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="bg-black/40 backdrop-blur-md rounded-2xl p-8 border border-orange-500/30">
            <h3 className="text-3xl font-bold text-white mb-6 flex items-center">
              <Heart className="text-red-400 mr-3" size={32} />
              Community Driven
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="text-2xl">🗳️</div>
                <div>
                  <h4 className="text-lg font-bold text-yellow-400">Governance</h4>
                  <p className="text-orange-200">Community votes on major decisions and future developments.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="text-2xl">🎁</div>
                <div>
                  <h4 className="text-lg font-bold text-yellow-400">Rewards</h4>
                  <p className="text-orange-200">Regular airdrops and rewards for active community members.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="text-2xl">🎨</div>
                <div>
                  <h4 className="text-lg font-bold text-yellow-400">Meme Contests</h4>
                  <p className="text-orange-200">Weekly meme competitions with $TSA prizes!</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-black/40 backdrop-blur-md rounded-2xl p-8 border border-orange-500/30">
            <h3 className="text-3xl font-bold text-white mb-6 flex items-center">
              <Zap className="text-yellow-400 mr-3" size={32} />
              Always Active
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="text-2xl">📈</div>
                <div>
                  <h4 className="text-lg font-bold text-yellow-400">Market Updates</h4>
                  <p className="text-orange-200">Real-time price alerts and market analysis from the community.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="text-2xl">🎤</div>
                <div>
                  <h4 className="text-lg font-bold text-yellow-400">AMAs</h4>
                  <p className="text-orange-200">Regular Ask Me Anything sessions with the team and special guests.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="text-2xl">🚀</div>
                <div>
                  <h4 className="text-lg font-bold text-yellow-400">Alpha Calls</h4>
                  <p className="text-orange-200">Early access to news, partnerships, and opportunities.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;