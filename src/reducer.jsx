export const initialState = {
  token: null,
  user: null,
  playlists: [],
  playing: null,
  item: null,
  discoverWeekly: null,
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
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discoverWeekly: action.discoverWeekly,
      };
    default:
      console.log("nothing");
      return state;
  }
};

export default reducer;
