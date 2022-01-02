import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../auth/firebase-config";
// import imgSvg from "../assets/pexels-karolina-grabowska-5717647.jpg"
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async () => {
    try {
      let user = await signInWithEmailAndPassword(auth, email, password);
      console.log(user);
      navigate("/");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="register">
      {/* <div className="form-image">
        <img src={imgSvg} alt="sample-movie" />
      </div> */}
      <div className="register-form">
        <h1
          className="form-title display-3"
          style={{ color: "white", fontSize: "40px" }}
        >
          Login
        </h1>
        <form id="login">
          <div className="mb-3">
            <label for="email" className="form-label display-4">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email address..."
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label for="password" className="form-label display-4">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password..."
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <input
            type="button"
            className="btn btn-primary form-control"
            value="Login"
            onClick={handleSubmit}
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
