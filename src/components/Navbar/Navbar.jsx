import React from 'react';
import { NavLink as RRNavLink, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

import Logo from '../Logo/Logo';
import { HomeIcon, AboutIcon, ProyectIcon, ContactIcon } from '../UI/icons';

function Navbar() {
    const location = useLocation();

    return (
        <div className='menu'>
            <Logo />

            <nav className='nav'>
                <NavLink to="/" icon={<HomeIcon className='icon-svg' />} name="Inicio" />
                <NavLink to="/sobre-mi" icon={<AboutIcon className='icon-svg' />} name="Sobre mí" />
                <NavLink to="/proyectos" icon={<ProyectIcon className="icon-svg" />} name="Proyectos" />
                <NavLink to="/contacto" icon={<ContactIcon className="icon-svg" />} name="Contacto" />
            </nav>

            <div className="social-media">
                <LinkExternal href="https://www.linkedin.com/in/christopherquirozmendivel/" icon={faLinkedinIn} />
                <LinkExternal href="https://github.com/christopherqmendivel" icon={faGithub} />
            </div>
        </div>
    );
}

const NavLink = ({ to, icon, name }) => {
    const location = useLocation();
    const isActive = location.pathname === to;

    return (
        <RRNavLink to={to} className={`link ${isActive ? 'active' : ''}`}>
            <div className={`icon-link ${isActive ? 'active' : ''}`}>
                {icon}
                <span className='name-link'>
                    {name}
                </span>
            </div>
        </RRNavLink>
    );
};

const LinkExternal = ({ href, icon }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className='link'>
        <FontAwesomeIcon icon={icon} className='icon-color' />
    </a>
);

export default Navbar;
