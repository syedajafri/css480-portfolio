
import React from "react";

type WelcomeBannerProps = {
  greeting: string;
  message: string;
};

const WelcomeBanner: React.FC<WelcomeBannerProps> = ({ greeting, message }) => {
  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-b from-purple/10 to-white">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="grid"
              width="10"
              height="10"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="1" cy="1" r="0.5" fill="#9b87f5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative max-w-4xl mx-auto text-center px-4 animate-fade-in">
        <h1 
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4"
          tabIndex={0}
        >
          {greeting}
        </h1>
        <p 
          className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto"
          tabIndex={0}
        >
          {message}
        </p>
      </div>
    </section>
  );
};

export default WelcomeBanner;
