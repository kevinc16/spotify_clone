import React, { useEffect } from "react";
import "./css/App.css";

import Login from "./Login";
import { getTokenFromUrl } from "./spotify";
import Player from "./Player";
import SpotifyWebApi from "spotify-web-api-js";

import { useDataLayerValue } from "./DataLayerProvider";

// main page -> recently played playlists & top artists
// playlists is dynamic
// able to play songs

const spotify = new SpotifyWebApi(); // main api object

function App() {
  const [{ token }, dispatch] = useDataLayerValue();

  // runs the first time rendered - gets token after redirect
  useEffect(() => {
    const _token = getTokenFromUrl();
    window.location.hash = "";

    if (_token) {
      spotify.setAccessToken(_token);
      dispatch({ type: "SET_TOKEN", token: _token });

      spotify.getMe().then((user) => {
        dispatch({ type: "SET_USER", user });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({ type: "SET_PLAYLISTS", playlists });
      });

      spotify.getPlaylist("37i9dQZEVXcQ0ftIaSbsxN").then((discoverWeekly) => {
        console.log("asd", discoverWeekly);
        dispatch({ type: "SET_DISCOVER_WEEKLY", discoverWeekly });
      });
    }
  }, []);

  return (
    <div className="App">
      {!token ? <Login /> : <Player spotifyObj={spotify} />}
    </div>
  );
}

export default App;
