import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

import Dashboard from 'components/DashBoard'
import Login from 'components/Login';
import Signup from 'components/Signup';
import Profile from 'components/Profile';
import { useContext } from 'react';
import { AuthConetext } from 'context/auth/context';

function App() {
  const { state } = useContext(AuthConetext as any);
  console.log(state.user, 'SSS')
  const userLoggedIn = state?.user?.userData?.id

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            {userLoggedIn ? <Dashboard /> : <Signup />}
          </>
        } />

        <Route path="/login" element={
          <>
            {userLoggedIn ? <Navigate to="/" /> : <Login />}
          </>
        } />

        <Route path="/signup" element={
          <>
            {userLoggedIn ? <Navigate to="/" /> : <Signup />}
          </>
        } />

        <Route path="/profile/:userId" element={
          <Profile />
        } />
      </Routes>
    </Router>
  );
}

export default App;
