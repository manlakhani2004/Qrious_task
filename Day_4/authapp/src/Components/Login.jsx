import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './Login.css'
import { useCookies } from "react-cookie";
export default function LoginForm() {
  const [setCookie] = useCookies(['email']);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});


  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const validateForm = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format.";
    }

    if (!formData.password) {
      newErrors.password = "Password is required.";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    const condition = validateForm()
    console.log("condition", condition)

    if (condition) {
      console.log("Form Submitted Successfully!");
      // console.log(formData);
      const getAllUsers = JSON.parse(localStorage.getItem('users'));
      // console.log(getAllUsers);
      const user = getAllUsers.find((user) => user.email === formData.email &&
        user.password === formData.password);

      if (user) {
        console.log('Login Successful');
        // setCookie("email",formData.email, {maxAge: 3600*24*60 })
        localStorage.setItem("currentuser",formData.email)
        navigate('/home');

      }
      else {
        console.log('Invalid Credentails');
        alert('user not exits')
      }

    } else {
      console.log("Validation failed!");
    }
  };

  return (
    <div className="login-container">
      <h2 className="signup-title">Login Page</h2>

      <form onSubmit={handleSubmit} className="login-form">
        {/* Email */}
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-input"
            required
          />
          {errors.email && (
            <p className="error-message">{errors.email}</p>
          )}
        </div>

        {/* Password */}
        <div className="form-group">
          <label htmlFor="password" className="form-label">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="form-input"
            required
          />
          {errors.password && (
            <p className="error-message">{errors.password}</p>
          )}
        </div>

        <button type="submit" className="btn-submit">
          Login
        </button>
      </form>
      <div onClick={()=>navigate('/')}  className=" btn-nav">
        Don't Have Account 
      </div>
    </div>
  );
 
}

