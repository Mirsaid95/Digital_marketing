import React from "react";
import { LogoIcon } from "../../assets/icon/logo-icon";
import { MenuIcon } from "../../assets/icon/menu-icon";
import { LocationIcon } from "../../assets/icon/location-icon";
import { PhoneIcon } from "../../assets/icon/phone-icon";
export const Header = () => {
  return (
    <>
      <div>
        <div className="flex justify-center">
          <div className="container">
            <div className="bg-secondary py-[10px] gap-[100px] justify-end  hidden sm:flex">
              <div className="flex items-center gap-[10px]">
                <LocationIcon />
                <p className="font-[400] text-[10px] text-textColor">
                  Company Address type here
                </p>
              </div>
              <div className="flex items-center gap-[10px]">
                <PhoneIcon />
                <p className="font-[400] text-[10px] text-textColor">
                  +94 000 00000
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-primary py-[20px] flex justify-center">
          <div className="container">
            <div className=" flex justify-between items-center  ">
              <div>
                <a href="/">
                  <LogoIcon />
                </a>
              </div>
              <div className="sm:hidden">
                <a href="#">
                  <MenuIcon />
                </a>
              </div>
              <nav className="hidden sm:flex gap-[68px]">
                <ul className="flex gap-[64px] items-center">
                  <li>
                    <a className="nav-link font-[400] text-[16px] text-secondary" href="#">
                      Home
                    </a>
                  </li>
                  <li>
                    <a className="nav-link font-[400] text-[16px] text-secondary" href="#">
                      About us
                    </a>
                  </li>
                  <li>
                    <a className="nav-link font-[400] text-[16px] text-secondary" href="#">
                      Services
                    </a>
                  </li>
                  <li>
                    <a className="nav-link font-[400] text-[16px] text-secondary" href="#">
                      News
                    </a>
                  </li>
                </ul>
                <div>
                  <button className="contact-btn text-primary bg-secondary py-[10px] px-[28px] rounded-[6px]">
                    Contact us
                  </button>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
