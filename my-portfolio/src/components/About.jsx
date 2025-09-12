import React, { useState, useEffect, useRef } from "react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("skills");
  const sectionRef = useRef(null);

  // Intersection Observer untuk mendeteksi ketika section terlihat di viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Daftar sertifikat
  const certificates = [
    {
      name: "Competency Certificate",
      file: "/public/kompetensi.pdf",
      issuer: "Bonet",
      date: "Mei 2025"
    },
    {
      name: "IOT Certificate",
      file: "/public/IOT.pdf",
      issuer: "Seamolec",
      date: "Agustus 2023"
    },
    {
      name: "RedHat Certificate",
      file: "/public/redhat.pdf",
      issuer: "RedHat Academy",
      date: "January 2024"
    },
  ];

  // Daftar skills
  const skills = [
    { icon: "html5-plain", label: "HTML", color: "text-orange-500"},
    { icon: "css3-plain", label: "CSS", color: "text-blue-500" },
    { icon: "javascript-plain", label: "JavaScript", color: "text-yellow-400"},
    { icon: "php-plain", label: "PHP", color: "text-purple-500"},
    { icon: "flutter-plain", label: "Flutter", color: "text-blue-400" },
    { icon: "laravel-plain", label: "Laravel", color: "text-red-500" },
    { icon: "tailwindcss-plain", label: "Tailwind", color: "text-cyan-400" },
    { icon: "bootstrap-plain", label: "Bootstrap", color: "text-purple-600" },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-neutral-950 to-black text-white py-12 px-4 relative overflow-hidden"
    >
      
      {/* Background decorative elements dengan animasi */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className={`absolute top-20 left-10 w-64 h-64 bg-emerald-600 rounded-full mix-blend-soft-light filter blur-3xl transition-all duration-2000 ${isVisible ? 'animate-pulse-slow opacity-100' : 'opacity-0'}`}></div>
        <div className={`absolute bottom-10 right-10 w-80 h-80 bg-gray-700 rounded-full mix-blend-soft-light filter blur-3xl transition-all duration-2000 ${isVisible ? 'animate-pulse-slower opacity-100' : 'opacity-0'}`}></div>
      </div>

      <div className="max-w-4xl mx-auto z-10">

        {/* Main Card dengan animasi fade in */}
        <div className={`bg-gray-900/70 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-gray-800 shadow-2xl relative overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">

            {/* Profile Image */}
            <div className="flex-shrink-0">
              <div className={`relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-2 border-gray-700 shadow-xl group mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
                <div className="w-full h-full bg-gradient-to-br from-gray-900 to-black flex items-center justify-center absolute inset-0 transition-all duration-500 group-hover:opacity-0">
                  <span className="text-3xl font-bold text-gray-600">LN</span>
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

            {/* About Content */}
            <div className="flex-1 text-center md:text-left">
              <h2 className={`text-2xl md:text-3xl font-bold mb-4 relative inline-block transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <span className="bg-gradient-to-r from-gray-200 via-emerald-400 to-white bg-clip-text text-transparent">
                  About Me
                </span>
                <span className={`absolute -bottom-1 left-1/2 md:left-0 transform -translate-x-1/2 md:translate-x-0 h-1 bg-gradient-to-r from-emerald-500 to-green-700 rounded-full transition-all duration-1000 ${isVisible ? 'w-20 opacity-100' : 'w-0 opacity-0'}`}></span>
              </h2>

              <p className={`text-gray-300 mb-3 leading-relaxed text-sm transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                Lulusan SMKN 4 Bogor jurusan Pengembangan Perangkat Lunak & Gim (PPLG). Memiliki kemampuan dalam mengembangkan aplikasi menggunakan HTML, CSS, JavaScript serta framework seperti Laravel & Flutter. 
              </p>

              <p className={`text-gray-300 leading-relaxed text-sm transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
               Saya menyukai dunia pengembangan aplikasi dan senang mempelajari serta mengulik hal-hal baru terkait pemrograman. Meskipun masih terus belajar, saya berambisi untuk meningkatkan kemampuan saya dan siap memberikan kontribusi terbaik dalam setiap proyek yang saya jalani.
              </p>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className={`mt-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex justify-center mb-6 border-b border-gray-700">
            <button
              className={`px-6 py-3 font-medium text-sm md:text-base transition-all duration-300 cursor-pointer ${
                activeTab === "skills" 
                  ? "text-emerald-400 border-b-2 border-emerald-400" 
                  : "text-gray-400 hover:text-gray-200"
              }`}
              onClick={() => setActiveTab("skills")}
            >
              <svg
                className="w-5 h-5 mr-2 inline-block"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              Technical Skills
            </button>
            <button
              className={`px-6 py-3 font-medium text-sm md:text-base transition-all duration-300 cursor-pointer ${
                activeTab === "certificates" 
                  ? "text-emerald-400 border-b-2 border-emerald-400" 
                  : "text-gray-400 hover:text-gray-200"
              }`}
              onClick={() => setActiveTab("certificates")}
            >
              <svg
                className="w-5 h-5 mr-2 inline-block"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
              Certificates
            </button>
          </div>

          {/* Tab Content */}
          {activeTab === "skills" && (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center p-3 rounded-lg transition-all duration-500 group transform hover:-translate-y-1 cursor-default"
                >
                  <div className="bg-black/40 p-3 rounded-lg border border-gray-800 hover:border-emerald-500 hover:shadow-lg hover:shadow-emerald-500/20 w-full transition-all duration-300">
                    <i
                      className={`devicon-${skill.icon} colored text-3xl mb-1 group-hover:scale-110 transition-transform ${skill.color} block text-center`}
                    ></i>
                    <span className="text-gray-300 text-xs mt-1 group-hover:text-emerald-300 transition-colors block text-center font-medium">{skill.label}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "certificates" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certificates.map((cert, index) => (
                <div
                  key={index}
                  className="bg-black/40 p-4 rounded-lg border border-gray-800 hover:border-emerald-500 transition-all duration-300 group cursor-pointer transform hover:-translate-y-1"
                  onClick={() => window.open(cert.file, '_blank')}
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4 text-emerald-400 bg-emerald-400/10 p-2 rounded-lg">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-200 group-hover:text-emerald-300 transition-colors">{cert.name}</h4>
                      <p className="text-sm text-gray-400 mt-1">{cert.issuer}</p>
                      <p className="text-xs text-gray-500 mt-1">{cert.date}</p>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center text-sm text-emerald-400 group-hover:text-emerald-300 transition-colors">
                    <span>View Certificate</span>
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;