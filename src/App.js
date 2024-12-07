import {MagnifyingGlass} from "@phosphor-icons/react";
import './App.css';
import { Left } from "./Components/Left";
import { Artist } from "./Components/Artist";
import { MusicTable } from "./Components/MusicTable";
import { Playing } from "./Components/Playing";
import { useState } from "react";

function App() {
  const [musicData, setMusicData] = useState([
    {
      id: 1,
      title: "Billie Jean",
      playing: false,
      image: "/Assets/1.png",
      time: "3:53",
      location:"/Songs/song2.mp3",
      album: "Divide",
    },
    {
      id: 2,
      title: "Beat It",
      playing: true,
      location:"/Songs/song1.mp3",
      image: "/Assets/1.png",
      time: "3:20",
      album: "After Hours",
    },
    {
      id: 3,
      title: "Smooth Criminal-2012 Rema...",
      playing: false,
      image: "/Assets/3.png",
      location:"/Songs/song3.mp3",
      time: "3:23",
      album: "Future Nostalgia",
    },
    {
      id: 4,
      title: "Don't Stop 'til You Get Enough",
      playing: false,
      image: "/Assets/4.png",
      location:"/Songs/song4.mp3",
      time: "3:23",
      album: "Future Nostalgia",
    },
    {
      id: 5,
      title: "Rock With You-Single Version",
      playing: false,
      image: "/Assets/4.png",
      location:"/Songs/song5.mp3",
      time: "3:23",
      album: "Future Nostalgia",
    },
  ]);
  return (
    <div className="">
      <div className="w-full h-[100vh]  flex bg-black">

        <Left/>
        {/* background: linear-gradient(180deg, #4C0000 0%, #0A0A0A 100%),
linear-gradient(90deg, rgba(0, 0, 0, 0) 73.01%, rgba(15, 15, 15, 0.6) 73.01%);apply this liner gradient to the segment given below */}

        <div  className="w-[80%] max-2xl:w-[100%] h-full gradient-background flex text-[#E5DDDD]"
          >
        <div className="w-[75%]  max-lg:w-[100%] h-[100vh] overflow-y-scroll ">
          <div className="w-full flex flex-col">
            <div className="w-full flex items-center gap-3 font-semibold ">
              <ul className='w-[50%]  max-sm:mt-4 flex gap-10 justify-center max-sm:left-14 relative'>
              <li className="hover:cursor-pointer">Music</li>
              <li className="hover:cursor-pointer">Podcast</li>
              <li className="hover:cursor-pointer">Live</li>
              <li className="hover:cursor-pointer">Radio</li>
              </ul>
              <div className="w-[40%] px-4 py-2 relative flex items-center max-sm:hidden">
                <input type="search" className=' text-white border-2 px-4 py-2 w-[100%] h-full rounded-full bg-[#2C0000] border-none' placeholder='Michael Jackson'/>
                <span className="absolute right-6  hover:cursor-pointer "> <MagnifyingGlass size={25} className="text-gray-400"/></span>
              </div>
            </div>
            <Artist/>
            <div className="h-full w-full flex flex-col items-center">
              <div className="w-[80%] h-[5vh] mb-4 flex justify-between mt-5">
                <span className="text-2xl font-bold">Popular</span>
                <span className="hover:cursor-pointer">See All</span>
              </div>
              
                <MusicTable musicData={musicData} setMusicData={setMusicData}/>
                
              
            </div>
          </div>
        </div>
        <Playing musicData={musicData} setMusicData={setMusicData}/>
      </div>
        </div>
    </div>
  );
}

export default App;
