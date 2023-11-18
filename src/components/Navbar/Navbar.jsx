import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';




import Logo from '../Logo/Logo';
import home from '../../assets/other-assets/home.svg';
import about from '../../assets/other-assets/about.svg';
import proyectos from '../../assets/other-assets/proyectos.svg';
import contacto from '../../assets/other-assets/contacto.svg';



function Navbar() {

    return (
        <div className='menu'>
            < Logo />

            <nav className='nav'>
                <NavLink to="/" className='link'>
                    <div className="icon-link">
                        <img src={home} alt="home icon" className='icon-svg' />
                        <span>
                            Inicio
                        </span>
                    </div>
                </NavLink>
                <NavLink to="/sobre-mi" className='link'>
                    <div className="icon-link">
                        <img src={about} alt="sobre-mi icon" className='icon-svg' />
                        <span>
                            Sobre mí
                        </span>
                    </div>

                </NavLink>
                <NavLink to="/proyectos" className='link'>
                    <div className="icon-link">
                        <img src={proyectos} alt="proyectos icon" className='icon-svg' />
                        <span>
                            Proyectos
                        </span>
                    </div>
                </NavLink>
                <NavLink to="/contacto" className='link'>
                    <div className="icon-link">
                        <img src={contacto} alt="contacto icon" className='icon-svg' />
                        <span>
                            Contacto
                        </span>
                    </div>
                </NavLink>
            </nav>

            <div className="social-media">
                <FontAwesomeIcon icon={faLinkedinIn} className='icon-color' />
                <FontAwesomeIcon icon={faGithub} className='icon-color' /> 
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