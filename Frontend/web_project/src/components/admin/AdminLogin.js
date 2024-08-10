import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AdminLogin = ({ setToken }) => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:2300/v1/admin/auth/login', formData);
      console.log(response)
      if(response.status == 200){
        setToken(response.data.data.token);
        localStorage.setItem('adminToken', response.data.data.token); // Store token in localStorage
        navigate('/admin');
      }else{
        setError('Invalid credentials, please try again.');
      }
      
    } catch (error) {
      console.log(error)
      setError('Something went worng');
    }
  };

  return (
    <div>
      <h2>Admin Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>email:</label>
          <input type="text" name="email" value={formData.email} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleInputChange} required />
        </div>
        <button type="submit">Login</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default AdminLogin;
