import React, { useEffect, useRef, useState } from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper/modules';

const ProjectBox = ({ index, title, about, url, img, left }) => {
    const videoRef = useRef(null);
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play();
        }
    }, []);

    const [isTop, setIsTop] = useState(false)

    return (
        <div className='mb-10 lg:mb-0 min-h-[600px] py-12 px-2 sm:px-6 lg:px-0 xl:px-10 flex justify-center items-center'>
            <div className={`flex flex-col-reverse ${left ? 'lg:flex-row-reverse' : 'lg:flex-row'} h-full justify-center gap-8 xl:gap-14 items-center w-full`}>
                <div className='flex flex-col gap-6 w-[95%] sm:w-[85%] md:w-[75%] lg:w-[30%]'>
                    <div>
                        <span className='text-[#00EEFF] text-xl'>------ {index + 1}</span>
                    </div>
                    <h4 className='text-2xl sm:text-4xl text-white font-semibold'>{title}</h4>
                    <p className='sm:text-lg text-[#CFCFCF]'>{about}</p>

                    <button className='px-4 py-2 sm:px-5 sm:py-3 button relative hover:scale-105 transition-all flex gap-1 items-center bg-[#00EEFF] self-start'>
                        <span className='text-lg sm:text-xl font-semibold font-sans tracking-wide'>
                            View Project
                        </span>
                        <span className='pt-1'>
                            <IoIosArrowRoundForward size={30} />
                        </span>
                    </button>
                </div>
                <div className={`w-full xl:w-[60%] lg:w-[65%] ${img.img.phone && 'min-h-[450px]'} flex items-center justify-end relative`}>
                    {img.vid && !img.img.phone && <video ref={videoRef} className="rounded-lg border-[5px] sm:border-[8px] border-gray-800" autoPlay muted loop>
                        <source src={img.vid} type="video/webm" />
                    </video>}
                    {img.vid && img.img.phone &&
                        <>
                            <video onClick={() => setIsTop(!isTop)} ref={videoRef} className="cursor-pointer w-[90%] sm:w-[80%] z-10 rounded-lg border-[5px] sm:border-[8px] border-gray-800" autoPlay muted loop>
                                <source src={img.vid} type="video/webm" />
                            </video>
                            <img onClick={() => setIsTop(!isTop)} className={`cursor-pointer absolute left-0 ${isTop ? 'z-10' : 'z-0'} border-[6px] rounded-lg block w-[30%] min-w-[180px] sm:min-w-[200px] border-gray-700`} src={img.img.phone[0]} alt="" />
                        </>
                    }
                    {
                        !img.vid &&
                        <>
                            <div className="block w-[90%] sm:w-[80%] ml-auto">
                                <Swiper
                                    spaceBetween={0}
                                    centeredSlides={true}
                                    autoplay={{
                                        delay: 3500,
                                        disableOnInteraction: false,
                                    }}
                                    modules={[Autoplay]}
                                >
                                    {img.img.full.map((imgEl, index) => (
                                        <SwiperSlide key={index}>
                                            <img onClick={() => setIsTop(false)} src={imgEl} alt="" className="block cursor-pointer  z-10 rounded-lg border-[5px] sm:border-[8px] border-gray-900" />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                            <div
                                className={`absolute left-0 ${isTop ? 'z-10' : 'z-0'} block w-[30%] min-w-[180px] sm:min-w-[200px]`}
                            >
                                <Swiper
                                    spaceBetween={0}
                                    centeredSlides={true}
                                    autoplay={{
                                        delay: 2500,
                                        disableOnInteraction: false,
                                    }}
                                    modules={[Autoplay]}
                                >
                                    {img.img.phone.map((imgEl, index) => (
                                        <SwiperSlide key={index}>
                                            <img onClick={() => setIsTop(true)} className={`cursor-pointer  border-[6px] rounded-lg  border-gray-700`}
                                                src={imgEl} alt="" />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </>
                    }
                </div>
            </div>
        </div>
    )
}

export default ProjectBox
{/* <img onClick={() => setIsTop(!isTop)} src={img.img.full[0]} alt="" className="block cursor-pointer w-[90%] sm:w-[80%] z-10 rounded-lg border-[5px] sm:border-[8px] border-gray-900" />

<img onClick={() => setIsTop(!isTop)} className={`cursor-pointer absolute left-0 ${isTop ? 'z-10' : 'z-0'} border-[6px] rounded-lg block w-[30%] min-w-[180px] sm:min-w-[200px] border-gray-700`}
    src={img.img.phone[0]} alt="" /> */}