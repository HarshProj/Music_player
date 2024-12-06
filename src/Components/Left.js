import React, { useState } from "react";
import {
  Compass,
  GearSix,
  House,
  MusicNotes,
  MusicNotesSimple,
  SignOut,
  TrendUp,
  List,
  X,
  MagnifyingGlass,
  MagnifyingGlassMinus,
} from "@phosphor-icons/react";

export const Left = () => {
  const [isOpen, setIsOpen] = useState(false); // State to toggle the sidebar

  const toggleSidebar = () => {
    setIsOpen(!isOpen); // Toggle the sidebar visibility
  };

  return (
    <div className="w-[20%] max-2xl:fixed z-50">
      {/* Hamburger Button */}
      <div className="fixed top-4 right-4 z-50 max-2xl:block 2xl:hidden">
        <button
          onClick={toggleSidebar}
          className="p-2 bg-black text-white rounded-full"
        >
          {isOpen ? (
            <X size={28} color="#FFFFFF" weight="bold" />
          ) : (
            <List size={28} color="#FFFFFF" weight="bold" />
          )}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-[20%] bg-black flex flex-col gap-4 items-center z-40
        transition-transform duration-300 transform max-2xl:w-[50%] max-md:w-[70%] 2xl:static 2xl:w-[100%]
        2xl:translate-x-0 ${isOpen ? "translate-x-0" : "-translate-x-full"} max-2xl:2xl:flex`}
      >
        {/* Header */}
        <div className="h-[10vh] flex items-center justify-center mb-4">
          <div className="w-[90%] h-[13vh] flex items-center gap-2">
            <svg width="0" height="0">
              <defs>
                <linearGradient
                  id="icon-gradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#FF5353" />
                  <stop offset="100%" stopColor="#E91E1E" />
                </linearGradient>
              </defs>
            </svg>

            {/* Gradient Icon */}
            <div>
              <MusicNotes
                weight="fill"
                className="w-[50px] h-[54px]"
                style={{
                  fill: "url(#icon-gradient)", // Refer to the defined gradient
                }}
              />
            </div>
            <div className="text-3xl font-medium text-white">
              <span className="text-[#FF5656]">Dream</span>
              <span>Music</span>
            </div>
          </div>
        </div>

        {/* Menu Section */}
        <div className="h-[75vh] w-[80%] text-[#F6F6F6]">
          <div className="flex gap-1 flex-col">
            <div className="text-xs">Menu</div>
            <ul className="text-lg">
              <li className="flex items-center gap-4 hover:cursor-pointer">
                <House
                  size={20}
                  style={{
                    fill: "url(#icon-gradient)", // Refer to the defined gradient
                  }}
                  weight="fill"
                />
                Home
              </li>
              <li className="flex items-center gap-4 hover:cursor-pointer">
                <TrendUp
                  size={20}
                  style={{
                    fill: "url(#icon-gradient)", // Refer to the defined gradient
                  }}
                  weight="fill"
                />
                Trends
              </li>
              <li className="flex items-center gap-4 hover:cursor-pointer">
                <MusicNotesSimple
                  size={20}
                  style={{
                    fill: "url(#icon-gradient)", // Refer to the defined gradient
                  }}
                  weight="fill"
                />
                Library
              </li>
              <li className="flex items-center gap-4 hover:cursor-pointer">
                <Compass
                  size={20}
                  style={{
                    fill: "url(#icon-gradient)", // Refer to the defined gradient
                  }}
                  weight="fill"
                />
                Discovery
              </li>
              <li className="sm:hidden mt-5"><div className="w-[90%] h-[5vh] relative flex items-center">
                <input type="search" className=' text-white border-2 w-[100%] h-full rounded-full pl-2 bg-[#2C0000]' placeholder='Michael Jackson'/>
                <span className="absolute right-3  hover:cursor-pointer "> <MagnifyingGlassMinus size={25} className="text-white"/></span>
              </div></li>
            </ul>
          </div>
        </div>

        {/* General Section */}
        <div className="h-[15vh] w-[80%] text-[#F6F6F6]">
          <div className="flex gap-1 flex-col">
            <div className="text-xs">General</div>
            <ul className="text-lg">
              <li className="flex items-center gap-4 hover:cursor-pointer">
                <GearSix
                  size={20}
                  style={{
                    fill: "url(#icon-gradient)", // Refer to the defined gradient
                  }}
                  weight="fill"
                />
                Setting
              </li>
              <li className="flex items-center gap-4 hover:cursor-pointer">
                <SignOut
                  size={20}
                  style={{
                    fill: "url(#icon-gradient)", // Refer to the defined gradient
                  }}
                  weight="fill"
                />
                Sign Out
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
