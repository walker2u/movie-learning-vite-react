import { useNavigate } from "react-router-dom";

import { useState } from "react";

function SignUp() {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const handleRegister = async () => {
    try {
      console.log(email, password);
      const res = await fetch("http://localhost:3000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      if (res.ok) {
        const data = await res.json();
        console.log(data);
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <fieldset className="fieldset bg-gray-800 border-base-300 rounded-box w-xs border p-4">
        <legend className="fieldset-legend text-2xl">Register</legend>

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
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="btn btn-neutral mt-4" onClick={handleRegister}>
          Register
        </button>
        <p className="label hover:text-gray-200">
          Already have an account? <a href="/login">Login!</a>
        </p>
      </fieldset>
    </div>
  );
}

export default SignUp;
