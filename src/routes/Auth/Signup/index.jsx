import React, { useState } from "react";
import ShowIcon from "../../../assets/icons/eye.svg";
import HideIcon from "../../../assets/icons/hide.svg";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import Input from "../../../components/HOC/Input/Input";
import { useDispatch } from "react-redux";
import { setSignUpUserData } from "../../../store/slices/authSlice";
import RegisterImg from "../../../assets/image/login-img.jpg";

export default function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState({});
  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false,
  });
  let storedUserData = localStorage.getItem("signUpUserData") || [];
  let storedData = storedUserData.length > 0 ? JSON.parse(storedUserData) : [];
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const onClick = (name) => {
    setShowPassword({ ...showPassword, [name]: !showPassword[name] });
  };

  const handleForm = async (e) => {
    e.preventDefault();
    if (inputValue.confirmPassword) {
      if (inputValue.password !== inputValue.confirmPassword) {
        toast.error("Password doesn't match");
        return;
      }
    }
    const body = {
      name: inputValue.username,
      email: inputValue.email,
      password: inputValue.password,
    };
    if (storedData) {
      storedData.push(body);
      dispatch(setSignUpUserData(body));
      localStorage.setItem("signUpUserData", JSON.stringify(storedData));
      navigate("/login");
    }
  };
  return (
    <>
      <section class="bg-gray-50 min-h-screen flex items-center justify-center">
        {/* <!-- login container --> */}
        <div class="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
          {/* <!-- form --> */}
          <div class="md:w-1/2 px-8 ">
            <h2 class="font-bold text-2xl text-[#002D74]">Sign Up</h2>
            <p class="text-xs mt-4 text-[#002D74]">
              If you don't have an account, easily register
            </p>

            <form action="" class="flex flex-col gap-4" onSubmit={handleForm}>
              <Input
                name="username"
                placeholder="UserName"
                label="Name"
                handleOnChange={handleOnChange}
                value={inputValue.username}
                pattern="^[a-zA-Z0-9](_(?!(\.|_))|\.(?!(_|\.))|[a-zA-Z0-9]){0,16}[a-zA-Z0-9]$"
                title="User name can only use letters, numbers, underscores and minimum length is 2 characters"
                isRequired
                className={"p-2 mt-6 w-full rounded-xl border"}
              />
              <Input
                type="email"
                name="email"
                placeholder="Email"
                label="Email"
                handleOnChange={handleOnChange}
                value={inputValue.email}
                pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                title="Please enter a valid email address"
                isRequired
                className={"p-2 rounded-xl w-full border"}
              />
              <Input
                type={showPassword?.password ? "text" : "password"}
                name="password"
                placeholder="Password"
                label="Password"
                pattern="(?=^.{6,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
                title="Must contain at least one number, uppercase, lowercase, specialChar and at least 6 or more characters"
                iconRight={showPassword?.password ? ShowIcon : HideIcon}
                handleOnChange={handleOnChange}
                onRightIconClick={() => onClick("password")}
                value={inputValue.password}
                isRequired
                className={"p-2 rounded-xl border w-full"}
              />
              <Input
                type={showPassword?.confirmPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="confirm Password"
                label="confirmPassword"
                pattern="(?=^.{6,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
                title="Must contain at least one number, uppercase, lowercase, specialChar and at least 6 or more characters"
                iconRight={showPassword?.confirmPassword ? ShowIcon : HideIcon}
                handleOnChange={handleOnChange}
                onRightIconClick={() => onClick("confirmPassword")}
                value={inputValue.confirmPassword}
                isRequired
                className={"p-2 rounded-xl border w-full"}
              />

              <button class="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300">
                Sign Up
              </button>
            </form>

            <div class="text-xs border-b border-[#002D74] py-4 text-[#002D74]"></div>

            <div class="mt-3 text-xs flex justify-between items-center text-[#002D74]">
              <p>Already have an account?</p>
              <button
                class="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300"
                onClick={() => navigate("/login")}
              >
                Login
              </button>
            </div>
          </div>

          <div class="md:block hidden w-1/2">
            <img class="rounded-2xl" src={RegisterImg} />
          </div>
        </div>
      </section>
    </>
  );
}
