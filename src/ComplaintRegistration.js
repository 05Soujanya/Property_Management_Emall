import React, { useState } from 'react';
import './ComplaintRegistration.css';

const ComplaintRegistration = () => {
    const [complaint, setComplaint] = useState({
        category: '',
        description: '',
        urgency: '',
        spaceId: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setComplaint(prevComplaint => ({
            ...prevComplaint,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Ideally, send this data to a backend server for processing
        console.log('Complaint Details:', complaint);
        alert('Complaint registered successfully!');
    };

    return (
        <div className="complaint-registration-container">
            <h2>Register a Complaint</h2>
            <form onSubmit={handleSubmit} className="complaint-form">
                <div className="form-group">
                    <label htmlFor="category">Complaint Category</label>
                    <select name="category" id="category" value={complaint.category} onChange={handleChange} required>
                        <option value="">Select Category</option>
                        <option value="electrical">Electrical</option>
                        <option value="carpentry">Carpentry</option>
                        <option value="plumbing">Plumbing</option>
                        <option value="security">Security</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea id="description" name="description" value={complaint.description} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="urgency">Urgency Level</label>
                    <select name="urgency" id="urgency" value={complaint.urgency} onChange={handleChange} required>
                        <option value="">Select Urgency</option>
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="spaceId">Space Identification (ID)</label>
                    <input type="text" id="spaceId" name="spaceId" value={complaint.spaceId} onChange={handleChange} required />
                </div>
                <button type="submit" className="submit-btn">Submit Complaint</button>
            </form>
        </div>
    );
};

export default ComplaintRegistration;
