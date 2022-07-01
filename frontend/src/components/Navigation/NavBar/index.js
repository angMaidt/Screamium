import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import StoryForm from '../Story/StoryForm';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';

function NavBar({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <ProfileButton user={sessionUser} />
        <NavLink to='/stories/new'>Publish Story</NavLink>
      </>
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

export default NavBar;
