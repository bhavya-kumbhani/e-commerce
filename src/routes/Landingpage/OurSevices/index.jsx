import React from "react";
import { ourService } from "../../../constants/Constants";

export default function OurSevices() {
  return (
    <section className="service container mx-auto py-8 px-6 h-auto">
      <div>
        <div className="flex flex-col justify-center items-center ">
          <h1 className="text-3xl xl:text-4xl font-semibold leading-7 xl:leading-9 text-gray-800 dark:text-white pb-[40px]">
            Our Sevices
          </h1>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
          {ourService?.map((item, index) => (
            <div className=" bg-gray-50 p-10 transition-all my-5 rounded flex flex-col justify-start items-start hover:shadow-xl">
              <div className="desc ">
                <h3 className="font-bold text-2xl leading-8">{item?.title}</h3>
                <p className="font-normal text-lg my-3">{item?.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
