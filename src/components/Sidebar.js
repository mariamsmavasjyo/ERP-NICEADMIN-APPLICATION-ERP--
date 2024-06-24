// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faTachometerAlt, 
  faCogs, 
  faWrench, 
  faTable, 
  faChartBar, 
  faIcons, 
  faUser, 
  faEnvelope, 
  faUserPlus, 
  faSignInAlt, 
  faFile 
} from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <br/>
        <br/>
        <li>
          <Link to="/dashboard">
            <FontAwesomeIcon icon={faTachometerAlt} className="sidebar-icon" /> Dashboard
          </Link>
        </li>
        <li>
          <Link to="/components">
            <FontAwesomeIcon icon={faCogs} className="sidebar-icon" /> Components
          </Link>
        </li>
        <li>
          <Link to="/forms">
            <FontAwesomeIcon icon={faWrench} className="sidebar-icon" /> Forms
          </Link>
        </li>
        <li>
          <Link to="/tables">
            <FontAwesomeIcon icon={faTable} className="sidebar-icon" /> Tables
          </Link>
        </li>
        <li>
          <Link to="/charts">
            <FontAwesomeIcon icon={faChartBar} className="sidebar-icon" /> Charts
          </Link>
        </li>
        <li>
          <Link to="/icons">
            <FontAwesomeIcon icon={faIcons} className="sidebar-icon" /> Icons
          </Link>
        </li>
        <br />
        <br />
        <br/>
        <h4 className="sidebar-heading">Pages</h4>
        <li>
          <Link to="/profile">
            <FontAwesomeIcon icon={faUser} className="sidebar-icon" /> Profile
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <FontAwesomeIcon icon={faEnvelope} className="sidebar-icon" /> Contact
          </Link>
        </li>
        <li>
          <Link to="/register">
            <FontAwesomeIcon icon={faUserPlus} className="sidebar-icon" /> Register
          </Link>
        </li>
        <li>
          <Link to="/login">
            <FontAwesomeIcon icon={faSignInAlt} className="sidebar-icon" /> Login
          </Link>
        </li>
        <li>
          <Link to="/blank">
            <FontAwesomeIcon icon={faFile} className="sidebar-icon" /> Blank
          </Link>
        </li>
        <br/>
        <br/>
        <br/>
        <br/>
      </ul>
    </div>
  );
};

export default Sidebar;
