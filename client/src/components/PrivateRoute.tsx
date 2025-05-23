import { useSelector } from "react-redux";
import type { RootState } from "../redux/store.js";
import { Navigate, Outlet } from "react-router-dom";

interface User {
  id: number;
  email: string;
  password: string;
  FavMovie: number[];
  createdAt: Date;
}

function PrivateRoute() {
  const currentUser: User | null = useSelector(
    (state: RootState) => state.user.currentUser
  );
  return currentUser ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute;
