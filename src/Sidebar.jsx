import React from "react";
import "./css/Sidebar.css";
import SidebarOption from "./SidebarOption";

import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";

import { useDataLayerValue } from "./DataLayerProvider";

function Sidebar() {
  const [{ playlists }, dispatch] = useDataLayerValue();

  return (
    <div className="sidebar">
      <img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
        className="sidebar__logo"
      ></img>
      <SidebarOption title="Home" Icon={HomeIcon} />
      <SidebarOption title="Search" Icon={SearchIcon} />
      <SidebarOption title="Your Library" Icon={LibraryMusicIcon} />

      <br />
      <strong className="sidebar__playlistTitle">PLAYLISTS</strong>
      <hr />

      {/* for each playlist */}
      {/* a?.b === a && a.b */}
      {playlists?.items?.map((playlist) => {
        return <SidebarOption title={playlist.name} key={playlist.id} />;
      })}
    </div>
  );
}

export default Sidebar;
