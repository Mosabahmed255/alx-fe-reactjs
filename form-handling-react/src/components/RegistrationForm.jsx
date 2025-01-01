import React, { useState } from 'react';

const RegistrationForm = () => {
  // State management for form fields
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

  // Handle form submission
    const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    if (!username || !email || !password) {
        setError('All fields are required');
        return;
    }
    setError('');
    console.log('User registered:', { username, email, password });
    // Reset form fields
    setUsername('');
    setEmail('');
    setPassword('');
    };

    return (
    <form onSubmit={handleSubmit}>
        <h2>Register</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <div>
        <label>Username:</label>
        <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
        />
        </div>
        <div>
        <label>Email:</label>
        <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />
        </div>
        <div>
        <label>Password:</label>
        <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />
        </div>
        <button type="submit">Register</button>
    </form>
    );
};

export default RegistrationForm;

