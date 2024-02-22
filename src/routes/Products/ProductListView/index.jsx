import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ViewSingleProduct from "../ViewSingleProduct";
import EditProduct from "../EditProduct";
import {
  deleteProduct,
  getSingleProducts,
} from "../../../store/slices/productSlice";
import toast from "react-hot-toast";
import { filterOptions } from "../../../constants/Constants";
import ProductHeader from "../ProductHeader";
import TableItem from "./TableItem";
const ProductListView = () => {
  const dispatch = useDispatch();
  const { productData } = useSelector((state) => state.product);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(productData?.data);
  const [singleProductData, setSingleProductData] = useState([]);
  const [show, setShow] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [isAdd, setIsAdd] = useState(false);
  const [rowId, setRowId] = useState("");
  const [inputValue, setInputValue] = useState({});
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    const filtered = productData?.data?.filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchQuery, productData?.data]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleShow = async (id) => {
    getSingleProduct(id);
    setShow(true);
  };

  const handleOnEdit = (id) => {
    setRowId(id);
    setIsEdit(true);
  };

  const handleToggle = () => {
    setInputValue({});
    setShow(false);
    setIsEdit(false);
    setIsAdd(false);
    setRowId("");
  };

  const getSingleProduct = async (productId) => {
    dispatch(getSingleProducts({ id: productId }))
      .then((res) => {
        setSingleProductData(res.payload.data);
      })
      .catch((error) => {
        console.error("Error:", error.message);
      });
  };

  const handleDeleteProduct = async (productId) => {
    dispatch(deleteProduct({ id: productId }))
      .then((res) => {
        if (res.payload) {
          toast.success("Product Deleted Successfully!");
        }
      })
      .catch((error) => {
        console.error("Error:", error.message);
      });
  };

  function sortByPriceLowToHigh(a, b) {
    return a.price - b.price;
  }

  function sortByPriceHighToLow(a, b) {
    return b.price - a.price;
  }

  const handleSelectChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    if (selectedOption && selectedOption.value === "LowtoHigh") {
      setFilteredProducts(filteredProducts.slice().sort(sortByPriceLowToHigh));
    }
    if (selectedOption && selectedOption.value === "HightoLow") {
      setFilteredProducts(filteredProducts.slice().sort(sortByPriceHighToLow));
    }
    if (!selectedOption) {
      setFilteredProducts(productData?.data);
    }
  };
  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg p-3 mt-3">
        <ProductHeader
          selectedOption={selectedOption}
          handleSelectChange={handleSelectChange}
          filterOptions={filterOptions}
          setIsAdd={setIsAdd}
          handleSearch={handleSearch}
          searchQuery={searchQuery}
        />

        <TableItem
          filteredProducts={filteredProducts}
          handleDeleteProduct={handleDeleteProduct}
          handleOnEdit={handleOnEdit}
          handleShow={handleShow}
        />
      </div>
      {show && (
        <ViewSingleProduct
          show={show}
          singleProductData={singleProductData}
          handleToggle={handleToggle}
        />
      )}
      {(isEdit || isAdd) && (
        <EditProduct
          isEdit={isEdit}
          handleToggle={handleToggle}
          rowId={rowId}
          isAdd={isAdd}
          inputValue={inputValue}
          setInputValue={setInputValue}
        />
      )}
    </>
  );
};

export default ProductListView;
