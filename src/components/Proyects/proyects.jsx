import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';


import podcastfmImg from '../../assets/imgs/podcastfm.jpg';
import udemyImg from '../../assets/imgs/udemy.jpg';
import weatherImg from '../../assets/imgs/weather.jpg';

const ProyectoCard = () => {
    return (
        <section className='section'>
            
            <div className="card" data-item="css">
                <img src={podcastfmImg} className="card-img" alt="Imagen del proyecto PodcastFM" />
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
                        <LinkExternal href="https://github.com/christopherqmendivel/podcastfm" icon={faGithub} />
                    </div>
                </div>
            </div>

            <div className="card" data-item="css">
                <img src={udemyImg} className="card-img" alt="Imagen del proyecto Udemy" />
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
                        <LinkExternal href="https://github.com/christopherqmendivel/udempage" icon={faGithub} />
                    </div>
                </div> 
            </div>

            <div className="card" data-item="css">
                <img src={weatherImg} className="card-img" alt="App Weather" />
                <div className="card-body">
                    <div className="proyecto">
                        <h4 className="titulo">App Weather</h4>
                        <LinkExternal href="https://appweatherproyect.netlify.app/" icon={faLink} />
                    </div>
                    <div className="hash-link">
                        <div className="hash">
                            <span className="categoria">#SASS</span>
                            <span className="categoria">#Bootstrap</span>
                            <span className="categoria">#Javascript</span>

                        </div>
                        <LinkExternal href="https://github.com/christopherqmendivel/appweather" icon={faGithub} />
                    </div>
                </div> 
            </div>
        </section>
    );
};


const LinkExternal = ({ href, icon }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className='link'>
        <FontAwesomeIcon icon={icon} className='icon-color' />
    </a>
);

export default ProyectoCard;
