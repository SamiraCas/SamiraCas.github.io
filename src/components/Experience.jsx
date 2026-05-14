import '../styles/experiecia.css';
import ExperienceCarousel from './ExperienceCarousel';

export default function Experience() {
  return (
    <section className="experiencia" id="experiencia" aria-label="Experiência Profissional">
      <h2 className="subtitulo">Experiência</h2>
      
      {/* SESSÃO 1: TEXTO (Estilo Editorial / Minimalista) */}
      <div className="experiencia-texto-clean">
        <style>
          {`
            /* AJUSTE DE RESPONSIVIDADE E ESPAÇAMENTO */
            .experiencia {
              padding: 150px 20px; /* Mantém 150px em cima/baixo, mas garante 20px nas laterais */
              box-sizing: border-box;
              width: 100%;
              overflow-x: hidden; /* Impede que o carrossel quebre o layout no mobile */
            }

            .experiencia-texto-clean {
              margin: 0 auto 70px auto;
              padding-left: 24px;
              border-left: 3px solid #111; 
              color: #4b5563;
              font-size: 1.15rem;
              line-height: 1.8;
              max-width: 950px;
              box-sizing: border-box;
            }

            .experiencia-texto-clean p {
              margin-top: 0;
              margin-bottom: 20px;
            }

            .experiencia-texto-clean p:last-child {
              margin-bottom: 0;
            }

            .experiencia-texto-clean strong {
              color: #111;
              font-weight: 700;
            }

            .saudacao-clean {
              font-size: 1.6rem;
              font-weight: 800;
              color: #111;
              display: block;
              margin-bottom: 16px;
              letter-spacing: -0.5px;
            }

            /* === BREAKPOINT PARA MOBILE (image_cdbf81.png) === */
            @media (max-width: 768px) {
              .experiencia {
                padding: 60px 15px; /* Reduz o espaçamento vertical para não ocupar a tela toda do celular */
              }

              .experiencia-texto-clean {
                padding-left: 15px;
                font-size: 1.05rem;
                margin-bottom: 40px;
              }

              .saudacao-clean {
                font-size: 1.4rem;
              }
            }
          `}
        </style>

        <span className="saudacao-clean">Olá a todos! 👋</span>
        
        <p>
          Me chamo Samira, tenho 22 anos e sou formada em <strong>Análise e Desenvolvimento de Sistemas</strong> pela Estácio.
        </p>
        
        <p>
          Sou especialista na área de <strong>Front-end</strong>, atuando desde a parte de <strong>designs</strong> até o <strong>desenvolvimento de sites</strong>. Possuo diversas experiências em agências tanto no Brasil quanto no exterior.
        </p>
        
        <p>
          Desenvolvo projetos utilizando <strong>JavaScript</strong> como linguagem principal no back-end, e no front-end utilizo: <strong>HTML</strong>, <strong>CSS</strong> e frameworks como <strong>React</strong>, <strong>Vue.js</strong> e <strong>Angular</strong>, além de <strong>TypeScript</strong>.
        </p>
        
        <p>
          Estou estudando <strong>UX/UI Design</strong> para melhorar ainda mais minhas entregas visuais. Tenho conhecimento em <strong>C#</strong>, <strong>SQL</strong> e <strong>Excel avançado</strong>. Já tive a oportunidade de trabalhar com uma empresa internacional dos <strong>EUA</strong> utilizando a plataforma <strong>Webflow</strong> e possuo experiência como <strong>editora de vídeos</strong> também.
        </p>
      </div>

      {/* SESSÃO 2: CARROSSEL */}
      <ExperienceCarousel />
        
    </section>
  );
}