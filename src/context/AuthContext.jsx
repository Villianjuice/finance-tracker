import { onAuthStateChanged } from 'firebase/auth';
import { addDoc, collection, getDocs, orderBy, query } from 'firebase/firestore';
import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { auth, firestore } from '../firebase/config';

export const AuthContext = createContext();

const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, user: action.payload };
    case 'LOGOUT':
      return { ...state, user: null };
    case 'AUTH_READY':
      return { ...state, user: action.payload, isReady: true };
    case 'SET_ITEMS':
      return {
        ...state,
        items: action.payload.filter((item) => item.authorId === state.user?.uid),
      };
    default:
      return state;
  }
};

export const useAuthContext = () => useContext(AuthContext);

export const AuthContextProdider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    isReady: false,
    items: [],
  });

  const getItems = async () => {
    const q = query(collection(firestore, 'items'), orderBy('createdAt', 'desc'));
    const dataSnapShot = await getDocs(q);
    const data = dataSnapShot.docs.map((item) => ({
      ...item.data(),
      id: item.id,
    }));

    dispatch({
      type: 'SET_ITEMS',
      payload: data,
    });
  };

  const createItem = async (item) => {
    const ref = collection(firestore, 'items');
    await addDoc(ref, item);
  };

  useEffect(() => {
    const cancel = onAuthStateChanged(auth, (_user) => {
      dispatch({ type: 'AUTH_READY', payload: _user });
    });

    return () => cancel();
  }, []);

  return <AuthContext.Provider value={{ ...state, dispatch, getItems, createItem }}>{children}</AuthContext.Provider>;
};
