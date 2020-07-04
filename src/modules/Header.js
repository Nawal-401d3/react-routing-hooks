import React from 'react';
import { Link } from 'react-router-dom';

// dummy component - it is also a functional component
const Header = props => {
  return (
    <header>
    <h1>RESTy Application</h1>
    <ul>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/history'>History</Link>
      </li>
    </ul>
  </header>
  )
};

export default Header;