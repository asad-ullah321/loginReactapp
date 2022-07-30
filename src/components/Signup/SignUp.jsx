import React from "react";
import { Link } from "react-router-dom";
import profile from "../../icons/user.png";
import "./signup.css";
import { useState } from "react";
export const SignUp = () => {
  const [name, setname] = useState("");
  const [mail, setmail] = useState("");
  const [pass, setpass] = useState("");
  const [date, setdate] = useState("");


  return (
    <div>
      <div className="wrapper fadeInDown">
        <div id="formContent">
          <Link to="/">
            {" "}
            <h2 className="inactive underlineHover"> Sign In </h2>
          </Link>

          <div className="fadeIn first">
            <img src={profile} alt="User Icon" />
          </div>

          <form>
            <div>
              <h2>Name: </h2>
            
            <input
              type="text"
              id="login"
              className="fadeIn second"
              name="login"
              placeholder="Enter name"
              autocomplete="off"
              value={name}
              onChange={(e) => setname(e.target.value)}
              required
            />
            </div>
            <div>
              <h2>DOB: </h2>
            </div>
            <input
              type="date"
              id="login"
              className="fadeIn second"
              name="login"
              placeholder="Enter name"
              autocomplete="off"
              value={date}
              onChange={(e) => setdate(e.target.value)}
              required
            />

            <div>
              <h2>Email: </h2>
            </div>
            <input
              type="email"
              id="login"
              className="fadeIn second"
              name="login"
              placeholder="Enter password"
              autocomplete="off"
              value={mail}
              onChange={(e) => setmail(e.target.value)}
              required
            />
            <div>
              <h2>Password: </h2>
            </div>
            <input
              type="text"
              id="password"
              className="fadeIn third"
              name="login"
              placeholder="password"
              autocomplete="off"
              value={pass}
              onChange={(e) => setpass(e.target.value)}
              required
            />
            <input type="submit" className="fadeIn fourth" value="Sign up" />
          </form>

          <div id="formFooter">
            <Link className="underlineHover" to="/">
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
