import React from 'react';
import { NavLink } from 'react-router-dom'
import '../App.css';

const SideBarNav = () =>
  <aside className="sidebar-nav">
    <ul>
      <li><NavLink className="sidebar-nav" to="/" exact><img src="./logo-small.png" className="logo" alt="logo" /><span className='logo-title'>Gather App</span></NavLink></li>
      <li><NavLink className="sidebar-nav" activeClassName="sidebar-nav-active" to="/create"><i className="far fa-plus-square" aria-hidden="true"></i><span>New</span></NavLink></li>
      <li><NavLink className="sidebar-nav" activeClassName="sidebar-nav-active" to="/" exact><i className="far fa-sticky-note" aria-hidden="true"></i><span>Notes</span></NavLink></li>
      <li><NavLink className="sidebar-nav" activeClassName="sidebar-nav-active" to="/search"><i className="fas fa-search" aria-hidden="true"></i><span>Search</span></NavLink></li>
      {/* <li><NavLink className="sidebar-nav" activeClassName="sidebar-nav-active" to="/settings"><i className="fas fa-cog" aria-hidden="true"></i><span>Settings</span></NavLink></li> */}
    </ul>
  </aside>;

export default SideBarNav;
