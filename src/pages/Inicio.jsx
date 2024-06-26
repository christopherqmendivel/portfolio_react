import transition from "../animations/transition";
import { Link } from "react-router-dom";

import renderAnimatedSentence from "../helpers/AnimateLetters";
import coder from "../assets/other-assets/coder.svg";
import SocialMedia from "../components/SocialMedia/SocialMedia";

function Inicio() {
  const hello = "Hola,".split("");
  const name = "Soy Christopher,".split("");
  const skill = "desarrollador web".split("");

  return (
    <div className="home">
      <SocialMedia />
      <main className="main-h">
        <span className="tag-init"></span>
        <div className="info">
          <h1 className="title">
            {renderAnimatedSentence(hello)}
            <br />
            {renderAnimatedSentence(name)}
            <br />
            {renderAnimatedSentence(skill)}
          </h1>

          {/* SKILL - DEV */}
          <div className="skill-dev">
            <span className="tag-init-skill"></span>
            <p className="skill-front">Front End Developer - UX Designer</p>
            <span className="tag-end-skill"></span>
          </div>

          {/* BUTTON CV */}
          <div className="button-pdf">
            <Link to="/contacto" className="btn btnEnviar slide" id="btnEnviar">
              Contáctame
            </Link>
          </div>
        </div>

        <div className="logo-main">
          <img src={coder} className="logo-home" alt="logo christopher" />
        </div>
      </main>
      <span className="tag-end"></span>
    </div>
  );
}

export default transition(Inicio);
