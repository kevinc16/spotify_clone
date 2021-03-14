import "./css/SongRow.css";
import { useDataLayerValue } from "./DataLayerProvider";

interface ISongRowProps {
  track: any;
}

function SongRow({ track }: ISongRowProps) {
  const { state, dispatch } = useDataLayerValue();

  const handleChangeSong = () => {
    dispatch({ type: "SET_LAST_PLAYED_TRACK", lastPlayedTrack: track });
  };

  return (
    track && (
      <div className="songRow" onClick={handleChangeSong}>
        <img
          src={track.album?.images[0]?.url}
          alt={track.name}
          className="songRow__album"
        />
        <div className="songRow__info">
          <h1>{track.name}</h1>
          <p>
            {track.artists.map((artist: any) => artist.name).join(", ")} -{" "}
            {track.album?.name}
          </p>
        </div>
      </div>
    )
  );
}

export default SongRow;
