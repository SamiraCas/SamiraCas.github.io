import '../styles/formacao.css';

export default function Education() {
  return (
    <section className="formacao" id="formacao" aria-label="Formação">
      
      <style>
        {`
          /* === TÍTULO IMPOSTO === */
          .subtitulo-formacao {
            font-size: clamp(4rem, 12vw, 7rem); 
            font-weight: 900;
            line-height: 0.8;
            color: #fff;
            text-transform: uppercase;
            letter-spacing: -5px;
            margin-bottom: 60px;
            display: block;
          }

          .subtitulo-formacao span {
            color: #da3b89;
            text-shadow: 2px 2px 0px rgba(0,0,0,0.2);
          }

          /* === TEXTO DE INTRODUÇÃO === */
          .texto-destaque {
            color: #da3b89;
            font-weight: 700;
          }

          .formacao-texto {
            font-size: 1.15rem;
            line-height: 1.7;
            max-width: 850px;
            margin-bottom: 40px;
            opacity: 0.9;
          }

          /* === MASONRY LAYOUT === */
          .cards-masonry {
            column-count: 1;
            column-gap: 20px;
            width: 100%;
          }

          @media (min-width: 900px) {
            .cards-masonry {
              column-count: 2; 
            }
          }

          /* === CARDS COMPACTOS (DARK UI) === */
          .card-dark {
            break-inside: avoid;
            display: inline-block; 
            width: 100%;
            background: rgba(255, 255, 255, 0.03); 
            border: 1px solid rgba(255, 255, 255, 0.08); 
            border-radius: 16px;
            padding: 24px 30px; /* Reduzido de 35px para 24px vertical */
            margin-bottom: 20px;
            transition: all 0.4s ease;
            box-sizing: border-box;
          }
          
          .card-dark:hover {
            background: rgba(255, 255, 255, 0.07);
            border-color: #da3b89; 
            transform: translateY(-2px);
          }

          /* === TIPOGRAFIA INTERNA REDUZIDA === */
          .tipo-dark {
            color: #da3b89;
            font-size: 0.75rem; /* Menor para economizar espaço */
            text-transform: uppercase;
            letter-spacing: 1.5px;
            font-weight: 800;
            display: block;
            margin-bottom: 8px;
          }

          .curso-dark {
            font-size: 1.35rem; /* Reduzido de 1.6rem */
            font-weight: 800;
            margin: 0 0 6px 0;
            line-height: 1.2;
            color: #fff;
          }

          .inst-dark {
            font-size: 0.95rem;
            color: rgba(255, 255, 255, 0.5);
          }

          .titulo-extra-dark {
            font-size: 1.1rem;
            text-transform: uppercase;
            letter-spacing: 2px;
            margin: 0 0 20px 0;
            color: #fff;
            border-bottom: 2px solid rgba(218, 59, 137, 0.3);
            display: inline-block;
            padding-bottom: 4px;
          }

          /* === LISTAS COMPACTAS === */
          .lista-dark {
            list-style: none;
            padding: 0;
            margin: 0;
            display: flex;
            flex-direction: column;
            gap: 10px; /* Reduzido de 15px */
          }

          .lista-dark li {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-bottom: 8px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
            color: rgba(255, 255, 255, 0.9);
            font-size: 1rem;
          }
          
          .lista-dark li:last-child {
            border-bottom: none;
          }

          .tag-hora-dark {
            background: #da3b89; 
            color: #fff;
            padding: 3px 10px;
            border-radius: 5px;
            font-size: 0.8rem;
            font-weight: 800;
          }
        `}
      </style>

      <div className="formacao-container">
        <h2 className="subtitulo-formacao">
          FORM<br />
          <span>AÇÃO</span>
        </h2>
        
        <div>
          <p className="formacao-texto">
            Além de ser formada em Analise e Desenvolvimento de Sistemas 
            <br></br>
            Minha mais recente experiência envolveu participar da Trilha de Desenvolvimento <span className="texto-destaque">UX Design Heurísticas</span> da <span className="texto-destaque">Origamid.</span> Além disso, mantenho-me constantemente atualizada por meio de cursos intensivos online.
          </p>

          <div className="cards-masonry">
            
            <div className="card-dark">
              <span className="tipo-dark">Curso Superior</span>
              <h3 className="curso-dark">Análise e Desenvolvimento de Sistemas</h3>
              <span className="inst-dark">Estácio</span>
            </div>
            
            <div className="card-dark">
              <span className="tipo-dark">Curso Online</span>
              <h3 className="curso-dark">UI/UX Design</h3>
              <span className="inst-dark">Origamid</span>
            </div>
            
            <div className="card-dark">
              <span className="tipo-dark">Curso Online</span>
              <h3 className="curso-dark">Escreva seu primeiro código usando C#</h3>
              <span className="inst-dark">Microsoft</span>
            </div>

            <div className="card-dark">
              <h3 className="titulo-extra-dark">Cursos Intensivos</h3>
              <ul className="lista-dark">
                <li>JavaScript Completo ES6 <span className="tag-hora-dark">74H</span></li>
                <li>React Completo <span className="tag-hora-dark">36H</span></li>
                <li>CSS Flexbox <span className="tag-hora-dark">06H</span></li>
                <li>TypeScript <span className="tag-hora-dark">22H</span></li>
                <li>REST API <span className="tag-hora-dark">04H</span></li>
              </ul>
            </div>

            <div className="card-dark">
              <h3 className="titulo-extra-dark">Idiomas</h3>
              <ul className="lista-dark">
                <li>Inglês <span style={{ opacity: 0.5, fontStyle: 'italic' }}>/ Intermediário</span></li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}