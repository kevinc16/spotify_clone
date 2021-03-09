import React from "react";
import "./css/Footer.css";
import { useDataLayerValue } from "./DataLayerProvider";

import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";

import { Grid, Slider } from "@material-ui/core";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import VolumeDownIcon from "@material-ui/icons/VolumeUp";

// to play the song - https://developer.spotify.com/documentation/web-playback-sdk/quick-start/

function Footer() {
  const [{ lastPlayedTrack }, dispatch] = useDataLayerValue();

  return (
    <div className="footer">
      {lastPlayedTrack && (
        <div className="footer__left">
          <img src={lastPlayedTrack.album.images[0].url} alt="" className="footer__albumLogo" />
          <div className="footer__songInfo">
            <h4>{lastPlayedTrack.name}</h4>
            <p>{lastPlayedTrack.artists.map((artist) => artist.name).join(", ")}</p>
          </div>
        </div>
      )}
      <div className="footer__center">
        <ShuffleIcon className="footer__green" />
        <SkipPreviousIcon className="footer__icon" />
        <PlayCircleOutlineIcon fontSize="large" className="footer__green" />
        <SkipNextIcon className="footer__icon" />
        <RepeatIcon className="footer__green" />
      </div>
      <div className="footer__right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider className="footer__volumeSlider" />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
