import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../redux/slice/user.slice";

function SignIn() {
  const [email, setEmail] = useState<string>("");
  const [pass, setPass] = useState<string>("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password: pass,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        dispatch(login(data.data));
        navigate("/");
      }
    } catch (error) {
      console.log("Error while login : ", error);
    }
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <fieldset className="fieldset bg-gray-800 border-base-300 rounded-box w-xs border p-4">
        <legend className="fieldset-legend text-2xl">Login</legend>

        <label className="label">Email</label>
        <input
          type="email"
          className="input"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label className="label">Password</label>
        <input
          type="password"
          className="input"
          placeholder="Password"
          onChange={(e) => setPass(e.target.value)}
        />

        <button className="btn btn-neutral mt-4" onClick={handleLogin}>
          Login
        </button>
      </fieldset>
    </div>
  );
}

export default SignIn;
