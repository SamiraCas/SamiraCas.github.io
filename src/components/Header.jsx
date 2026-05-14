import '../styles/header.css';

export default function Header() {
  return (
    <header className="header-glass">
      <style>
        {`
          .header-glass {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            z-index: 1000;
            background: rgba(13, 13, 26, 0.6); 
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
            padding: 12px 0; /* Bem mais fino */
          }

          .header-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 5%;
            display: flex;
            justify-content: center;
          }

          .header-menu {
            display: flex;
            gap: 25px; /* Espaço equilibrado */
            list-style: none;
            margin: 0;
            padding: 0;
          }

          .header-menu a {
            color: rgba(255, 255, 255, 0.7);
            text-decoration: none;
            font-size: 0.85rem; /* Fonte menor e elegante */
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 1px;
          }

          /* === CORREÇÃO PARA IMAGE_CDA8A0 === */
          @media (max-width: 480px) {
            .header-menu {
              gap: 15px; /* Mais próximo para não quebrar linha */
            }
            .header-menu a {
              font-size: 0.7rem; /* Tamanho ideal para celulares pequenos */
            }
          }
        `}
      </style>

      <div className="header-container">
        <nav>
          <ul className="header-menu">
            <li><a href="#experiencia">Experiência</a></li>
            <li><a href="#formacao">Formação</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}