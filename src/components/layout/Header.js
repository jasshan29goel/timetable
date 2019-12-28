import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Header = (props) => {
    const {header}=props
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
        <div className="container">
          <a href="/" className="navbar-brand">
            {header}
          </a>
          <div>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                <i className="fas fa-home" />   Home     
                </Link>  
              </li>
              <li className="nav-item">
                <Link to="/add" className="nav-link">
                <i className="fas fa-plus" />  Add     
                </Link> 
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    )
}
Header.defaultProps={
    header:"Time Table"
};
Header.propTypes={
    header : PropTypes.string.isRequired
};
export default Header;