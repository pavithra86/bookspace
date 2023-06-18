import React, { useState } from "react";
import "./login.css";
import axios from "axios";
import Cookies from "universal-cookie";
import { Redirect, Link } from "react-router-dom";

const cookies = new Cookies();

function Login() {
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");
  const [login, setlogin] = useState(false);
  var sub = async (e) => {
    e.preventDefault();
    let data = {
      email,
      pass,
    };
    var a = await axios.post("http://localhost:2000/login", data);
    console.log("aaaa", a.data);
    if (a.data.ver === "crt") {
      setlogin(true);
      console.log(login);
      cookies.set("login", true);
      cookies.set("email", a.data.id);
    } else {
      alert(a.data.var);
      cookies.set("login", false);
    }
  };

  if (login) {
    return <Redirect to="/" />;
  }
  return (
    
    <div class="containers">
      <div class="containerss">
        <h2 class="log">LOGIN</h2>
        <div class="altering">
        <form>
          <div class="input-fieldss">
            <input 
              type="text"
              required
              onChange={(e) => {
                setemail(e.target.value);
              }}
            />
            <label>Email</label>
          </div>
          <div class="input-fieldss">
            <input
              class="pswrd"
              type="password"
              required
              onChange={(e) => {
                setpass(e.target.value);
              }}
            />
            <span class="shows">SHOW</span>
            <label>Password</label>
          </div>
          <div class="buttonss">
            <div class="inner"></div>
            <button onClick={sub}>LOGIN</button>
          </div>
        </form>
        </div>

        <div class="signup">
          Not a member? <Link to="/reg">signup</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
