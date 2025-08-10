import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

function Menu() {
  return (
    <>
      <nav className="navbar navbar-expand-lg custom-navbar">
        <div className="container-fluid">
          <div className="navbar-links d-flex align-items-center">
            <Link className="navbar-brand brand-text" to="/dashboard/read">Read</Link>
            <Link className="nav-link nav-text" to="/dashboard/create">Create</Link>
            <Link className="nav-link nav-text" to="/dashboard/search">Search</Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Menu;
