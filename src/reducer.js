export const initialState = {
  token: null,
  user: null,
  playlists: [],
  playing: null,
  item: null,
  firstPlaylist: null,
  lastPlayedTrack: null
};

const reducer = (state, action) => {
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
    default:
      console.log("nothing");
      return state;
  }
};

export default reducer;
