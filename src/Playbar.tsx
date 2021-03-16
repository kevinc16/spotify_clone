import { Input, Slider } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./css/Playbar.css";

import SpotifyPlayer from "react-spotify-web-playback";
import { useDataLayerValue } from "./DataLayerProvider";
import { spotify } from "./App";

const computeTime = (time: any) => {
  const sec = Math.floor(time % 60);
  const min = Math.floor(time / 60);

  if (min === 0 && sec === 0) {
    return <p className="playbar__curTime">0:00</p>;
  } else if (sec < 10) {
    return (
      <p className="playbar__curTime">
        {min}:0{sec}
      </p>
    );
  } else {
    return (
      <p className="playbar__curTime">
        {min}:{sec}
      </p>
    );
  }
};

function Playbar(track: SpotifyApi.TrackObjectFull) {
  const [time, setTime] = useState<any>(0);
  const [maxTime, setMaxTime] = useState(0);

  const { state, dispatch } = useDataLayerValue();

  const handleSliderChange = (event: any, newValue: number | number[]) => {
    setTime(newValue);
  };

  useEffect(() => {
    setMaxTime(track.duration_ms / 1000);
  }, []);

  return (
    <div className="playbar">
      {/* {computeTime(time)}
      <Slider
        value={typeof time === "number" ? time : 0}
        onChange={handleSliderChange}
        aria-labelledby="input-slider"
        max={maxTime}
        className="playbar__main"
      />
      {computeTime(maxTime)} */}
      <SpotifyPlayer
        token={state.token}
        styles={{
          bgColor: "#282828",
          color: "white",
        }}
      />
    </div>
  );
}

export default Playbar;
