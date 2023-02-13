import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import Image from "next/image";
import { coolGray } from "tailwindcss/colors";
import Navbar from "@/Components/Navbar";


const New_Product = () => {

    const [Cars, setCars] = useState()
    const [LargeSizeCar, serLargCare] = useState()

    useEffect(() => {
        fetch(`https://doctors-portal-server-site-zeta.vercel.app/cars`)
            .then(res => res.json())
            .then(data => setCars(data))
    }, [])


    const LargeSize = (car) => {
        console.log(car)
        serLargCare(car)
    }

    console.log(LargeSizeCar)


    return (
        <>
            <Navbar />
            <section className="p-2  dark:text-gray-100 mt-[55px] md:px-10" >
                <div className="container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-6 items-center md:h-[100vh]">
                    <div className="w-full px-6 py-8 rounded-md sm:px-12 md:px-16 xl:col-span-3 dark:bg-gray-900">

                        <div className="md:flex justify-between px-2">
                            <h5 className="mb-3">Model : {LargeSizeCar?.Name}</h5>
                            <h5 className="mb-3">Price : {LargeSizeCar?.Price}</h5>
                        </div>
                        {
                            LargeSizeCar?.Image ?
                                <img src={LargeSizeCar?.Image} alt="" className="object-cover w-full rounded-md h-[100%] md:h-[70vh] xl:col-span-3 MainImageEffect dark:bg-gray-500" />
                                :
                                <img src='https://i.ibb.co/TMgjVwQ/Rose1.webp' alt="" className="object-cover w-full rounded-md MainImageEffect h-[70vh] xl:col-span-3 dark:bg-gray-500" />
                        }
                        <p className="mt-3 text-left">
                            <span className="font-medium  dark:text-gray-50">Feature : {LargeSizeCar?.title?.slice(0, 75)}</span>Fugit vero facilis dolor sit neque cupiditate minus esse accusamus cumque at.
                        </p>
                    </div>
                    <div className="slide_Product w-full h-[60vh] px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-3 dark:bg-gray-900" >
                        <>
                            <Swiper
                                slidesPerView={"auto"}
                                centeredSlides={true}
                                spaceBetween={30}
                                pagination={{
                                    clickable: true,
                                }}
                                modules={[Pagination]}
                                className="mySwiper"
                            >
                                {
                                    Cars?.map(car => <SwiperSlide onClick={() => LargeSize(car)} key={car?._id}>
                                        <Image className="object-cover" src={car?.Image} width={'200'} height={'200'}></Image>

                                    </SwiperSlide>)
                                }


                            </Swiper>
                        </>

                    </div>

                </div>
            </section>



        </>
    );
};

export default New_Product;