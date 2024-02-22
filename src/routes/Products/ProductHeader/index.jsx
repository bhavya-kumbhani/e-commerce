import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Select from "react-select";

const ProductHeader = ({
  selectedOption,
  handleSelectChange,
  filterOptions,
  setIsAdd,
  handleSearch,
  searchQuery,
  dataLimit,
  setDataLimit,
  shortOrder,
  setShortOrder,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const handleOnFilter = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <>
      <div className="flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4">
        <div className="flex items-center gap-2 justify-start">
          <div>
            <Select
              isClearable={true}
              value={selectedOption}
              name="searchid"
              onChange={handleSelectChange}
              options={filterOptions}
              placeholder="featured "
            />
            <div
              id="dropdownRadio"
              class="z-10 hidden w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 absolute top-auto right-auto bottom-0 left-0 m-0 transform translate-x-1/2 translate-y-1/2"
              data-popper-reference-hidden=""
              data-popper-escaped=""
              data-popper-placement="top"
            >
              <ul
                className="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownRadioButton"
              >
                <li>
                  <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                    <input
                      id="filter-radio-example-1"
                      type="radio"
                      value=""
                      name="filter-radio"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      for="filter-radio-example-1"
                      className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                    >
                      Last day
                    </label>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="relative inline-block text-left">
            <button
              type="button"
              className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
              id="dropdown-button"
              aria-expanded="true"
              aria-haspopup="true"
              onClick={handleOnFilter}
            >
              Filters
            </button>
            <div
              className={`${
                isDropdownOpen ? "block" : "hidden"
              } origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5`}
            >
              <div className="p-4">
                <div className="font-bold">Limit</div>
                <div className="flex">
                  <input
                    type="range"
                    value={dataLimit}
                    max={20}
                    onChange={(e) => {
                      setDataLimit(e.target.value);
                    }}
                    className="flex-1"
                  />
                  <input
                    type="text"
                    value={dataLimit}
                    disabled
                    className="w-1/4 ml-2 border border-gray-300 rounded-md p-2"
                  />
                </div>

                <div className="mt-4 mb-2 font-bold">Sorting</div>
                <div className="flex gap-2">
                  <input
                    type="radio"
                    name="sort"
                    id="short-asc"
                    checked={shortOrder === "asc"}
                    onChange={(e) => {
                      if (e.target.checked) setShortOrder("asc");
                    }}
                    className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <label
                    htmlFor="short-asc"
                    className="font-medium text-gray-700"
                  >
                    Short to ascending
                  </label>
                </div>

                <div className="flex gap-2">
                  <input
                    type="radio"
                    name="sort"
                    id="short-desc"
                    checked={shortOrder === "desc"}
                    onChange={(e) => {
                      if (e.target.checked) setShortOrder("desc");
                    }}
                    className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <label
                    htmlFor="short-desc"
                    className="font-medium text-gray-700"
                  >
                    Short to descending
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end gap-3 flex-wrap">
          <button
            onClick={() => setIsAdd(true)}
            id="dropdownRadioButton"
            className="inline-flex items-center gap-2 p-4 text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            type="button"
          >
            <FontAwesomeIcon icon={faPlus} />
            Add Product
          </button>

          <div className="relative">
            <div className="absolute inset-y-0 left-0 rtl:inset-r-0 rtl:right-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              id="table-search"
              className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search by product name"
              value={searchQuery}
              onChange={handleSearch}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductHeader;
