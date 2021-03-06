import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from "../context/Auth0Context"

export default function SiteHeader() {

  const { login, logout, isAuthenticated, user } = useAuth0();
  console.log(user)

  return (
    <div className="site-header">
      {/* stuff on the left */}
      <div>
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
      </div>

      {/* stuff on the right */}
      <div>
        {!isAuthenticated && <button onClick={login}>Login</button>}
        {isAuthenticated && user && (
          <>
            <button>{user.name}</button>
            <button onClick={logout}>Logout</button>
          </>
        )}
      </div>
    </div >
  );
}
