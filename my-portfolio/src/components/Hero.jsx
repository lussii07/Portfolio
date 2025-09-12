import React, { useState, useEffect } from "react";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [animate, setAnimate] = useState(false);
  
  const fullText = "Junior Web Developer";

  // Trigger animation on component mount
  useEffect(() => {
    setAnimate(true);
  }, []);

  // Typing effect - diperbaiki untuk animasi yang lebih smooth
  useEffect(() => {
    let timeout;
    
    if (isDeleting) {
      if (displayText === "") {
        setIsDeleting(false);
        setCurrentIndex(0);
        setTypingSpeed(500);
      } else {
        timeout = setTimeout(() => {
          setDisplayText(fullText.substring(0, displayText.length - 1));
          setTypingSpeed(typingSpeed * 0.9); // Mempercepat sedikit saat menghapus
        }, typingSpeed);
      }
    } else {
      if (currentIndex < fullText.length) {
        timeout = setTimeout(() => {
          setDisplayText(fullText.substring(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
          setTypingSpeed(150);
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
          setTypingSpeed(50);
        }, 2000);
      }
    }
    
    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting, typingSpeed, fullText]);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-neutral-950 to-black text-white pt-16 px-4 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-600 rounded-full mix-blend-soft-light filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-gray-700 rounded-full mix-blend-soft-light filter blur-3xl animate-pulse-slower"></div>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16 z-10">
        {/* Text Content - Left */}
        <div className="flex-1 text-center md:text-left order-2 md:order-1">
          <h2 className={`text-lg md:text-xl font-light text-gray-400 mb-2 tracking-wider transition-all duration-1000 ease-out ${animate ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
            HELLO, I'M
          </h2>

          <h1 className={`text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-100 via-emerald-400 to-white bg-clip-text text-transparent leading-tight ${animate ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            Lusi Nuraini
          </h1>

          {/* Animated Title */}
          <div className={`mb-8 ${animate ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
            <span className="text-xl md:text-2xl text-emerald-400 tracking-wide font-light">
              {displayText}
              <span className="inline-block w-1 h-6 bg-emerald-400 ml-1 align-middle animate-pulse"></span>
            </span>
          </div>

          {/* Short description */}
          <p className={`max-w-md text-gray-400 text-base md:text-lg mb-8 leading-relaxed ${animate ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
            Halloo! Perkenalkan nama saya Lusi Nuraini, lulusan  dari SMKN 4 Bogor jurusan Pengembangan Perangakat Lunak & Gim (PPLG). 
          </p>
        </div>

        {/* Profile Image */}
        <div className="flex-1 flex justify-center order-1 md:order-2">
          <div className={`relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-emerald-500 shadow-lg group bg-black ${animate ? 'animate-fade-in-scale' : 'opacity-0 scale-90'}`} style={{ animationDelay: '0.3s' }}>
            <div className="w-full h-full bg-gradient-to-br from-gray-900 to-black flex items-center justify-center transition-all duration-700 group-hover:opacity-0 absolute">
              <span className="text-5xl font-bold text-gray-600">LN</span>
            </div>
            <img
              src="src/assets/foto.jpg"
              alt="Lusi Nuraini"
              className="w-full h-full object-cover transform scale-105 transition-transform duration-700 group-hover:scale-100"
            />
            {/* Shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;