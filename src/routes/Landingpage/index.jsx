import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  findAllProducts,
  getAllCategories,
} from "../../store/slices/productSlice";
import HeroSection from "./HeroSection";
import ProductCard from "./ProductCard";
import Header from "../../components/Layout/Header";
import Footer from "../../components/Layout/Footer";
import ShopByCategory from "./ShopByCategory";

const Landingpage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(findAllProducts());
    dispatch(getAllCategories());
  }, []);
  return (
    <div className="h-screen w-full">
      <Header />
      <HeroSection />
      <ShopByCategory />
      <ProductCard />
      <Footer />
    </div>
  );
};

export default Landingpage;
