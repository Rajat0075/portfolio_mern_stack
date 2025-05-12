import React from 'react'
import '../App.css'
import { NavLink } from 'react-router-dom'

const data = {
    active_class: "({isActive})=> isActive ? 'text-red-500':'text-black'",
    active_style: '({isActive})=>({color: isActive ? "red":"black",})'
}

const nav_data = {
    tab0: "Home", tab1: "About", tab2: "Service", tab3: "Contact", tab4: "Content", tab5: "Login"
}

export default function Navigator() {
    return (
        <div className='container'>
            <nav>
                <ul className='navbar'>
                    <li className='nav-item'><NavLink className='navLink' to='/'>{nav_data.tab0}</NavLink></li>
                    <li className='nav-item'><NavLink className='navLink' to='/about'>{nav_data.tab1}</NavLink></li>
                    <li className='nav-item'><NavLink className='navLink' to='./Service'>{nav_data.tab2}</NavLink></li>
                    <li className='nav-item'><NavLink className='navLink' to='./Contact'>{nav_data.tab3}</NavLink></li>
                    <li className='nav-item'><NavLink className='navLink' to='./login'>{nav_data.tab5}</NavLink></li>
                    <li className='nav-item'><NavLink className='navLink' to='./content'>{nav_data.tab4}</NavLink></li>
                </ul>
            </nav>
        </div>
    )
}
