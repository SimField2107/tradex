import React, { useState } from 'react';
import { useRouter } from 'next/router'; 
import Link from 'next/link';
import { useAuth } from '../hooks/useAuth';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter(); 
  const { login } = useAuth();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === 'test@example.com' && password === 'password123') {
      login(); // Call the login function from context
      router.push('/'); 
    } else {
      setError('Invalid credentials.');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 className="auth-title">Login</h2>
        <form onSubmit={handleLogin} className="auth-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="auth-error">{error}</p>}
          <button type="submit" className="auth-btn">Log In</button>
        </form>
        <p className="auth-link">
          Don't have an account?{' '}
          <Link href="/register">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;