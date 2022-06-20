import { signInWithEmailAndPassword } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { useAuthContext } from '../context/AuthContext';
import { auth } from '../firebase/config';

export const useLogin = () => {
  const [isCanceled, setIsCanceled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const login = async (email, password) => {
    setError(null);
    setIsPending(true);

    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      dispatch({ type: 'LOGIN', payload: user });
      if (!isCanceled) {
        setError(null);
        setIsPending(false);
      }
    } catch (error) {
      if (!isCanceled) {
        setError(error.message);
        setIsPending(false);
      }
    }
  };

  useEffect(() => {
    return () => setIsCanceled(true);
  }, []);

  return { login, error, isPending };
};
