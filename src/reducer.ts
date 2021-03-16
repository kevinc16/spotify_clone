// import  from "spotify-web-api-js";

export interface IInitialState {
  token: string;
  user: SpotifyApi.CurrentUsersProfileResponse | null;
  playlists: SpotifyApi.ListOfUsersPlaylistsResponse | null;
  playing: null;
  // item: null;
  firstPlaylist: SpotifyApi.SinglePlaylistResponse | null;
  // lastPlayedTrack:
  //   | SpotifyApi.TrackObjectSimplified
  //   | SpotifyApi.TrackObjectFull
  //   | null;
  lastPlayedTrack: any;
  premium: boolean;
}

interface ISetUser {
  user: SpotifyApi.CurrentUsersProfileResponse;
  type: "SET_USER";
}

interface ISetToken {
  token: string;
  type: "SET_TOKEN";
}

interface ISetPlaylists {
  playlists: SpotifyApi.ListOfUsersPlaylistsResponse;
  type: "SET_PLAYLISTS";
}

interface ISetFirstPlaylist {
  firstPlaylist: SpotifyApi.SinglePlaylistResponse;
  type: "SET_FIRST_PLAYLIST";
}

interface ISetLastPlayedTrack {
  lastPlayedTrack:
    | SpotifyApi.TrackObjectSimplified
    | SpotifyApi.TrackObjectFull;
  type: "SET_LAST_PLAYED_TRACK";
}

interface ISetPremium {
  premium: boolean;
  type: "SET_PREMIUM";
}

export type Actions =
  | ISetUser
  | ISetToken
  | ISetPlaylists
  | ISetFirstPlaylist
  | ISetLastPlayedTrack
  | ISetPremium;

export const initialState: IInitialState = {
  token: "",
  user: null,
  playlists: null,
  playing: null,
  // item: null,
  firstPlaylist: null,
  lastPlayedTrack: null,
  premium: false,
};

export const reducer = (state: IInitialState, action: Actions) => {
  console.log("reducer", action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_FIRST_PLAYLIST":
      return {
        ...state,
        firstPlaylist: action.firstPlaylist,
      };
    case "SET_LAST_PLAYED_TRACK":
      return {
        ...state,
        lastPlayedTrack: action.lastPlayedTrack,
      };
    case "SET_PREMIUM":
      return {
        ...state,
        lastPlayedTrack: action.premium,
      };
    default:
      console.log("nothing");
      return state;
  }
};

export default reducer;
