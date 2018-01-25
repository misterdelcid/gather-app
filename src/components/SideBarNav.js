import React from 'react';
import { NavLink } from 'react-router-dom'
import '../App.css';

const SideBarNav = () =>
  <aside className="sidebar-nav">
    <ul>
      <li><NavLink to="/create"><i class="fa fa-3x fa-plus-square-o" aria-hidden="true"></i></NavLink></li>
      <li><NavLink to="/"><i class="fa fa-3x fa-line-chart" aria-hidden="true"></i></NavLink></li>
      <li><NavLink to="search"><i class="fa fa-3x fa-search" aria-hidden="true"></i></NavLink></li>
      <li><NavLink to="settings"><i class="fa fa-3x fa-cog" aria-hidden="true"></i></NavLink></li>
    </ul>
  </aside>;

export default SideBarNav;
