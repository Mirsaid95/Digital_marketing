import React, { useEffect } from "react";
import { Header } from "../Header/header";
import heroImg from "../../assets/img/hero-img.png";
import officeMobile from "../../assets/img/office-mobile.png";
import office from "../../assets/img/office.png";
import { AboutData, SwiperDATAS } from "../../Data/aboutData";
import { AboutCards } from "../About-Cards";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { SwiperCards } from "../Swiper-Cards";
export const Home = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    // Barcha reveal elementlarni kuzatish
    const revealElements = document.querySelectorAll('.reveal, .image-reveal');
    revealElements.forEach(element => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />
      <div className=" bg-[url('assets/img/hero-bg-mobile.png')] sm:bg-[url('assets/img/hero-bg.png')] bg-no-repeat bg-bottom sm:bg-center bg-contain sm:bg-cover pb-[10px] mb-[28px] sm:mb-[83px]">
        <div className="my-[108px]  sm:flex sm:justify-center  bg-contain sm:bg-center bg-no-repeat sm:bg-cover ">
          <div className="container">
            <div className="sm:flex sm:items-center sm:justify-center">
              <div>
                <div className="sm:w-[527px]">
                  <h3 className=" font-[700]  text-[16px] leading-[155%] mb-[31px]  text-primary sm:text-[20px] sm:leading-[155%] sm:mb-[17px] ">
                    Digital Marketing
                  </h3>
                  <h1 className="text-[34px] font-[700] mb-[28px] sm:text-[50px] leading-[155%] sm:text-textColor sm:mb-[26px]">
                    Work that we produce for our clients
                  </h1>
                  <p className=" text-[14px] leading-[200%] mb-[35px] font-[500] sm:text-[16px] sm:leading-[155%] sm:mb-[50px]">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard.
                  </p>
                  <div>
                    <button className="details-btn font-[500] text-[15px] text-secondary py-[12px] px-[20px] rounded-[40px] bg-primary">
                      Get more details
                    </button>
                  </div>
                </div>
              </div>
              <div className="hidden sm:block">
                <img src={heroImg} alt="#" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="container mx-auto">
          <h2 className="reveal animated-title gradient-text font-[600] text-[16px] leading-[187%] text-center text-textColor mb-[72px] sm:font-[600] sm:text-[25px] sm:mb-[49px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </h2>
          <div className="hidden w-[545px] ml-[85px] sm:block">
            <h2 className="reveal animated-subtitle gradient-text font-[600] text-[30px] leading-[187%] text-textColor mb-[32px]">
              Lorem Ipsum
            </h2>
            <p className="reveal animated-description font-[400] text-[16px] leading-[187%] text-textColor">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            </p>
          </div>
          <div className="mx-auto mb-[95px] sm:[165px]">
            <img 
              className="image-reveal sm:hidden mx-auto" 
              src={officeMobile} 
              alt="#" 
            />
            <img 
              className="image-reveal hidden sm:block mx-auto" 
              src={office} 
              alt="#" 
            />
          </div>
        </div>
        <div className="text-center mb-[106px] sm:hidden">
          <div className="container">
            <h2 className="animated-subtitle gradient-text mb-[18px] font-[600] text-[20px] leading-[187%] text-textColor">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </h2>
            <p className="animated-description font-[400] text-[12px] leading-[187%] text-[#525252]">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="container mx-auto sm:mb-[133px]">
          <div className="sm:flex sm:flex-wrap sm:justify-center gap-y=[60px] gap-[100px] mx-auto">
            {AboutData?.map((item) => (
              <AboutCards key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
      <div className="bg-[#f5f5f5] py-[55px] sm:pt-[70px]  sm:pb-[100px] ">
        <div className="container mx-auto">
          <div className="sm:flex sm:justify-between sm:items-center sm:mx-auto">
            <div>
              <h3 className="font-[600] text-[24px] leading-[187%] text-textColor mb-[32px] sm:font-[600] sm:text-[30px] sm:leading-[187%] sm:mb-[32px]">
                Lorem Ipsum
              </h3>
              <p className="font-[400] text-[16px] leading-[187%]  text-[#525252] mb-[33px] sm:mb-[65px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
            <div className="hidden sm:block">lorem</div>
          </div>
        </div>
        <div className="text-center mx-auto bg-transparent px-[20px] sm:px-0 ">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            modules={[Navigation]}
            loop
            breakpoints={{
              700: {
                slidesPerView: 4,
              },
              1210: {
                slidesPerView: 4,
              },
            }}
            className={`mx-auto bg-transparent  `}
          >
            {SwiperDATAS?.map((item, index) => (
              <SwiperSlide className="text-center mx-auto"  key={item.id}>
                <SwiperCards key={item.id} item={item} index={index} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};
