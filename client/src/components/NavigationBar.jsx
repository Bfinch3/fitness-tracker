import React from 'react';

function NavigationBar() {
  return (
    <nav className="navbar bg-primary navbar-expand-md" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">Fitness Tracker</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav-content" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="nav-content">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Settings</a>
            </li>
          </ul>
          <button className="btn btn-dark">
            <i className="fa-solid fa-moon"></i>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;
