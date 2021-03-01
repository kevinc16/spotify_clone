// https://developer.spotify.com/documentation/

export const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = "http://localhost:3000";
const clientId = "bd28a5b8d6744af2b8c5b8b4e7b2a0f0";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`; // %20 = ascii for space

export const getTokenFromUrl = () => {
  const currUri = window.location.hash.substring(1);
  const token = new URLSearchParams(currUri).get("access_token");

  // const params = new URLSearchParams(currUri).entries();

  // for(const entry of Array.from(params)) {
  //   console.log(`${entry[0]}: ${entry[1]}`);
  // }
  // console.log(token);

  return token;
};
