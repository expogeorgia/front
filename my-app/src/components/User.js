import React, { useState, useEffect } from 'react';
import axios from 'axios';
import App from '../App';
import Animation from './animation';

const API_URL = 'http://213.131.37.250:8889/user/';

const User = ({ users, onEdit, onDelete }) => (
  <ul>
    {users.map((user) => (
      <li key={user.id}>
        {user.username} - {user.email} - {user.first_name}
        <button onClick={() => onEdit(user)}>Edit</button>
        <button onClick={() => onDelete(user.id)}>Delete</button>
      </li>
    ))}
  </ul>
);

const UserForm = ({ onSubmit, user }) => {
  const [formData, setFormData] = useState(user);

  useEffect(() => {
    setFormData(user);
  }, [user]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={formData.username}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />
            <input
        type="text"
        name="first_name"
        placeholder="firstname"
        value={formData.first_name}
        onChange={handleChange}
      />
      <button type="submit">Save</button>
    </form>
  );
};

const Userlist = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(API_URL);
      setUsers(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAddUser = async (user) => {
    try {
      await axios.post(API_URL, user);
      fetchData();
    } catch (error) {
      console.error(error);
    }
  };

  const handleEditUser = async (user) => {
    try {
      await axios.put(`${API_URL}${user.id}/`, user);
      setEditingUser(null);
      fetchData();
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteUser = async (userId) => {
    try {
      await axios.delete(`${API_URL}${userId}/`);
      fetchData();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='container'>
    <App/>
    <Animation>
      <h1>User Management</h1>
      <User users={users} onEdit={(user) => setEditingUser(user)} onDelete={handleDeleteUser} />
      <h2>{editingUser ? 'Edit User' : 'Add User'}</h2>
      <UserForm onSubmit={editingUser ? handleEditUser : handleAddUser} user={editingUser || {}} />
    </Animation>
    </div>
  );
};

export default Userlist;