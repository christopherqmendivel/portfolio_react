
// Animates
import transition from "../animations/transition";
import '../animations/tagcanvas.js';

// Componentes
import TagCloud from '../components/TagCloud/TagCloud.jsx';

import cv from '../assets/docs/ChristopherCV.pdf';

import SocialMedia from '../components/SocialMedia/SocialMedia';



function SobreMi() {


  return (
    <div className="home about">
      < SocialMedia />
      <span className="tag-init"></span>
      <main className='main-a'>
        <div className="c-info">
          <h1 className="title">Sobre mí</h1>
          
          <p className="info">
            Desarrollador frontend especializado en la creación de interfaces intuitivas y atractivas, con habilidades en diseño responsivo. Durante más de 3 año, me he dedicado de manera autodidacta a la creación de sitios web como pasatiempo.
          </p>
          <p className="info">
            Profesionalmente, comencé en este ámbito hace un año después de haber estudiado desarrollo web. Esta experiencia me ha permitido acumular una cantidad significativa de conocimiento y habilidades en el campo. A lo largo de este tiempo, he tenido la oportunidad de conocer y aprender de personas increíbles y ambiciosas.
          </p>
          <p className="info">
            Ahora, busco nuevas oportunidades para contribuir y crecer en equipos de desarrollo, participando en proyectos interesantes mientras enfrento nuevos desafíos con entusiasmo.
          </p>

          <div className="c-cv">
      <a href={cv} className="btn btn-cv" download>Descargar CV</a>
      </div>
        </div>

        <TagCloud className="tag-cloud" />
      </main>
      <span className="tag-end"></span>

      
    </div>

  );
}

export default transition(SobreMi);
