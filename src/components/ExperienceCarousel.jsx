import { useState } from 'react';

// === DADOS DAS EXPERIÊNCIAS ===
const JOBS = [
  {
    period: "8 meses",
    company: "Solvit",
    role: "Desenvolvedor Front End",
    description:
      "Responsável por transformar designs em interfaces funcionais e responsivas utilizando Webflow. Atuei na manutenção e evolução de projetos legados com Next.js, Node.js, API REST, SQL Server e React.",
    skills: ["Figma", "Web Design", "Front-end", "React"]
  },
  {
    period: "4 meses",
    company: "ID360° New Media",
    role: "Front End Developer",
    description:
      "Responsável por transformar designs em interfaces funcionais e responsivas utilizando Webflow. Atuei na manutenção e evolução de projetos legados com Next.js, Node.js, API REST, SQL Server e React.",
    skills: [
      "Figma",
      "Webflow",
      "Web Design",
      "Front-end",
      "C#",
      "SQL Server",
      "API",
      "Node.js",
      "Next.js",
      "React"
    ]
  },
  {
    period: "4 meses",
    company: "Cronos Level UP - USA",
    role: "UI/UX e Front End Developer",
    description:
      "Responsável por transformar os designs em uma interface funcional e responsiva, assegurando que a experiência do usuário seja fluida e eficiente. Edição de vídeo.",
    skills: ["Figma", "Webflow", "Web Design", "Front-end"]
  },
  {
    period: "2 meses",
    company: "Ótima Ideia",
    role: "Desenvolvedora front-end",
    description:
      "Desenvolvimento de layouts de sites de empresas. Colaboração interdisciplinar.",
    skills: ["Figma", "WordPress", "Web Design", "Front-end", "Canva"]
  },
  {
    period: "1 ano",
    company: "Digital Bloom",
    role: "Web Designer",
    description:
      "Desenvolvimento de layouts de sites de empresas. Colaboração interdisciplinar.",
    skills: ["Figma", "Webflow", "Web Design", "Front-end", "Canva"]
  },
  {
    period: "6 meses",
    company: "Edygital",
    role: "Web Designer - Pleno",
    description:
      "Desenvolvimento de layouts de sites de empresas. Desenvolvimento de design de logotipos. Colaboração interdisciplinar.",
    skills: [
      "Figma",
      "Builderall",
      "WordPress",
      "Web Design",
      "Front-end"
    ]
  },
  {
    period: "2023 - 2024",
    company: "Agência Saffari",
    role: "Marketing e Desenvolvimento Front-end",
    description:
      "Criação de conteúdo, design de posts e anúncios para mídias sociais de diversos segmentos. Desenvolvimento de layouts de sites. Colaboração interdisciplinar.",
    skills: [
      "Figma",
      "WordPress",
      "Mídias sociais",
      "Web Design",
      "Design de logotipos",
      "Front-end"
    ]
  },
  {
    period: "2022 - 2023",
    company: "Aphabeto",
    role: "Analista de Suporte Computacional",
    description:
      "Manipulação e criação de planilhas em EXCEL. Manipulação de banco de dados (SQL). Suporte de plataforma B2B e plataformas Linx, TOTVS e VTEX. Desenvolvimento de páginas web (front-end).",
    skills: [
      "Excel",
      "VTEX",
      "TOTVS",
      "Linx",
      "HTML",
      "CSS",
      "SQL",
      "B2B"
    ]
  }
];

