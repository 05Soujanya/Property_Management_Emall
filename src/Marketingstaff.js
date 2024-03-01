// import React from 'react'

// function Marketingstaff() {
//     return (
//         <div>fghjkl;</div>
//     )
// }

// export default Marketingstaff;
import React from 'react';
import { Link } from 'react-router-dom';
import './Marketingstaff.css';

const Marketingstaff = () => {
  return (
    <div>
      <h1>Marketing Staff Dashboard</h1>
      <nav>
        
          <Link to="/register-space">Register Business Space</Link>
          <Link to="/book-space">Book Space</Link>
          <Link to="/reports">Utility & Revenue Reports</Link>
          <Link to="/register-complaint">Register Complaint</Link>
          <Link to="/pricing-management">Pricing Management</Link>
        
      </nav>
    </div>
  );
}

export default Marketingstaff;
