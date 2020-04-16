import React from 'react';

const Navbar = () => {
  return (
    <nav className="chatarea-navbar">
      <div className="user-dp-image">
        <img src={require('./../../dist/img/dp1.jpg')} alt="display-pic" />
        <span style={{ paddingLeft: 10 }}>Tony Stark</span>
      </div>
      <div className="chatarea-nav-items">
        <li>
          <i className="material-icons md-18">search</i>
        </li>
        <li>
          <i className="material-icons md-18">attach_file</i>
        </li>
        <li>
          <i className="material-icons md-18">more_vert</i>
        </li>
      </div>
    </nav>
  );
};

export default Navbar;
