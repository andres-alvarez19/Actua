import React,{ useState, useEffect } from 'react';
import './index.css';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import {Index} from "./pages/Index";
import {Navbar} from "./components/Navbar.jsx";
import {Footer} from "./components/Footer.jsx";
import {AboutPage} from "./pages/AboutPage.jsx";
import {Services} from "./pages/Services.jsx";
import {Contact} from "./pages/Contact.jsx";

function App(props) {
    const [theme, setTheme] = useState('mytheme');
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);
    return (
        <BrowserRouter >
            <Navbar />
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/service" element={<Services />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;