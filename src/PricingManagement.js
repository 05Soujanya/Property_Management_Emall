import React, { useState } from 'react';
import './PricingManagement.css';

const PricingManagement = () => {
    const [pricing, setPricing] = useState({
        spaceType: '',
        duration: '',
        rentType: '',
        costPerUnit: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPricing(prevPricing => ({
            ...prevPricing,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Ideally, you would send this updated pricing information to your backend server
        console.log('Updated Pricing:', pricing);
        alert('Pricing updated successfully!');
    };

    return (
        <div className="pricing-management-container">
            <h2>Pricing Management</h2>
            <form onSubmit={handleSubmit} className="pricing-form">
                <div className="form-group">
                    <label htmlFor="spaceType">Space Type</label>
                    <select name="spaceType" id="spaceType" value={pricing.spaceType} onChange={handleChange} required>
                        <option value="">Select Type</option>
                        <option value="shop-small">Shop - Small</option>
                        <option value="shop-medium">Shop - Medium</option>
                        <option value="shop-large">Shop - Large</option>
                        <option value="atrium-north-west">Atrium - North and West</option>
                        <option value="atrium-south">Atrium - South</option>
                        <option value="cinema">Cinema Theater</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="duration">Duration / Occasion</label>
                    <input type="text" id="duration" name="duration" value={pricing.duration} onChange={handleChange} placeholder="e.g., Week Days, Public Holidays" required />
                </div>
                <div className="form-group">
                    <label htmlFor="rentType">Rent Type</label>
                    <select name="rentType" id="rentType" value={pricing.rentType} onChange={handleChange} required>
                        <option value="">Select Rent Type</option>
                        <option value="day-wise">Day Wise</option>
                        <option value="hour-wise">Hour Wise</option>
                        <option value="week-wise">Week Wise</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="costPerUnit">Cost Per Unit</label>
                    <input type="number" id="costPerUnit" name="costPerUnit" value={pricing.costPerUnit} onChange={handleChange} min="0" required />
                </div>
                <button type="submit" className="submit-btn">Update Pricing</button>
            </form>
        </div>
    );
};

export default PricingManagement;
