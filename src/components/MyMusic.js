import React from "react";
import RecentlyPlayed from "./RecentlyPlayed";
import LocalFiles from "./LocalFiles";

const MyMusic = () => {
  return (
    <>
      <div className="MyMusic mb-5">
        <p>MyMusic</p>
        <RecentlyPlayed />
        <LocalFiles />
      </div>
    </>
  );
};

export default MyMusic;
