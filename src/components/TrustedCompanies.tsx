import React from 'react';

export default function TrustedCompanies() {
  return (
    <section className="bg-primary py-12 border-t border-white/10">
      <div className="max-w-[1600px] mx-auto px-8 sm:px-10 md:px-12">
        <p className="text-gray-400 text-sm mb-8">Ils nous font confiance</p>
        <div className="flex items-center space-x-12">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg"
            alt="Microsoft"
            className="h-6 w-auto brightness-0 invert opacity-75"
          />
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
            alt="Google"
            className="h-6 w-auto brightness-0 invert opacity-75"
          />
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg"
            alt="IBM"
            className="h-6 w-auto brightness-0 invert opacity-75"
          />
        </div>
      </div>
    </section>
  );
}