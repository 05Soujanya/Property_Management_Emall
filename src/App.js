import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './LoginPage';

import Spaceownerdashboard from './Spaceownerdashboard';

import Marketingstaff from './Marketingstaff';
// import BusinessSpaceRegistration from './BusinessSpaceRegistration';
import BusinessSpaceRegistration from './BusinessSpaceRegistration';
import SpaceBookingSystem from './SpaceBookingSystem';
// import SpaceBookingSystem from './SpaceBookingSystem';
import UtilityAndRevenueReports from './UtilityAndRevenueReports';
import ComplaintRegistration from './ComplaintRegistration'; 
import PricingManagement from './PricingManagement';
import FinancialReportsPage from './FinancialReportsPage';
import MaintenanceAndComplaintsOverviewPage from './MaintenanceAndComplaintsOverviewPage';
import BookingManagementPage from './BookingManagementPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        <Route path="/Marketingstaff" element={<Marketingstaff/>} />
        
        <Route path="/register-space" element={<BusinessSpaceRegistration />} />
        <Route path="/book-space" element={<SpaceBookingSystem />} />
        <Route path="/reports" element={<UtilityAndRevenueReports />} />
        <Route path="/register-complaint" element={<ComplaintRegistration />} />
        <Route path="/pricing-management" element={<PricingManagement />} />
        <Route path="/Spaceownerdashboard" element={<Spaceownerdashboard />} />
        <Route path="/owner-financial-reports" element={<FinancialReportsPage />} />
        <Route path="/owner-maintenance-complaints" element={<MaintenanceAndComplaintsOverviewPage />} />
        <Route path="/owner-booking-management" element={<BookingManagementPage />} />
      </Routes>
    </Router>
  );
}
export default App;