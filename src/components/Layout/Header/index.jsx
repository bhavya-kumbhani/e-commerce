import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="flex items-center justify-between p-5 text-gray-500 shadow-md">
      {/* on click on logo navigate to home */}
      <div className="cursor-pointer">Logo</div>

      <button
        onClick={toggleDropdown}
        id="dropdownAvatarNameButton"
        class="text-sm pe-1 font-medium text-gray-900 rounded-full dark:text-black"
        type="button"
      >
        {!isLogin ? (
          <div>
            <FontAwesomeIcon icon={faBars} />
          </div>
        ) : (
          <div className="flex items-center">
            <img
              class="w-8 h-8 me-2 rounded-full"
              src="https://cdn.pixabay.com/photo/2023/12/08/05/38/cat-8436843_1280.jpg"
              alt="user photo"
            />
            Bonnie Green
            <svg
              class={`w-2.5 h-2.5 ms-3 ${
                isDropdownOpen ? "transform rotate-180" : ""
              }`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </div>
        )}
      </button>

      <div
        id="dropdownAvatarName"
        className={`z-10 ${
          isDropdownOpen ? "block" : "hidden"
        } bg-dark divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}
      >
        <div class="px-4 py-3 text-sm text-gray-900 dark:text-dark">
          <div class="font-medium ">Pro User</div>
          <div class="truncate">name@flowbite.com</div>
        </div>
        <ul
          class="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownInformdropdownAvatarNameButtonationButton"
        >
          <li>
            <a
              href="#"
              class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Dashboard
            </a>
          </li>
          <li>
            <a
              href="#"
              class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Settings
            </a>
          </li>
          <li>
            <a
              href="#"
              class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Earnings
            </a>
          </li>
        </ul>
        <div class="py-2">
          <a
            href="#"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
          >
            Sign out
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
