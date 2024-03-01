// import React from 'react'

// function Spaceownerdashboard() {
//     return (
//         <div>Spaceownerdashboard</div>
//     )
// }

// export default Spaceownerdashboard;
import React from 'react';
import { Link } from 'react-router-dom';
//import './SpaceOwnerDashboard.css'; // Make sure the path is correct

const SpaceOwnerDashboard = () => {
  return (
    <div className="owner-dashboard">
      <h1>Space Owner Dashboard</h1>
      <nav>
        
          <Link to="/owner-financial-reports">Financial Reports</Link>
          <Link to="/owner-maintenance-complaints">Maintenance and Complaints Overview</Link>
          <Link to="/owner-booking-management">Booking Management</Link>
        
      </nav>
      
      
    </div>
  );
};

export default SpaceOwnerDashboard;
