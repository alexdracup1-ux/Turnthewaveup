import React from 'react';

// A simple SVG component for the 4-pointed star shape, a decorative element.
const FourPointedStar = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 100 100"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M50 0L61.2266 38.7734L100 50L61.2266 61.2266L50 100L38.7734 61.2266L0 50L38.7734 38.7734L50 0Z" />
  </svg>
);

const HeroSection = () => {
  const starBaseClasses = "absolute animate-pulse";
  
  return (
    <section className="relative w-full bg-background text-foreground overflow-hidden">
      {/* Subtle gradient overlay for the "dark blue gradient" effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_50%_0%,rgba(74,133,255,0.1),transparent_80%)]"></div>

      {/* Animated decorative sparkles and shapes */}
      <FourPointedStar 
        className={`${starBaseClasses} top-[15%] left-[10%] lg:left-[15%] w-10 h-10 text-white opacity-80`} 
        style={{ animationDelay: '0s', animationDuration: '4s' }} 
      />
      <FourPointedStar 
        className={`${starBaseClasses} top-[35%] left-[20%] lg:left-[25%] w-5 h-5 text-blue-400`} 
        style={{ animationDelay: '1s', animationDuration: '3s' }} 
      />
      <FourPointedStar 
        className={`${starBaseClasses} bottom-[20%] right-[10%] lg:right-[15%] w-12 h-12 text-white opacity-90`} 
        style={{ animationDelay: '0.5s', animationDuration: '5s' }} 
      />
      <div 
        className={`${starBaseClasses} top-[55%] right-[20%] lg:right-[25%] w-1 h-1 bg-blue-300 rounded-full`} 
        style={{ animationDelay: '1.5s', animationDuration: '2.5s' }}
      ></div>
      <div 
        className={`${starBaseClasses} top-[25%] right-[15%] lg:right-[20%] w-1.5 h-1.5 bg-white rounded-full opacity-70`} 
        style={{ animationDelay: '2s', animationDuration: '3.5s' }}
      ></div>
      <div 
        className={`${starBaseClasses} bottom-[30%] left-[10%] lg:left-[15%] w-1 h-1 bg-white rounded-full opacity-60`} 
        style={{ animationDelay: '2.5s', animationDuration: '4s' }}
      ></div>

      <div className="relative container py-32 md:py-40 flex flex-col items-center justify-center text-center z-10">
        <h1 className="tracking-[-0.02em]">
          Everything you need to make anything.
        </h1>
        <p className="mt-6 text-body-lg text-foreground/90 max-w-2xl">
          Bring any idea to life with products for creators, businesses, and beyond.
        </p>
        <a
          href="https://www.adobe.com/creativecloud/plans.html"
          className="mt-10 inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-primary-foreground bg-primary rounded-full hover:opacity-90 transition-opacity duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background"
        >
          See all plans
        </a>
      </div>
    </section>
  );
};

export default HeroSection;