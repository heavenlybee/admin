import React, { useState } from 'react';
import axios from 'axios';
import './style.css'

function FeeReminders() {
  const [studentEmail, setStudentEmail] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/send-fee-reminder', {
        email: studentEmail,
      });

      setSuccessMessage(response.data.message);
      setStudentEmail('');
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <div>
      <h2>Fee Reminders</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Student Email:
          <input
            type="email"
            value={studentEmail}
            onChange={(e) => setStudentEmail(e.target.value)}
          />
        </label>
        <button type="submit">Send Reminder</button>
      </form>
      {successMessage && <p>{successMessage}</p>}
    </div>
  );
}

export default FeeReminders;
