import React, { useState } from "react";
import Input from "../../../components/HOC/Input/Input";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import ShowIcon from "../../../assets/icons/eye.svg";
import HideIcon from "../../../assets/icons/hide.svg";
import { setUserInfo } from "../../../store/slices/authSlice";
import { useDispatch } from "react-redux";
import LoginImg from "../../../assets/image/login-img.jpg";
export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const onClick = (name) => {
    setShowPassword(!showPassword);
  };

  const handleForm = async (e) => {
    e.preventDefault();
    const storedData = localStorage.getItem("signUpUserData");

    if (!storedData) {
      return toast.error("No user data found");
    }

    const parsedData = JSON.parse(storedData);

    const user = parsedData?.find(
      (item) =>
        item.email === inputValue.email && item.password === inputValue.password
    );

    if (inputValue.confirmPassword) {
      if (inputValue.password !== inputValue.confirmPassword) {
        toast.error("Password doesn't match");
        return;
      }
    }

    if (!user) {
      return toast.error("User not found or incorrect password");
    }
    dispatch(setUserInfo({ ...user, isLogin: true }));
    localStorage.setItem(
      "authUser",
      JSON.stringify({ ...user, isLogin: true })
    );
    navigate("/");
  };

  return (
    <>
      <section class="bg-gray-50 min-h-screen flex items-center justify-center">
        {/* <!-- login container --> */}
        <div class="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
          {/* <!-- form --> */}
          <div class="md:w-1/2 px-8">
            <h2 class="font-bold text-2xl text-[#002D74]">Login</h2>
            <p class="text-xs mt-4 text-[#002D74]">
              If you are already a member, easily log in
            </p>

            <form action="" class="flex flex-col gap-4" onSubmit={handleForm}>
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
                className={"p-2 mt-8 w-full rounded-xl border"}
              />
              <Input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                label="Password"
                pattern="(?=^.{6,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
                title="Must contain at least one number, uppercase, lowercase, specialChar and at least 6 or more characters"
                iconRight={showPassword ? ShowIcon : HideIcon}
                handleOnChange={handleOnChange}
                onRightIconClick={() => onClick("password")}
                value={inputValue.password}
                isRequired
                className={"p-2 w-full rounded-xl border"}
              />
              <button class="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300">
                Login
              </button>
            </form>

            <div class="mt-5 text-xs border-b border-[#002D74] py-4 text-[#002D74]">
              <a href="#">Forgot your password?</a>
            </div>

            <div class="mt-3 text-xs flex justify-between items-center text-[#002D74]">
              <p>Don't have an account?</p>
              <button
                class="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300"
                onClick={() => navigate("/signup")}
              >
                Register
              </button>
            </div>
          </div>

          {/* <!-- image --> */}
          <div class="md:block hidden w-1/2">
            <img class="rounded-2xl" src={LoginImg} />
          </div>
        </div>
      </section>
    </>
  );
}
