import Card from "../components/Card";
import { useEffect, useState } from "react";

interface Movie {
  _id: number;
  title: string;
  synopsis: string;
  image: string;
  status: number;
  ranking: number;
}

function Favourites() {
  const [movies, setMovies] = useState<Movie[]>([]);
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/api/user/favMovies",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include",
          }
        );
        const data = await response.json();
        setMovies(data.data);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };
    if (movies.length === 0) {
      fetchMovies();
    }
  }, []);

  return (
    <div className="mt-14">
      <div className="text-6xl font-bold mb-4 text-center text-red-500">
        Favourites
      </div>
      <div className="grid grid-cols-3 gap-4 mx-2 mb-8">
        {movies.map((item) => (
          <Card key={item._id} movie={item} />
        ))}
      </div>
    </div>
  );
}

export default Favourites;
