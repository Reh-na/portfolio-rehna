import React from 'react'
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import LeftArrow from "../../../src/assets/left-arrow.svg";
import RightArrow from "../../../src/assets/right-arrow.svg";


const reviewdata = [
    {
        id : 1, 
        name : "Ali Tufan",
        post : "Marketing",
        para : "DV Homes made my dream home a reality. Seamless process, exceptional service. Thrilled with my new dream home!"
    },
    {
        id : 2,  
        name : "Robert Fox",
        post : "Tocoma",
        para : "Their commitment to excellence and customer satisfaction made the home-buying experience smooth and delightful."
    },
    {
        id : 3, 
        name : "Albert Flores",
        post : "LA",
        para : "DV Homes turned my homeownership dream into a joyful reality. Professionalism, expertise, and a personalised service."
    },
    {
        id : 4,  
        name : "Ali Tufan",
        post : "Marketing",
        para : "DV Homes made my dream home a reality. Seamless process, exceptional service. Thrilled with my new dream home!"
    },
]

const ReviewCarousal = () => {

    const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
        <img src={LeftArrow} alt="prevArrow" {...props} />
    );
    
    const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
          <img src={RightArrow} alt="nextArrow" {...props} />
    );
    
    const settings = {
          // autoplay : true,
          loop : true,
          // dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 0,
        
          prevArrow: <SlickArrowLeft />,
        nextArrow: <SlickArrowRight />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    };
   
  return (
    <div className=''>    
           <div className="flex justify-center items-center">

            <div className="header bg-white self-center w-[90%] max-w-[1170px] mt-1 pt-6 -mb-16 pb-9 px-10 rounded-xl max-md:max-w-full max-md:mt-10 max-md:px-5">

                <Slider {...settings} >
                    {reviewdata.map((data)=>(
                        <div key={data.id} className="flex flex-col items-stretch w-[350px] p-2 h-72  max-md:w-full max-md:ml-0">
                            <div className="self-stretch border border-[color:var(--Line,#D6D8E7)] flex w-full  grow flex-col  mx-auto pt-6 pb-12 px-6 rounded-lg border-solid items-start max-md:mt-6 max-md:px-1">
                                <div className="items-stretch self-stretch flex justify-between gap-2.5">
                              
                                <div className="justify-center items-stretch flex grow basis-[0%] flex-col my-auto">
                                    <div className="text-slate-900 text-lg font-semibold leading-5">
                                    {data.name}
                                    </div>
                                    <div className="text-slate-900 text-base leading-6 mt-1">
                                   {data.post}
                                    </div>
                                </div>
                                </div>
                                <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9947f20b54af3b93e7e2d601733b3940fd85e0be01c26424c7afa066240f62b2?"
                                className="aspect-[5] object-contain object-center w-20 items-start overflow-hidden max-w-full mt-4"
                                />
                                <p className="self-stretch text-gray-600 text-sm leading-5 mt-4 mb-3.5">
                                &quot;{data.para} &quot;
                                </p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
            
            
          </div>  
    </div>
  )
}

export default ReviewCarousal
