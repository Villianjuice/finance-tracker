import React, { useState } from 'react'
import { useSignup } from '../../hooks/useSignUp';
import styles from './SignUp.module.css'

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');
  const {signup, error, isPending} = useSignup()

  const handleSubmit = async(e) => {
    e.preventDefault();
    await signup(email, password, userName)
  };
  return (
    <form onSubmit={handleSubmit} className={styles['signup-form']}>
      <h2>SignUp</h2>
      <label>
        <span>User name</span>
        <input value={userName} onChange={(e) => setUserName(e.target.value)} type="text" />
      </label>
      <label>
        <span>Email</span>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" />
      </label>
      <label>
        <span>Password</span>
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
      </label>
      {error && <p>{error}</p>}
      <button className="btn">SignUp</button>
    </form>
  )
}

export  {SignUp}