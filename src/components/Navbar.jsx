import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () =>
    <nav className="nav-component navbar navbar-inverse navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a href="/" title="Marvel App">
            <img src={require('../assets/images/Marvel-Logo.png')} alt="Marvel App" />
          </a>
        </div>
        <div id="navbar" className="navbar-collapse collapse">
          {/*}<ul className="nav navbar-nav">
            <li><NavLink exact activeClassName='active' to='/'>Home</NavLink></li>
            <li><NavLink activeClassName='active' to='/characters'>Character</NavLink></li>
          </ul>*/}
        </div>
      </div>
    </nav>

export default Navbar
