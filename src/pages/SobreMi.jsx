import React, { useEffect } from 'react';
import transition from "../animations/transition";
import '../animations/tagcanvas.js';

function SobreMi() {
  useEffect(() => {
    const initTagCanvas = () => {
      const canvas = document.getElementById('myCanvas');
      if (canvas && window.TagCanvas) {
        window.TagCanvas.Start('myCanvas');
        window.TagCanvas.Move('myCanvas', 0, 0); // Mueve el canvas automáticamente al iniciar
      }
    };

    // Incluye el código de inicialización de TagCanvas directamente, sin la necesidad de la importación de jQuery
    if ($.isFunction($.fn.tagcanvas)) {
      $("#myCanvas").tagcanvas({
        textColour: "#a154f8",
        outlineColour: "transparent",
        reverse: true,
        depth: 0.8,
        maxSpeed: 0.05,
        weight: true,
        initial : [0.02, 0.02],
      }, "tags");
    }
  }, []);

  return (
    <div className="skills-charts">
      <div id="myCanvasContainer">
        <canvas width={500} height={500} id="myCanvas"></canvas>
        <ul id="tags">
        <li><a href="#" target="_blank">HTML</a></li>
                        <li><a href="#" target="_blank">CSS</a></li>
                        <li><a href="#" target="_blank">ES5</a></li>
                        <li><a href="#" target="_blank">TypeScript</a></li>
                        <li><a href="#" target="_blank">REST</a></li>
                        <li><a href="#" target="_blank">JSON</a></li>
                        <li><a href="#" target="_blank">GSAP</a></li>
                        <li><a href="#" target="_blank">Data Science</a></li>
                        <li><a href="#" target="_blank">Wordpress</a></li>
                        <li><a href="#" target="_blank">PHP</a></li>
                        <li><a href="#" target="_blank">Python</a></li>
                        <li><a href="#" target="_blank">Node JS</a></li>
                        <li><a href="#" target="_blank">Git</a></li>
                        <li><a href="#" target="_blank">_lodash</a></li>
                        <li><a href="#" target="_blank">SASS</a></li>
                        <li><a href="#" target="_blank">JQuery</a></li>
                        <li><a href="#" target="_blank">SQI</a></li>
                        <li><a href="#" target="_blank">Gulp</a></li>
                        <li><a href="#" target="_blank">npm</a></li>
                        <li><a href="#" target="_blank">BEM</a></li>
        </ul>
      </div>
    </div>
  );
}

export default transition(SobreMi);
