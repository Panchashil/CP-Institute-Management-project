import React from 'react';


const Footer = () => {
  return (
    <>
      <footer className='text-center text-lg-start text-muted footer' style={{backgroundColor:'#e8f4f9'}}>
        
        <div
          className='text-center p-4 footer'
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}
        >
          © 2024 Copyright: {" "}
          <a className='text-reset fw-bold' href='/'>
           teamsupport@changepond.com
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;





