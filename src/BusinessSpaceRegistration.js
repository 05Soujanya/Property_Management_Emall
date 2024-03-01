import React, { useState } from 'react';
import './BusinessSpaceRegistration.css';

const BusinessSpaceRegistration = () => {
    const [spaceDetails, setSpaceDetails] = useState({
        spaceType: '',
        size: '',
        location: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSpaceDetails(prevDetails => ({
            ...prevDetails,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Submit these details to your backend server or state management store
        console.log(spaceDetails);
        alert('Space registration submitted!');
    };

    return (
        <div className="space-registration-container">
            <h2>Register Business Space</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="spaceType">Space Type</label>
                    <select name="spaceType" id="spaceType" value={spaceDetails.spaceType} onChange={handleChange} required>
                        <option value="">Select Type</option>
                        <option value="shop-small">Shop - Small</option>
                        <option value="shop-medium">Shop - Medium</option>
                        <option value="shop-large">Shop - Large</option>
                        <option value="atrium-north-west">Atrium - North and West</option>
                        <option value="atrium-south">Atrium - South</option>
                        <option value="cinema">Cinema Theater</option>
                        <option value="food-court">Food Court</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="size">Size</label>
                    <input type="text" id="size" name="size" value={spaceDetails.size} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="location">Location</label>
                    <input type="text" id="location" name="location" value={spaceDetails.location} onChange={handleChange} required />
                </div>
                <button type="submit" className="submit-btn">Register Space</button>
            </form>
        </div>
    );
}

export default BusinessSpaceRegistration;
// import React from 'react'

// function BusinessSpaceRegistration() {
//     return (
//         <div>esrdtfgyuhiokpl[;]qwesrtyuio</div>
        
//     )
// }

// export default BusinessSpaceRegistration
