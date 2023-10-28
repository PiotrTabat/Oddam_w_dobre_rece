import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from "./pages/Main";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Logout from "./pages/Logout";
import {UserProvider} from "./helper/UserProvider";

const App = () => {
    return (
        <UserProvider>
            <Router basename="/oddam">
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/logout" element={<Logout />} />
                </Routes>
            </Router>
        </UserProvider>
    );
};

export default App;
