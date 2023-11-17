import { Outlet, Link, useLocation } from 'react-router-dom';
import Navbar from './Nav/Navbar';
import Logo from './Logo/Logo';

function Layout() {

    const location = useLocation()

    console.log(location)

    return (
        <div className='container'>
            <div className='menu'>
                {/* MENÚ */}
                < Logo />
                < Navbar />
            </div>

            <main>
            <Outlet />

            </main>
        </div>
    )
}

export default Layout