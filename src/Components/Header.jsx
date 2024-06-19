import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {

  const token = localStorage.getItem('token') ? localStorage.getItem('token') : ''
  const navigate = useNavigate()


  const handleLogout = () => {
    localStorage.clear()
    navigate('/')
  }



  return (
    <nav>
      <section className="nav-sec">
       <a href="/">
       <img
          src="https://res.cloudinary.com/denmnkoks/image/upload/v1711443436/cooltees-logo_aschuy.png"
          alt=""
          className="logo-CT"
        />
       </a>

        <ol className="nav-ol">
          <li>
            <i className="fa fa-search" aria-hidden="true"></i>
          </li>
          <li>
           <Link to='/cart'> <i className="fa fa-shopping-cart" aria-hidden="true"></i>
           <span> <sup>0</sup></span></Link>
          </li> 
          <li>
            {
              token ?
                (<span onClick={handleLogout} style={{ 'cursor': 'pointer' }}>Logout</span>)
                :
                (<Link to={'/signin'} style={{ 'color': 'black' }}><i className="fa fa-user" aria-hidden="true"></i></Link>)
            }
          </li>
        </ol>

        <div className="menu-bar">
          <i className="fa fa-bars" aria-hidden="true"></i>
        </div>
      </section>
    </nav>
  );
};

export default Header;
