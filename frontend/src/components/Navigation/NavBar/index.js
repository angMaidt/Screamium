import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from '../../Navigation/ProfileButton';
import StoryForm from '../../Story/StoryForm';
import LoginFormModal from '../../LoginFormModal';
import '../Navigation.css';

function NavBar({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <ProfileButton user={sessionUser} />
      </>
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <NavLink to="/signup" style={{ textDecoration: 'none'}}>Sign Up</NavLink>
      </>
    );
  }

  return (
    <div className='nav' id='nav-wrapper'
      style={{
        backgroundColor: 'rgb(5, 4, 5)',
        height: '70px',
        width: '100vw',
      }}>
      <div className='nav-container'
        style={{
          position: 'fixed',
          left: '0',
          backgroundColor: 'rgb(5, 4, 5)',
          height: '70px',
          width: '100vw',
        }}>
          <h2>Screamium</h2>
        {isLoaded && sessionLinks}
      </div>
    </div>
  );
}

export default NavBar;
