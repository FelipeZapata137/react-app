import React from 'react';
import './habilidades.css'

function Habilidades() {
  const listaHabilidades = [
    "JavaScript",
    "React",
    "HTML5",
    "CSS3",
    "Git & GitHub",
    "Python",
    "C++",
    "Java"
  ];

  return (
    <section className="seccion-habilidades">
      <h2>Habilidades</h2>
      <ul>
        {listaHabilidades.map((habilidad, index) => (
          <li key={index}>{habilidad}</li>
        ))}
      </ul>
    </section>
  );
}

export default Habilidades;