import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const initialUser = {
    fname: '',
    lname: '',
    email: '',
  };

  const [user, setUser] = useState(initialUser);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/getone/${id}`);
        setUser(response.data.data);
      } catch (error) {
        console.error('Error fetching user:', error.message);
      }
    };

    fetchUser();
  }, [id]);

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Update Button clicked");
    try {
      await axios.put(`http://localhost:5000/api/update/${id}`, user);
      alert('User updated successfully!');
      navigate('/');
    } catch (error) {
      console.error('Error updating user:', error.message);
    }
  };

  return (
    <div className="addUser">
      <Link to="/">Back</Link>
      <h3>Update User</h3>
      <form onSubmit={handleSubmit}>
        <div className="inputGroup">
          <label htmlFor="fname">First Name</label>
          <input
            type="text"
            id="fname"
            name="fname"
            value={user.fname || ''} 
            onChange={inputChangeHandler}
            autoComplete="off"
            placeholder="First name"
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="lname">Last Name</label>
          <input
            type="text"
            id="lname"
            name="lname"
            value={user.lname || ''} 
            onChange={inputChangeHandler}
            autoComplete="off"
            placeholder="Last name"
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            value={user.email || ''} 
            onChange={inputChangeHandler}
            autoComplete="off"
            placeholder="Email"
          />
        </div>
        <div className="inputGroup">
          <button type="submit">Update User</button>
        </div>
      </form>
    </div>
  );
};

export default Edit;
