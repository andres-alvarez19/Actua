import React,{ useState, useEffect } from 'react';
import './index.css';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import {Index} from "./pages/Index";
import {Navbar} from "./components/Navbar.jsx";
import {Footer} from "./components/Footer.jsx";

function App(props) {
    const [theme, setTheme] = useState('mytheme');
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/profile" element={<Index />} />
                <Route path="/store" element={<Index />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;