import React from "react";
import Hero from "../sections/Hero";
import AboutUs from "../sections/AboutUs";
import Choice from "../sections/Choice";
import Products from "../sections/Products";
import Acc from "../sections/Acc";
import Quality from "../sections/Quality";
import Comments from "../sections/Comments";
import Connection from "../sections/Connection";

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutUs />
      <Choice />
      <Products />
      <Acc />
      <Quality/>
      <Comments/>
      <Connection/>
    </div>
  );
};

export default Home;
