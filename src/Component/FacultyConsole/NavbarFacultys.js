import React, { useState } from 'react';
import FacConsole from '../FacultyConsole/FacSideNavLayout'; // Import the AdminConsole component

const NavbarFacultys = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
    <header className="p-3" style={{ backgroundColor: '#3d0060', color: 'white' }}>
      <div className="container-fluid" style={{ backgroundColor: '#3d0060' }}>
        <div className="d-flex flex-wrap align-items-center justify-content-between">
          <h3>Welcome Trainer..</h3>
          <div>
            {/* <button type="button" className="btn btn-outline-light  me-2" >
              Admin Management Console
            </button> */}
            <button type="button" className="btn btn-outline-warning">Logout</button>
          </div>
        </div>
        {isVisible && <FacConsole />}
      </div>
    </header>
    </div>
  );
};

export default NavbarFacultys;





















