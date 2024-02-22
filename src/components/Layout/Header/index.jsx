import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { getSession, logout } from "../../../helpers/api/authHelper";
import { useDispatch, useSelector } from "react-redux";
import { setUserInfo } from "../../../store/slices/authSlice";

const Header = () => {
  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.auth);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSignOut = () => {
    logout();
    setIsDropdownOpen(false);
    dispatch(setUserInfo({}));
  };

  return (
    <div className="mb-2 flex items-center justify-between p-5 text-gray-500 shadow-md">
      {/* on click on logo navigate to home */}
      <div className="cursor-pointer">
        {" "}
        <a href="https://flowbite.com/" class="flex items-center">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            class="h-8 me-3"
            alt="FlowBite Logo"
          />
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-dark">
            Flowbite
          </span>
        </a>
      </div>

      <button
        id="dropdownAvatarNameButton"
        className="text-sm pe-1 font-medium text-gray-900 rounded-full dark:text-black relative"
        type="button"
      >
        {userInfo && Object.keys(userInfo)?.length > 0 && userInfo?.isLogin ? (
          <div className="flex items-center" onClick={toggleDropdown}>
            <img
              className="w-8 h-8 me-2 rounded-full"
              src="https://cdn.pixabay.com/photo/2023/12/08/05/38/cat-8436843_1280.jpg"
              alt="user photo"
            />
            {userInfo.name}
            <svg
              className={`w-2.5 h-2.5 ms-3 ${
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
        ) : (
          <div>
            <a
              href="/login"
              className="p-2 lg:px-4 md:mx-2 text-indigo-600 text-center border border-transparent rounded hover:bg-indigo-100 hover:text-indigo-700 transition-colors duration-300"
            >
              Login
            </a>
            <a
              href="/signup"
              className="p-2 lg:px-4 md:mx-2 text-indigo-600 text-center border border-solid border-indigo-600 rounded hover:bg-indigo-600 hover:text-white transition-colors duration-300 mt-1 md:mt-0 md:ml-1"
            >
              Signup
            </a>
          </div>
        )}
        <div
          id="dropdownAvatarName"
          className={`z-10 ${
            isDropdownOpen ? "block" : "hidden"
          } divide-y divide-gray-100 rounded-lg shadow w-44 dark:divide-gray-600 absolute top-[45px] right-[-10px] bg-white`}
        >
          <div className="px-4 py-3 text-sm text-gray-900 dark:text-dark">
            <div className="font-medium ">{userInfo?.name}</div>
            <div className="truncate">{userInfo?.email}</div>
          </div>
          <div className="py-2">
            <div
              onClick={handleSignOut}
              className="block px-4 py-2 text-sm hover:bg-slate-300 dark:hover:bg-slate-300"
            >
              Sign out
            </div>
          </div>
        </div>
      </button>
    </div>
  );
};

export default Header;
