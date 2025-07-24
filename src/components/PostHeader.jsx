import React from "react";

const PostsHeader = () => {
  return (
    <div className="container d-flex flex-wrap justify-content-between align-items-center mt-4">
      <div className="d-flex align-items-center flex-wrap">
        <h6 className="fw-bold me-4">All Posts(32)</h6>
        <ul className="nav">
          {["Article", "Event", "Education", "Job"].map((tab, index) => (
            <li className="nav-item" key={index}>
              <a
                className="nav-link text-muted"
                href="#"
                style={{
                  transition: "color 0.3s ease",
                }}
                onMouseEnter={(e) => (e.target.style.color = "#0d6efd")}
                onMouseLeave={(e) => (e.target.style.color = "")}
              >
                {tab}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-3 mt-md-0">
        <button
          className="btn btn-light border me-2"
          style={{
            transition: "background 0.3s ease, transform 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#f8f9fa";
            e.currentTarget.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "white";
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          Write a Post ⬇
        </button>
        <button
          className="btn btn-primary"
          style={{
            transition: "background 0.3s ease, transform 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#0b5ed7";
            e.currentTarget.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "#0d6efd";
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          + Join Group
        </button>
      </div>
    </div>
  );
};

export default PostsHeader;
