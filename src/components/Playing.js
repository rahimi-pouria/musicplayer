import React, { useRef } from "react";
import Slider1 from "../images/1.png";
import data from "../data";
import { useState } from "react";

// component play music

const Playing = () => {
  // use state
  const [audios, setAudios] = useState(data);
  const [currentSong, setCurrentSong] = useState(audios[0]);
  const [playing, setPlaying] = useState(false);
  const [songcurrentTime, setSongcurrentTime] = useState();
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });
  // useRef
  const audioRef = useRef(null);
  // function time song
  const timeUpdateHandller = (e) => {
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({ ...songInfo, currentTime, duration });
  };
  // function format Time song

  const timeFormate = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };
  // function change input range
  const drageHandller = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, currentTime: e.target.value });
  };
  let pause = document.querySelector("#pause");
  let play = document.querySelector("#play");
  // function play song
  const playSong = (e) => {
    console.log("audioref", audioRef);
    if (playing === true) {
      audioRef.current.pause();
      setPlaying(!playing);

      pause.style.display = "block";
      play.style.display = "none";
    } else {
      audioRef.current.play();
      setPlaying(!playing);
      pause.style.display = "none";
      play.style.display = "block";
    }
  };
  // code html and javascript
  return (
    <>
      {/* show details song  */}
      <div className="BodyPlaying p-5 shadow mx-auto">
        <div className="row player shadow-sm">
          <div className="col-md-12 d-flex align-items-center justify-content-center">
            <img src={currentSong.cover} alt="" className="ImgSong img-fluid" />
          </div>
          <div className=" col-md-12 d-block align-items-center justify-content-center text-center">
            <h5>{currentSong.name}</h5>
            <p className="ParagraphSong">{currentSong.artist}</p>
          </div>
          <div className=" col-md-12 d-block align-items-center justify-content-center text-center">
            <span className="currentTime">
              {timeFormate(songInfo.currentTime)}
            </span>
            <input
              onChange={drageHandller}
              type="range"
              className="form-range range"
              min={0}
              max={songInfo.duration}
              value={songInfo.currentTime}
              step="0.5"
              id="customRange3"
            />
            <span className="duration">{timeFormate(songInfo.duration)}</span>
          </div>
        </div>
        {/* button controller song */}
        <div className="play-control d-flex justify-content-between">
          <span></span>
          <span className="random">
            <i className="fa fa-random" aria-hidden="true"></i>
          </span>
          <span className="backward">
            <i className="fa fa-backward" aria-hidden="true"></i>
          </span>
          <span className="play-Pause shadow-sm">
            <i
              className="fa fa-play"
              id="play"
              onClick={playSong}
              aria-hidden="true"
            ></i>
            <i
              className="fa fa-pause"
              id="pause"
              onClick={playSong}
              aria-hidden="true"
            ></i>
          </span>
          <span className="forward">
            <i className="fa fa-forward" aria-hidden="true"></i>
          </span>
          <span className="repeat">
            <i className="fa fa-repeat" aria-hidden="true"></i>
          </span>
          <span></span>
        </div>
        <audio
          onLoadedMetadata={timeUpdateHandller}
          onTimeUpdate={timeUpdateHandller}
          ref={audioRef}
          src={currentSong.audio}
        ></audio>
      </div>
    </>
  );
};
export default Playing;
