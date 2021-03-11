import { SvgIconTypeMap } from "@material-ui/core";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";
import "./css/SidebarOption.css";

interface ISidebarOptionProps {
  title: string;
  Icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  onClickHandler?: (playlistID: string) => void;
  playlistID?: string;
}

function SidebarOption({
  title,
  Icon,
  onClickHandler,
  playlistID,
}: ISidebarOptionProps) {
  // add onclick?
  return onClickHandler ? (
    <div className="sidebarOption" onClick={(e) => onClickHandler(playlistID!)}>
      {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? <h4>{title}</h4> : <p>{title}</p>}
    </div>
  ) : (
    <div className="sidebarOption">
      {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? <h4>{title}</h4> : <p>{title}</p>}
    </div>
  );
}

export default SidebarOption;
