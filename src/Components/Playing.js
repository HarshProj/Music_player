import { Pause, Play, Repeat, Shuffle, SkipBack, SkipForward } from "@phosphor-icons/react";
import React, { useState, useRef, useEffect } from "react";
import { Howl } from "howler";  

export const Playing = ({ musicData, setMusicData }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [song, setSong] = useState({});
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [howl, setHowl] = useState(null); // For holding the Howl instance

  useEffect(() => {
    const currentSong = musicData.find((song) => song.playing);
    setSong(currentSong || {});
    setIsPlaying(false);
    setProgress(0);
    setCurrentTime(0);

    if (currentSong) {
      const newHowl = new Howl({
        src: [currentSong.location],
        html5: true, // Ensure we load the song for efficient streaming
        onload: () => setDuration(newHowl.duration()),
        onplay: () => setIsPlaying(true),
        onpause: () => setIsPlaying(false),
        onend: () => next(currentSong.id - 1),
        onseek: () => setCurrentTime(newHowl.seek()),
        onloaderror: (id, error) => console.error("Howl load error:", error),
        onplayerror: (id, error) => console.error("Howl play error:", error),
      });

      setHowl(newHowl);

      return () => {
        newHowl.unload();
      };
    }
  }, [musicData]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  const togglePlayPause = () => {
    if (isPlaying) {
      howl.pause();
    } else {
      howl.play();
    }
  };

  // const updateProgress = () => {
  //   if (howl) {
  //     setProgress((howl.seek() / howl.duration()) * 100);
  //     setCurrentTime(howl.seek());
  //   }
  // };

  const handleSeek = (e) => {
    if (howl) {
      const newTime = (e.target.value / 100) * howl.duration();
      howl.seek(newTime);
      setProgress(e.target.value);
    }
  };

  const prev = (ind) => {
    setMusicData((songs) =>
      songs.map((data, index) => ({
        ...data,
        playing: ind - 1 < 0 ? musicData.length - 1 === index : ind - 1 === index,
      }))
    );
  };

  const next = (ind) => {
    setMusicData((songs) =>
      songs.map((data, index) => ({
        ...data,
        playing: (ind + 1) % musicData.length === index,
      }))
    );
  };

  return (
    <div
      className="w-full h-[10vh] lg:w-[25%] lg:h-[100vh] flex bg-[#210909] items-end justify-center 
      max-lg:items-center max-lg:justify-center fixed bottom-0 lg:static  max-lg:bg-transparent"
    >
      
      <div
        className="w-[90%] lg:w-[80%] h- lg:h-[40vh] mb-3 lg:mb-5 bg-[#6B0000] max-lg:backdrop-blur-lg max-lg:bg-transparent
        shadow-md rounded-xl text-[#F6F6F6] flex flex-col justify-center items-center px-4 py-2"
      >
        <div className="text-xs lg:text-sm w-full text-center mb-2 max-lg:hidden">Now Playing</div>

        <div
          style={{ backgroundImage: `url("/Assets/Pic.png")` }}
          className="w-[60px] h-[60px] lg:w-[90%] max-lg:h-[20vh] bg-contain bg-no-repeat max-lg:hidden"
        ></div>

        <div className="w-full lg:w-[80%] h-auto flex flex-col items-center text-center mt-2">
          <h3 className="text-sm lg:text-lg">
            {song?.title ? song.title.slice(0, 14) + "..." : "No Song Selected"}
          </h3>
          <span className="text-xs lg:text-sm max-lg:hidden">{song?.album || ""}</span>
        </div>

        <div className="flex items-center justify-center gap-2 w-full mt-2">
          <span className="text-xs lg:text-sm">{formatTime(currentTime)}</span>
          <input
            type="range"
            value={progress}
            onChange={handleSeek}
            min="0"
            max="100"
            defaultValue={0}
            className="w-full h-1 lg:w-[70%] appearance-none rounded-full outline-none"
            style={{
              WebkitAppearance: "none",
              background: `linear-gradient(to right, white ${progress}%, #F6F6F680 ${progress}%)`,
            }}
          />
          <span className="text-xs lg:text-sm">{formatTime(duration)}</span>
        </div>

        <div className="flex justify-between w-full mt-2">
          <Repeat size={20} className="hover:cursor-pointer" />
          <SkipBack
            size={20}
            className="hover:cursor-pointer"
            weight="fill"
            onClick={() => prev(song.id - 1)}
          />
          {isPlaying ? (
            <Pause
              size={20}
              className="hover:cursor-pointer"
              weight="fill"
              onClick={togglePlayPause}
            />
          ) : (
            <Play
              size={20}
              className="hover:cursor-pointer"
              weight="fill"
              onClick={togglePlayPause}
            />
          )}
          <SkipForward
            size={20}
            className="hover:cursor-pointer"
            weight="fill"
            onClick={() => next(song.id - 1)}
          />
          <Shuffle size={20} className="hover:cursor-pointer" />
        </div>
      </div>
    </div>
  );
};
