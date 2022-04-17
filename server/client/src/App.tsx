import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Dashboard from 'components/DashBoard'
import Login from 'components/Login';
import Signup from 'components/Signup';
import Profile from 'components/Profile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <Dashboard />
        } />

        <Route path="/login" element={
          <Login />
        } />

        <Route path="/signup" element={
          <Signup />
        } />

        <Route path="/profile/:username" element={
          <Profile />
        } />
      </Routes>
    </Router>
  );
}

export default App;
