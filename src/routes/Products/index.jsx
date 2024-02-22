import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  findAllProducts,
  getAllCategories,
} from "../../store/slices/productSlice";
import ProductListView from "./ProductListView";
import Header from "../../components/Layout/Header";

const Products = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(findAllProducts());
    dispatch(getAllCategories());
  }, []);
  return (
    <>
      <Header />
      <ProductListView />
    </>
  );
};

export default Products;
