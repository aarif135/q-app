import React, { Component } from "react";
// Firebase App (the core Firebase SDK) is always required and must be listed first

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";
import Background from "../../images/backgroud.jpg";

// Add the Firebase products that you want to use

import { withRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { LoginWithFacebook } from "../../Config/Api";
import Fb from "../../images/facebook.jpg";
class Login extends Component {
  async login() {
    const user = await LoginWithFacebook();
    this.props.history.push("/home");
  }

  render() {
    return (
      <div
        style={{
          width: "100%",
          height: "45.6rem",
          backgroundImage: `url(${Background})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        }}
      >
        <div
          className=" container"
          style={{
            height: "25%",
            width: "25%",
            backgroundColor: "white",
            margin: "auto",
            padding: "5%",
            font: "18px Arial sans-serif",
            background: "rgba(0, 0, 0, 0)",
            color: "white"
          }}
        >
          <div className="row">
            <div className="col-4">
              <h1 style={{ textAlign: "center" }}>Login</h1>
            </div>
            <div className="col-4">
              <h2>Email</h2>
            </div>
            <input type="text" className="form-control " placeholder="Email" />

            <h2>Password</h2>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
            />
            <br />
            <button style={{ marginRight: "50%" }} class="btn btn-primary">
              {" "}
              Login
            </button>
            <br />
            {/* <button >
           Login with facebook
        
         </button> */}
            <br />

            <button class="btn btn-primary" onClick={this.login.bind(this)}>
              {" "}
              Login With Facebook
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(Login);
