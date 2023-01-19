import React from 'react';
import {useNavigate} from "react-router-dom";

const LoginButon = () => {
  const navigate = useNavigate();

  const buttonHandle = () => {
    navigate('/login');
  };

  return (
    <div className='navButton' onClick={buttonHandle} >
      LOGIN
    </div>
  );
}

export default LoginButon;
