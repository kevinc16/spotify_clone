import React, { useEffect, useRef } from "react";
import "./css/Body.css";
import Header from "./Header";

import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

import SongRow from "./SongRow";
import { useDataLayerValue } from "./DataLayerProvider";

import { headerRefDiv } from "./Header";

function Body() {
  const { state, dispatch } = useDataLayerValue();
  const firstPlaylist = state.firstPlaylist;

  useEffect(() => {
    if (headerRefDiv) headerRefDiv.scrollIntoView();
  }, [firstPlaylist]);

  return (
    <div className="body">
      <Header />
      {firstPlaylist && (
        <>
          <div className="body__info">
            <img src={firstPlaylist.images[0]?.url} alt="discoverweekly" />
            <div className="body__infoText">
              <strong>PLAYLIST</strong>
              <h2>{firstPlaylist.name}</h2>
              <p>{firstPlaylist.description}</p>
            </div>
          </div>
          <div className="body__songs">
            <div className="body__icons">
              <PlayCircleFilledIcon className="body__shuffle" />
              <FavoriteIcon />
              <MoreHorizIcon />
            </div>
            {/* list of songs */}
            {firstPlaylist.tracks.items.map((item) => {
              return <SongRow track={item.track} key={item.track.id} />;
            })}
          </div>
        </>
      )}
    </div>
  );
}

export default Body;
