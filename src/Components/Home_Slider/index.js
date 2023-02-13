import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { EffectCoverflow, Pagination } from 'swiper';
import style from '../../styles/Home_Slider.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';

const HomeSlider = () => {
    const [imgss, setImg] = useState()
    useEffect(() => {
        fetch('https://web-technology-server-site.vercel.app/simple')
            .then(res => res.json())
            .then(data => {
                setImg(data)
            })

    }, [])
    return (
        <>

            <div className="section_One mt-20">

                <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={"auto"}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper"
                >

                    {imgss?.map(product => <>
                        <SwiperSlide>
                            <div key={product?.id} className="card z-50">
                                <h2 className="text-center py-5 text-[10px] md:text-[20px]">Site Name : <span className='text-amber-700'>{product?.name}</span></h2>
                                <figure><img className='' src={product?.img} alt="product image" /></figure>


                                <Link href={''} className='btn btn-primary my-3'>Details</Link>


                            </div>
                        </SwiperSlide>
                    </>
                    )}

                    <SwiperSlide>
                        <div className="w-[100%] flex justify-center  md:h-[90vh] ">
                            <Link href={''} className="btn btn-primary flex mt-[70%] md:mt-[50%]">More Porjects..</Link>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>


        </>
    );
};

export default HomeSlider;