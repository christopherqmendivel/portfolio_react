import TextSpan from "../animations/textSpan";


const renderAnimatedSentence = (sentence, replacements = {}) => {
  return sentence.map((letter, index) => (
    <TextSpan 
      key={index}
      className="animate-span"
      replacement={replacements[letter.toLowerCase()] || null}>
      {letter === ' ' ? '\u00A0' : letter}
    </TextSpan>
  ));
};

  export default renderAnimatedSentence;

  