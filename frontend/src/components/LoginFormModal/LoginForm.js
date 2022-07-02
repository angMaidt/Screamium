import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import './LoginForm.css';

function LoginForm() {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
  };

  const handleDemoLogin = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.demoLogin()).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <ul>
        {errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
      </ul>
      <div className='login-form-container'>
        <div className='welcome-container'>
          <h2 id='welcome'>Welcome Back.</h2>
        </div>
        <div className='input-wrapper'>
          <div className="username-container">
            <label id='username-label'>
              Username or Email:
            </label>
            <input
              type="text"
              value={credential}
              onChange={(e) => setCredential(e.target.value)}
              required
            />
          </div>
          <div className='password-container'>
            <label id='password-label'>
              Password:
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </div>
        <button
        id='login-submit'
          type="submit"
          style={{ height:'20px' }}
        >Log In</button>
        <div className='linebreak'></div>
        <div className='demo-button-container'>
          <button id='demo-login' onClick={handleDemoLogin}>Demo Login</button>
        </div>
      </div>
    </form>
  );
}

export default LoginForm;
