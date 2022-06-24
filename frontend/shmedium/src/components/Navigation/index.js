import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
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
        <NavLink to="/login" style={{textDecoration: 'none'}}>Log In</NavLink>
        <NavLink to="/signup" style={{textDecoration: 'none'}}>Sign Up</NavLink>
      </>
    );
  }

  return (
    <div className='nav' id='nav-container'>
        <NavLink exact to="/" style={{textDecoration: 'none'}}>Home</NavLink>
        {isLoaded && sessionLinks}
    </div>
  );
}

export default Navigation;