export default function ExperienceCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === JOBS.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? JOBS.length - 1 : prev - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const currentJob = JOBS[currentIndex];

  return (
    <article
      style={{
        gridColumn: '1 / -1',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        marginTop: '2px',
        boxSizing: 'border-box',
        overflowX: 'hidden'
      }}
    >
      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(15px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animar-fade {
            animation: fadeIn 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          }

          .card-experiencia {
            background: #ffffff;
            border-radius: 24px;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.06);
            padding: 40px;
            display: flex;
            flex-direction: column;
            gap: 30px;
            border: 1px solid #f3f4f6;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            width: 100%;
            max-width: 1200px;
            margin: 0 auto;
            box-sizing: border-box;
            text-align: left;
          }

          .card-experiencia:hover {
            transform: translateY(-5px);
            box-shadow: 0 20px 50px rgba(0, 0, 0, 0.1);
          }

          .card-periodo {
            display: inline-block;
            background: #fdf2f8;
            color: #da3b89;
            font-weight: 700;
            padding: 8px 16px;
            border-radius: 20px;
            font-size: 14px;
            letter-spacing: 0.5px;
            margin-bottom: 15px;
          }

          .card-empresa {
            font-size: 1.8rem;
            font-weight: 800;
            color: #111;
            margin: 0;
            line-height: 1.2;
          }

          .card-cargo {
            font-size: 1.4rem;
            font-weight: 700;
            color: #1f2937;
            margin: 0 0 15px 0;
          }

          .card-descricao {
            font-size: 1.1rem;
            color: #4b5563;
            line-height: 1.7;
            margin-bottom: 30px;
          }

          .card-skills {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            list-style: none;
            padding: 0;
            margin: 0;
          }

          .skill-badge {
            background: #f3f4f6;
            color: #374151;
            padding: 6px 14px;
            border-radius: 8px;
            font-size: 14px;
            font-weight: 600;
            border: 1px solid #e5e7eb;
          }

          .btn-carrossel {
            background: transparent;
            border: 2px solid #111;
            color: #111;
            border-radius: 8px;
            padding: 12px 28px;
            cursor: pointer;
            font-size: 18px;
            font-weight: bold;
            transition: all 0.3s ease;
          }

          .btn-carrossel:hover {
            background: #111;
            color: #fff;
            transform: translateY(-2px);
          }

          /* ===== DESKTOP (INALTERADO) ===== */
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

            .card-col-dir {
              flex: 1;
            }

            .btn-text-mobile {
              display: none;
            }
          }

          /* ===== MOBILE ===== */
          @media (max-width: 799px) {
            .card-experiencia {
              padding: 22px;
              gap: 18px;
              width: 100%;
              border-radius: 18px;
            }

            .card-col-esq {
              width: 100%;
            }

            .card-periodo {
              font-size: 12px;
              padding: 6px 12px;
              margin-bottom: 12px;
            }

            .card-empresa {
              font-size: 1.4rem;
              line-height: 1.3;
              word-break: break-word;
            }

            .card-cargo {
              font-size: 1.1rem;
              line-height: 1.4;
              margin-bottom: 12px;
            }

            .card-descricao {
              font-size: 0.96rem;
              line-height: 1.7;
              margin-bottom: 22px;
            }

            .card-skills {
              gap: 8px;
            }

            .skill-badge {
              font-size: 12px;
              padding: 6px 10px;
              border-radius: 6px;
            }

            /* ===== CONTROLES MOBILE ===== */
            .controles-box {
              flex-direction: row !important;
              justify-content: center;
              align-items: center;
              gap: 14px !important;
              margin-top: 35px !important;
              padding: 0 16px;
            }

            /* OCULTA AS BOLINHAS SOMENTE NO MOBILE */
            .dots-container {
              display: none !important;
            }

            .btn-carrossel {
              padding: 12px 18px;
              font-size: 14px;
              min-width: 130px;
              height: 48px;

              display: flex;
              align-items: center;
              justify-content: center;

              border-radius: 14px;
              background: #fff;

              box-shadow: 0 4px 14px rgba(0,0,0,0.05);
            }

            .btn-text-desk {
              display: none;
            }
          }
        `}
      </style>

      {/* CARD */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
          padding: '0 16px',
          boxSizing: 'border-box'
        }}
      >
        <div
          className="card-experiencia animar-fade"
          key={currentIndex}
        >
          <div className="card-col-esq">
            <span className="card-periodo">
              {currentJob.period}
            </span>

            <h3 className="card-empresa">
              {currentJob.company}
            </h3>
          </div>

          <div className="card-col-dir">
            <h4 className="card-cargo">
              {currentJob.role}
            </h4>

            <p className="card-descricao">
              {currentJob.description}
            </p>

            <ul className="card-skills">
              {currentJob.skills.map((skill, sIndex) => (
                <li
                  key={sIndex}
                  className="skill-badge"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* CONTROLES */}
      <div
        className="controles-box"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '40px',
          marginTop: '60px',
          width: '100%'
        }}
      >
        <button
          onClick={prevSlide}
          className="btn-carrossel"
          aria-label="Anterior"
        >
          <span className="btn-text-desk">
            &#8592; Anterior
          </span>

          <span className="btn-text-mobile">
            &#8592; Ant.
          </span>
        </button>

        <div
          className="dots-container"
          style={{
            display: 'flex',
            gap: '12px'
          }}
        >
          {JOBS.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                border: 'none',
                cursor: 'pointer',
                backgroundColor:
                  currentIndex === index
                    ? '#da3b89'
                    : '#d1d5db',
                transform:
                  currentIndex === index
                    ? 'scale(1.3)'
                    : 'scale(1)',
                transition: 'all 0.3s ease',
                flexShrink: 0
              }}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="btn-carrossel"
          aria-label="Próximo"
        >
          <span className="btn-text-desk">
            Próximo &#8594;
          </span>

          <span className="btn-text-mobile">
            Próx. &#8594;
          </span>
        </button>
      </div>
    </article>
  );
}