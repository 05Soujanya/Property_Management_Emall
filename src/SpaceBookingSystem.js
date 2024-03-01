import React, { useState } from 'react';
import './SpaceBookingSystem.css';

const SpaceBookingSystem = () => {
    const [bookingDetails, setBookingDetails] = useState({
        spaceType: '',
        date: '',
        startTime: '',
        endTime: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBookingDetails(prevDetails => ({
            ...prevDetails,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle the booking submission here. For now, we'll just log to the console.
        console.log('Booking Details:', bookingDetails);
        alert('Booking submitted successfully!');
    };

    return (
        <div className="booking-container">
            <h2>Book a Space</h2>
            <form onSubmit={handleSubmit} className="booking-form">
                <div className="form-group">
                    <label htmlFor="spaceType">Space Type</label>
                    <select name="spaceType" id="spaceType" value={bookingDetails.spaceType} onChange={handleChange} required>
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
                    <label htmlFor="date">Date</label>
                    <input type="date" id="date" name="date" value={bookingDetails.date} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="startTime">Start Time</label>
                    <input type="time" id="startTime" name="startTime" value={bookingDetails.startTime} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="endTime">End Time</label>
                    <input type="time" id="endTime" name="endTime" value={bookingDetails.endTime} onChange={handleChange} required />
                </div>
                <button type="submit" className="submit-btn">Book Now</button>
            </form>
        </div>
    );
}

export default SpaceBookingSystem;
