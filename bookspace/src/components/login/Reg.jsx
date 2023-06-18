import React, { useState } from "react";
import "./login.css";
import axios from "axios";
import { Link } from "react-router-dom";
function Reg() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [pass, setpass] = useState("");

  var sub = () => {
    let login = {
      name,
      email,
      pass,
      phone,
    };
    axios.post("http://localhost:2000/sign", login);
    console.log(login);
  };

  return (
    <div class="containers">
      <div class="containerss">
        <h2 class="log">REGISTER</h2>
        <div class="altering">
        <form>
          <div class="input-fieldss">
            <input
              type="text"
              required
              onChange={(e) => {
                setname(e.target.value);
              }}
            />
            <label>Name</label>
          </div>
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
              type="tel"
              required
              onChange={(e) => {
                setphone(e.target.value);
              }}
            />
            <label>Phone number</label>
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
            <button onClick={sub}>REGISTER</button>
          </div>
        </form>
        </div>
        <div class="signup">
          Already a member? <Link to="/login">Login now</Link>
        </div>
      </div>
    </div>
  );
}

export default Reg;
