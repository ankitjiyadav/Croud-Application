import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../getuser/user.css';

const User = () => {
  const [user, setUsers] = useState([]); // State to store users data

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/users');
        console.log("Users fetched:", response.data);
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchData();
  }, []);

  const deleteUser = async (userId) => {
    try {
      await axios.delete(`http://localhost:5000/api/delete/${userId}`);
      alert("User deleted successfully!");
      // Delete user from the state
      setUsers(user.filter(user => user._id !== userId));
    } catch (error) {
      console.error("Error deleting user:", error);
      alert("Failed to delete user.");
    }
  };
  return (
    <div className='userTable'>
      <Link to={'/add'} className='addButton'>Add User</Link>
      <table border={1} cellPadding={10} cellSpacing={0}>
        <thead>
          <tr>
            <th>S.NO.</th>
            <th>User Name</th>
            <th>User Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {user.length > 0 ? (
            user.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>{user.fname} {user.lname}</td>
                <td>{user.email}</td>
                <td>
                  <button onClick={()=> deleteUser(user._id)}>Delete</button>
                  <Link to={`/edit/${user._id}`}>Edit</Link>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No users found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default User;
