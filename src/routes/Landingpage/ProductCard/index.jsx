import {
  faArrowRight,
  faArrowRightArrowLeft,
  faLeftLong,
  faRightLong,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import Slider from "react-slick";

const ProductCard = () => {
  const navigate = useNavigate();
  const { productData } = useSelector((state) => state.product);
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div onClick={onClick} className="right-arrow">
        <FontAwesomeIcon icon={faRightLong} />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div onClick={onClick} className="left-arrow">
        <FontAwesomeIcon icon={faLeftLong} />
      </div>
    );
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 476,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 390,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };

  return (
    <>
      {/* <div className="flex items-center justify-center gap-10 flex-wrap"> */}
      <div className="pt-[80px] pb-[80px] bg-indigo-100">
        <div className="flex flex-col justify-center items-center ">
          <h1 className="text-3xl xl:text-4xl font-semibold leading-7 xl:leading-9 text-gray-800 dark:text-white pb-[40px]">
            Feature Product
          </h1>
        </div>
        <Slider {...settings}>
          {productData?.data?.map((item, index) => {
            return (
              <div className="max-w-xs mx-auto w-96">
                {" "}
                {/* Ensure max width of the container */}
                <div className="bg-white border border-gray-200 rounded-lg dark:bg-gray-800 h-500 p-2 dark:border-gray-700 hover:shadow-lg cursur-pointer">
                  {" "}
                  {/* Set width and height of card */}
                  <a href="#" className="flex justify-center">
                    <img
                      className="rounded-t-lg w-full h-auto"
                      style={{ width: "100px", height: "100px" }}
                      src={item?.image}
                      alt=""
                    />
                  </a>
                  <div className="pt-5 px-3">
                    <a href="#">
                      <h5
                        className="mb-2 text-2xl font-medium tracking-tight text-gray-900 dark:text-white"
                        style={{
                          whiteSpace: "nowrap",
                          width: "260px",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {item?.title}
                      </h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      ${item?.price}
                    </p>
                    <div className="flex justify-end">
                      <a
                        href="#"
                        className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        Add to cart
                        <FontAwesomeIcon icon={faArrowRight} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
        <div
          className="flex justify-end items-center gap-2 pr-4 pt-2 cursor-pointer"
          onClick={() => navigate("/product")}
        >
          View all <FontAwesomeIcon icon={faArrowRight} />
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default ProductCard;
