import { onAuthStateChanged } from 'firebase/auth';

import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components';
import { useAuthContext } from './context/AuthContext';
import { auth } from './firebase/config';
import { Home, Login, SignUp } from './pages';

// import './App.css';

function App() {
  const {dispatch} = useAuthContext()

  useEffect(() => {
    const cancel = onAuthStateChanged(auth ,(_user) => {
      dispatch({type: 'LOGIN', payload: _user})
    })

    return () => cancel()
  }, [])

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
