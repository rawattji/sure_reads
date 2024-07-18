import React, { useEffect, useState } from 'react';
import backgroundImage from '../Assests/back.jpg';

const HookText = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 500);
  }, []);

  return (
    <div className="hook-text-container">
      <img src={backgroundImage} alt="Background" className="hook-background-image" />
      <h1 className='hooktext'>Find <br/> Your Next <br/></h1>
      <b className='boldtext'> Great Reads!!</b>
          <br/>
      <div className={`hook-text ${visible ? 'visible' : ''}`}>
      <br/>
        <p className='para'>Explore endless stories at your fingertips.</p>
        <br/>
        <br/>
      </div>
    </div>
  );
};

export default HookText;
