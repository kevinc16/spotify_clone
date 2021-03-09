import React from "react";
import "./css/SidebarOption.css";

function SidebarOption({ title, Icon, onClickHandler }) {

  // add onclick?
  return (
    <div className="sidebarOption" onClick={onClickHandler}>
      {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? <h4>{title}</h4> : <p>{title}</p>}
    </div>
  );
}

export default SidebarOption;
