import React from "react";
import MostPopular from "./MostPopular";
import Playing from "./Playing";
import data from "../data";
import { useState } from "react";
const RowPlayinAudio = () => {
  const [audios, setAudios] = useState(data);
  const [currentSong, setCurrentSong] = useState(audios[0]);

  return (
    <>
      <div className="row">
        <div className="col-md-6 col-sm-12">
          <div className="HeaderMostPopular pt-4">
            <h4>Most Popular</h4>
            <p>92 Songs</p>
          </div>
          <div className="BodyMostPopular">
            <MostPopular audios={audios} setCurrentSong={setCurrentSong} />
          </div>
        </div>
        <div className="col-md-6 col-sm-12 pt-4">
          <div className="HeaderNowPlay">
            <h4>Now Playing</h4>
            <p>56 Items on the list</p>
          </div>
          <div className="NowPlaying">
            <Playing audios={audios} setCurrentSong={setCurrentSong} />
          </div>
        </div>
      </div>
    </>
  );
};
export default RowPlayinAudio;
