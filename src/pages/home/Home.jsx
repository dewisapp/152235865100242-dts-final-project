import React from "react";
import BreakingNews from "../../components/BreakingNews";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Navbar from "../../components/Navbar";
import PopularContent from "../../components/PopularContent";

const Home = () => {
  return (
    <div className="home-container">
      <Header />
      <Navbar />
      <BreakingNews />
      <Hero />
      <PopularContent />
      <Footer />
    </div>
  );
};

export default Home;
