import React from 'react';
import {Link } from 'react-router-dom';
import {auth} from '../../firebase/firebase.utils';
import {ReactComponent as Logo} from '../../logo.svg';
import './header.style.css';

const Header = ({currentUser}) =>(
    <div className='header'>
        <Link  className='logo-container' to='/' >
        <Logo className='logo' />
        	<i className="fas fa-car"></i>
        </Link>
        <div className='options'>
            <Link className='option' to='/society' >SOCIETY</Link>
            <Link className='option' to='/society' >CONTACT</Link>
            {
                currentUser ?(
                    <div className='option'>
                        <Link className='option' to='/' >Sign as {currentUser.displayName.toUpperCase()}</Link>
                        <Link className='option' to='/' onClick={()=>auth.signOut()}>    SIGN OUT</Link>
                    </div>
                )
                :(
                    <Link className='option' to='/signin'>SIGN IN</Link>
                )
            }
        </div>
    </div>
)
export default Header;