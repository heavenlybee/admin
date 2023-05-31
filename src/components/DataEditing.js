import React, { useState, useEffect } from "react";
import axios from "axios";
import "./DataEditing.css";
import './style.css';

function DataEditing() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    registerNumber: "",
    dateOfBirth: "",
    age: "",
    branch: "",
    semester: "",
    address: "",
    gender: "",
    religion: "",
    caste: "",
    category: "",
    plusTwoPercentage: "",
    tenthPercentage: "",
  });

  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await axios.get("/api/students");
      setStudents(response.data);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post("/api/students", formData);
      setFormData({
        name: "",
        email: "",
        registerNumber: "",
        dateOfBirth: "",
        age: "",
        branch: "",
        semester: "",
        address: "",
        gender: "",
        religion: "",
        caste: "",
        category: "",
        plusTwoPercentage: "",
        tenthPercentage: "",
      });
      fetchStudents();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleEdit = async (student) => {
    try {
      await axios.put(`/api/students/${student._id}`, formData);
      setFormData({
        name: "",
        email: "",
        registerNumber: "",
        dateOfBirth: "",
        age: "",
        branch: "",
        semester: "",
        address: "",
        gender: "",
        religion: "",
        caste: "",
        category: "",
        plusTwoPercentage: "",
        tenthPercentage: "",
      });
      fetchStudents();
    } catch (error) {
      console.error("Error editing student:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/students/${id}`);
      fetchStudents();
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
        </div>
        <div className="form-group">
          <label>Register Number:</label>
          <input
            type="text"
            name="registerNumber"
            value={formData.registerNumber}
            onChange={handleChange}
            placeholder="Register Number"
            required
          />
        </div>
        <div className="form-group">
          <label>Date of Birth:</label>
          <input
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Age:</label>
          <input
            type="text"
            name="age"
            value={formData.age}
            onChange={handleChange}
            placeholder="Age"
            required
          />
        </div>
        <div className="form-group">
          <label>Branch:</label>
          <input
            type="text"
            name="branch"
            value={formData.branch}
            onChange={handleChange}
            placeholder="Branch"
            required
          />
        </div>
        <div className="form-group">
          <label>Semester:</label>
          <input
            type="text"
            name="semester"
            value={formData.semester}
            onChange={handleChange}
            placeholder="Semester"
            required
          />
        </div>
        <div className="form-group">
          <label>Address:</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Address"
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label>Gender:</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label>Religion:</label>
          <input
            type="text"
            name="religion"
            value={formData.religion}
            onChange={handleChange}
            placeholder="Religion"
            required
          />
        </div>
        <div className="form-group">
          <label>Caste:</label>
          <input
            type="text"
            name="caste"
            value={formData.caste}
            onChange={handleChange}
            placeholder="Caste"
            required
          />
        </div>
        <div className="form-group">
          <label>Category:</label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="Category"
            required
          />
        </div>
        <div className="form-group">
          <label>Plus Two Mark Percentage:</label>
          <input
            type="text"
            name="plusTwoPercentage"
            value={formData.plusTwoPercentage}
            onChange={handleChange}
            placeholder="Plus Two Mark Percentage"
            required
          />
        </div>
        <div className="form-group">
          <label>Tenth Mark Percentage:</label>
          <input
            type="text"
            name="tenthPercentage"
            value={formData.tenthPercentage}
            onChange={handleChange}
            placeholder="Tenth Mark Percentage"
            required
          />
        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
        <button
          type="button"
          className="clear-button"
          onClick={() =>
            setFormData({
              name: "",
              email: "",
              registerNumber: "",
              dateOfBirth: "",
              age: "",
              branch: "",
              semester: "",
              address: "",
              gender: "",
              religion: "",
              caste: "",
              category: "",
              plusTwoPercentage: "",
              tenthPercentage: "",
            })
          }
        >
          Clear
        </button>
      </form>
      <table className="student-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Register Number</th>
            <th>Date of Birth</th>
            <th>Age</th>
            <th>Branch</th>
            <th>Semester</th>
            <th>Address</th>
            <th>Gender</th>
            <th>Religion</th>
            <th>Caste</th>
            <th>Category</th>
            <th>Plus Two Mark Percentage</th>
            <th>Tenth Mark Percentage</th>
            <th>Edit/Delete</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student._id}>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.registerNumber}</td>
              <td>{student.dateOfBirth}</td>
              <td>{student.age}</td>
              <td>{student.branch}</td>
              <td>{student.semester}</td>
              <td>{student.address}</td>
              <td>{student.gender}</td>
              <td>{student.religion}</td>
              <td>{student.caste}</td>
              <td>{student.category}</td>
              <td>{student.plusTwoPercentage}</td>
              <td>{student.tenthPercentage}</td>
              <td>
                <button onClick={() => handleEdit(student)}>Edit</button>
                <button onClick={() => handleDelete(student._id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataEditing;



