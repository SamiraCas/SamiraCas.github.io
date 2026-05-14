import fotoPerfil from '../assets/img/Perfil.png';
import detalheDecoracao from '../assets/img/Decoracao.svg';

export default function Hero() {
  return (
    <main className="hero-aurora">
      <style>
        {`
          .hero-aurora {
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0 5%;
            background: linear-gradient(135deg, #0d0d1a 0%, #1a1a2e 100%);
            color: #fff;
            position: relative;
            overflow: hidden;
          }

          .hero-wrapper {
            display: grid;
            grid-template-columns: 1fr;
            gap: 40px;
            max-width: 1200px;
            width: 100%;
            align-items: center;
            z-index: 2;
          }

          /* DESKTOP: FOTO À ESQUERDA, TEXTO À DIREITA */
          @media (min-width: 1024px) {
            .hero-wrapper {
              grid-template-columns: 0.9fr 1.1fr; 
            }
          }

          /* MOBILE: FOTO POR CIMA (image_cd47a0.jpg) */
          @media (max-width: 1023px) {
            .hero-aurora { 
              padding-top: 100px; 
              padding-bottom: 40px;
            }
            .hero-wrapper { 
              display: flex; 
              flex-direction: column; /* Mantém a ordem do JSX: Foto primeiro, Texto depois */
              text-align: center; 
            }
            .hero-info { 
              align-items: center; 
            }
            .main-frame {
              max-width: 300px; /* Ajuste para não ocupar a tela toda no mobile */
              margin: 0 auto;
            }
          }

          .hero-info { 
            display: flex; 
            flex-direction: column; 
            gap: 20px; 
          }

          .hero-title-main {
            font-size: clamp(2.5rem, 6vw, 5.5rem);
            font-weight: 950;
            line-height: 0.9;
            margin: 0;
            letter-spacing: -2px;
          }

          .text-gradient {
            background: linear-gradient(to right, #fff, #da3b89);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }

          .hero-visual-box { 
            position: relative; 
            display: flex; 
            justify-content: center; 
          }

          .main-frame {
            position: relative;
            z-index: 2;
            max-width: 480px; 
          }

          .main-frame img.perfil {
            display: block;
            width: 100%;
            height: auto;
            border-radius: 40px;
          }

          .decor-asset {
            position: absolute;
            bottom: -20px; 
            left: -20px; 
            width: 100px; 
            z-index: 5;
            filter: drop-shadow(0 10px 20px rgba(218, 59, 137, 0.4));
          }
        `}
      </style>

      <div className="hero-wrapper">
        {/* FOTO: Primeiro no JSX para aparecer em cima no mobile e esquerda no desktop */}
        <div className="hero-visual-box">
          <div className="main-frame">
            <img src={fotoPerfil} alt="Samira Castro" className="perfil" />
            <img src={detalheDecoracao} className="decor-asset" alt="" aria-hidden="true" />
          </div>
        </div>

        {/* TEXTO: Segundo no JSX para aparecer embaixo no mobile e direita no desktop */}
        <div className="hero-info">
          <h1 className="hero-title-main">
            Desenvolvedora<br />
            <span className="text-gradient">Front End</span><br />
            & UX Designer
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.6)', maxWidth: '500px' }}>
            📍 Minas Gerais, Brasil. Transformando designs complexos em experiências digitais impecáveis.
          </p>
        </div>
      </div>
    </main>
  );
}