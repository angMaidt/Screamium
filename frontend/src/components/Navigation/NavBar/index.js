import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ProfileButton from '../../Navigation/ProfileButton';
import StoryForm from '../../Story/StoryForm';
import LoginFormModal from '../../LoginFormModal';
import * as sessionActions from '../../../store/session';
import '../Navigation.css';

function NavBar({ isLoaded }){
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <div className='sessionlinks-container'>
          <p id='nav-username'>Welcome, {sessionUser.username}</p>
          <button onClick={logout} className='button' id='logout'>Log Out</button>
        </div>
      </>
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <NavLink to="/signup" style={{ textDecoration: 'none'}}>
          <button id='sign-up'>Sign Up</button>
        </NavLink>
      </>
    );
  }

  return (
    <div className='nav' id='nav-wrapper'
      style={{
        height: '70px',
        width: '100vw',
        borderBottom: '1px solid white',
      }}>
      <div className='nav-container'>
        <div id='logo'>
          <img src='/images/logo.png' style={{ height: '40px'}}/>
          <p style={{color: 'white'}}>Screamium</p>
        </div>
        <div id='login-and-about'>
          {isLoaded && sessionLinks}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
