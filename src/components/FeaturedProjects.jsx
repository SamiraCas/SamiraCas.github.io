import { useState } from 'react';

export default function FeaturedProjects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      title: "Bio Modular",
      description: "Desenvolvimento de interface de alta performance e arquitetura de componentes escaláveis. Foco em performance e integração de dados para soluções industriais.",
      link: "https://biomodularbrasil.com.br",
      tags: ["React", "Tailwind CSS", "Node.js"]
    },
    {
      title: "Solvit Consultoria",
      description: "Estruturação de plataforma corporativa com foco em automação de processos e experiência do usuário técnica, garantindo fluxos de trabalho eficientes.",
      link: "https://solvitconsultoria.com.br",
      tags: ["Full-stack", "API Integration", "React"]
    },
    {
      title: "Casa Caipora",
      description: "Otimização de componentes de interface e modernização do ecossistema digital para este centro cultural, utilizando React para criar interações fluidas.",
      link: "https://casacaipora.com.br/",
      tags: ["React", "UI Optimization", "Front-end"]
    },
    {
      title: "Gabryella Lofi",
      description: "Desenvolvimento de portfólio internacional com foco em arquitetura limpa, suporte multilíngue (i18n) e design minimalista de alta fidelidade.",
      link: "https://gabryellalofi.com/en",
      tags: ["React", "i18n", "CSS Modules"]
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  return (
    <section className="projects-section">
      <style>
        {`
          .projects-section {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 100px 20px;
            box-sizing: border-box;
            background: #ffffff;
            overflow: hidden;
          }

          .projects-header {
            width: 100%;
            max-width: 1200px;
            margin-bottom: 60px;
            text-align: left;
          }

          .projects-header h2 {
            font-size: clamp(2.5rem, 6vw, 3.5rem);
            font-weight: 900;
            color: #111;
            text-transform: uppercase;
            letter-spacing: -2px;
            line-height: 0.9;
            margin: 0;
          }

          .projects-header .line {
            height: 8px;
            width: 80px;
            background: #da3b89;
            margin-top: 15px;
          }

          /* === DESKTOP: GRID LADO A LADO === */
          .projects-container-wrapper {
            width: 100%;
            max-width: 1200px;
          }

          .projects-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            width: 100%;
            border: 1px solid #e5e7eb;
          }

          .project-card {
            background: #ffffff;
            padding: 60px 40px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            border: 1px solid #e5e7eb;
            transition: all 0.4s ease;
            text-decoration: none;
            min-height: 400px;
            box-sizing: border-box;
          }

          .project-card:hover {
            background: #fafafa;
            z-index: 1;
            outline: 4px solid #da3b89;
            outline-offset: -4px;
          }

          .project-content h3 {
            font-size: 2rem;
            font-weight: 900;
            color: #111;
            margin: 20px 0;
            text-transform: uppercase;
          }

          .project-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
          }

          .tag-box {
            font-size: 10px;
            font-weight: 800;
            color: #999;
            border: 1px solid #eee;
            padding: 4px 8px;
            text-transform: uppercase;
            letter-spacing: 1px;
          }

          .project-card:hover .tag-box {
            color: #da3b89;
            border-color: #da3b89;
          }

          .project-description {
            font-size: 1.1rem;
            color: #555;
            line-height: 1.6;
            margin-bottom: 40px;
            max-width: 90%;
          }

          .project-link {
            font-size: 12px;
            font-weight: 900;
            color: #111;
            text-transform: uppercase;
            letter-spacing: 2px;
            display: flex;
            align-items: center;
            gap: 10px;
          }

          .project-card:hover .project-link {
            color: #da3b89;
          }

          /* === CONTROLES SLIDE MOBILE === */
          .mobile-controls {
            display: none;
            justify-content: space-between;
            width: 100%;
            margin-top: 30px;
          }

          .slide-btn {
            background: #111;
            color: #fff;
            border: none;
            padding: 15px 25px;
            font-weight: 900;
            text-transform: uppercase;
            letter-spacing: 1px;
            cursor: pointer;
          }

          /* === MOBILE: SLIDER === */
          @media (max-width: 900px) {
            .projects-grid {
              display: flex;
              transition: transform 0.5s ease;
              transform: translateX(calc(-${currentIndex} * 100%));
              grid-template-columns: none;
              border: none;
            }

            .projects-container-wrapper {
              overflow: hidden;
              border: 1px solid #e5e7eb;
            }

            .project-card {
              flex: 0 0 100%;
              min-height: auto;
              padding: 40px 30px;
            }

            .mobile-controls {
              display: flex;
            }
          }
        `}
      </style>

      <div className="projects-header">
        <h2>Trabalhos<br/><span style={{color: '#da3b89'}}>Em Destaque</span></h2>
        <div className="line"></div>
      </div>

      <div className="projects-container-wrapper">
        <div className="projects-grid">
          {projects.map((proj, index) => (
            <a 
              key={index} 
              href={proj.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="project-card"
            >
              <div className="project-content">
                <div className="project-tags">
                  {proj.tags.map((tag, tIndex) => (
                    <span key={tIndex} className="tag-box">{tag}</span>
                  ))}
                </div>
                <h3>{proj.title}</h3>
                <p className="project-description">{proj.description}</p>
              </div>

              <div className="project-link">
                Ver Projeto &mdash;&rsaquo;
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Controles visíveis apenas no Mobile */}
      <div className="mobile-controls">
        <button onClick={prevSlide} className="slide-btn">Anterior</button>
        <button onClick={nextSlide} className="slide-btn">Próximo</button>
      </div>
    </section>
  );
}