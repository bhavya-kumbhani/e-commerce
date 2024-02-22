import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  findAllProducts,
  getAllCategories,
  getSingleProducts,
} from "../../store/slices/productSlice";
import { Link } from "react-router-dom";
import axios from "axios";
import ProductListView from "./ProductListView";
import toast from "react-hot-toast";

const Products = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(findAllProducts());
    dispatch(getAllCategories());
  }, []);
  return (
    <>
      <ProductListView />
    </>
  );
};

export default Products;
