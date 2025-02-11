import * as React from "react";
import "./Style2.css";
import Footer2 from "./Footer2";
import axios from 'axios';

function Login() {
  const token = localStorage.getItem('token');
  if(token){
    window.location.href = '/yourprofile';
  }

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  
  const handleLogin = () => {
    axios.post('http://localhost:5000/login', {
      email: email,
      password: password
    }).then(res => {
      if (res.status === 200) {
        const token = res.data.token;
        localStorage.setItem('token', token);
        window.location.href = '/yourprofile';
      }
      else {
        console.log("failed")
      }
    }).catch(() => {
      console.log("failed");
    });
  };

  return (
    <div>
      <div className="login">
      <div className="alert alert-danger" role="alert" >
          error or whateverglkwehfeiwrh oho
        </div>
        <div className="container outer">
          <div className="whitebox2 signup_container2">
            <h1 className="text-center heading">LOGIN</h1>
            <div className="mb-3 inputs" style={{ textAlign: "left" }}>
              <label className="form-label auth">Username</label>
              <br />
              <input
                type="text"
                name="username"
                className="inputbox"
                placeholder="Username"
                style={{ color: "black" }}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <br />
            </div>
            <div className="mb-3 inputs" style={{ textAlign: "left" }}>
              <label className="form-label auth" style={{ textAlign: "left" }}>
                Password
              </label>
              <br />
              <input
                type="password"
                name="password"
                className="inputbox"
                placeholder="Password"
                style={{ color: "black" }}
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              <br />
            </div>
            <button className="btnlogin" type="submit" onClick={handleLogin}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
