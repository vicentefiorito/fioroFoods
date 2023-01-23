import { React, useState } from "react";
import Image from "next/image";
import {BsChevronCompactLeft,BsChevronCompactRight} from 'react-icons/bs'
import {RxDotFilled,RxDot} from 'react-icons/rx'
 
export default function Carousel () {
    const slides = [
        {
            img: '/hand_micro.jpg'
        },

        {
            img:'/purple_micro.jpg'
        },

        {
            img: '/top.jpg'
        }

    ]

    const [currentImg, setCurrentImg] = useState(0);

    const prevImg = ()  => {
        const isFirstImg = currentImg === 0;
        const newImg = isFirstImg ? slides.length -1 : currentImg -1;
        setCurrentImg(newImg);
    } 
    const nextImg = () =>  {
        const isLastImg = currentImg === slides.length - 1;
        const newImg = isLastImg ? 0 : currentImg + 1;
        setCurrentImg(newImg);
    }
    
    const goToSlide = (slideIndex) => {
        setCurrentImg(slideIndex)
    }
    
    return (
        <div className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group'>
          <div
            style={{ backgroundImage: `url(${slides[currentImg].img})` }}
            className='w-full h-full rounded-2xl bg-center bg-cover duration-500 ease-linear opacity-75'
          ></div>
          {/* Left Arrow */}
          <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
            <BsChevronCompactLeft onClick={prevImg} size={30} />
          </div>
          {/* Right Arrow */}
          <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
            <BsChevronCompactRight onClick={nextImg} size={30} />
          </div>
          <div className='flex top-4 justify-center py-2'>
            {slides.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className='text-2xl cursor-pointer'
              >
                <RxDotFilled />
              </div>
            ))}
          </div>
        </div>
      );
    }