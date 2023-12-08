import transition from "../animations/transition";
import renderAnimatedSentence from '../helpers/AnimateLetters';

function Proyectos() {
  const sentence = "Hello Christopher".split("");

  return (
    <div className="proyect">
      {renderAnimatedSentence(sentence)}
    </div>
  )
}

export default transition(Proyectos);