import React, { Component } from "react";

import Background from "../../images/backgroud.jpg";

import { withRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { LoginWithFacebook } from "../../Config/Api";
import Fb from "../../images/facebook.jpg";
import { UpdateUser } from "../../../Store/actions/userActions";
import {connect} from 'react-redux'

class Login extends Component {
  state={
    user:{}
  }
  async login() {
    const user = await LoginWithFacebook();
    console.log(user);

    this.props.updateTheUser(user)
    this.setState({user})
    this.props.history.push("/home");
  }

  render() {
    const {user}=this.state
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
          className=" "
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
          <div>
            <div>
              <h1 style={{ textAlign: "center" }}>Login</h1>
            </div>
            <div>
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
const mapStateToProps=(state)=>{
 
return{
  user:state
}

  

}
const mapDispatchToProps=(dispatch)=>{
  return{
    updateTheUser:(user)=>dispatch(UpdateUser(user))
  }

}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Login));
