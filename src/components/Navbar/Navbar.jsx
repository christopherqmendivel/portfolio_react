import React from 'react';
import { NavLink as RRNavLink, useLocation } from 'react-router-dom';

import Logo from '../Logo/Logo';
import logo from '../../assets/other-assets/logo-chrisv2.png';
import SocialMedia from '../SocialMedia/SocialMedia';
import { HomeIcon, AboutIcon, ProyectIcon, ContactIcon } from '../UI/icons';

function Navbar() {
    const location = useLocation();

    return (
        <div className='menu'>
            <Logo />

            <nav className='nav'>
                <NavLink to="/" icon={<HomeIcon className='icon-svg' />} name="Inicio" />
                <NavLink to="/sobre-mi" icon={<AboutIcon className='icon-svg' />} name="Sobre mí" />
                <NavLink to="/" logo={logo} className='logo_m' />
                <NavLink to="/proyectos" icon={<ProyectIcon className="icon-svg" />} name="Proyectos" />
                <NavLink to="/contacto" icon={<ContactIcon className="icon-svg" />} name="Contacto" />
                
            </nav>

            <SocialMedia />
        </div>
    );
}

const NavLink = ({ to, icon, name, logo }) => {
    const location = useLocation();
    const isActive = location.pathname === to;

    return (
        <RRNavLink to={to} className={`link ${isActive ? 'active' : ''}`}>
            <div className={`icon-link ${isActive ? 'active' : ''}`}>
                {icon}
                {logo && <img src={logo} alt="Logo" className="nav_logo_m" />} {/* Renderiza el logo si se proporciona */}
                <span className='name-link'>
                    {name}
                </span>
            </div>
        </RRNavLink>
    );
};



export default Navbar;
