import Header from "../../components/Header";
import people from '../../assets/Frame 10.png'
import person from '../../assets/Frame 20.png'
import incubator from '../../assets/brain.png'
import accelerator from '../../assets/accelerator.png'
import makerspace from '../../assets/makerspace.png'
import hackerspace from '../../assets/hackerspace.png'
import startup from '../../assets/startup.png'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Virtual } from "swiper";
import "swiper/css/virtual";


import "swiper/css/scrollbar";
import "swiper/css/autoplay";

// import required modules
import { Scrollbar, A11y, Autoplay } from "swiper";
import { Navigation } from "swiper";
import { Pagination } from "swiper";

const Home = () => {
    return (<div className="font-montserrat bg-background">
        <Header description={'The Largest Community of Tech Innovators in West Africa'} img={'hero'} />

        <div className="my-20 flex justify-center items-center flex-col mx-16">
            <h1 className="font-[700] text-twitterBlue text-[30px] mb-8">Meet Us</h1>
            <div className="flex justify-start items-start gap-10 w-full">
                <div className="w-1/2 text-[13px] flex flex-col justify-start items-start">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget tortor ac elit condimentum iaculis. Maecenas sit amet nisl et felis posuere vestibulum. Sed tincidunt elit sed ipsum commodo convallis. Curabitur rutrum, massa sed feugiat pharetra, augue dolor fringilla mi, vel efficitur odio ligula nec ex. Nullam quis urna ligula. Integer non nunc felis. Praesent quis elit vel leo consequat consequat. Mauris interdum malesuada leo vel consectetur. Curabitur sodales, libero nec scelerisque varius, odio dui eleifend odio, nec commodo purus nisi nec nunc. Mauris at mauris in enim tristique aliquet.

                    </p>
                    <br />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget tortor ac elit condimentum iaculis. Maecenas sit amet nisl et felis posuere vestibulum. Sed tincidunt elit sed ipsum commodo convallis. Curabitur rutrum, massa sed feugiat pharetra, augue dolor fringilla mi, vel efficitur odio ligula nec ex. Nullam quis urna ligula. Integer non nunc felis. Praesent quis elit vel leo consequat consequat. Mauris interdum malesuada leo vel consectetur. Curabitur sodales, libero nec scelerisque varius, odio dui eleifend odio, nec commodo purus nisi nec nunc. Mauris at mauris in enim tristique aliquet.

                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget tortor ac elit condimentum iaculis. Maecenas sit amet nisl et felis posuere vestibulum. Sed tincidunt elit sed ipsum commodo convallis. Curabitur rutrum, massa sed feugiat pharetra, augue dolor fringilla mi, vel efficitur odio ligula nec ex. Nullam quis urna ligula. Integer non nunc felis. Praesent quis elit vel leo consequat consequat. Mauris interdum malesuada leo vel consectetur. Curabitur sodales, libero nec scelerisque varius, odio dui eleifend odio, nec commodo purus nisi nec nunc. Mauris at mauris in enim tristique aliquet.
                    </p>

                    <button className="px-5 py-2 border-twitterBlue border-2 text-twitterBlue mt-16 ml-16 font-[700]
                    ">See More</button>
                </div>
                <div className="w-1/2">
                    <img src={people} alt="" />
                </div>
            </div>
        </div>

        <div className="flex justify-center items-center">
            <div className="w-[70%] flex justify-center items-center h-[500px]">
                <Swiper
                    spaceBetween={50}
                    slidesPerView={3}
                    // virtual
                    modules={[Navigation, Pagination, Scrollbar, A11y, Virtual, Autoplay]}
                    // navigation
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    // pagination={{ clickable: true }}
                    // scrollbar={{ draggable: true }}
                >
                    <SwiperSlide>
                        <div className="flex justify-center items-center flex-col bg-white h-[280px] rounded gap-10">
                            <img src={incubator} alt="" />
                            <p className="font-[700] text-[22px] text-twitterBlue">Incubators</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex justify-center items-center flex-col bg-white h-[280px] rounded gap-10">
                            <img src={accelerator} alt="" />
                            <p className="font-[700] text-[22px] text-twitterBlue">Accelerators</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex justify-center items-center flex-col bg-white h-[280px] rounded gap-10">
                            <img src={startup} alt="" />
                            <p className="font-[700] text-[22px] text-twitterBlue">Startups</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex justify-center items-center flex-col bg-white h-[280px] rounded gap-10">
                            <img src={makerspace} alt="" />
                            <p className="font-[700] text-[22px] text-twitterBlue">Marker Space</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex justify-center items-center flex-col bg-white h-[280px] rounded gap-10">
                            <img src={hackerspace} alt="" />
                            <p className="font-[700] text-[22px] text-twitterBlue">Hacker Space</p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>

        <div className={`bg-hero bg-no-repeat bg-center bg-cover h-[513px] font-montserrat font-[700] text-center flex justify-center items-center pt-30 mb-16 px-[270px] text-white flex-col`}>
            <h1 className='text-[30px]'>We champion policies, drive collaboration, innovation, employability and entrepreneurship through hubs.</h1>
            <button className="px-5 py-2 border-white border-2 text-white mt-16 ml-16 font-[700]">Become a Partner</button>
        </div>


        <div className="h-[750px] bg-twitterBlue p-10 flex">
            <div className="w-1/2">
                <p className="text-[30px] font-[700] text-center flex justify-center items-center">Meet our community</p>
                <div>
                    <div className="text-center flex justify-center items-center pt-30 px-32 text-white text-[50px]"><p>We are a <span className="font-[700]">459 Member</span> Hubs in 100 Cities & still growing!</p></div>
                    <div>
                        <button className="px-5 py-2 border-white border-2 text-white mt-16 ml-16 font-[700]">Become a Partner</button>
                    </div>
                </div>
             </div>

                <div className="w-1/2">
                   <img src={person} alt="" />
                </div>

        </div>
    </div>);
}

export default Home;