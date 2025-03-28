import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { PawPrint, Mail, Lock, User } from 'lucide-react';
import axios from 'axios';
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import '../components/SignUp.css';

const clientID = "85462322080-3ie3vc4olh1oi5puuv4b3j3p71get9f6.apps.googleusercontent.com";

function Signup() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [contactOrEmail, setContactOrEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [signupError, setSignupError] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/signup', {
        firstName,
        lastName,
        contactOrEmail,
        username,
        password,
      });
      console.log('Signup successful:', response.data);
      navigate('/dashboard');
    } catch (error) {
      console.error('Signup failed:', error);
      setSignupError('Signup failed. Please try again.');
    }
  };

  return (
    <GoogleOAuthProvider clientId={clientID}>
      <div className="signup-container">
        <div className="signup-card">
          <div className="text-center">
            <div className="flex justify-center">
              <PawPrint className="signup-icon" />
            </div>
            <h1 className="signup-title">Paws Connect</h1>
          </div>
          <form onSubmit={handleFormSubmit} className="signup-form">
            <div className="input-group">
              <User className="input-icon" />
              <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
            </div>
            <div className="input-group">
              <User className="input-icon" />
              <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
            </div>
            <div className="input-group">
              <Mail className="input-icon" />
              <input type="email" placeholder="Email or Contact" value={contactOrEmail} onChange={(e) => setContactOrEmail(e.target.value)} required />
            </div>
            <div className="input-group">
              <User className="input-icon" />
              <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
            </div>
            <div className="input-group">
              <Lock className="input-icon" />
              <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            {signupError && <p className="error-text">{signupError}</p>}
            <button type="submit" className="signup-button">Sign Up</button>
          </form>
          <div className="google-signup">
            <GoogleLogin
              onSuccess={(response) => console.log('Google login success:', response)}
              onError={() => console.log('Google login failed')}
            />
          </div>
          <p className="login-link">Already have an account? <Link to="/login">Log in</Link></p>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
}

export default Signup;
