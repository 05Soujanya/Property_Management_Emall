import React, { useState } from 'react';
import './UtilityAndRevenueReports.css';

const UtilityAndRevenueReports = () => {
    const [reportCriteria, setReportCriteria] = useState({
        startDate: '',
        endDate: '',
        spaceType: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setReportCriteria(prevCriteria => ({
            ...prevCriteria,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Fetch and display the report data based on `reportCriteria`
        console.log('Report Criteria:', reportCriteria);
        alert('Report generated! (Placeholder for actual report data)');
    };

    return (
        <div className="report-container">
            <h2>Utility and Revenue Reports</h2>
            <form onSubmit={handleSubmit} className="report-form">
                <div className="form-group">
                    <label htmlFor="startDate">Start Date</label>
                    <input type="date" id="startDate" name="startDate" value={reportCriteria.startDate} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="endDate">End Date</label>
                    <input type="date" id="endDate" name="endDate" value={reportCriteria.endDate} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="spaceType">Space Type</label>
                    <select name="spaceType" id="spaceType" value={reportCriteria.spaceType} onChange={handleChange}>
                        <option value="">All Types</option>
                        <option value="shop-small">Shop - Small</option>
                        <option value="shop-medium">Shop - Medium</option>
                        <option value="shop-large">Shop - Large</option>
                        <option value="atrium-north-west">Atrium - North and West</option>
                        <option value="atrium-south">Atrium - South</option>
                        <option value="cinema">Cinema Theater</option>
                    </select>
                </div>
                <button type="submit" className="submit-btn">Generate Report</button>
            </form>
        </div>
    );
};

export default UtilityAndRevenueReports;
