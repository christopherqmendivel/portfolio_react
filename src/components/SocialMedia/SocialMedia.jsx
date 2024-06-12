import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

const LinkExternal = ({ href, icon }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="link">
    <FontAwesomeIcon icon={icon} className="icon-color" />
  </a>
);

const SocialMediaLinks = () => {
  const [bgColor, setBgColor] = useState('transparent');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setBgColor('#0E0E0E'); 
      } else {
        setBgColor('transparent');
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="social-media" style={{ backgroundColor: bgColor }}>
      <LinkExternal
        href="https://www.linkedin.com/in/christopherquirozmendivel/"
        icon={faLinkedinIn}
      />
      <LinkExternal
        href="https://github.com/christopherqmendivel"
        icon={faGithub}
      />
    </div>
  );
};

export default SocialMediaLinks;
