import React, { useState } from 'react';
import axios from 'axios';
import './style.css'

function CertificateDistribution() {
  const [studentEmail, setStudentEmail] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/distribute-certificate', {
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
      <h2>Certificate Distribution</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Student Email:
          <input
            type="email"
            value={studentEmail}
            onChange={(e) => setStudentEmail(e.target.value)}
          />
        </label>
        <button type="submit">Distribute Certificate</button>
      </form>
      {successMessage && <p>{successMessage}</p>}
    </div>
  );
}

export default CertificateDistribution;
