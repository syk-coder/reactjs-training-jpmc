import React from 'react'
import Home from './Home'
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom'
import './app.css'
import { Order } from './Order'
import OrderDetails from './OrderDetails'

const Routing = (
    <Router>
        <div>
            <h1>Sahosoft Mall</h1>
            <ul>
                <li>
                    <NavLink to="/" className={
                        ({ isActive }) => "sahosoft1 " + (isActive ? "sahosoft  active" : '')
                    } >Home</NavLink>
                </li>
                <li>
                    <NavLink to="/order" className={
                        ({ isActive }) => "sahosoft1 " + (isActive ? "sahosoft active" : '')
                    }>Orders</NavLink>
                </li>
            </ul>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/order" element={<Order />} />
                <Route path="/order/details/:id" element={<OrderDetails />} />
            </Routes>
        </div>
    </Router>
)

export default Routing;