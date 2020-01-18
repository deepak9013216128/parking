import React from 'react';
import {Link } from 'react-router-dom';

import './header.style.css';

const Header = () =>(
    <div className='header'>
        <Link  className='logo-container' to='/' >
        	<i className="fas fa-car"></i>
        </Link>
        <div className='options'>
            <Link className='option' to='/society' >SOCIETY</Link>
            <Link className='option' to='/society' >CONTACT</Link>
        </div>
    </div>
)
export default Header;