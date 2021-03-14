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

export const spotify = new SpotifyWebApi(); // main api object

function App() {
  const { state, dispatch } = useDataLayerValue();
  const token = state.token;

  // runs the first time rendered - gets token after redirect
  useEffect(() => {
    const _token = getTokenFromUrl();
    window.location.hash = "";

    // we initialize everything here
    if (_token) {
      spotify.setAccessToken(_token);
      dispatch({ type: "SET_TOKEN", token: _token });

      spotify.getMe().then((user) => {
        dispatch({ type: "SET_USER", user });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({ type: "SET_PLAYLISTS", playlists });
        const firstPlaylistID = playlists.items[0].id;
        // get info of the playlist
        spotify.getPlaylist(firstPlaylistID).then((playlist) => {
          dispatch({ type: "SET_FIRST_PLAYLIST", firstPlaylist: playlist });
        });
      });

      spotify.getMyRecentlyPlayedTracks().then((listOfTracks) => {
        const lastTrack = listOfTracks.items[0].track;
        dispatch({ type: "SET_LAST_PLAYED_TRACK", lastPlayedTrack: lastTrack });
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
