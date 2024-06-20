import React from 'react'
import Home from './Home'
import Contact from './Contact'
import About from './About'
import { BrowserRouter as Router, Route, Routes, Link, Switch } from 'react-router-dom'
import NotFound from './NotFound'

const Routing = (
    <Router>
        <div>
            <h1>Sahosoft Mall</h1>
            <ul>
                <li>
                    <Link to="/" >Home</Link>
                </li>
                <li>
                    <Link to="/about" >About US</Link>
                </li>
                <li>
                    <Link to="/contact" >Contact Us</Link>
                </li>
                <li>
                    <Link to="/login" >Login</Link>
                </li>
            </ul>
            <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    </Router>
)

export default Routing;