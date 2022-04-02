import React from "react";
import Home from "./Home";
import Browse from "./Browse";
import Albume from "./Albume";
import Artist from "./Artist";
import Videos from "./Videos";

const MenuBar = () => {
  return (
    <>
      <div className="menuMusics">
        <Home />
        <Browse />
        <Albume />
        <Artist />
        <Videos />
      </div>
    </>
  );
};

export default MenuBar;
