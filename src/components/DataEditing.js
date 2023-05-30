import React, { useState } from 'react';
import axios from 'axios';
import './style.css'

function DataEditing() {
  const [studentName, setStudentName] = useState('');
  const [studentEmail, setStudentEmail] = useState('');
  const [studentRegisterNum, setStudentRegisterNum] = useState('');
  const [studentAddress, setStudentAddress]= useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/update-student-data', {
        name: studentName,
        email: studentEmail,
        registerNum : studentRegisterNum,
        address: studentAddress,

      });

      setSuccessMessage(response.data.message);
      setStudentName('');
      setStudentEmail('');
      setStudentRegisterNum('');
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <div>
      <h2>Data Editing</h2>
      <form onSubmit={handleSubmit}>
        <ul>
        <li>
          Name:
          <input
            type="text"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
          />
        </li>
        <li>
          Email:
          <input
            type="email"
            value={studentEmail}
            onChange={(e) => setStudentEmail(e.target.value)}
          />
        </li>
        <li>
          Register No:
          <input
            type="number"
            value={studentRegisterNum}
            onChange={(e) => setStudentRegisterNum(e.target.value)}
          />
        </li>
        <li>
        Address:
          <input
            type="address"
            value={studentAddress}
            onChange={(e) => setStudentAddress(e.target.value)}
          />
          </li>
        </ul>
        <button type="submit">Update</button>
      </form>
      {successMessage && <p>{successMessage}</p>}
    </div>
  );
}

export default DataEditing;

/*import React,{ Component } from 'react'

class Form extends Component{
constructor(props){
	super(props)
	this.state = { email:'',name:'', age:null, address:'',phoneNo:''}
	this.handleChange = this.handleChange.bind(this)
	this.handleSubmit = this.handleSubmit.bind(this)
}

// Form submitting logic, prevent default page refresh
handleSubmit(event){
	const { email, name, age, address, phoneNo } = this.state
	event.preventDefault()
	alert(`
	____Your Details____\n
	Email : ${email}
	Name : ${name}
	Age : ${age}
	Address : ${address}
	Phone No : ${phoneNo}
	`)
}

// Method causes to store all the values of the
// input field in react state single method handle
// input changes of all the input field using ES6
// javascript feature computed property names
handleChange(event){
	this.setState({
	// Computed property names
	// keys of the objects are computed dynamically
	[event.target.name] : event.target.value
	})
}

// Return a controlled form i.e. values of the
// input field not stored in DOM values are exist
// in react component itself as state
render(){
	return(
	<form onSubmit={this.handleSubmit}>
		<div>
		<label htmlFor='email'>Email</label>
		<input
			name='email'
			placeholder='Email'
			value = {this.state.email}
			onChange={this.handleChange}
		/>
		</div>
		<div>
		<label htmlFor='name'>Name</label>
		<input
			name='name'
			placeholder='Name'
			value={this.state.name}
			onChange={this.handleChange}
		/>
		</div>
		<div>
		<label htmlFor='age'>Age</label>
		<input
			name='age'
			placeholder='Age'
			value={this.state.age}
			onChange={this.handleChange}
		/>
		</div>
		<div>
		<label htmlFor='address'>Address</label>
		<input
			name='address'
			placeholder='Address'
			value={this.state.address}
			onChange={this.handleChange}
		/>
		</div>
		<div>
		<label htmlFor='phoneNo'>Phone Number</label>
		<input
			name='phoneNo'
			placeholder='Phone No'
			value={this.state.phoneNo}
			onChange={this.handleChange}
		/>
		</div>
		<div>
		<button>Create Account</button>
		</div>
	</form>
	)
}
}

export default Form*/

