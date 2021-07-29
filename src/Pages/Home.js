import React from "react";
import Navigation from "../Components/Nav/Nav";
import Hero from "../Components/Hero/Hero";
import { Container } from "react-bootstrap";
import DownloadApp from "../Components/DownloadApp/DownloadApp";
import Hero2 from "../Components/Hero2/Hero2";
import Cards from "../Components/Cards/Cards";
import Benefits from "../Components/Benefits/Benefits";
import Approaches from "../Components/Approach/Approaches";
import Partner from "../Components/Partner/Partner";
import Footer from "../Components/Footer/Footer";
const Home = () => {
  return (
    <>
      <Navigation />
      <Hero />
      <DownloadApp />
      <Hero2 />
      {/* <Cards /> */}
      <Benefits />
      <Approaches />
      <Partner />
      <Footer />
    </>
  );
};

export default Home;
