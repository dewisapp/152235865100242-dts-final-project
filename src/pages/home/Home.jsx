import React from "react";
import BreakingNews from "../../components/BreakingNews";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Navbar from "../../components/Navbar";

const Home = () => {
  return (
    <div className="home-container">
      <Header />
      <Navbar />
      <BreakingNews />
      <Hero />
    </div>
  );
};

export default Home;
