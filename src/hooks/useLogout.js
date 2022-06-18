import {  signOut } from 'firebase/auth';
import { useState } from 'react';
import { useAuthContext } from '../context/AuthContext';
import { auth } from '../firebase/config';

export const useLogout = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const {dispatch} = useAuthContext()

  const logout = async () => {
    setError(null);
    setIsPending(true);

    try {
      await signOut(auth)
      dispatch({type: 'LOGOUT'})
      setError(null);
      setIsPending(false);
    } catch (error) {
      console.log(error.message);
      setError(error.message);
      setIsPending(false);
    }
  };

  return { logout, error, isPending };
};
