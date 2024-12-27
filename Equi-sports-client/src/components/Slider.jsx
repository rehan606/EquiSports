// Import Swiper styles
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


// import Swiper core and required modules
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import 'swiper/css/navigation'

const Slide = () => {
    return (
        <div className='w-11/12 mx-auto -mt-6'>
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                // navigation
                pagination={{ clickable: true }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                loop={true}
                autoplay={{ delay: 3000 }}
            >
                <SwiperSlide>
                    <div>
                        <div className=" flex flex-col md:flex-row justify-between items-center pt-10 pb-10 gap-2 " >
                            <div className='md:w-1/2 space-y-2 '>
                                
                                    <p className='text-[#ff7029]  font-Inter text-2xl'>Welcome to EquiSports </p>
                                
                                    <h2 className='font-Inter text-3xl lg:text-5xl text-white font-bold font-ZenDots leading-tight'>Get Ready to Elevate Your Game </h2>
                                
                                    <h4 className='text-white fnot-semibold text-xl pb-10 '>Your One-Stop Shop for Premium Sports Equipment</h4>
                                                                 
                                    <a  className="  bg-[#ff7029] px-10 py-4 text-white font-semibold cursor-pointer ">Shop Now</a>
                                
                            </div>
                            <div className=' md:w-1/2 mt-10 md:mt-0'>

                                <img src="https://i.ibb.co.com/72jLQXT/slide-2.webp" alt="" className='w-full h-full' />
                                
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <div className="flex flex-col md:flex-row justify-between items-center pt-10 pb-10 gap-2">
                            <div className='md:w-1/2 space-y-2'>
                                <p className='text-[#ff7029]  font-Inter text-2xl'>Welcome to EquiSports</p>
                                <h2 className='font-Inter text-3xl lg:text-5xl font-ZenDots text-white font-bold leading-tight'>Ready to Get Started?</h2>

                                <h4 className='text-white fnot-semibold text-xl pb-10 '>Browse our selection of sports equipment and find the perfect gear for your next game.</h4>

                                <a className="  bg-[#ff7029] px-10 py-4 text-white font-semibold cursor-pointer ">Shop Now</a>
                            </div>
                            <div className='md:w-1/2 mt-10 md:mt-0'>

                                <img src="https://i.ibb.co.com/Sm5S4HX/slide-1.webp" alt="" className='w-full h-full ' />
                                

                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <div className="flex flex-col md:flex-row justify-between items-center pt-10 pb-10 gap-2" >
                            <div className='md:w-1/2 space-y-2'>
                                <p className='text-[#ff7029]  font-Inter text-2xl'>Ready to Get Started?</p>
                                <h2 className='font-Inter text-3xl lg:text-5xl text-white font-bold font-ZenDots leading-tight'>Quality Gear for Every Athlete</h2>

                                <h4 className='text-white fnot-semibold text-xl pb-10 '>Whether you're a professional athlete or just getting started, EquiSports offers the best selection of sports equipment to meet your needs.</h4>

                                <a className="  bg-[#ff7029] px-10 py-4 text-white font-semibold cursor-pointer ">Shop Now</a>
                            </div>
                            <div className='md:w-1/2 mt-10 md:mt-0'>
                                <img src="https://i.ibb.co.com/72jLQXT/slide-2.webp" alt="" className='w-full h-full' />
                            </div>

                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slide;