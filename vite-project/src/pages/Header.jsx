import '../App.css'
import { NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <div className='Header'>
            <ul className='headerBar'>
                <li>
                    <p id='logo-title'>
                        <NavLink style={
                            {
                                textDecoration: 'none',
                                color: 'white',
                                fontSize:'larger'
                            }
                        } to="/">Rajat Kumar</NavLink>
                    </p>
                </li>
                <li><input className='searchBar' type="text" /></li>
            </ul>
        </div>
    )
}