import React from "react";
import { Link } from "react-router-dom";
import profile from "../../icons/user.png"
import { useState } from "react";
import "./sign.css"
export const SignIn = () => {

    const [mail, setmail] = useState("");
    const [pass, setpass] = useState("");


  return (
    <div>
      <div className="wrapper fadeInDown">
        <div id="formContent">
            
            <Link to="signup"><h2 className="inactive underlineHover">Sign Up </h2></Link>

          <div className="fadeIn first">
            <img
              src={profile}
           
              alt="User Icon"
            />
          </div>

          <form>
            <input
              type="email"
              id="login"
              className="fadeIn second"
              name="login"
              placeholder="login"
              value={mail}
              onChange={(e)=>setmail(e.target.value)}
              required
            />
            <input
              type="text"
              id="password"
              className="fadeIn third"
              name="login"
              placeholder="password"
              value={pass}
              onChange={(e)=>setpass(e.target.value)}
              required

            />
            <input type="submit" className="fadeIn fourth" value="Log In" />
          </form>

          <div id="formFooter">
            <Link className="underlineHover" to="/">
              Forgot Password?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
