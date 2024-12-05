import {Compass, GearSix, House, MagnifyingGlass, MusicNotes, MusicNotesSimple, SealCheck, SignOut, TrendUp} from "@phosphor-icons/react";
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
