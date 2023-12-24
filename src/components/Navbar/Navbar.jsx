import React from 'react';
import { Link } from 'react-router-dom';

// ICONS 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';



import Logo from '../Logo/Logo';
import { HomeIcon, AboutIcon, ProyectIcon, ContactIcon } from '../UI/icons';



function Navbar() {

    return (
        <div className='menu'>
            < Logo />

            <nav className='nav'>
                <NavLink to="/" className='link'>
                    <div className="icon-link">
                        <HomeIcon className='icon-svg' />
                        <span className='name-link'>
                            Inicio
                        </span>
                    </div>
                </NavLink>
                <NavLink to="/sobre-mi" className='link'>
                    <div className="icon-link">
                        <AboutIcon className='icon-svg' />
                        <span className='name-link'>
                            Sobre mí
                        </span>
                    </div>

                </NavLink>
                <NavLink to="/proyectos" className='link'>
                    <div className="icon-link">
                        <ProyectIcon className="icon-svg" />
                        <span className='name-link'>
                            Proyectos
                        </span>
                    </div>
                </NavLink>
                <NavLink to="/contacto" className='link'>
                    <div className="icon-link">
                        <ContactIcon className="icon-svg" />
                        <span className='name-link'>
                            Contacto
                        </span>
                    </div>
                </NavLink>
            </nav>

            <div className="social-media">
                <Link to="https://www.linkedin.com/in/christopherquirozmendivel/" target="_blank">
                    <FontAwesomeIcon icon={faLinkedinIn} className='icon-color' />
                </Link>
                <Link to="https://github.com/christopherqmendivel" target="_blank">
                    <FontAwesomeIcon icon={faGithub} className='icon-color' /> 
                </Link>
            </div>

        </div>

    );
};

const NavLink = ({ to, children }) => (
    <Link to={to} className='link'>
        {children}
    </Link>
);

export default Navbar;