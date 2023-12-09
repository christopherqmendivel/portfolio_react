import transition from "../animations/transition";
import { Link } from 'react-router-dom';


import renderAnimatedSentence from '../helpers/AnimateLetters';
import logo from '../assets/other-assets/logo-chrisv2.png';
import coder from '../assets/other-assets/coder.svg'


function Inicio() {
  const hello = "Hola,".split("");
  const name =  "Soy Christopher,".split("");
  const skill = "desarrollador web".split("");

  return (
    <div className="home" >
      <span className="tag-init"></span>
      <div className="info">
        <h1 className="title">
          {renderAnimatedSentence(hello)}
          <br />
          {renderAnimatedSentence(name)}
          <br />
          {renderAnimatedSentence(skill)}


        </h1>

        <p className="skill-front">Front End Developer - UX Designer</p>


        <Link to="/contacto" className="btn btnEnviar slide" id="btnEnviar">
          Contáctame
        </Link>
      </div>

      <div className="logo-main">
        <img
          src={coder}
          className="logo-home"
          alt="logo christopher"
        />
      </div>
      <span className="tag-end"></span>
    </div>
  )
}

export default transition(Inicio);