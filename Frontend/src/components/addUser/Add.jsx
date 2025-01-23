import React, { useState } from 'react'; // Import useState
import '../addUser/add.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Add = () => {
  // Initial state for the user form
  const navigate = useNavigate();

  const [user, setUser] = useState({
    fname: "",
    lname: "",
    email: "",
    password: ""
  });

  // Input handler for form inputs
  const inputHandler = (e) => {
    const { name, value } = e.target; // Fix typo "terget" to "target"
    setUser({ ...user, [name]: value }); // Update the state
  };

  const submitHandler = async (e) => {
    e.preventDefault(); // Prevent default form submission
  
    try {
      const response = await axios.post('http://localhost:5000/api/create', user); // Ensure the URL has "http://"
      console.log(response.data);
      navigate('/') // Log the response data
    } catch (error) {
      console.error("Error creating user:", error); // Log the error
    }
  
  };

  return (
    <div className='addUser'>
      <Link to={'/'}>Back</Link>
      <h3>Add new user</h3>
      <form onSubmit={submitHandler}>
        <div className="inputGroup">
          <label htmlFor='fname'>First Name</label>
          <input
            type="text"
            onChange={inputHandler}
            id='fname'
            name='fname'
            value={user.fname}
            autoComplete='off'
            placeholder='First name'
          />
        </div>
        <div className="inputGroup">
          <label htmlFor='lname'>Last Name</label>
          <input
            type="text"
            onChange={inputHandler}
            id='lname'
            name='lname'
            value={user.lname}
            autoComplete='off'
            placeholder='Last name'
          />
        </div>
        <div className="inputGroup">
          <label htmlFor='email'>Email</label>
          <input
            type="text"
            onChange={inputHandler}
            id='email'
            name='email'
            value={user.email}
            autoComplete='off'
            placeholder='Email'
          />
        </div>
        <div className="inputGroup">
          <label htmlFor='password'>Password</label>
          <input
            type="password"
            onChange={inputHandler}
            id='password'
            name='password'
            value={user.password}
            autoComplete='off'
            placeholder='Password'
          />
        </div>
        <div className='inputGroup'>
          <button type='submit'>Add User</button>
        </div>
      </form>
    </div>
  );
};

export default Add;
