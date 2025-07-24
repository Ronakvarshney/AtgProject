import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container text-center">
        <p className="mb-0">
          &copy; {new Date().getFullYear()} Dont Copy. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
