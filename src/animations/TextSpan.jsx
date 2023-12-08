import { motion, useAnimationControls } from 'framer-motion';
import { useState } from 'react';
import logo from '../assets/other-assets/logo-chrisv2.png';

const TextSpan = ({ children }) => {
  const controls = useAnimationControls();
  const [isPlaying, setIsPlaying] = useState(false);

  const rubberBand = () => {
    controls.start({
      transform: [
        'scale3d(1, 1, 1)',
        'scale3d(1.4, .55, 1)',
        'scale3d(.75, 1.25, 1)',
        'scale3d(1.25, .85, 1)',
        'scale3d(.9, 1.05, 1)',
        'scale3d(1, 1, 1)',
      ],
    });
    setIsPlaying(true);
  };

  const shouldRenderImage = children.toLowerCase() === 'c';

  return (
    <motion.span
      animate={controls}
      onMouseOver={() => {
        if (!isPlaying) rubberBand();
      }}
      onAnimationComplete={() => setIsPlaying(false)}
    >
      {shouldRenderImage ? (
        <img
          src= {logo} // Ajusta la ruta de la imagen
          alt="Imagen C"
          className='letterIcon'
          style={{width: '7rem', position: 'relative', top: '1rem'}}
        />
      ) : (
        children
      )}
    </motion.span>
  );
};

export default TextSpan;
