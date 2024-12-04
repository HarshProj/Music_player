import {Compass, GearSix, House, MagnifyingGlass, MusicNotes, MusicNotesSimple, SignOut, TrendUp} from "@phosphor-icons/react";

export const Left = () => {
  return (
    <div className="w-[20%] h-[100vh]  flex flex-col gap-4 bg-black items-center">
          <div className=" h-[10vh]  flex items-center justify-center mb-4 ">
            <div className="w-[90%] h-[13vh] flex items-center gap-2">
            <svg width="0" height="0">
                <defs>
                  <linearGradient id="icon-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#FF5353" />
                    <stop offset="100%" stopColor="#E91E1E" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Use the gradient as a fill color */}
              <div className="">
                <MusicNotes
                  weight="fill"
                  className="w-[50px] h-[54px]"
                  style={{
                    fill: "url(#icon-gradient)", // Refer to the defined gradient
                  }}
                />
              </div>
            <div className=" text-3xl font-medium text-white "><span className="text-[#FF5656]">Dream</span><span>Music</span></div>
            </div>
          </div>
          <div className=" h-[75vh] w-[60%] text-[#F6F6F6]">
            <div className="flex gap-1 flex-col">
              <div className="text-xs">Menu</div>
              <ul className="text-lg">
                <li className="flex items-center gap-4"><House size={20} style={{
                    fill: "url(#icon-gradient)", // Refer to the defined gradient
                  }} weight="fill" />Home</li>
                <li className="flex items-center gap-4"><TrendUp size={20} style={{
                    fill: "url(#icon-gradient)", // Refer to the defined gradient
                  }} weight="fill" />Trends</li>
                <li className="flex items-center gap-4"><MusicNotesSimple  size={20} style={{
                    fill: "url(#icon-gradient)", // Refer to the defined gradient
                  }} weight="fill" />Library</li>
                <li className="flex items-center gap-4"><Compass size={20} style={{
                    fill: "url(#icon-gradient)", // Refer to the defined gradient
                  }} weight="fill" />Discovery</li>
              </ul>
            </div>
          </div>
          <div className="h-[15vh] w-[60%] text-[#F6F6F6]">
          <div className=" flex gap-1 flex-col">
              <div className="text-xs">General</div>
              <ul className="text-lg">
                <li className="flex items-center gap-4"><GearSix size={20} style={{
                    fill: "url(#icon-gradient)", // Refer to the defined gradient
                  }} weight="fill" />Setting</li>
                <li className="flex items-center gap-4"><SignOut size={20} style={{
                    fill: "url(#icon-gradient)", // Refer to the defined gradient
                  }} weight="fill" />Trends</li>
              </ul>
            </div>
          </div>
        </div>
  )
}
