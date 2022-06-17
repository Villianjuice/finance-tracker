import { signInWithEmailAndPassword ,  } from 'firebase/auth';
import { useState } from 'react';
import { auth } from '../firebase/config';

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  const login = async (email, password) => {
    setError(null);
    setIsPending(true);

    try {
      const response = await signInWithEmailAndPassword (auth, email, password);
      console.log(response);
      setError(null);
      setIsPending(false);
    } catch (error) {
      console.log(error.message);
      setError(error.message);
      setIsPending(false);
    }
  };

  return { login, error, isPending };
};
