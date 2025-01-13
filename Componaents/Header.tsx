import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

 
const Header : React.FC = () => {
    return <>
      <header className="bg-light border-bottom py-3">
        <div className="container d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
                <span className="fs-4 fw-bold text-primary me-2">S</span>
                <span className="fs-5 fw-bold">Movie</span>
            </div>

            <div className="d-flex flex-grow-1 mx-4">
                <input type="text" className="form-control me-2" placeholder="Search for Movies" />
                <button className="btn btn-primary">Search</button>
            </div>

            <div className="d-flex">
                <button className="btn btn-outline-primary me-2">Login</button>
                <button className="btn btn-outline-danger">Register</button>
            </div>
        </div>
      </header>
    </>
}
export default Header;
