import React, { useEffect } from 'react';

// Animates
import transition from "../animations/transition";
import '../animations/tagcanvas.js';

// Componentes
import TagCloud from '../components/TagCloud/TagCloud.jsx';

function SobreMi() {
  

  return (
    <div className="about">
      
      <TagCloud />
    </div>
    
  );
}

export default transition(SobreMi);
