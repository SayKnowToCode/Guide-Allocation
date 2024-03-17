import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function RegisterPage() {
  return (
    <div>

      <h1>Register Page</h1>
      <Link to="/register/team">
        <button type="button">Team Registeration</button>
      </Link>
      <hr />
      <Link to="/register/user">
        <button type="button">User Registeration</button>
      </Link>
      <Outlet />
    </div>
  );
}

export default RegisterPage;