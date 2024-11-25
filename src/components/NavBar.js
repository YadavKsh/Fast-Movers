import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing
import './Navbar.css';
import logo from './Invoice.webp';

const Navbar = () => {
  const navigate = useNavigate(); // Hook to navigate programmatically

  const [isLoginHovered, setIsLoginHovered] = useState(false);
  const [isLoginFocused, setIsLoginFocused] = useState(false);
  const [isRegisterHovered, setIsRegisterHovered] = useState(false);
  const [isRegisterFocused, setIsRegisterFocused] = useState(false);

  const [loginForm, setLoginForm] = useState({ email: '', password: '' });
  const [loginErrors, setLoginErrors] = useState({});
  const [registerForm, setRegisterForm] = useState({ username: '', email: '', password: '' });
  const [registerErrors, setRegisterErrors] = useState({});

  const handleInputChange = (e, formType) => {
    const { name, value } = e.target;
    if (formType === 'login') {
      setLoginForm({ ...loginForm, [name]: value });
    } else if (formType === 'register') {
      setRegisterForm({ ...registerForm, [name]: value });
    }
  };

  const validateLogin = () => {
    const errors = {};
    if (!loginForm.email || !/\S+@\S+\.\S+/.test(loginForm.email)) {
      errors.email = 'Please enter a valid email.';
    }
    if (!loginForm.password || loginForm.password.length < 6) {
      errors.password = 'Password must be at least 6 characters long.';
    }
    setLoginErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const validateRegister = () => {
    const errors = {};
    if (!registerForm.username || registerForm.username.length < 3) {
      errors.username = 'Username must be at least 3 characters long.';
    }
    if (!registerForm.email || !/\S+@\S+\.\S+/.test(registerForm.email)) {
      errors.email = 'Please enter a valid email.';
    }
    if (!registerForm.password || registerForm.password.length < 6) {
      errors.password = 'Password must be at least 6 characters long.';
    }
    setRegisterErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (validateLogin()) {
      alert('Login successful!');
      setLoginForm({ email: '', password: '' });
      navigate('/invoice-form'); // Redirect to the new page
    }
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    if (validateRegister()) {
      alert('Registration successful!');
      setRegisterForm({ username: '', email: '', password: '' });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src={logo} alt="Company Logo" className="navbar-logo" />
        PayCraft
      </div>
      <div className="nav-buttons">
        {/* Login Popup */}
        <div
          className="login-container"
          onMouseEnter={() => setIsLoginHovered(true)}
          onMouseLeave={() => !isLoginFocused && setIsLoginHovered(false)}
        >
          <a href="#login" className="login-button">Login</a>
          {isLoginHovered && (
            <div
              className="popup show"
              onFocus={() => setIsLoginFocused(true)}
              onBlur={() => setIsLoginFocused(false)}
            >
              <form onSubmit={handleLoginSubmit}>
                <label>Email</label>
                <input
                  type="text"
                  name="email"
                  value={loginForm.email}
                  onChange={(e) => handleInputChange(e, 'login')}
                  placeholder="Email"
                />
                {loginErrors.email && <p className="error">{loginErrors.email}</p>}

                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  value={loginForm.password}
                  onChange={(e) => handleInputChange(e, 'login')}
                  placeholder="Password"
                />
                {loginErrors.password && <p className="error">{loginErrors.password}</p>}

                <button type="submit">Submit</button>
              </form>
              <div className="switch-to-register">
                <p>Don't have an account? <a href="#register" onClick={() => setIsRegisterHovered(true)}>Register</a></p>
              </div>
            </div>
          )}
        </div>

        {/* Register Popup */}
        <div
          className="register-container"
          onMouseEnter={() => setIsRegisterHovered(true)}
          onMouseLeave={() => !isRegisterFocused && setIsRegisterHovered(false)}
        >
          <a href="#register" className="register-button">Register</a>
          {isRegisterHovered && (
            <div
              className="popup show"
              onFocus={() => setIsRegisterFocused(true)}
              onBlur={() => setIsRegisterFocused(false)}
            >
              <form onSubmit={handleRegisterSubmit}>
                <label>Username</label>
                <input
                  type="text"
                  name="username"
                  value={registerForm.username}
                  onChange={(e) => handleInputChange(e, 'register')}
                  placeholder="Username"
                />
                {registerErrors.username && <p className="error">{registerErrors.username}</p>}

                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={registerForm.email}
                  onChange={(e) => handleInputChange(e, 'register')}
                  placeholder="Email"
                />
                {registerErrors.email && <p className="error">{registerErrors.email}</p>}

                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  value={registerForm.password}
                  onChange={(e) => handleInputChange(e, 'register')}
                  placeholder="Password"
                />
                {registerErrors.password && <p className="error">{registerErrors.password}</p>}

                <button type="submit">Submit</button>
              </form>
            </div>
          )}
        </div>

        {/* <a href="#about" className="nav-link">About Us</a>
        <a href="#contact" className="nav-link">Contact</a> */}
      </div>
    </nav>
  );
};

export default Navbar;
