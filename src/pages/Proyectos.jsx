import transition from "../animations/transition";
import ProyectoCard from "../components/Proyects/proyects";

import SocialMedia from '../components/SocialMedia/SocialMedia';


function Proyectos() {

  return (
    <div className="home about proyects">
      <SocialMedia />
      <span class="tag-init"></span>

      <main className="main-a">
        <h1 className="title">Proyectos</h1>

        <ProyectoCard />
        <span class="tag-end"></span>
      </main>
    </div>
  )
}

export default transition(Proyectos);