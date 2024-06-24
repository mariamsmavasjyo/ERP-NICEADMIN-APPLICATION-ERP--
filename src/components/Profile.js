// src/components/Profile.js
import React from 'react';
import './Profile.css'; // Import the CSS file for styling
import profile from '../assets/profile.jpg'; // Import the profile image file

const Profile = () => {
  return (
    <div className="profile-container">
      <h2 className="profile-header">Profile</h2>
      <div className="profile-info">
        <label>Name:</label>
        <span>John Doe</span>
      </div>
      <div className="profile-info">
        <label>Email:</label>
        <span>johndoe@example.com</span>
      </div>
      <div className="profile-info">
        <label>Phone:</label>
        <span>123-456-7890</span>
      </div>
      <div className="profile-image-container">
       Profile Pic <img src={profile} alt="Profile" className="profile-image" />




       
      </div>
      {/* Add more profile information as needed */}
    </div>
  );
};

export default Profile;
