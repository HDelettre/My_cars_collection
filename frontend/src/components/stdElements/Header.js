import React from 'react';

// IMPORT PICTURES
import logoSite from '../../assets/number7.png'

const Header = () => {
  return (
    <div className='header'>
      <div className="header_logo">
        <img src={logoSite} alt="logo du site" />
      </div>
      <div className="header_title">
        <h1>Ma collection de miniatures !</h1>
      </div>
    </div>
  );
}

export default Header;
