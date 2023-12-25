
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Navbar from './components/Navbar/Navbar';
import Inicio from "./pages/Inicio";
import SobreMi from "./pages/SobreMi";
import Proyectos from "./pages/Proyectos";
import Contacto from "./pages/Contacto";


function App() {
    const location = useLocation();

    return (
        <div className="container">
            <Navbar />
            <AnimatePresence mode='wait'>
                <Routes location={location} key={location.pathname}>
                    <Route index element={<Inicio />} />
                    <Route path='/sobre-mi' element={<SobreMi />} />
                    <Route path='/proyectos' element={<Proyectos />} />
                    <Route path='/contacto' element={<Contacto />} />
                </Routes>
            </AnimatePresence>
        </div>


    )
}

export default App
