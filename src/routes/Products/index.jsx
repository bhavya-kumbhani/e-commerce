import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findAllProducts } from "../../store/slices/productSlice";
import { Link } from "react-router-dom";
import axios from "axios";
import ProductListView from "./ProductListView";
import toast from "react-hot-toast";

const Products = () => {
  const dispatch = useDispatch();
  const { productData } = useSelector((state) => state.product);
  

  useEffect(() => {
    dispatch(findAllProducts());
  }, []);

 

  const [dataLimit, setDataLimit] = useState(10);
  const [singleProductData, setSingleProductData] = useState([]);
  const [shortOrder, setShortOrder] = useState("asc");

  const deleteProduct = async (productId) => {
    try {
      await axios.delete(`https://fakestoreapi.com/products/${productId}`);
      toast.success("Product deleted successfully !")
    } catch (error) {
      console.log(error);
    }
  };

  const getSingleProduct = async (productId) => {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${productId}`
      );
      setSingleProductData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <ProductListView
        setDataLimit={setDataLimit}
        setShortOrder={setShortOrder}
        dataLimit={dataLimit}
        shortOrder={shortOrder}
        deleteProduct={deleteProduct}
        getSingleProduct={getSingleProduct}
        singleProductData={singleProductData}
      />
    </>
  );
};

export default Products;
