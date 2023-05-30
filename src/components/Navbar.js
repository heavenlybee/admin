import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            OFFICE
            <i class='fas fa-building fa-sm' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/data-editing' className='nav-links' onClick={closeMobileMenu}>
                Student Data
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/fee-reminders' className='nav-links' onClick={closeMobileMenu}>
                Fee Reminders
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/scholarship-notifications' className='nav-links' onClick={closeMobileMenu}>
                Scholarships
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/certificate-distribution' className='nav-links' onClick={closeMobileMenu}>
                Certificates
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/notice-updates' className='nav-links' onClick={closeMobileMenu}>
                Noticeboard
              </Link>
            </li>
            {/*<li className='nav-item'>
              <Link
                to='/fees'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Fees
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/certificates'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Certificates
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/scholarships'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Scholarships
              </Link>
            </li>*/}
          </ul>
          
        </div>
      </nav>
    </>
  );
}

export default Navbar;