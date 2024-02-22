import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import Input from "../../../components/HOC/Input/Input";
import {
  addProduct,
  findAllProducts,
  getSingleProducts,
  updateProduct
} from "../../../store/slices/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faPlus } from "@fortawesome/free-solid-svg-icons";

const EditProduct = ({
  handleToggle,
  isEdit,
  rowId,
  isAdd,
  inputValue,
  setInputValue
}) => {
  const dispatch = useDispatch();
  const { allCategories } = useSelector((state) => state.product);

  useEffect(() => {
    if (isEdit) {
      getSingleProduct();
    }
  }, [isEdit]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const hanldeOnUpdateSubmit = async (e) => {
    e.preventDefault();
    dispatch(updateProduct({ id: rowId, payload: inputValue }))
      .then((res) => {
        if (res.payload) {
          toast.success("Product Updated Successfully!");
          dispatch(findAllProducts());
          handleToggle();
        }
      })
      .catch((error) => {
        console.error("Error:", error.message);
      });
  };

  const hanldeOnAddSubmit = async (e) => {
    e.preventDefault();
    dispatch(addProduct({ id: rowId, payload: inputValue }))
      .then((res) => {
        if (res.payload) {
          toast.success("Product Added Successfully!");
          dispatch(findAllProducts());
          handleToggle();
        }
      })
      .catch((error) => {
        console.error("Error:", error.message);
      });
  };

  const getSingleProduct = async () => {
    dispatch(getSingleProducts({ id: rowId }))
      .then((res) => {
        setInputValue({
          name: res.payload.data.title,
          price: res.payload.data.price,
          description: res.payload.data.description,
          category: res.payload.data.category
        });
      })
      .catch((error) => {
        console.error("Error:", error.message);
      });
  };
  return (
    <>
      <div
        id="crud-modal"
        tabindex="-1"
        className={`overflow-y-auto flex overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 max-h-full`}
        style={{ background: "rgba(0,0,0,0.6)" }}
      >

        <div className="relative p-4 w-full max-w-md max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {isEdit ? "Edit Product" : "Create New Product"}
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-toggle="crud-modal"
                onClick={handleToggle}
              >
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </div>
            <form
              className="p-4 md:p-5"
              onSubmit={isEdit ? hanldeOnUpdateSubmit : hanldeOnAddSubmit}
            >
              <div className="grid gap-4 mb-4 grid-cols-2">
                <div className="col-span-2">
                  <label
                    for="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Name
                  </label>
                  <Input
                    name="name"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Type product name"
                    required
                    handleOnChange={handleOnChange}
                    value={inputValue.name}
                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label
                    for="price"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Price
                  </label>
                  <Input
                    type="number"
                    name="price"
                    id="price"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="$2999"
                    required
                    handleOnChange={handleOnChange}
                    value={inputValue.price}
                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label
                    for="category"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Category
                  </label>
                  <select
                    id="category"
                    value={inputValue.category}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  >
                    <option value="" disabled selected>
                      Select Category
                    </option>
                    {allCategories?.map((item, idx) => (
                      <option
                        key={idx}
                        value={item}
                        selected={item === inputValue.category}
                      >
                        {item.charAt(0).toUpperCase() +
                          item.slice(1).toLowerCase()}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-span-2">
                  <label
                    for="description"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Product Description
                  </label>
                  <textarea
                    id="description"
                    rows="4"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Write product description here"
                    handleOnChange={handleOnChange}
                    value={inputValue.description}
                  ></textarea>
                </div>
              </div>
              <button
                type="submit"
                className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                {isEdit ? "Edit Product" : "Add new product"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProduct;
