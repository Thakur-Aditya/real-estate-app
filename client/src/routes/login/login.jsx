import { useContext, useState } from "react";
import "./login.scss";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";

function Login() {
  const [err, setErr] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { updateUser } = useContext(AuthContext);
  async function handleSubmit(event) {
    event.preventDefault();
    setErr("");
    const newUser = {
      username: event.target.username.value,
      password: event.target.password.value,
    };
    // console.log(newUser);
    try {
      setIsLoading(true);
      const res = await axios.post(
        "http://localhost:8800/api/auth/login",
        newUser,
        { withCredentials: true }
      );
      console.log(res.data);

      // localStorage.setItem("user",JSON.stringify(res.data));
      updateUser(res.data);
      navigate("/");
    } catch (error) {
      setErr(error.response.data.message);
      console.log(error.response.data.message);
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <div className="login">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Welcome back</h1>
          <input name="username" required type="text" placeholder="Username" />
          <input
            name="password"
            required
            type="password"
            placeholder="Password"
          />
          <button disabled={isLoading}>Login</button>
          {err && <span>{err}</span>}
          <Link to="/register">{"Don't"} you have an account?</Link>
        </form>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default Login;
