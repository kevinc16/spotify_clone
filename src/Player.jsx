import React from "react";
import Body from "./Body";
import Footer from "./Footer";
import "./css/Player.css";
import Sidebar from "./Sidebar";

function Player(spotifyObj) {
  return <div className="player">
    <div className="player__body">
      {/* sidebar */}
      <Sidebar/>
      {/* body */}
      <Body/>
    </div>
    {/* footer */}
    <Footer/>
  </div>;
}

export default Player;
