import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";

const ProductCard = () => {
  const { productData } = useSelector((state) => state.product);
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div onClick={onClick}>
        <FontAwesomeIcon icon={faXmark} />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div onClick={onClick}>
        <FontAwesomeIcon icon={faXmark} />
      </div>
    );
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
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
          dots: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 476,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 390,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      }
    ]
  };
  
  return (
    <>
      {/* <div className="flex items-center justify-center gap-10 flex-wrap"> */}
      <Slider {...settings}>
        {productData?.map((item, index) => {
          return (
            <div className="max-w-xs mx-auto w-96" > {/* Ensure max width of the container */}
  <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 h-500 w-80 dark:border-gray-700"> {/* Set width and height of card */}
    <a href="#">
      <img
        className="rounded-t-lg w-full h-auto"
        style={{width:"100px" ,height:"100px"}}
        src={item?.image}
        alt=""
      />
    </a>
    <div className="p-5">
      <a href="#">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"  style={{whiteSpace: 'nowrap',
    width: "260px",
    overflow: 'hidden',
    textOverflow: "ellipsis" }}>
          {item?.title}
        </h5>
      </a>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        ${item?.price}
      </p>
      <a
        href="#"
        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Add to cart
        <svg
          className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </a>
    </div>
  </div>
</div>

          );
        })}
      </Slider>
      {/* </div> */}
    </>
  );
};

export default ProductCard;
