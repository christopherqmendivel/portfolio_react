import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import podcastfmImg from "../../assets/imgs/podcastfm.jpg";
import udemyImg from "../../assets/imgs/udemy.jpg";
import interactive_card from "../../assets/imgs/interactive_card.jpg";
import bootcamp_testimonials from "../../assets/imgs/desktop-design.jpg";



const ProyectoCard = () => {
  return (
    <section className="section">
      <div className="card" data-item="css">
        <div className="img">
          <img
            src={podcastfmImg}
            className="card-img"
            alt="Imagen del proyecto PodcastFM"
          />
        </div>
        <div className="card-body">
          <div className="proyecto">
            <h4 className="titulo">PodcastFM</h4>
            <LinkExternal href="https://podcastfm.netlify.app/" icon={faLink} />
          </div>
          <div className="hash-link">
            <div className="hash">
              <span className="categoria">#SASS</span>
              <span className="categoria">#Bootstrap</span>
            </div>
            <LinkExternal
              href="https://github.com/christopherqmendivel/podcastfm"
              icon={faGithub}
            />
          </div>
        </div>
      </div>

      <div className="card" data-item="css">
        <div className="img">
          <img
            src={udemyImg}
            className="card-img"
            alt="Imagen del proyecto Udemy"
          />
        </div>

        <div className="card-body">
          <div className="proyecto">
            <h4 className="titulo">Udemy</h4>
            <LinkExternal href="https://udemypage.netlify.app/" icon={faLink} />
          </div>
          <div className="hash-link">
            <div className="hash">
              <span className="categoria">#SASS</span>
              <span className="categoria">#Bootstrap</span>
            </div>
            <LinkExternal
              href="https://github.com/christopherqmendivel/udempage"
              icon={faGithub}
            />
          </div>
        </div>
      </div>

      <div className="card" data-item="angular">
        <div className="img">
          <img src={interactive_card} className="card-img" alt="App Weather" />
        </div>
        <div className="card-body">
          <div className="proyecto">
            <h4 className="titulo">Interactive card details </h4>
            <LinkExternal
              href="https://interactive-card-chris.netlify.app/"
              icon={faLink}
            />
          </div>
          <div className="hash-link">
            <div className="hash">
              <span className="categoria">#Angular</span>
            </div>
            <LinkExternal
              href="https://github.com/christopherqmendivel/card-interactive"
              icon={faGithub}
            />
          </div>
        </div>
      </div>

      <div className="card" data-item="angular">
        <div className="img">
          <img src={bootcamp_testimonials} className="card-img" alt="App Weather" />
        </div>
        <div className="card-body">
          <div className="proyecto">
            <h4 className="titulo">Coding bootcamp</h4>
            <LinkExternal
              href="https://coding-bootcamp-testimonials-f.netlify.app/"
              icon={faLink}
            />
          </div>
          <div className="hash-link">
            <div className="hash">
              <span className="categoria">#Angular</span>
              <span className="categoria">#Bootstrap</span>
            </div>
            <LinkExternal
              href="https://github.com/christopherqmendivel/Coding-bootcamp-testimonials-slider"
              icon={faGithub}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const LinkExternal = ({ href, icon }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="link">
    <FontAwesomeIcon icon={icon} className="icon-color" />
  </a>
);

export default ProyectoCard;
