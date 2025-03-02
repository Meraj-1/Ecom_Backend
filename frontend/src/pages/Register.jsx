import React, { useState } from 'react';
import axios from 'axios';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify'; // Import Toastify
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS

const Register = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    username: '',
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        'http://localhost:8080/user/register', // Adjust your API endpoint
        formData,
        { headers: { 'Content-Type': 'application/json' } }
      );

      // Show success toast
      toast.success('Account created successfully! Redirecting to login...', {
        position: 'top-center',
        autoClose: 2000,
      });

      // Redirect to login after 2 seconds
      setTimeout(() => navigate('/login'), 2000);
    } catch (err) {
      toast.error(err.response?.data?.message || 'Registration failed', {
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
        <h2 className="text-3xl font-bold mb-4">Register</h2>

        <input
          type="text"
          name="fullname"
          value={formData.fullname}
          onChange={onChangeHandler}
          placeholder="Full Name"
          className="w-full px-3 py-2 border border-gray-800"
          required
        />

        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={onChangeHandler}
          placeholder="Username"
          className="w-full px-3 py-2 border border-gray-800"
          required
        />

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={onChangeHandler}
          placeholder="Email"
          className="w-full px-3 py-2 border border-gray-800"
          required
        />

        {/* Password Input with Show/Hide Icon */}
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

        <p className='font-bold text-sm'>
          Already have an account?{' '}
          <a href="/login" className="text-blue-500 hover:underline">
            Login Here
          </a>
        </p>

        <button
          type="submit"
          disabled={loading}
          className="cursor-pointer bg-black text-white font-bold px-8 py-2 mt-4"
        >
          {loading ? 'Processing...' : 'Register'}
        </button>
      </form>
    </>
  );
};

export default Register;
