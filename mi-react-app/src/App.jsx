import React from 'react';
import './App.css';
import Habilidades from './Componentes/habilidades';

function App() {
  return (
    <div className="cv-principal-contenedor">
      <div className="columna-izquierda">
        {/* Aquí iría tu foto, información de contacto, aptitudes, etc. */}
        <p>Contenido de la Columna Izquierda</p>
        <p><strong>Email:</strong> felipe.zapata@epn.edu.ec</p>
        <p><strong>Teléfono:</strong> +593 987 269 974</p>
        <div className="contenedor-foto"></div>
      </div>

      {/* Esta será la columna derecha (donde va el resumen, experiencia, etc.) */}
      <div className="columna-derecha">
        {/* Aquí iría tu resumen profesional, historial laboral, educación, etc. */}
      <h1>Felipe Zapata</h1>



      <section className="seccion-resumen">
        <h2>Resumen Profesional</h2>
        <p>Estudiante apasionado por la tecnología con ganas de aprender y aplicar mis conocimientos en el desarrollo web. Buscando oportunidades para crecer en el campo de la programación.</p>
      </section>

      <section className="seccion-educacion">
        <h2>Educación</h2>
        <p><strong>Universidad:</strong> Escuela Politécnica Nacional</p>
        <p><strong>Carrera:</strong> Tecnología Superior en Desarrollo de Software</p>
        <p><strong>Años:</strong> 2023 - 2025</p>
      </section>

      <Habilidades />

      {/* Puedes añadir más secciones como Experiencia Laboral, Proyectos, etc. */}

    </div>
    </div>
  );
}

export default App;