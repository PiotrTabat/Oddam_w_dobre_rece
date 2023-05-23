import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from "./pages/Main";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Hero from "./components/Hero";
import SimpleSteps from "./components/SimpleSteps";
import AboutUs from "./components/AboutUs";
import WhomWeHelp from "./components/WhomWeHelp";
import Contact from "./components/Contact";
import Logout from "./pages/Logout";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="/hero" element={<Hero />} />
                <Route path="/simplesteps" element={<SimpleSteps />} />
                <Route path="/aboutus" element={<AboutUs />} />
                <Route path="/fundation" element={<WhomWeHelp />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    );
};

export default App;
