import React, { useState } from 'react';
import axios from 'axios';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify'; // Added ToastContainer import
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await axios.post(
        'https://ecom-backend-sage.vercel.app/user/login',
        formData,
        { headers: { 'Content-Type': 'application/json' } }
      );

      // Save user token (if backend returns it)
      localStorage.setItem('token', response.data.token);

      // Show success toast
      toast.success('Login Successful! Redirecting...', {
        position: 'top-center',
        autoClose: 2000,
      });

      // Navigate to home page after 2 seconds
      setTimeout(() => navigate('/'), 2000);
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
      toast.error('Login failed! Please try again.', {
        position: 'top-center',
        autoClose: 2000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ToastContainer /> {/* Toast container to display notifications */}
      <form
        onSubmit={onSubmitHandler}
        className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800"
      >
        <h2 className="text-3xl font-bold mb-4">Login</h2>

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={onChangeHandler}
          placeholder="Email"
          className="w-full px-3 py-2 border border-gray-800"
          required
        />

        <div className="relative w-full">
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            value={formData.password}
            onChange={onChangeHandler}
            placeholder="Password"
            className="w-full px-3 py-2 border border-gray-800"
            required
          />
          <div
            className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
          </div>
        </div>

        <p className="text-sm font-bold">
          Don't have an account?{' '}
          <a href="/register" className="text-blue-500 hover:underline">
            Register Here
          </a>
        </p>

        {error && <p className="text-red-500 text-sm">{error}</p>} {/* Display error message */}

        <button
          type="submit"
          disabled={loading}
          className="cursor-pointer bg-black text-white font-bold px-8 py-2 mt-4"
        >
          {loading ? 'Processing...' : 'Login'}
        </button>
      </form>
    </>
  );
};

export default Login;
