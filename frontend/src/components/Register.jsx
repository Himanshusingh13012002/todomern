import React, { useState } from 'react';
import axios from 'axios';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/users/register', formData);
      console.log('User registered:', response.data);
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col">
          <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} className="form-control" required />
        </div>
        <div className="col">
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="form-control" required />
        </div>
        <div className="col">
          <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} className="form-control" required />
        </div>
        <div className="col">
          <button type="submit" className="btn btn-primary">Register</button>
        </div>
      </form>
    </div>
  );
}

export default Register;
