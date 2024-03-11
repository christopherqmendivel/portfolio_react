import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

const LinkExternal = ({ href, icon }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="link">
    <FontAwesomeIcon icon={icon} className="icon-color" />
  </a>
);

const SocialMediaLinks = () => (
  <div className="social-media">
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

export default SocialMediaLinks;
