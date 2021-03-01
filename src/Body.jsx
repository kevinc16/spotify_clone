import React from "react";
import "./css/Body.css";
import Header from "./Header";

import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

import SongRow from "./SongRow";
import { useDataLayerValue } from "./DataLayerProvider";

function Body() {
  const [{ discoverWeekly }, dispatch] = useDataLayerValue();

  console.log("body", discoverWeekly);

  return (
    discoverWeekly && (
      <div className="body">
        <Header />
        <div className="body__info">
          <img src={discoverWeekly.images[0]?.url} alt="discoverweekly"/>
          <div className="body__infoText">
            <strong>PLAYLIST</strong>
            <h2>{discoverWeekly.name}</h2>
            <p>{discoverWeekly.description}</p>
          </div>
        </div>
        <div className="body__songs">
          <div className="body__icons">
            <PlayCircleFilledIcon className="body__shuffle" />
            <FavoriteIcon />
            <MoreHorizIcon />
          </div>
          {/* list of songs */}
          {discoverWeekly.tracks.items.map((item) => {
            return <SongRow track={item.track} key={item.track.id} />;
          })}
        </div>
      </div>
    )
  );
}

export default Body;
