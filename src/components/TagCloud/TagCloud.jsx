import React, { useEffect } from 'react';

const TagCloud = () => {
  useEffect(() => {
    const initTagCanvas = () => {
      const canvas = document.getElementById('myCanvas');
      if (canvas && window.TagCanvas) {
        window.TagCanvas.Start('myCanvas');
        window.TagCanvas.Move('myCanvas', 0, 0);
      }
    };

    if (window.jQuery && window.jQuery.isFunction(window.jQuery.fn.tagcanvas)) {
      window.jQuery("#myCanvas").tagcanvas({
        textColour: "#a35cf5",
        outlineColour: "transparent",
        textFont : 'Roboto',
        reverse: true,
        maxSpeed: 0.05,
        textHeight: 17,
        noSelect: true,
        weight: true,
        wheelZoom: false,
        initial: [0.02, 0.02],
        
        
      }, "tags");
    }
  }, []);

  return (
    <div className="skills-charts">
      <div id="myCanvasContainer" className='myCanvasContainer'>
        <canvas width={500} height={500} id="myCanvas" className='myCanvas'></canvas>
        <ul id="tags">
          <li>HTML</li>
          <li><a href="#" target="_blank">CSS</a></li>
          <li><a href="#" target="_blank">SASS</a></li>
          <li><a href="#" target="_blank">Javascript</a></li>
          <li><a href="#" target="_blank">TypeScript</a></li>
          <li><a href="#" target="_blank">Angular</a></li>
          <li>Npm</li>
          <li><a href="#" target="_blank">JSON</a></li>
          <li><a href="#" target="_blank">Git</a></li>
          <li><a href="#" target="_blank">Bootstrap</a></li>
          <li><a href="#" target="_blank">Tailwind</a></li>
          <li><a href="#" target="_blank">Figma</a></li>
          <li><a href="#" target="_blank">Adobe XD</a></li>
          <li><a href="#" target="_blank">Javascript</a></li>
          <li><a href="#" target="_blank">JQuery</a></li>
        </ul>
      </div>
    </div>
  );
};

export default TagCloud;
