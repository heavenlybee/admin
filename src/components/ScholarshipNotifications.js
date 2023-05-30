import React, { useState } from 'react';
import axios from 'axios';
import './style.css'

function ScholarshipNotifications() {
  const [studentEmail, setStudentEmail] = useState('');
  const [notification, setNotification] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/send-scholarship-notification', {
        email: studentEmail,
        notification,
      });

      setSuccessMessage(response.data.message);
      setStudentEmail('');
      setNotification('');
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <div>
      <h2>Scholarship Notifications</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Student Email:
          <input
            type="email"
            value={studentEmail}
            onChange={(e) => setStudentEmail(e.target.value)}
          />
        </label>
        <label>
          Notification:
          <textarea
            value={notification}
            onChange={(e) => setNotification(e.target.value)}
          ></textarea>
        </label>
        <button type="submit">Send Notification</button>
      </form>
      {successMessage && <p>{successMessage}</p>}
    </div>
  );
}

export default ScholarshipNotifications;
