import React from "react";
import "./css/Login.css";

import { loginUrl, redirectUri } from "./spotify";

function Login() {
  console.log(redirectUri);

  return (
    <div className="login">
      <img
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png"
        alt=""
        className="logo"
      ></img>
      <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  );
}

export default Login;
