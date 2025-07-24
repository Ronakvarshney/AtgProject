import React from "react";

const SignUpModal = () => {
  return (
    <div
      className="modal fade"
      id="signUpModal"
      tabIndex="-1"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">

          <div className="modal-header text-success custom-modal-header d-flex justify-content-center mb-2 bg-light">
            Let's learn, share & inspire each other with our passion for computer engineering.
            <span className="text-success fw-bold ms-1">Sign up now 🤘🏼</span>
          </div>

          <div className="px-4 pb-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h4 className="fw-bold">Create Account</h4>
              <button className="btn btn-link text-muted p-0">
                Already have an account?{" "}
                <span className="text-primary fw-semibold">Sign In</span>
              </button>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="d-flex flex-column gap-2">

                  <div className="d-flex gap-2">
                    <input
                      type="text"
                      className="form-control custom-input"
                      placeholder="First Name"
                    />
                    <input
                      type="text"
                      className="form-control custom-input"
                      placeholder="Last Name"
                    />
                  </div>

                  <input
                    type="email"
                    className="form-control custom-input"
                    placeholder="Email"
                  />

                  <div className="position-relative">
                    <input
                      type="password"
                      className="form-control custom-input"
                      placeholder="Password"
                    />
                    <button
                      className="btn position-absolute"
                      style={{ right: "10px", top: "6px" }}
                    >
                      👁
                    </button>
                  </div>

                  <input
                    type="password"
                    className="form-control custom-input mb-2"
                    placeholder="Confirm Password"
                  />

                  <button
                    className="btn btn-primary rounded-pill w-100 mb-2"
                    data-bs-dismiss="modal"
                  >
                    Create Account
                  </button>

                  <button className="btn btn-light border d-flex align-items-center justify-content-center gap-2">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
                      alt="facebook"
                      width="18"
                    />
                    Sign Up with Facebook
                  </button>
                  <button className="btn btn-light border d-flex align-items-center justify-content-center gap-2">
                    <img
                      src="/download.svg"
                      alt="google"
                      width="18"
                    />
                    Sign Up with Google
                  </button>
                </div>
              </div>

              <div className="col-md-6 text-center mt-3 mt-md-0">
                <img
                  src="/signup-OCG-APNN.svg"
                  alt="illustration"
                  className="img-fluid mb-2"
                />
                <p className="small text-muted">
                  By signing up, you agree to our{" "}
                  <a href="#" className="text-decoration-none">
                    Terms & conditions
                  </a>
                  ,{" "}
                  <a href="#" className="text-decoration-none">
                    Privacy policy
                  </a>
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SignUpModal;
