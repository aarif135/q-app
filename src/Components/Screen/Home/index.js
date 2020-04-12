import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Background from "../../images/backgroud.jpg";
class Home extends Component {
  Company=()=>{
    this.props.history.push('/Company')
  }
  User=()=>{
    this.props.history.push('/User')
    let obj ={
      name:"abc",
      email:"abc@email.com",
      passwod:"******"
    }

   

  }
  render() {
    return (
      <div   style={{
        width: "100%",
        height: "45.6rem",
        backgroundImage: `url(${Background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        
      }}>
        <div style={{position:'relative',top:'20rem',marginLeft:'40%',marginRight:'auto'}}>
       
    <h1 style={{color:'white'}}>user Logged in:{this.props.user.name}</h1>
    <img src={this.props.user.photoUrl}/>
        <button  onClick={this.Company} className="btn btn-primary">Are You Company</button>
        <br/>
        <button onClick={this.User} className="btn btn-success">
          Are You awating for token
        </button>
        </div>
      </div>    
    );
  }
}
const mapStateToProps = (state) => {
   console.log(state)
  return {
    user: state.user,
    
  };
}

export default connect(mapStateToProps)(withRouter(Home));
