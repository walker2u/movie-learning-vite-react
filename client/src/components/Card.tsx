interface Movie {
  _id: number;
  title: string;
  synopsis: string;
  image: string;
  status: number;
  ranking: number;
}

function Card({ movie }: { movie: Movie }) {
  return (
    <div className="card card-side bg-base-100 shadow-sm">
      <figure className="w-2/3">
        <img src={movie.image} alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{movie.title}</h2>
        <p>{movie.synopsis.slice(1, 100).concat("...")}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Watch</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
