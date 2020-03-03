import React from "react";
import {NavLink} from "react-router-dom";

const Header = props => {
  return(
    <>
      <nav className='teal waves-light'>
        <div className="nav-wrapper">
          <ul id="nav-mobile" className="hide-on-med-and-down">
            <li><NavLink to="/Auth">Auth</NavLink></li>
            <li><NavLink to="/send-object">Send Object</NavLink></li>
            <li><NavLink to="/traffic-table">Traffic Table</NavLink></li>
          </ul>
        </div>
      </nav>
    </>
  )
};

export default Header;