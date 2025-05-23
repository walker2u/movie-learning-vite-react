import FavoriteIcon from "@mui/icons-material/Favorite";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 navbar bg-base-100 shadow-sm">
      <img src="logo.png" alt="hi" height={40} width={40} />
      <div className="flex-1">
        <a className="btn btn-ghost text-xl text-red-500">IMDBerry</a>
      </div>
      <div className="flex gap-2">
        <button
          className="btn btn-ghost btn-circle"
          onClick={() => navigate("/favourites")}
        >
          <FavoriteIcon fontSize="large" color="error" />
        </button>
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered w-24 md:w-auto"
        />
        <button className="btn btn-ghost p-2" onClick={handleLogout}>
          <ExitToAppIcon fontSize="large" />
        </button>
      </div>
    </div>
  );
};
