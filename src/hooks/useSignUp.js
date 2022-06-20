import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useContext, useReducer, useState } from 'react';
import { useAuthContext } from '../context/AuthContext';
import { auth } from '../firebase/config';

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const signup = async (email, password, name) => {
    setError(null);
    setIsPending(true);

    try {
      const response = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(response.user, {
        displayName: name,
      });
      dispatch({ type: 'LOGIN', payload: response.user });
      setError(null);
      setIsPending(false);
    } catch (error) {
      console.log(error.message);
      setError(error.message);
      setIsPending(false);
    }
  };

  return { signup, error, isPending };
};
