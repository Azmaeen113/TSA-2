import React from 'react';
import Header from './components/Header';
import LogoSection from './components/LogoSection';
import Hero from './components/Hero';
import BankingRoast from './components/BankingRoast';
import WhyTSA from './components/WhyTSA';
import Tokenomics from './components/Tokenomics';
import HowToBuy from './components/HowToBuy';
import ContractAddress from './components/ContractAddress';
import Community from './components/Community';
import Roadmap from './components/Roadmap';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <LogoSection />
      <Hero />
      <BankingRoast />
      <WhyTSA />
      <Tokenomics />
      <HowToBuy />
      <ContractAddress />
      <Community />
      <Roadmap />
      <Footer />
    </div>
  );
}

export default App;