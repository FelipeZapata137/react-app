import React from 'react';
import './App.css';
import Menu from './componentes/menu.jsx';
import imagenQuienSoy from './assets/imagen01.jpg';
import proyecto01 from './assets/proyecto01.jpg';
import proyecto02 from './assets/proyecto02.jpg';
import proyecto03 from './assets/proyecto03.jpg';
import htmlLogo from './assets/html-icon.png';
import cssLogo from './assets/css-icon.png';
import jsLogo from './assets/js-icon.png';
import reactLogo from './assets/react-icon.png';
import mailImage from "./assets/mail.svg";

function App() {
  return (
    <>
      <div id="inicio-section" className="hero-section">
        <div className='hero-menu'>
          <Menu />
        </div>
        <div className="hero-content">
          <h1>Bienvenido a mi Portafolio Online</h1>
          <button className="portfolio-button">VER PORTAFOLIO</button>
        </div>
      </div>

      <section id="quien-soy-section" className="quien-soy-section">
        <div className='columna-izquierda'>
          <h2>¿Quién Soy?</h2>
          <p>Soy Felipe Zapata, un estudiante de desarrollo de software con pasión por la tecnología y el aprendizaje continuo.</p>
          <button className='boton-cv'>CURRICULUM VITAE</button>
        </div>
        <div className='columna-derecha'>
          <img src={imagenQuienSoy} alt="Imagen react" className="imagen-quien-soy" />
        </div>
      </section>

      <section id="mis-proyectos-section" className="mis-proyectos">
        <div className='proyectos-arriba'>
          <h2>Mis Proyectos</h2>
        </div>
        <div className="proyectos-grid">
          <div className="columna-proyecto">
            <img src={proyecto01} alt="Proyecto 1" className="imagen-proyecto" />
            <h3>Proyecto - 1</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus tempore voluptatem quis in eaque obcaecati optio impedit numquam ex quos.</p>
            <button className='boton-proyecto'>MÁS INFORMACIÓN</button>
          </div>
          <div className="columna-proyecto">
            <img src={proyecto02} alt="Proyecto 2" className="imagen-proyecto" />
            <h3>Proyecto - 2</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus tempore voluptatem quis in eaque obcaecati optio impedit numquam ex quos.</p>
            <button className='boton-proyecto'>MÁS INFORMACIÓN</button>
          </div>
          <div className="columna-proyecto">
            <img src={proyecto03} alt="Proyecto 3" className="imagen-proyecto" />
            <h3>Proyecto - 3</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus tempore voluptatem quis in eaque obcaecati optio impedit numquam ex quos.</p>
            <button className='boton-proyecto'>MÁS INFORMACIÓN</button>
          </div>
        </div>
      </section>

      <section className="habilidades">
        <div className='habilidades-arriba'>
          <h2>Habilidades</h2>
        </div>
        <div className="habilidades-contenedor">
          <div className="habilidad-item">
            <img src={htmlLogo} alt="Logo HTML5" className="habilidad-icono" />
          </div>
          <div className="habilidad-item">
            <img src={cssLogo} alt="Logo CSS3" className="habilidad-icono" />
          </div>
          <div className="habilidad-item">
            <img src={jsLogo} alt="Logo JavaScript" className="habilidad-icono" />
          </div>
          <div className="habilidad-item">
            <img src={reactLogo} alt="Logo React" className="habilidad-icono" />
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-left">
          <h1>Contáctame</h1>
          <div className="social-icons">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <div className="icon-circle"></div>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <div className="icon-circle"></div>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <div className="icon-circle"></div>
            </a>
          </div>
          <div className="footer-nav">
            <a href="#inicio-section">Inicio</a>
            <a href="#quien-soy-section">Sobre mí</a>
            <a href="#mis-proyectos-section">Proyectos</a>
          </div>
          <p>Derechos reservados © Felipe Zapata</p>
        </div>
        <div className="footer-right">
          <img src={mailImage} alt="Mail illustration" className="mail-illustration" />
        </div>
      </footer>
    </>
  );
}

export default App;