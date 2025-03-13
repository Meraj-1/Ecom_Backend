import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaEye, FaEyeSlash } from 'react-icons/fa';  // Importing Eye icons

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);  // State to toggle password visibility
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('https://ecom-backend-sage.vercel.app/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        if (data.success) {
          toast.success('Login successful!');
          navigate('/');  // Redirect to home page
        } else {
          toast.error(data.message || 'Login failed!');
        }
      } else {
        toast.error('Server error occurred.');
      }
    } catch (error) {
      console.error('An error occurred during login:', error);
      toast.error('An error occurred during login.');
    }

    setLoading(false);
  };

  return (
    <div className="mt-30 flex items-center justify-center">
      <form onSubmit={handleLogin} className="p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">Login</h2>

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          value={formData.email}
          className="w-full p-2 mb-3 cursor-pointer bg-gray-100 rounded border border-black focus:outline-none"
          required
        />

        <div className="relative">
          <input
            type={passwordVisible ? 'text' : 'password'}  // Toggle input type based on password visibility
            name="password"
            placeholder="Password"
            onChange={handleChange}
            value={formData.password}
            className="w-full p-2 mb-3 bg-gray-100 cursor-pointer rounded border border-black focus:outline-none"
            required
          />
          <span
            className="absolute right-3 top-3 cursor-pointer"
            onClick={() => setPasswordVisible(!passwordVisible)}  // Toggle password visibility
          >
            {passwordVisible ? <FaEyeSlash /> : <FaEye />}  {/* Display eye or eye-slash icon */}
          </span>
        </div>

        <button
          type="submit"
          className="w-full bg-black p-2 text-white rounded cursor-pointer font-bold"
          disabled={loading}
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>

        <p className="text-sm mb-2 font-bold text-center mt-2">
          Don't have an account? <a href="/register" className="text-blue-400">Register</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
