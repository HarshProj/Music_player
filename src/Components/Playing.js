import { Pause, Play, Repeat, Shuffle, SkipBack, SkipForward } from '@phosphor-icons/react';
import React, { useState, useRef, useEffect } from 'react';

export const Playing = ({ musicData, setMusicData }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [song, setSong] = useState({});
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const audioRef = useRef(null);

  // Update the current song when musicData changes
  useEffect(() => {
    const currentSong = musicData.find((song) => song.playing);
    setSong(currentSong || {});
    setIsPlaying(false);
    setProgress(0)
    setCurrentTime(0);
  }, [musicData]);

  // Format time in minutes:seconds
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  // Play/Pause functionality
  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Update progress bar and time
  const updateProgress = () => {
    const audio = audioRef.current;
    setProgress((audio.currentTime / audio.duration) * 100);
    setCurrentTime(audio.currentTime);
  };

  // Seek functionality
  const handleSeek = (e) => {
    const audio = audioRef.current;
    const newTime = (e.target.value / 100) * audio.duration;
    audio.currentTime = newTime;
    setProgress(e.target.value);
  };

  // Load metadata (duration)
  useEffect(() => {
    const audio = audioRef.current;
    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
    };
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    return () => {
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
    };
  }, []);
  const prev=(ind)=>{
    if(ind-1<0){
      setMusicData((songs)=>
        songs.map((data,index)=>({
          ...data,
          playing:(musicData.length-1)===index
      })))
    }
    else{
      setMusicData((songs)=>
        songs.map((data,index)=>({
          ...data,
          playing:(ind-1)===index
      })))
    }
  }
  const next=(ind)=>{
    
      setMusicData((songs)=>
        songs.map((data,index)=>({
          ...data,
          playing:((ind+1)%musicData.length)===index
      })))
    
  }
  return (
    <div className="w-[25%] h-[100vh] flex bg-[#210909] items-end justify-center">
      <audio
        ref={audioRef}
        src={song?.location || ""}
        onTimeUpdate={updateProgress}
      ></audio>

      <div className="w-[80%] h-[40vh] mb-5 bg-[#6B0000] drop-shadow-sm rounded-xl text-[#F6F6F6] flex flex-col justify-center items-center">
        <div className="text-sm w-full h-4 text-center mb-2">Now Playing</div>
        <div
          style={{ backgroundImage: `url("/Assets/pic.png")` }}
          className="w-[90%] h-[20vh] bg-contain bg-no-repeat"
        ></div>
        <div className="w-[80%] h-[5vh] flex items-center flex-col">
        <h3 className="text-lg">{song?.title ? song.title.slice(0, 14) + "..." : "No Song Selected"}</h3>

          <span className="text-sm">{song?.album || ""}</span>
        </div>

        {/* Progress Bar */}
        <div className="h-[5vh] w-[80%] flex items-center justify-center gap-2">
          <span className="text-sm">{formatTime(currentTime)}</span>
          <input
            type="range"
            value={progress}
            onChange={handleSeek}
            min="0"
            max="100"
            className="w-[70%] h-1 appearance-none rounded-full outline-none"
            style={{
              WebkitAppearance: 'none',
              background: `linear-gradient(to right, white ${progress}%, #F6F6F680 ${progress}%)`,
            }}
          />
          <span className="text-sm">{formatTime(duration)}</span>
        </div>

        {/* Controls */}
        <div className="h-[5vh] w-[80%]">
          <ul className="flex justify-between w-full">
            <li>
              <Repeat size={20} className="hover:cursor-pointer" />
            </li>
            <li>
              <SkipBack size={20} className="hover:cursor-pointer" weight="fill" onClick={()=>{prev(song.id-1)}}/>
            </li>
            <li>
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
            </li>
            <li>
              <SkipForward size={20} className="hover:cursor-pointer" weight="fill" onClick={()=>{next(song.id-1)}}/>
            </li>
            <li>
              <Shuffle size={20} className="hover:cursor-pointer" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
