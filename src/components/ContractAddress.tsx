import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

const ContractAddress = () => {
  const ca = 'AGtp8fdAE1BzNa8753rBxe88Vz3aYAL2P8pVcEoapump';
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(ca);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
  };

  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            <span className="text-orange-400">$</span>TSA Contract Address
          </h2>
          <div className="bg-[#1a1a1a] border border-gray-700 rounded-xl p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <code className="text-yellow-400 font-mono text-sm sm:text-base break-all text-left">
              {ca}
            </code>
            <button
              onClick={copyToClipboard}
              className="w-full sm:w-auto flex-shrink-0 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center space-x-2 transition-all duration-300"
            >
              {copied ? <Check size={20} /> : <Copy size={20} />}
              <span>{copied ? 'Copied!' : 'Copy'}</span>
            </button>
          </div>
          <p className="text-gray-400 mt-6">
            Always verify the contract address before trading!
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContractAddress; 