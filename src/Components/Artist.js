import React from 'react'
import {Compass, GearSix, House, MagnifyingGlass, MusicNotes, MusicNotesSimple, SealCheck, SignOut, TrendUp} from "@phosphor-icons/react";

export const Artist = () => {
  return (
    <div className="w-[100%] h-[45vh]  flex justify-center  items-endborder-2">
          <div className="h-full w-[80%] flex relative justify-center items-end">

            <div style={{ backgroundImage: `url("/Assets/Background.png")` }}
 className="w-full h-[32vh] bg-no-repeat rounded-3xl object-cover">
  {/* background: linear-gradient(122.33deg, #53E0FF 30.62%, #1E94E9 100%); */}
  <div className="flex pl-10 w-full h-full justify-center  flex-col">
    <span className="flex"> <svg width="0" height="0">
  <defs>
    <linearGradient id="sealcheck-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stopColor="#53E0FF" />
      <stop offset="100%" stopColor="#1E94E9" />
    </linearGradient>
  </defs>
</svg>

<div>
  <SealCheck
  size={20}
  weight="fill"
  style={{
    fill: "url(#sealcheck-gradient)", // Gradient for the main part
  }}
>
  <path
    d="M specific-tick-path-data" // Replace with the tick's path data
    fill="white" // Makes the tick white
  />
</SealCheck>

</div>
Verified Artist</span>
    <h2 className="text-3xl font-semibold">Michael Jackson</h2>
    <span className='mt-7'>22,852,501 monthly listeners</span>
  </div>
 </div>
 <div style={{ backgroundImage: `url("/Assets/Michael.png")` }} className=" absolute bg-no-repeat w-[70%] h-full right-2 max-sm:hidden"></div>
 </div>
 </div>
  )
}
