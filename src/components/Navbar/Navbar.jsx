import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext';
import { useLogout } from '../../hooks/useLogout';

import styles from './Navbar.module.css';

export const Navbar = () => {
  const { user } = useAuthContext();
  const {logout, error, isPending } = useLogout()

  useEffect(() => {
    console.log(user);
  }, [user])
  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={styles.title}>Мои финансы</li>
        {!user && (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li> 
            <li>
              <Link to="/signup">SignUp</Link>
            </li>
          </>
        )}
        {user && (
          <>
          <li>{user && user.displayName}</li>
          <li>
            <button className='btn' onClick={logout}>LogOut</button>
          </li>
          </>
          
        )}
      </ul>
    </nav>
  );
};
