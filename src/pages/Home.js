import React from "react";
import Navbar from "../components/navbar/Navbar";
import Sliders from "../components/others/Sliders";
import Footer from "../components/others/Footer";
import Categories from "../components/others/Categories";
import Products from "../components/products/Products";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Sliders />
      <Categories />
      <Products />
      <Footer />
    </div>
  );
};

export default Home;
