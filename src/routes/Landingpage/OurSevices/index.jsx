import React from 'react'

export default function OurSevices() {
    return (
        <section className="service container mx-auto py-8 px-6 h-auto">
            <div>
                <div className="flex flex-col justify-center items-center ">
                    <h1 className="text-3xl xl:text-4xl font-semibold leading-7 xl:leading-9 text-gray-800 dark:text-white pb-[40px]">Our Sevices</h1>
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                    <div className=" bg-gray-50 p-10 transition-all my-5 rounded flex flex-col justify-start items-start hover:shadow-xl">

                        <div className="desc ">
                            <h3 className="font-bold text-2xl leading-8">Product Listing Optimization</h3>
                            <p className="font-normal text-lg my-3">We optimize product titles, descriptions, and attributes to improve search engine visibility and attract potential customers.</p>
                        </div>
                    </div>
                    <div className=" bg-gray-50 p-10 transition-all my-5 rounded flex flex-col justify-start items-start hover:shadow-xl">

                        <div className="desc ">
                            <h3 className="font-bold text-2xl leading-8">Inventory Management</h3>
                            <p className="font-normal text-lg my-3">We help you manage inventory levels effectively to prevent stockouts and overstock situations.</p>
                        </div>
                    </div>
                    <div className=" bg-gray-50 p-10 transition-all my-5 rounded flex flex-col justify-start items-start hover:shadow-xl">

                        <div className="desc ">
                            <h3 className="font-bold text-2xl leading-8">Product Variations and Options</h3>
                            <p className="font-normal text-lg my-3">We configure product variations such as size, color, and style options to provide customers with a wide selection of choices.</p>
                        </div>
                    </div>
                    <div className=" bg-gray-50 p-10 transition-all my-5 rounded flex flex-col justify-start items-start hover:shadow-xl">

                        <div className="desc ">
                            <h3 className="font-bold text-2xl leading-8">Product Bundling and Kits</h3>
                            <p className="font-normal text-lg my-3">We create bundled product offerings and kits to encourage upselling and increase average order value.</p>
                        </div>
                    </div>
                    <div className=" bg-gray-50 p-10 transition-all my-5 rounded flex flex-col justify-start items-start hover:shadow-xl">

                        <div className="desc ">
                            <h3 className="font-bold text-2xl leading-8">Cross-Selling and Up-Selling</h3>
                            <p className="font-normal text-lg my-3">We implement cross-selling and up-selling features to recommend related or complementary products to customers during the checkout process.</p>
                        </div>
                    </div>
                    <div className=" bg-gray-50 p-10 transition-all my-5 rounded flex flex-col justify-start items-start hover:shadow-xl">

                        <div className="desc ">
                            <h3 className="font-bold text-2xl leading-8">Product Reviews and Ratings</h3>
                            <p className="font-normal text-lg my-3">We integrate product review and rating systems to build trust and credibility with potential customers.</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
