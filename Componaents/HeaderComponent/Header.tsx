import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link } from "react-router-dom";
import './Header.css'

 
const Header : React.FC = () => {
    return <>
      <header className="  header py-3">
        <div className="container d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
                <Link to='/' className="fs-4 fw-bold  me-2 navbar-brand">
                <span >S <span className="">Movie</span></span>                
                </Link>
            </div>

            <div className="d-flex flex-grow-1 mx-4">
                <input type="text" className="form-control me-2  w-50 " placeholder="Search for Movies" />
                <button className="btn btn-search">Search</button>
            </div>

            <div className="d-flex">
                <a className="btn-login fw-bolder text-decoration-none mx-4">Login</a>
                <a className="btn-register fw-bolder text-decoration-none">Register</a>
            </div>
        </div>
      </header>
      {/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link to="/" className="navbar-brand">
          Movie Search
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav> */}
    </>
}
export default Header;
