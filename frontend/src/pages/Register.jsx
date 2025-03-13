import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaEye, FaEyeSlash } from 'react-icons/fa';  // Import icons

const Register = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    username: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);  // State to toggle password visibility

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('https://ecom-backend-sage.vercel.app/user/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        toast.success('Registration successful!');
        navigate('/');  // Redirect to the home page
      } else {
        toast.error(data.message || 'Registration failed!');
      }
    } catch (error) {
      console.error(error);
      toast.error('An error occurred during registration.');
    }

    setLoading(false);
  };

  return (
    <div className="mt-30 flex items-center justify-center">
      <form onSubmit={handleRegister} className="p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">Register</h2>

        <input
          type="text"
          name="fullname"
          placeholder="Full Name"
          onChange={handleChange}
          className="w-full p-2 mb-3 cursor-pointer bg-gray-100 rounded border border-black focus:outline-none"
          required
        />

        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleChange}
          className="w-full p-2 mb-3 cursor-pointer bg-gray-100 rounded border border-black focus:outline-none"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="w-full p-2 mb-3 cursor-pointer bg-gray-100 rounded border border-black focus:outline-none"
          required
        />

        <div className="relative">
          <input
            type={passwordVisible ? 'text' : 'password'}  // Toggle input type based on password visibility
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full p-2 mb-3 cursor-pointer bg-gray-100 rounded border border-black focus:outline-none"
            required
          />
          <span
            className="absolute right-3 top-3 cursor-pointer"
            onClick={() => setPasswordVisible(!passwordVisible)}  
          >
            {passwordVisible ? <FaEyeSlash /> : <FaEye />}  
          </span>
        </div>

        <p className='text-sm mb-2 font-bold'>
          If you have already? <a href="/login" className='text-blue-400'>an account</a>
        </p>
        <button type="submit" className="w-full bg-black p-2 cursor-pointer text-white rounded font-bold">
          {loading ? 'Registering...' : 'Register'}
        </button>
      </form>
    </div>
  );
};

export default Register;
