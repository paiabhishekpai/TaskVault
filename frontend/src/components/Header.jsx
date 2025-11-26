import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const nav = useNavigate();

  const doLogout = () => {
    logout();
    nav('/login');
  };

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <div className="flex items-center gap-3">
          <Link to="/" className="logo">TaskVault</Link>
          <nav className="nav-links">
            <Link to="/dashboard" className="nav-link">Dashboard</Link>
            <Link to="/tasks" className="nav-link">Tasks</Link>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          {user ? (
            <>
              <div className="flex items-center gap-2">
                <div className="avatar">{(user.name || 'U').charAt(0).toUpperCase()}</div>
                <div className="hidden sm:block">
                  <div className="text-sm font-medium">{user.name}</div>
                  <div className="muted-sm">{user.email}</div>
                </div>
              </div>

              <Link to="/profile" className="nav-link">Profile</Link>
              <button onClick={doLogout} className="btn bg-red-500 hover:bg-red-600">Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" className="nav-link">Login</Link>
              <Link to="/signup" className="btn">Sign up</Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
