import React from 'react';

import './App.css';

function App() {
  return (
    <div className="cv-container">
      {/* Aquí irán todos los componentes y la estructura de tu CV */}
      <h1>Mi Currículum Vitae</h1>
      <p>¡Bienvenido a mi CV sencillo!</p>

      <section className="seccion-personal">
        <h2>Datos Personales</h2>
        <p><strong>Nombre:</strong> Felipe</p>
        <p><strong>Email:</strong> tu.email@example.com</p>
        <p><strong>Teléfono:</strong> +593 99 123 4567</p>
        <p><strong>LinkedIn:</strong> linkedin.com/in/tuperfil</p>
      </section>

      <section className="seccion-resumen">
        <h2>Resumen Profesional</h2>
        <p>Estudiante apasionado por la tecnología con ganas de aprender y aplicar mis conocimientos en el desarrollo web. Buscando oportunidades para crecer en el campo de la programación.</p>
      </section>

      <section className="seccion-educacion">
        <h2>Educación</h2>
        <p><strong>Universidad:</strong> [Nombre de tu Universidad]</p>
        <p><strong>Carrera:</strong> [Tu Carrera]</p>
        <p><strong>Años:</strong> [Año de inicio] - [Año de finalización (o actual)]</p>
      </section>

      <section className="seccion-habilidades">
        <h2>Habilidades</h2>
        <ul>
          <li>JavaScript</li>
          <li>React</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Git</li>
          <li>(otras habilidades)</li>
        </ul>
      </section>

      {/* Puedes añadir más secciones como Experiencia Laboral, Proyectos, etc. */}

    </div>
  );
}

export default App;