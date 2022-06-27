import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <NavLink to="/signup" style={{textDecoration: 'none'}}>Sign Up</NavLink>
      </>
    );
  }

  return (
    <div className='nav' id='nav-container'>
      <ul>
        <li>
          <NavLink exact to="/" style={{textDecoration: 'none'}}>Home</NavLink>
          <NavLink to='/stories' style={{textDecoration: 'none'}}>Stories</NavLink>
          {isLoaded && sessionLinks}
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
