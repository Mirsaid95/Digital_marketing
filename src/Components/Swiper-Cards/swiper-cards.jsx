import React from "react";

export const SwiperCards = ({ item, index }) => {
  return (
    <div className="badges-wrapper max-w-[1240px] mx-auto  min-h-[300px] py-[30px] px-[15px]">
      <div className="badges mx-auto shadow-xl py-[25px] px-[25px] rounded-[20px] bg-white w-[280px] sm:w-[320px]">
        <div
          className={`badge badge-${
            index + 1
          } sm:font-[400] sm:text-[14px] leading-[187%] py-[7px] pl-[14px] pr-[30px] rounded-[8px] w-[130px] mb-[15px]`}
        >
          {item.badge}
        </div>
        <h2 className="font-[600] text-left text-[18px] leading-[160%] text-textColor mb-[12px]">
          {item.title}
        </h2>
        <p className="font-[400] text-left text-[14px] leading-[160%] text-[#525252]">
          {item.des}
        </p>
      </div>
    </div>
  );
};
