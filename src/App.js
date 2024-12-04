import {Compass, GearSix, House, MagnifyingGlass, MusicNotes, MusicNotesSimple, SealCheck, SignOut, TrendUp} from "@phosphor-icons/react";
import './App.css';
import { Left } from "./Components/Left";
import { Artist } from "./Components/Artist";
import { MusicTable } from "./Components/MusicTable";
import { Playing } from "./Components/Playing";

function App() {

  return (
    <div className="">
      <div className="w-full h-full flex">

        <Left/>
        {/* background: linear-gradient(180deg, #4C0000 0%, #0A0A0A 100%),
linear-gradient(90deg, rgba(0, 0, 0, 0) 73.01%, rgba(15, 15, 15, 0.6) 73.01%);apply this liner gradient to the segment given below */}

        <div  className="w-[80%] gradient-background flex text-[#E5DDDD]"
          >
        <div className="w-[75%] h-[100vh] ">
          <div className="w-full h-[100vh]  flex flex-col">
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
            <Artist/>
            <div className="h-[40vh] w-full flex flex-col items-center">
              <div className="w-[80%] h-[5vh] flex justify-between mt-5">
                <span className="text-lg font-bold">Popular</span>
                <span className="hover:cursor-pointer">See All</span>
              </div>
              
                <MusicTable/>
                
              
            </div>
          </div>
        </div>
        <Playing/>
      </div>
        </div>
    </div>
  );
}

export default App;
