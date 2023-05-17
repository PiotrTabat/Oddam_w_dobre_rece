import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Main";
import ThreeColumns from "./pages/ThreeColumns";
import HowToDo from "./pages/HowToDo";
import AboutUs from "./pages/AboutUs";
import WhomWeHelp from "./pages/WhomWeHelp";
import Contact from "./pages/Contact";


const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/threeColumns" element={<ThreeColumns />} />
                <Route path="/howToDo" element={<HowToDo />} />
                <Route path="/aboutUs" element={<AboutUs />} />
                <Route path="/whomWeHelp" element={<WhomWeHelp />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    );
};

export default App;
