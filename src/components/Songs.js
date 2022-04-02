import React from "react";
import data from "../data";
import { useState } from "react";
const Songs = ({ setCurrentSong, audios }) => {
  const [song, setSong] = useState(data);
  return (
    <>
      {song.map((track) => (
        <div
          onClick={() => setCurrentSong()}
          className="music-show-tracks mt-3 mb-3 d-flex"
        >
          <div className="number">{track.number}</div>
          <div className="listsongs">
            <img className="img-fluid listsongs" src={track.cover} alt="" />
          </div>
          <div className="nametrack">{track.name}</div>
          <div className="artist">{track.artist}</div>
          <div className="time">{track.time}</div>
          <div className="heart-icon">
            <i className="fa fa-heart" aria-hidden="true"></i>
          </div>
        </div>
      ))}
    </>
  );
};
export default Songs;
