import { useState } from 'react';

// === DADOS DAS EXPERIÊNCIAS ===
const JOBS = [
  {
    period: "8 meses",
    company: "Solvit",
    role: "Desenvolvedor Front End",
    description: "Responsável por transformar designs em interfaces funcionais e responsivas utilizando Webflow. Atuei na manutenção e evolução de projetos legados com Next.js, Node.js, API REST, SQL Server e React.",
    skills: ["Figma", "Web Design", "Front-end", "React"]
  },
  {
    period: "4 meses",
    company: "ID360° New Media",
    role: "Front End Developer",
    description: "Responsável por transformar designs em interfaces funcionais e responsivas utilizando Webflow. Atuei na manutenção e evolução de projetos legados com Next.js, Node.js, API REST, SQL Server e React.",
    skills: ["Figma", "Webflow", "Web Design", "Front-end", "C#", "SQL Server", "API", "Node.js", "Next.js", "React"]
  },
  {
    period: "4 meses",
    company: "Cronos Level UP - USA",
    role: "UI/UX e Front End Developer",
    description: "Responsável por transformar os designs em uma interface funcional e responsiva, assegurando que a experiência do usuário seja fluida e eficiente. Edição de vídeo.",
    skills: ["Figma", "Webflow", "Web Design", "Front-end"]
  },
  {
    period: "2 meses",
    company: "Ótima Ideia",
    role: "Desenvolvedora front-end",
    description: "Desenvolvimento de layouts de sites de empresas. Colaboração interdisciplinar.",
    skills: ["Figma", "WordPress", "Web Design", "Front-end", "Canva"]
  },
  {
    period: "1 ano",
    company: "Digital Bloom",
    role: "Web Designer",
    description: "Desenvolvimento de layouts de sites de empresas. Colaboração interdisciplinar.",
    skills: ["Figma", "Webflow", "Web Design", "Front-end", "Canva"]
  },
  {
    period: "6 meses",
    company: "Edygital",
    role: "Web Designer - Pleno",
    description: "Desenvolvimento de layouts de sites de empresas. Desenvolvimento de design de logotipos. Colaboração interdisciplinar.",
    skills: ["Figma", "Builderall", "WordPress", "Web Design", "Front-end"]
  },
  {
    period: "2023 - 2024",
    company: "Agência Saffari",
    role: "Marketing e Desenvolvimento Front-end",
    description: "Criação de conteúdo, design de posts e anúncios para mídias sociais de diversos segmentos. Desenvolvimento de layouts de sites. Colaboração interdisciplinar.",
    skills: ["Figma", "WordPress", "Mídias sociais", "Web Design", "Design de logotipos", "Front-end"]
  },
  {
    period: "2022 - 2023",
    company: "Aphabeto",
    role: "Analista de Suporte Computacional",
    description: "Manipulação e criação de planilhas em EXCEL. Manipulação de banco de dados (SQL). Suporte de plataforma B2B e plataformas Linx, TOTVS e VTEX. Desenvolvimento de páginas web (front-end).",
    skills: ["Excel", "VTEX", "TOTVS", "Linx", "HTML", "CSS", "SQL", "B2B"]
  }
];

