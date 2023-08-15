import React from "react";
import Hero from "../sections/Hero";
import AboutUs from "../sections/AboutUs";
import Choice from "../sections/Choice";
import Products from "../sections/Products";
import Acc from "../sections/Acc";
import Quality from "../sections/Quality";
import Comments from "../sections/Comments";
import Connection from "../sections/Connection";

import Header from "../header/Header";
import Footer from "../footer/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <AboutUs />
      <Choice />
      <Products />
      <Acc />
      <Quality />
      <Comments />
      <Connection />
      <Footer />
    </div>
  );
};

export default Home;
