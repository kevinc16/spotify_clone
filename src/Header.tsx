import React from "react";
import "./css/Header.css";

import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";

import { useDataLayerValue } from "./DataLayerProvider";

export let headerRefDiv: HTMLDivElement | null = null;

function Header() {
  const { state, dispatch } = useDataLayerValue();
  const user = state.user;

  return (
    <div
      className="header"
      ref={(el) => {
        headerRefDiv = el;
      }}
    >
      <div className="header__left">
        <SearchIcon />
        <input type="text" placeholder="Search" />
      </div>
      <div className="header__right">
        {user && (
          <>
            {user.images && (
              <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
            )}
            <h4>{user?.display_name}</h4>
          </>
        )}
      </div>
    </div>
  );
}

export default Header;
