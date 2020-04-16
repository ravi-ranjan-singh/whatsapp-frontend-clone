import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className="sidebar-navbar">
      <div className="dp-image">
        <img src={require('./../../dist/img/dp.jpg')} alt="display-pic" />
      </div>
      <div className="sidebar-nav-items">
        <li>
          <i className="material-icons md-18">donut_large</i>
        </li>
        <li>
          <Link to="/newchat">
            <i className="material-icons md-18">chat</i>
          </Link>
        </li>
        <li>
          <i className="material-icons md-18">more_vert</i>
        </li>
      </div>
    </nav>
  );
};

export default Navbar;
