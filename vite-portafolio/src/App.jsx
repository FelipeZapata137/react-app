import React from 'react';
import './App.css';
import Menu from './componentes/menu.jsx';
import imagenQuienSoy from './assets/imagen01.jpg';

function App() {
  return (
    <>
      
        <div className="hero-section">
          <div className='hero-menu'>
            <Menu />
          </div>
        <div className="hero-content">
          <h1>Bienvenido a mi Portafolio Online</h1>
          <button className="portfolio-button">VER PORTAFOLIO</button>
        </div>
      </div>

      <section className="quien-soy-section">
        <div className='columna-izquierda'>
          <h2>¿Quién Soy?</h2>
          <p>Soy Felipe Zapata, un estudiante de desarrollo de software con pasión por la tecnología y el aprendizaje continuo.</p>
          <button className='boton-cv'>CURRICULUM VITAE</button>
        </div>
        <div className='columna-derecha'>
          <img src = {imagenQuienSoy} alt="Imagen react" className="imagen-quien-soy" />
        </div>
      </section>
      
    </>
  );
}

export default App;