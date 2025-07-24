import React from "react";

import Posts from "./components/Features";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import PostsHeader from "./components/PostHeader";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import SignUpModal from "./components/SignUp";


function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <PostsHeader />
      <Posts />
      <SignUpModal/>
    </>
  );
}

export default App;
