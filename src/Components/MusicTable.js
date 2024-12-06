import React, { useState } from "react";

export const MusicTable = ({musicData,setMusicData}) => {
  

  const handleDragStart = (e, index) => {
    e.dataTransfer.setData("draggedIndex", index);
  };

  const handleDragOver = (e) => {
    e.preventDefault(); // Allow dropping by preventing the default behavior
  };

  const handleDrop = (e, dropIndex) => {
    const draggedIndex = e.dataTransfer.getData("draggedIndex");
    const updatedMusicData = [...musicData];

    // Remove the dragged item and reinsert it at the drop location
    const [draggedItem] = updatedMusicData.splice(draggedIndex, 1);
    updatedMusicData.splice(dropIndex, 0, draggedItem);

    setMusicData(updatedMusicData);
  };
  const handleclick=(index)=>{
    setMusicData((songs)=>
      songs.map((data,ind)=>({
        ...data,
        playing:ind===index
    })))
  }
  return (
    <div className="h-[45vh] w-full flex justify-center">
      <table className="w-full h-full text-left text-sm">
        <thead className="h-full w-full">
          <tr>
            <th className="h-[4vh] px-4 "></th>
            <th className="h-[4vh] px-4">#</th>
            <th className="h-[4vh] px-4 relative left-10">Title</th>
            <th className="h-[4vh] px-4 relative left-5 max-sm:left-0">Playing</th>
            <th className="h-[4vh] px-4 relative left-3 max-sm:left-0">Time</th>
            <th className="h-[4vh] px-4 text-center max-sm:hidden">Album</th>
            <th className="h-[4vh] px-4 max-sm:hidden"></th>
          </tr>
        </thead>
        <tbody>
          {musicData.map((song, index) => (
            <tr
              key={song.id}
              className={`${
                song.playing ? "bg-[#520000] text-[#F6F6F6] h-[5vh]" : ""
              } hover:bg-[#520000] hover:cursor-pointer text-[#CFC5C5] h-[5vh]`}
              draggable
              onDragStart={(e) => handleDragStart(e, index)}
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, index)}
              onClick={()=>handleclick(index)}
            >
              <td className="h-full flex justify-start">
                <div
                  className={`${
                    song.playing ? "h-full bg-[#CA0000]" : ""
                  }`}
                ></div>
              </td>
              <td className="h-[7vh] px-4 text-center">{index + 1}</td>
              <td className="h-[7vh] px-4 flex items-center gap-4">
                <img src={song.image} alt="" className="w-[45px] h-[45px]" />
                {song.title}
              </td>
              <td className="h-[7vh] px-4 text-center">
                {song.playing ? "Yes" : "No"}
              </td>
              <td className="h-[7vh] px-4 text-center">{song.time}</td>
              <td className="h-[7vh] px-4 max-sm:hidden">{song.album}</td>
              <td className="px-4 text-center max-sm:hidden"></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
