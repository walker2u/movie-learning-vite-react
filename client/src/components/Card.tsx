import FavoriteIcon from "@mui/icons-material/Favorite";

interface Movie {
  _id: number;
  title: string;
  synopsis: string;
  image: string;
  status: number;
  ranking: number;
}

function Card({ movie }: { movie: Movie }) {
  const addToFavorites = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/movies/favourites", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          movieId: Number(movie._id),
        }),
      });
      if (res.ok) {
        const data = await res.json();
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="card card-side bg-base-100 shadow-sm">
      <figure className="w-2/3">
        <img src={movie.image} alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{movie.title}</h2>
        <p>{movie?.synopsis.slice(1, 100).concat("...")}</p>
        <div className="card-actions justify-end">
          <button onClick={addToFavorites}>
            <FavoriteIcon fontSize="large" />
          </button>
          <button className="btn btn-primary">Watch</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
