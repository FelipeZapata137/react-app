import React from 'react';
import './App.css';
import Habilidades from './Componentes/habilidades';

function App() {
  return (
    <div className="cv-principal-contenedor">
      <div className="columna-izquierda">
        <section>
          <img src="/src/assets/fotoPerfil.jpg" alt="Foto de Perfil" width="250" height="300" className='estilo-foto'></img>
        <p>Contenido de la Columna Izquierda</p>
        </section>
        <div className = 'info-personal'>
        <p><strong>Email:</strong> felipe.zapata@epn.edu.ec</p>
        <p><strong>Teléfono:</strong> +593 987 269 974</p>
        <div className="contenedor-foto"></div>
        <Habilidades />
        </div>
        
      </div>

      {/* Esta será la columna derecha (donde va el resumen, experiencia, etc.) */}
      <div className="columna-derecha">
        {/* Aquí iría tu resumen profesional, historial laboral, educación, etc. */}
      <h1>Felipe Zapata</h1>

      <section className="seccion-resumen">
        <h2>Resumen Profesional</h2>
        <p>Estudiante de la Escuela Politécnica Nacional con dos años de sólida formación 
          autodidacta en desarrollo de software, aspirando a convertirme en un desarrollador 
          Full Stack altamente capacitado. Poseo un dominio en Java, C++, Python, JavaScript, 
          HTML5, CSS3, Git, GitHub y Figma, complementado con un entendimiento de metodologías 
          ágiles como Scrum. Mi fortaleza radica en mi pensamiento crítico y habilidad para 
          resolver problemas lógicos de manera óptima, identificando siempre las soluciones 
          más eficientes. Como líder nato, mi enfoque centrado y gran adaptabilidad me permiten
           integrarme y aportar valor rápidamente a equipos innovadores. Estoy listo para aplicar
            mis conocimientos y mi compromiso con la excelencia para impulsar el éxito de su empresa.</p>
      </section>

      <section className="seccion-educacion">
        <h2>Educación</h2>
        <p><strong>Universidad:</strong> Escuela Politécnica Nacional</p>
        <p><strong>Carrera:</strong> Tecnología Superior en Desarrollo de Software</p>
        <p><strong>Años:</strong> 2023 - 2025</p>
      </section>

      {/* Puedes añadir más secciones como Experiencia Laboral, Proyectos, etc. */}

    </div>
    </div>
  );
}

export default App;