import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLogin } from '../../hooks/useLogin';
import styles from './Login.module.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {login, error, isPending} = useLogin()
  const nav = useNavigate()
 
  const handleSubmit = async(e) => {
    e.preventDefault();
    await login(email, password)
    nav('/')
  };
  return (
    <form onSubmit={handleSubmit} className={styles['login-form']}>
      <h2>Login</h2>
      <label>
        <span>Email</span>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" />
      </label>
      <label>
        <span>Password</span>
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
      </label>
      <button className="btn">Login</button>
    </form>
  );
};

export { Login };
