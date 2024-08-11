import "./register.scss";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";


function Register() {
  const [err, setErr] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  async function handleSubmit(event) {
    setIsLoading(true);
    setErr("");
    event.preventDefault();
    const newUser = {
      username: event.target.username.value,
      email: event.target.email.value,
      password: event.target.password.value,
    };
    console.log(newUser);
    try {
      const res = await axios.post("api/auth/register", newUser);
      // .then((res) => {
      console.log(res);
      navigate("/login");
    } catch (error) {
      setErr(error.response.data.message);
      console.log(error.response.data.message);
    }finally {
      setIsLoading(false); 
    }
  }

  return (
    <div className="register">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Create an Account</h1>
          <input name="username" type="text" placeholder="Username" />
          <input name="email" type="text" placeholder="Email" />
          <input name="password" type="password" placeholder="Password" />
          <button disabled={isLoading} >Register</button>
          {err && <span>{err}</span>}
          <Link to="/login">Do you have an account?</Link>
        </form>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default Register;
