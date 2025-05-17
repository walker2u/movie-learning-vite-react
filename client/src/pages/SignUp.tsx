import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();
  const handleRegister = () => {
    navigate("/");
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <fieldset className="fieldset bg-gray-800 border-base-300 rounded-box w-xs border p-4">
        <legend className="fieldset-legend text-2xl">Register</legend>

        <label className="label">Email</label>
        <input type="email" className="input" placeholder="Email" />

        <label className="label">Password</label>
        <input type="password" className="input" placeholder="Password" />

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
