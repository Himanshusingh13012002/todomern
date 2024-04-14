// frontend/src/components/Login.js
import React from 'react';

function Login() {
  return (
    <div>
      <h2>Login</h2>
      <form className="row g-3">
        <div className="col-md-6">
          <label htmlFor="inputName" className="form-label">Name</label>
          <input type="text" className="form-control" id="inputName" />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputEmail" className="form-label">Email</label>
          <input type="email" className="form-control" id="inputEmail" />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputPassword" className="form-label">Password</label>
          <input type="password" className="form-control" id="inputPassword" />
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">Sign in</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
