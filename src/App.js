import {Compass, GearSix, House, MagnifyingGlass, MusicNotes, MusicNotesSimple, SignOut, TrendUp} from "@phosphor-icons/react";
import './App.css';

function App() {
  return (
    <div className="">
      <div className="w-full h-full flex">

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
        {/* background: linear-gradient(180deg, #4C0000 0%, #0A0A0A 100%),
linear-gradient(90deg, rgba(0, 0, 0, 0) 73.01%, rgba(15, 15, 15, 0.6) 73.01%);apply this liner gradient to the segment given below */}

        <div  className="w-[80%] gradient-background text-[#E5DDDD]"
          >
        <div className="w-[75%] h-[100vh] ">
          <div className="w-full h-[100vh] border-2 flex flex-col">
            <div className="w-full h-[10vh] flex items-center gap-3">
              <ul className='w-[50%] flex gap-5 justify-center'>
              <li>Music</li>
              <li>Podcast</li>
              <li>Live</li>
              <li>Radio</li>
              </ul>
              <div className="w-[40%] h-[5vh] relative flex items-center ">
                <input type="search" className=' text-white border-2 w-[100%] h-full rounded-full pl-2 bg-[#2C0000]' placeholder='Michael Jackson'/>
                <span className="absolute right-3  hover:cursor-pointer "> <MagnifyingGlass size={25} className="text-white"/></span>
              </div>
            </div>
            <div className=""></div>
            <div className=""></div>
          </div>
        </div>
        <div className="w-[25%] h-[100vh] border-2"></div>
      </div>
        </div>
    </div>
  );
}

export default App;
