import React from "react";
import Songs from "./Songs";
const MostPopular = ({ setCurrentSong, audios }) => {
  return (
    <>
      <div>
        <Songs currentSong={setCurrentSong} audios={audios} />
      </div>
    </>
  );
};
export default MostPopular;
