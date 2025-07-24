import React from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top">
      <div className="container">
        <a className="navbar-brand fw-bold fs-4 text-success" href="#">
          <img src="/Logo.png" />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <form className="mx-auto my-2 my-lg-0 w-75">
            <div className="input-group">
              <span className="input-group-text bg-light border-0">🔍</span>
              <input
                type="text"
                className="form-control bg-light border-0"
                placeholder="Search for your favorite groups in ATG"
                style={{ boxShadow: "none" }}
              />
            </div>
          </form>

          <div className="text-end mt-2 mt-lg-0">
            <small>
              Create account.{" "}
              <button
                className="btn btn-link text-primary fw-bold p-0"
                data-bs-toggle="modal"
                data-bs-target="#signUpModal"
              >
                It’s free!
              </button>{" "}
              ⬇
            </small>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
