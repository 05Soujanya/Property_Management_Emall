import React, { useState } from 'react';
import './FinancialReportsPage.css'; // Ensure this path matches your file structure

const FinancialReportsPage = () => {
    const [reportFilters, setReportFilters] = useState({
        timePeriod: '',
        spaceType: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setReportFilters(prevFilters => ({
            ...prevFilters,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Fetch the financial data based on `reportFilters`
        console.log('Fetching financial reports with filters:', reportFilters);
        // Placeholder for data fetching logic
    };

    return (
        <div className="financial-reports">
            <h1>Financial Reports</h1>
            <form onSubmit={handleSubmit} className="report-filters">
                <div className="form-group">
                    <label htmlFor="timePeriod">Time Period</label>
                    <select name="timePeriod" id="timePeriod" value={reportFilters.timePeriod} onChange={handleChange}>
                        <option value="">Select Period</option>
                        <option value="monthly">Monthly</option>
                        <option value="quarterly">Quarterly</option>
                        <option value="annually">Annually</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="spaceType">Space Type</label>
                    <select name="spaceType" id="spaceType" value={reportFilters.spaceType} onChange={handleChange}>
                        <option value="">All Spaces</option>
                        <option value="shop-small">Shop - Small</option>
                        <option value="shop-medium">Shop - Medium</option>
                        <option value="shop-large">Shop - Large</option>
                        <option value="atrium">Atrium</option>
                        <option value="cinema">Cinema Theater</option>
                    </select>
                </div>
                <button type="submit" className="fetch-button">Fetch Report</button>
            </form>
            {/* Placeholder for the reports display */}
            <div className="reports-display">
                <p>Reports will be displayed here...</p>
            </div>
        </div>
    );
};

export default FinancialReportsPage;
