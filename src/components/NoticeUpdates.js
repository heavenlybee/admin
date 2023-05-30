import React, { useState } from 'react';
import axios from 'axios';
import './style.css'

function NoticeUpdates() {
  const [notice, setNotice] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/update-notice', {
        notice,
      });

      setSuccessMessage(response.data.message);
      setNotice('');
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <div>
      <h2>Notice Updates</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Notice:
          <textarea
            value={notice}
            onChange={(e) => setNotice(e.target.value)}
          ></textarea>
        </label>
        <button type="submit">Update Notice</button>
      </form>
      {successMessage && <p>{successMessage}</p>}
    </div>
  );
}

export default NoticeUpdates;
