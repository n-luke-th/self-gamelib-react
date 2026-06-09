import noIMG from "../assets/noimg.svg";
export interface GameDetailsProps {
  id: number;
  title: string;
  thumbnail: string;
  status: string;
  short_description: string;
  description: string;
  game_url: string;
  genre: string;
  platform: string;
  publisher: string;
  developer: string;
  release_date: string;
  freetogame_profile_url: string;
  minimum_system_requirements: {
    os: string;
    processor: string;
    memory: string;
    graphics: string;
    storage: string;
  };
  screenshots: {
    id: number;
    image: string;
  }[];
}

const GameDetails = (game: GameDetailsProps) => {
  return (
    <div className="games-details">
      <div className="card-img">
        <img
          src={game.thumbnail == "" ? noIMG : game.thumbnail}
          loading="lazy"
          alt={game.title.concat("'s thumbnail")}
          style={{
            width: game.thumbnail == "" ? "222px" : "100%",
          }}
        />
      </div>
      <h1>{game.title}</h1>
      <h5>{game.short_description}</h5>
      <p>{game.description}</p>
      <a
        href={game.game_url}
        target="_blank"
        rel="noopener noreferrer"
      >
        Play Game
      </a>
    </div>
  );
};
export default GameDetails;
