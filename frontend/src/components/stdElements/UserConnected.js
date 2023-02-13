import React, {useState} from 'react';

const UserConnected = () => {
  const [userConnected, setUserConnected] = useState(false);

  return userConnected ? (
    <div className='userConnected'>
      
    </div>
  ) : (<div className='userConnected'>
    Non connecté
  </div>);
}

export default UserConnected;

