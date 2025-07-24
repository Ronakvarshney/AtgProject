import React, { useState } from "react";

const Posts = () => {
  const [followedGroups, setFollowedGroups] = useState([]);

  const toggleFollow = (groupName) => {
    setFollowedGroups((prev) =>
      prev.includes(groupName)
        ? prev.filter((name) => name !== groupName)
        : [...prev, groupName]
    );
  };

  const posts = [
    {
      type: "Article",
      icon: "📝",
      title: "What if famous brands had regular fonts? Meet RegulaBrands!",
      desc: "I’ve worked in UX for the better part of a decade. From now on, I plan to reinvent design thinking.",
      image:
        "src/assets/8f0b5f5259515bfc8d2d4ff8928be097376153e9.jpg",
      author: "Sarthak Kamra",
      views: "1.4k",
    },
    {
      type: "Education",
      icon: "🎓",
      title:
        "Tax Benefits for Investment under National Pension Scheme launched by Government",
      desc: "I’ve worked in UX for the better part of a decade. From now on, I plan to reinvent design thinking.",
      image:"src/assets/wood-SIbopgrg.jpg" ,
     author: "Sarah West",
      views: "1.4k",
    },
    {
      type: "Meetup",
      icon: "📅",
      title: "Finance & Investment Elite Social Mixer @Luijazui",
      desc: "Fri, 12 Oct, 2018 | Ahmedabad, India",
      image: "src/assets/car-kZ9O3U5Q.jpg",
      author: "Ronal Jones",
      views: "1.4k",
    },
    {
      type: "Job",
      icon: "💼",
      title: "Software Developer",
      desc: "Innovaccer Analytics Private Ltd. | Noida, India",
      image: "",
      author: "Joseph Gray",
      views: "1.4k",
      apply: "Apply on Timesjobs",
    },
  ];

  const recommendedGroups = [
    { name: "Leisure", img: "https://i.pravatar.cc/40?img=12" },
    { name: "Activism", img: "https://i.pravatar.cc/40?img=13" },
    { name: "MBA", img: "https://i.pravatar.cc/40?img=14" },
    { name: "Philosophy", img: "https://i.pravatar.cc/40?img=15" },
  ];

  return (
    <div className="container my-5">
      <div className="row">
        {/* ✅ Left Column - Posts */}
        <div className="col-md-8">
          {posts.map((post, index) => (
            <div className="card mb-4 shadow-sm" key={index}>
              {post.image && (
                <img
                  src={post.image}
                  className="card-img-top"
                  alt={post.title}
                  style={{ maxHeight: "250px", objectFit: "cover" }}
                />
              )}
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <small className="text-muted">
                    {post.icon} {post.type}
                  </small>
                  <div className="dropdown">
                    <button
                      className="btn btn-light btn-sm border-0"
                      type="button"
                      data-bs-toggle="dropdown"
                    >
                      ⋮
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          Edit
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Report
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Option 3
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <h5 className="card-title fw-bold mt-2">{post.title}</h5>
                <p className="card-text text-muted">{post.desc}</p>
                {post.apply && (
                  <button className="btn btn-outline-success btn-sm mb-2">
                    {post.apply}
                  </button>
                )}

                <div className="d-flex justify-content-between align-items-center mt-3">
                  <div className="d-flex align-items-center">
                    <img
                      src={`https://i.pravatar.cc/40?img=${index + 5}`}
                      alt={post.author}
                      className="rounded-circle me-2"
                      width="35"
                      height="35"
                    />
                    <small className="fw-semibold">{post.author}</small>
                  </div>
                  <div className="d-flex align-items-center">
                    <small className="text-muted me-3">
                      👁 {post.views} views
                    </small>
                    <button className="btn btn-light btn-sm border rounded-circle">
                      🔗
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ✅ Right Column - Location + Recommended Groups */}
        <div className="col-md-4">
          {/* Location Card */}
          <div className="card p-3 shadow-sm mb-3">
            <div className="input-group">
              <span className="input-group-text bg-white border-0 ps-0">
                📍
              </span>
              <input
                type="text"
                className="form-control border-0 p-0"
                placeholder="Enter your location"
                style={{
                  boxShadow: "none",
                  fontSize: "14px",
                  background: "transparent",
                }}
              />
              <button
                className="btn btn-light btn-sm border-0"
                style={{ fontSize: "18px" }}
              >
                ✖
              </button>
            </div>
            <small className="text-muted mt-2">
              Your location will help us serve better and extend a personalised
              experience.
            </small>
          </div>

          {/* Recommended Groups */}
          <div className="card p-3 shadow-sm">
            <h6 className="fw-semibold mb-3">👍 RECOMMENDED GROUPS</h6>
            {recommendedGroups.map((group, i) => (
              <div
                className="d-flex justify-content-between align-items-center mb-3"
                key={i}
              >
                <div className="d-flex align-items-center">
                  <img
                    src={group.img}
                    alt={group.name}
                    className="rounded-circle me-2"
                    width="35"
                    height="35"
                  />
                  <small className="fw-semibold">{group.name}</small>
                </div>
                <button
                  className={`btn btn-sm rounded-pill ${
                    followedGroups.includes(group.name)
                      ? "btn-dark text-white"
                      : "btn-light border"
                  }`}
                  onClick={() => toggleFollow(group.name)}
                  style={{
                    transition: "all 0.3s ease",
                    transform: followedGroups.includes(group.name)
                      ? "scale(1.05)"
                      : "scale(1)",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                >
                  {followedGroups.includes(group.name) ? "Following" : "Follow"}
                </button>
              </div>
            ))}
            <a
              href="#"
              className="text-primary text-decoration-none fw-semibold"
              style={{ fontSize: "14px" }}
            >
              See More...
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
