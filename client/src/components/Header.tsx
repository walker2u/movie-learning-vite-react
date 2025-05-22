import FavoriteIcon from "@mui/icons-material/Favorite";

export const Header = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 navbar bg-base-100 shadow-sm">
      <img src="logo.png" alt="hi" height={40} width={40} />
      <div className="flex-1">
        <a className="btn btn-ghost text-xl text-red-500">IMDBerry</a>
      </div>
      <div className="flex gap-2">
        <button className="btn btn-ghost btn-circle">
          <FavoriteIcon fontSize="large" color="error" />
        </button>
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered w-24 md:w-auto"
        />
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="justify-between">Profile</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
