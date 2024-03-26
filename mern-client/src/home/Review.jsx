import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import '../home/Review.css';    

// import required modules
import { Pagination } from 'swiper/modules';


import Pic from '../assets/profile.jpg'
import '../home/Review.css';
import {FaStar} from "react-icons/fa6"
import { Avatar } from "flowbite-react";

export const Review = () => {
  return (

    <div className='my-12 px-4 lg:px-24'>
        <h2 className='text-5xl font-bold text-center mb-10 leading-snug'>Our Customers</h2>
        <div>
        <Swiper
    slidesPerView={1}
    spaceBetween={30}
    pagination={{
        clickable: true,
    }}
    breakpoints={{
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
    }}
    modules={[Pagination]}
    className="mySwiper"
>
<SwiperSlide >
    <div className="bg-white p-6 rounded-md shadow-md flex flex-col h-full ">
        {/* Review content */}
        <div>
            {/* Star rating */}
            <div className="text-amber-500 flex gap-2 mb-4">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
            </div>
            {/* User details */}
            <div className="flex items-center">
                <Avatar img={Pic} alt="avatar of Jese" rounded className="w-10 h-10 mr-3" />
                <div>
                    <h5 className="text-lg font-medium">Mark Henry</h5>
                    <p className="text-sm">CEO Of ABC Company</p>
                </div>
            </div>
        </div>
        {/* Review content */}
        <p className="text-sm mt-4 leading-relaxed">
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt enim ratione fugit repudiandae, hic veniam alias a quasi nemo similique ab odio repellendus praesentium saepe illo beatae? Ab, voluptatem repudiandae.        </p>
    </div>
</SwiperSlide>
<SwiperSlide >
    <div className="bg-white p-6 rounded-md shadow-md flex flex-col h-full">
        {/* Review content */}
        <div>
            {/* Star rating */}
            <div className="text-amber-500 flex gap-2 mb-4">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
            </div>
            {/* User details */}
            <div className="flex items-center">
                <Avatar img={Pic} alt="avatar of Jese" rounded className="w-10 h-10 mr-3" />
                <div>
                    <h5 className="text-lg font-medium">Mark Henry</h5>
                    <p className="text-sm">CEO Of ABC Company</p>
                </div>
            </div>
        </div>
        {/* Review content */}
        <p className="text-sm mt-4 leading-relaxed">
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt enim ratione fugit repudiandae, hic veniam alias a quasi nemo similique ab odio repellendus praesentium saepe illo beatae? Ab, voluptatem repudiandae.        </p>
    </div>
</SwiperSlide>
<SwiperSlide>
    <div className="bg-white p-6 rounded-md shadow-md flex flex-col h-full">
        {/* Review content */}
        <div>
            {/* Star rating */}
            <div className="text-amber-500 flex gap-2 mb-4">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
            </div>
            {/* User details */}
            <div className="flex items-center">
                <Avatar img={Pic} alt="avatar of Jese" rounded className="w-10 h-10 mr-3" />
                <div>
                    <h5 className="text-lg font-medium">Mark Henry</h5>
                    <p className="text-sm">CEO Of ABC Company</p>
                </div>
            </div>
        </div>
        {/* Review content */}
        <p className="text-sm mt-4 leading-relaxed">
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt enim ratione fugit repudiandae, hic veniam alias a quasi nemo similique ab odio repellendus praesentium saepe illo beatae? Ab, voluptatem repudiandae.        </p>
    </div>
</SwiperSlide>
<SwiperSlide >
    <div className="bg-white p-6 rounded-md shadow-md flex flex-col h-full">
        {/* Review content */}
        <div>
            {/* Star rating */}
            <div className="text-amber-500 flex gap-2 mb-4">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
            </div>
            {/* User details */}
            <div className="flex items-center">
                <Avatar img={Pic} alt="avatar of Jese" rounded className="w-10 h-10 mr-3" />
                <div>
                    <h5 className="text-lg font-medium">Mark Henry</h5>
                    <p className="text-sm">CEO Of ABC Company</p>
                </div>
            </div>
        </div>
        {/* Review content */}
        <p className="text-sm mt-4 leading-relaxed">
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt enim ratione fugit repudiandae, hic veniam alias a quasi nemo similique ab odio repellendus praesentium saepe illo beatae? Ab, voluptatem repudiandae.        </p>
    </div>
</SwiperSlide>
<SwiperSlide>
    <div className="bg-white p-6 rounded-md shadow-md flex flex-col h-full">
        {/* Review content */}
        <div>
            {/* Star rating */}
            <div className="text-amber-500 flex gap-2 mb-4">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
            </div>
            {/* User details */}
            <div className="flex items-center">
                <Avatar img={Pic} alt="avatar of Jese" rounded className="w-10 h-10 mr-3" />
                <div>
                    <h5 className="text-lg font-medium">Mark Henry</h5>
                    <p className="text-sm">CEO Of ABC Company</p>
                </div>
            </div>
        </div>
        {/* Review content */}
        <p className="text-sm mt-4 leading-relaxed">
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt enim ratione fugit repudiandae, hic veniam alias a quasi nemo similique ab odio repellendus praesentium saepe illo beatae? Ab, voluptatem repudiandae.        </p>
    </div>
</SwiperSlide>
<SwiperSlide >
    <div className="bg-white p-6 rounded-md shadow-md flex flex-col h-full">
        {/* Review content */}
        <div>
            {/* Star rating */}
            <div className="text-amber-500 flex gap-2 mb-4">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
            </div>
            {/* User details */}
            <div className="flex items-center">
                <Avatar img={Pic} alt="avatar of Jese" rounded className="w-10 h-10 mr-3" />
                <div>
                    <h5 className="text-lg font-medium">Mark Henry</h5>
                    <p className="text-sm">CEO Of ABC Company</p>
                </div>
            </div>
        </div>
        {/* Review content */}
        <p className="text-sm mt-4 leading-relaxed">
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt enim ratione fugit repudiandae, hic veniam alias a quasi nemo similique ab odio repellendus praesentium saepe illo beatae? Ab, voluptatem repudiandae.        </p>
    </div>
</SwiperSlide>
<SwiperSlide>
    <div className="bg-white p-6 rounded-md shadow-md flex flex-col h-full">
        {/* Review content */}
        <div>
            {/* Star rating */}
            <div className="text-amber-500 flex gap-2 mb-4">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
            </div>
            {/* User details */}
            <div className="flex items-center">
                <Avatar img={Pic} alt="avatar of Jese" rounded className="w-10 h-10 mr-3" />
                <div>
                    <h5 className="text-lg font-medium">Mark Henry</h5>
                    <p className="text-sm">CEO Of ABC Company</p>
                </div>
            </div>
        </div>
        {/* Review content */}
        <p className="text-sm mt-4 leading-relaxed">
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt enim ratione fugit repudiandae, hic veniam alias a quasi nemo similique ab odio repellendus praesentium saepe illo beatae? Ab, voluptatem repudiandae.        </p>
    </div>
</SwiperSlide>
<SwiperSlide className='py-8'>
    <div className="bg-white p-6 rounded-md shadow-md flex flex-col h-full">
        {/* Review content */}
        <div>
            {/* Star rating */}
            <div className="text-amber-500 flex gap-2 mb-4">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
            </div>
            {/* User details */}
            <div className="flex items-center">
                <Avatar img={Pic} alt="avatar of Jese" rounded className="w-10 h-10 mr-3" />
                <div>
                    <h5 className="text-lg font-medium">Mark Henry</h5>
                    <p className="text-sm">CEO Of ABC Company</p>
                </div>
            </div>
        </div>
        {/* Review content */}
        <p className="text-sm mt-4 leading-relaxed">
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt enim ratione fugit repudiandae, hic veniam alias a quasi nemo similique ab odio repellendus praesentium saepe illo beatae? Ab, voluptatem repudiandae.        </p>
    </div>
</SwiperSlide>

</Swiper>


    </div></div>
    
  )
}
