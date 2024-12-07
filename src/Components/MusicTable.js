import React, { useState } from "react";

export const MusicTable = ({ musicData, setMusicData }) => {
  const handleDragStart = (e, index) => {
    e.dataTransfer.setData("draggedIndex", index);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, dropIndex) => {
    const draggedIndex = e.dataTransfer.getData("draggedIndex");
    const updatedMusicData = [...musicData];
    const [draggedItem] = updatedMusicData.splice(draggedIndex, 1);
    updatedMusicData.splice(dropIndex, 0, draggedItem);

    setMusicData((prevSongs) => 
      updatedMusicData.map((song, index) => ({
        ...song,
        playing: index === dropIndex ? true : false, 
      }))
    );
  };

  const handleClick = (index) => {
    setMusicData((songs) =>
      songs.map((data, ind) => ({
        ...data,
        playing: ind === index,
      }))
    );
  };

  return (
    <div className=" w-full flex justify-center ">
      <table className="w-full h-full text-left text-sm ">
        <thead className="h-full w-full">
          <tr>
            <th className="h-[4vh] px-4 max-sm:hidden"></th>
            <th className="h-[4vh] px-4 text-center">#</th>
            <th className="h-[4vh] px-4 relative">Title</th>
            <th className="h-[4vh] px-4 relative max-sm:left-0 text-center max-sm:hidden">Playing</th>
            <th className="h-[4vh] px-4 relative text-center max-sm:left-0">Time</th>
            <th className="h-[4vh] px-4 text-center max-sm:hidden">Album</th>
            <th className="h-[4vh] px-4 max-sm:hidden"></th>
          </tr>
        </thead>
        <tbody>
          {musicData.map((song, index) => (
            <tr
              key={song.id}
              className={`py-2 ${
                song.playing ? "bg-[#520000] text-[#F6F6F6] py-4" : ""
              } hover:bg-[#520000] hover:cursor-pointer text-[#CFC5C5] `}
              draggable
              onDragStart={(e) => handleDragStart(e, index)}
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, index)}
              onClick={() => handleClick(index)}
            >
              <td className="h-full py-2 flex justify-start max-sm:hidden">
                <div
                  className={`${
                    song.playing ? "h-full bg-[#CA0000]" : ""
                  }`}
                ></div>
              </td>
              <td className=" px-4 py-4 text-center">{index + 1}</td>
              <td className="px-4 py-2 flex items-center gap-4">
                <img src={song.image} alt="" className="w-[45px] max-sm:hidden" />
                <div className="flex flex-nowrap whitespace-nowrap overflow-hidden">
                  {song.title}
                </div>
              </td>
              <td className=" px-4 py-2 text-center max-sm:hidden">
                {song.playing ? "Yes" : "No"}
              </td>
              <td className=" px-4 py-2 text-center">{song.time}</td>
              <td className=" px-4 py-2 max-sm:hidden">{song.album}</td>
              <td className="px-4 py-2 text-center max-sm:hidden"></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