export default function ExperienceCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => setCurrentIndex((prev) => (prev === JOBS.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? JOBS.length - 1 : prev - 1));
  const goToSlide = (index) => setCurrentIndex(index);

  const currentJob = JOBS[currentIndex];

  return (
    <article className="experience-section">
      <style>
        {`
          .experience-section {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            box-sizing: border-box;
          }

          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          .animar-fade {
            animation: fadeIn 0.4s ease-out forwards;
          }

          /* === DESKTOP (MANTIDO) === */
          .card-experiencia {
            background: #ffffff;
            border-radius: 24px;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.06);
            padding: 40px;
            display: flex;
            flex-direction: column;
            gap: 30px;
            border: 1px solid #f3f4f6;
            width: 100%;
            max-width: 1200px;
            margin: 0 auto;
            box-sizing: border-box;
            text-align: left;
          }

          @media (min-width: 800px) {
            .card-experiencia {
              flex-direction: row;
              padding: 50px;
              gap: 50px;
            }
            .card-col-esq {
              flex: 0 0 30%;
              border-right: 2px solid #f3f4f6;
              padding-right: 30px;
            }
            .card-col-dir { flex: 1; }
          }

          .card-periodo {
            display: inline-block;
            background: #fdf2f8;
            color: #da3b89;
            font-weight: 700;
            padding: 8px 16px;
            border-radius: 20px;
            font-size: 14px;
            margin-bottom: 15px;
          }

          .card-empresa { font-size: 1.8rem; font-weight: 800; color: #111; margin: 0; }
          .card-cargo { font-size: 1.4rem; font-weight: 700; color: #1f2937; margin: 10px 0 15px 0; }
          .card-descricao { font-size: 1.1rem; color: #4b5563; line-height: 1.6; margin-bottom: 30px; }

          .card-skills { display: flex; flex-wrap: wrap; gap: 10px; list-style: none; padding: 0; }
          .skill-badge {
            background: #f3f4f6;
            padding: 6px 14px;
            border-radius: 8px;
            font-size: 14px;
            font-weight: 600;
            border: 1px solid #e5e7eb;
          }

          /* === CONTROLES === */
          .controles-area {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 40px;
            margin-top: 60px;
            width: 100%;
          }

          .btn-carrossel {
            background: transparent;
            border: 2px solid #111;
            border-radius: 8px;
            padding: 12px 28px;
            cursor: pointer;
            font-size: 18px;
            font-weight: bold;
            transition: all 0.3s ease;
            white-space: nowrap;
          }

          .btn-carrossel:hover { background: #111; color: #fff; }

          /* === MOBILE (AJUSTADO E BONITO) === */
          @media (max-width: 799px) {
            .card-experiencia {
              padding: 25px;
              width: 92%;
              gap: 20px;
            }
            .card-empresa { font-size: 1.4rem; }
            .card-cargo { font-size: 1.1rem; }
            .card-descricao { font-size: 0.95rem; margin-bottom: 20px; }
            .controles-area { gap: 15px; margin-top: 40px; }
            .btn-carrossel { padding: 10px 15px; font-size: 14px; }
            .btn-desktop { display: none; }
            .btn-mobile { display: inline; }
            .dot-indicator { width: 10px !important; height: 10px !important; }
          }

          @media (min-width: 800px) {
            .btn-mobile { display: none; }
          }
        `}
      </style>

      {/* CARD */}
      <div style={{ display: 'flex', justifyContent: 'center', width: '100%', padding: '0 10px', boxSizing: 'border-box' }}>
        <div className="card-experiencia animar-fade" key={currentIndex}>
          <div className="card-col-esq">
            <span className="card-periodo">{currentJob.period}</span>
            <h3 className="card-empresa">{currentJob.company}</h3>
          </div>
          <div className="card-col-dir">
            <h4 className="card-cargo">{currentJob.role}</h4>
            <p className="card-descricao">{currentJob.description}</p>
            <ul className="card-skills">
              {currentJob.skills.map((skill, index) => (
                <li key={index} className="skill-badge">{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* NAVEGAÇÃO */}
      <div className="controles-area">
        <button onClick={prevSlide} className="btn-carrossel">
          <span className="btn-desktop">← Anterior</span>
          <span className="btn-mobile">← Ant.</span>
        </button>
        
        <div style={{ display: 'flex', gap: '12px' }}>
          {JOBS.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className="dot-indicator"
              style={{
                width: '14px',
                height: '14px',
                borderRadius: '50%',
                border: 'none',
                cursor: 'pointer',
                backgroundColor: currentIndex === index ? '#da3b89' : '#d1d5db',
                transform: currentIndex === index ? 'scale(1.2)' : 'scale(1)',
                transition: 'all 0.3s ease'
              }}
            />
          ))}
        </div>

        <button onClick={nextSlide} className="btn-carrossel">
          <span className="btn-desktop">Próximo →</span>
          <span className="btn-mobile">Próx. →</span>
        </button>
      </div>
    </article>
  );
}