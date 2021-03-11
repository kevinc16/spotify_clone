import "./css/SongRow.css";

interface ISongRowProps {
  track: any;
}

function SongRow({ track }: ISongRowProps) {
  return (
    track && (
      <div className="songRow">
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
