import React, { useState, useEffect, useRef } from "react";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.png";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const sectionRef = useRef(null);
  
  const projects = [
    {
      id: 1,
      title: "Website Portfolio",
      description: "Website portofolio dengan desain responsif menggunakan React dan Tailwind CSS.",
      image: project1,
      technologies: ["React", "Tailwind"],
      github: "https://github.com",
      demo: "#",
      featured: false,
      demoType: "link"
    },
    {
      id: 2,
      title: "Galeri Foto Sekolah",
      description: "Aplikasi galeri dengan Laravel backend dan Flutter mobile app dengan integrasi API.",
      image: project2,
      technologies: ["Laravel", "Flutter", "API"],
      github: "https://github.com/lussii07/ujikom_web",
      youtubeId: "VEH9JoutXZs", // Ganti dengan ID YouTube yang sebenarnya
      featured: false,
      demoType: "youtube"
    },
    {
      id: 3,
      title: "Sistem Perpustakaan Digital",
      description: "Sistem manajemen perpustakaan dengan fitur peminjaman dan pengembalian buku.",
      image: project3,
      technologies: ["Laravel"],
      github: "https://github.com",
      youtubeId: "WBd6kCPXADs", // Ganti dengan ID YouTube yang sebenarnya
      featured: false,
      demoType: "youtube"
    }
  ];

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

  const openVideoModal = (projectId) => {
    setSelectedVideo(projectId);
  };

  const closeVideoModal = () => {
    setSelectedVideo(null);
  };

  // Fungsi untuk mendapatkan YouTube ID project berdasarkan ID
  const getProjectYoutubeId = (projectId) => {
    const project = projects.find(p => p.id === projectId);
    return project ? project.youtubeId : null;
  };

  // Fungsi untuk mendapatkan judul project berdasarkan ID
  const getProjectTitle = (projectId) => {
    const project = projects.find(p => p.id === projectId);
    return project ? project.title : "";
  };

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-neutral-950 to-black text-white py-16 px-4 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className={`absolute top-20 left-10 w-72 h-72 bg-emerald-600 rounded-full mix-blend-soft-light filter blur-3xl transition-all duration-2000 ${isVisible ? 'animate-pulse-slow opacity-100' : 'opacity-0'}`}></div>
        <div className={`absolute bottom-10 right-10 w-96 h-96 bg-gray-700 rounded-full mix-blend-soft-light filter blur-3xl transition-all duration-2000 ${isVisible ? 'animate-pulse-slower opacity-100' : 'opacity-0'}`} style={{animationDelay: '1s'}}></div>
      </div>

      <div className="max-w-6xl mx-auto z-10 w-full">
        {/* Section Header dengan animasi */}
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-200 via-emerald-400 to-white bg-clip-text text-transparent">
            My Projects
          </h2>
        </div>

        {/* Projects Grid dengan animasi bertahap */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className={`bg-gray-900/60 backdrop-blur-md rounded-xl overflow-hidden border border-gray-700/50 shadow-lg transition-all duration-300 hover:border-emerald-500/30 hover:shadow-emerald-500/10 group ${project.featured ? 'md:col-span-2' : ''} ${isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-10'}`}
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-48">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-60"></div>
                {project.featured && (
                  <div className="absolute top-4 left-4 bg-emerald-500 text-black px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-5">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-emerald-900/30 text-emerald-300 rounded-full text-xs border border-emerald-800/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex space-x-3">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gray-800 text-white py-2 px-4 rounded-lg text-sm font-medium text-center hover:bg-gray-700 transition-colors duration-300 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                    Code
                  </a>
                  
                  {project.demoType === "link" ? (
                    <a 
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-emerald-600 text-white py-2 px-4 rounded-lg text-sm font-medium text-center hover:bg-emerald-500 transition-colors duration-300 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live Demo
                    </a>
                  ) : (
                    <button
                      onClick={() => openVideoModal(project.id)}
                      className="flex-1 bg-emerald-600 text-white py-2 px-4 rounded-lg text-sm font-medium text-center hover:bg-emerald-500 transition-colors duration-300 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Video Demo
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* YouTube Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full bg-gray-900 rounded-lg overflow-hidden">
            <button 
              onClick={closeVideoModal}
              className="absolute top-4 right-4 z-10 text-white bg-gray-800 hover:bg-gray-700 rounded-full p-2 transition-colors cursor-pointer"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="aspect-video bg-black">
              {getProjectYoutubeId(selectedVideo) ? (
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${getProjectYoutubeId(selectedVideo)}`}
                  title={`Demo video for ${getProjectTitle(selectedVideo)}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center text-white">
                    <svg className="w-16 h-16 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-lg font-medium">Video demo untuk {getProjectTitle(selectedVideo)}</p>
                    <p className="text-gray-400 mt-2">Video tidak tersedia</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;