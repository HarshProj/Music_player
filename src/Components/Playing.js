import { Play, Repeat, Shuffle, SkipBack, SkipForward } from '@phosphor-icons/react'
import React from 'react'

export const Playing = () => {
  return (
    <div className="w-[25%] h-[100vh] flex items-end justify-center">
        <div className=" w-[80%] h-[40vh]  mb-5 bg-[#6B0000] drop-shadow-sm rounded-xl text-[#F6F6F6] flex flex-col justify-center items-center">
            
            <div className="text-sm w-full h-4 text-center mb-2">Now Playing</div>
            <div style={{ backgroundImage: `url("/Assets/pic.png")`}} className="w-[90%] h-[20vh] bg-contain bg-no-repeat"></div>
            <div  className="w-[80%] h-[5vh] flex items-center flex-col">
                <h3 className="text-lg">Beat It</h3>
                <span className=" text-sm">Michael Jackson</span>
            </div>
            <div className="h-[5vh] w-[80%] flex items-center justify-center gap-2">
  <span className="text-sm">2:15</span>
  <input
    type="range"
    className="w-[70%] h-1 appearance-none rounded-full outline-none"
    style={{
      WebkitAppearance: 'none',
      background: 'linear-gradient(to right, white 50%, #F6F6F680 50%)', // Simulates completed color
    }}
  />
  <span className="text-sm">4:18</span>
</div>

            <div className="h-[5vh] w-[80%]">
                <ul className='flex justify-between w-full'>
                <li><Repeat size={20} className='hover:cursor-pointer' /></li>
                <li><SkipBack size={20} className='hover:cursor-pointer' weight="fill" /></li>
                <li><Play size={20} className='hover:cursor-pointer' weight="fill" /></li>
                <li><SkipForward size={20} className='hover:cursor-pointer' weight="fill" /></li>
                <li><Shuffle size={20} className='hover:cursor-pointer' /></li>
                </ul>
            </div>
        </div>

    </div>
  )
}
