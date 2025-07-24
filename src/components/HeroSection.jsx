import React from "react";

const HeroSection = () => {
  return (
    <div
      className="position-relative"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "300px",
      }}
    >
      <div
        className="position-absolute bottom-0 start-0 text-white p-4"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 100%)",
          width: "100%",
        }}
      >
        <h2 className="fw-bold fs-4 fs-md-2">Computer Engineering</h2>
        <p className="mb-0">142,765 Computer Engineers follow this</p>
      </div>
    </div>
  );
};

export default HeroSection;
