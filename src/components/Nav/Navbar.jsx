import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className= 'nav'>
            <Link to="/" className='link'>Inicio</Link>
            <Link to="/sobre-mi" className='link'>Sobre mí</Link>
            <Link to="/proyectos" className='link'>Proyectos</Link>
            <Link to="/contacto" className='link'>Contacto</Link>
        </nav>
    )
}

export default Navbar