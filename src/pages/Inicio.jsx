import transition from "../animations/transition";
import { Link } from 'react-router-dom';

import logo from '../assets/other-assets/logo-chrisv2.png';


function Inicio() {
  return (
    <div className="home" >
      <span className="tag-init"></span>
      <div className="info">
        <h1 className="title">
          <span className="html-tag">
            &lt;h1&gt;
          </span>
          <span>Hi</span>
          <span className="letter-name">
            Soy
            <img src={logo}
              className="logo"
            />
            hristopher,
          </span>
          <span className="skill">desarrollador web</span>
          <span className="html-tag">
            &lt;/h1&gt;
          </span>
        </h1>

        <p className="skill-front">Front End Developer</p>


        <Link to="/tu-ruta" className="btn btnEnviar slide" id="btnEnviar">
          Contáctame
        </Link>
      </div>

      <div className="logo-main">
        <img
          src={logo}
          className="logo-home"
          alt="logo christopher"
        />
      </div>
      <span className="tag-end"></span>
    </div>
  )
}

export default transition(Inicio);