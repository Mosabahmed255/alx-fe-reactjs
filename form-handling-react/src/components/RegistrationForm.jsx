import React, { useState } from 'react';

const RegistrationForm = () => {
  // State for form fields
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
  // State for managing errors
    const [errors, setErrors] = useState({});

  // Handle form submission
    const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    // Field validations
    if (!username) {
        newErrors.username = 'Username is required';
    }
    if (!email) {
        newErrors.email = 'Email is required';
    }
    if (!password) {
        newErrors.password = 'Password is required';
    }

    if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        return;
    }

    // Reset errors if validation passes
    setErrors({});
    console.log('User registered:', { username, email, password });

    // Reset form fields
    setUsername('');
    setEmail('');
    setPassword('');
    };

    return (
    <form onSubmit={handleSubmit}>
        <h2>Register</h2>
        <div>
        <label>Username:</label>
        <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
        />
        {errors.username && <p style={{ color: 'red' }}>{errors.username}</p>}
        </div>
        <div>
        <label>Email:</label>
        <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
        </div>
        <div>
        <label>Password:</label>
        <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
        </div>
        <button type="submit">Register</button>
    </form>
    );
};

export default RegistrationForm;
