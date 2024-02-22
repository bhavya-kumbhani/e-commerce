import React from "react";
import Modal from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import "./viewSingleProduct.css";

const ViewSingleProduct = ({ show, handleToggle, singleProductData }) => {
  return (
    <>
      <Modal modalId="test" open={show} onClose={handleToggle} center>
        <div id="small-modal" tabindex="-1" className="m-6">
          <a
            href="#"
            class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 p-2"
          >
            <img
              class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
              src={singleProductData?.image}
              alt=""
            />
            <div class="flex flex-col justify-between p-4 leading-normal">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {" "}
                {singleProductData?.title}
              </h5>
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {" "}
                ${singleProductData?.price}
              </h5>
              <h3>Category : {singleProductData?.category}</h3>

              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {" "}
                {singleProductData?.description}
              </p>
            </div>
          </a>
        </div>
      </Modal>
    </>
  );
};

export default ViewSingleProduct;
