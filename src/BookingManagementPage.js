import React, { useState } from 'react';
import './BookingManagementPage.css'; // Ensure this path matches your file structure

const BookingManagementPage = () => {
    // Placeholder state for bookings data
    const [bookings, setBookings] = useState([
        // Example booking data
        { id: 1, spaceName: 'Shop - Small', date: '2023-10-05', startTime: '09:00', endTime: '17:00', status: 'Confirmed' },
        { id: 2, spaceName: 'Atrium - North', date: '2023-10-06', startTime: '12:00', endTime: '15:00', status: 'Pending' },
    ]);

    // Placeholder function to handle cancellation
    const handleCancel = (bookingId) => {
        console.log(`Cancelling booking with ID: ${bookingId}`);
        // Implement cancellation logic here
    };

    // Placeholder function to handle modification
    const handleModify = (bookingId) => {
        console.log(`Modifying booking with ID: ${bookingId}`);
        // Implement modification logic here
    };

    return (
        <div className="booking-management">
            <h1>Booking Management</h1>
            <div className="bookings-list">
                {bookings.map(booking => (
                    <div key={booking.id} className="booking">
                        <h2>{booking.spaceName} - {booking.date}</h2>
                        <p>Time: {booking.startTime} to {booking.endTime}</p>
                        <p>Status: {booking.status}</p>
                        <button onClick={() => handleModify(booking.id)} className="modify-btn">Modify</button>
                        <button onClick={() => handleCancel(booking.id)} className="cancel-btn">Cancel</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BookingManagementPage;
