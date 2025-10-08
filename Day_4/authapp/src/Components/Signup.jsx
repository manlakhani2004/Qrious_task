import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./Signup.css"
export default function SignUpForm() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        mobileno: "",
        birthdate: "",
        gender: "",
        password: "",
        confirmPassword: "",
    });

    const [errors, setErrors] = useState({});
    const [submittedData, setSubmittedData] = useState(null);


    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };


    const validateForm = () => {
        const newErrors = {};

        if (!formData.username.trim()) {
            newErrors.username = "Username is required.";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required.";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Invalid email format.";
        }

        if (!formData.mobileno.trim()) {
            newErrors.mobileno = "Mobile number is required.";
        } else if (!/^\d{10}$/.test(formData.mobileno)) {
            newErrors.mobileno = "Mobile number must be 10 digits.";
        }

        if (!formData.birthdate) {
            newErrors.birthdate = "Birthdate is required.";
        }

        if (!formData.gender) {
            newErrors.gender = "Please select a gender.";
        }

        if (!formData.password) {
            newErrors.password = "Password is required.";
        } else if (formData.password.length < 6) {
            newErrors.password = "Password must be at least 6 characters.";
        }

        if (formData.confirmPassword !== formData.password) {
            newErrors.confirmPassword = "Passwords do not match.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            console.log("Form Submitted Successfully!");
            console.log(formData);
            //   alert("Sign up successful!");
            let users = localStorage.getItem("users");
            users = users ? JSON.parse(users) : [];


            if (users) {

                const userExists = users.some(
                    (user) =>
                        user.email.toLowerCase() === formData.email.toLowerCase() ||
                        user.username.toLowerCase() === formData.username.toLowerCase()
                );

                if (userExists) {
                    alert("user exits already")
                    // toast.error("User with this email or username already exists!");
                    // return; // stop signup
                } else {
                    //redirect to login
                    const temp = formData;
                     delete temp.confirmPassword;
                    users.push(temp);

                    localStorage.setItem("users", JSON.stringify(users));
                    alert("signup success fully")
                    navigate('/login');
                }

            } else {
                users = [formData];
                delete users.confirmPassword;
                localStorage.setItem("users", JSON.stringify(users));
            }
            // localStorage.setItem("users", JSON.stringify(users));

        } else {
            console.log("Validation failed!");
        }
    };
    return (
        <div className="signup-container">
            <div className="signup-form">
                <h2 className="signup-title">Sign Up</h2>

                <form onSubmit={handleSubmit} className="signup-form-content">
                    {/* Username */}
                    <div className="form-group">
                        <label htmlFor="username" className="form-label">
                            Username:
                        </label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            className="form-input"
                            required
                        />
                        {errors.username && (
                            <p className="error-message">{errors.username}</p>
                        )}
                    </div>

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
                        {errors.email && <p className="error-message">{errors.email}</p>}
                    </div>

                    {/* Mobile */}
                    <div className="form-group">
                        <label htmlFor="mobileno" className="form-label">
                            Contact Number:
                        </label>
                        <input
                            type="text"
                            id="mobileno"
                            name="mobileno"
                            value={formData.mobileno}
                            onChange={handleChange}
                            className="form-input"
                            required
                        />
                        {errors.mobileno && (
                            <p className="error-message">{errors.mobileno}</p>
                        )}
                    </div>

                    {/* Birthdate */}
                    <div className="form-group">
                        <label htmlFor="birthdate" className="form-label">
                            Birthdate:
                        </label>
                        <input
                            type="date"
                            id="birthdate"
                            name="birthdate"
                            value={formData.birthdate}
                            onChange={handleChange}
                            max={new Date().toISOString().split("T")[0]}
                            className="form-input"
                            required
                        />
                        {errors.birthdate && (
                            <p className="error-message">{errors.birthdate}</p>
                        )}
                    </div>

                    {/* Gender */}
                    <div className="form-group">
                        <label className="form-label">Gender:</label>
                        <div className="gender-options" onChange={handleChange}>
                            <label className="gender-option">
                                <input
                                    type="radio"
                                    name="gender"
                                    value="Male"
                                    checked={formData.gender === "Male"}
                                    onChange={handleChange}
                                />{" "}
                                Male
                            </label>
                            <label className="gender-option">
                                <input
                                    type="radio"
                                    name="gender"
                                    value="Female"
                                    checked={formData.gender === "Female"}
                                    onChange={handleChange}
                                />{" "}
                                Female
                            </label>
                            <label className="gender-option">
                                <input
                                    type="radio"
                                    name="gender"
                                    value="Other"
                                    checked={formData.gender === "Other"}
                                    onChange={handleChange}
                                />{" "}
                                Other
                            </label>
                            <label className="gender-option">
                                <input
                                    type="radio"
                                    name="gender"
                                    value="Prefer not to say"
                                    checked={formData.gender === "Prefer not to say"}
                                    onChange={handleChange}
                                />{" "}
                                Prefer not to say
                            </label>
                        </div>
                        {errors.gender && (
                            <p className="error-message">{errors.gender}</p>
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

                    {/* Confirm Password */}
                    <div className="form-group">
                        <label htmlFor="confirmPassword" className="form-label">
                            Confirm Password:
                        </label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            className="form-input"
                            required
                        />
                        {errors.confirmPassword && (
                            <p className="error-message">{errors.confirmPassword}</p>
                        )}
                    </div>

                    <button type="submit" className="btn-submit">
                        Sign Up
                    </button>
                </form>
                <div onClick={()=>navigate('/login')}  className=" btn-nav">
        Already have account 
      </div>
            </div>
        </div>
    );
   
}
