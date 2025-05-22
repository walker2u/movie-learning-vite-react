import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../redux/slice/user.slice";

interface RESPONSE {
  success: boolean;
  statusCode: number;
  message: string;
  data: Record<string, unknown>;
}

function SignIn() {
  const [email, setEmail] = useState<string>("");
  const [pass, setPass] = useState<string>("");
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async () => {
    setError("");
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
      const data: RESPONSE = await response.json();
      if (data.success) {
        dispatch(login(data.data));
        navigate("/");
      } else {
        setError(data.message);
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

        {error && <p className="text-red-500">{error}</p>}
        <button className="btn btn-neutral mt-4" onClick={handleLogin}>
          Login
        </button>
      </fieldset>
    </div>
  );
}

export default SignIn;
