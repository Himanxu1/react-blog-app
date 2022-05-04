import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import './MainHeader.css'
const MainHeader = ({ isAuth, signUserOut }) => {
  return (
    <header>
        <nav>
            <ul>
                <li><NavLink to='/' className="link">Home</NavLink></li>
                <li><NavLink to='/post' className="link">CreatePost</NavLink></li>
                {!isAuth ? <li><NavLink to='/login' className="link">Login</NavLink></li> : <button className="logout" onClick={signUserOut}>Log out</button>}

            </ul>
        </nav>
    </header>
  )
}

export default MainHeader