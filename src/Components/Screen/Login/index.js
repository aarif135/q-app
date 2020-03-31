import React, { Component } from "react";
// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";
import { FaFacebookF } from 'react-icons/fa';

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";
import { withRouter } from "react-router-dom";
class Login extends Component {
  login = () => {
    const firebaseConfig = {
      apiKey: "AIzaSyD6YcpH8YJEJIcYFz96RXwbvEKhhpeHDjg",
      authDomain: "app-9b871.firebaseapp.com",
      databaseURL: "https://app-9b871.firebaseio.com",
      projectId: "app-9b871",
      storageBucket: "app-9b871.appspot.com",
      messagingSenderId: "96192709911",
      appId: "1:96192709911:web:4472452a0e736e9bd8a352",
      measurementId: "G-9JTHLSDS31"
    };

    firebase.initializeApp(firebaseConfig);
    const provider = new firebase.auth.FacebookAuthProvider();

firebase.auth().signInWithPopup(provider).then(function(result) {
  console.log(provider)
  console.log(result)
  var token = result.credential.accessToken;
 
  // The signed-in user info.
  
  var user = result.user;


  // ...
})
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
    
        ;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;

        // ...
      });
  };

  render() {
    
    return (
   
     <div style={{height:'100rem', border:'2px solid black', }}>
       <div style={{height:"25%", width:'25%', backgroundColor:'white', margin:'auto',padding:'5%'}}>
         <h2>Email</h2>
         <input type='email' placeholder='Email'/>
         <h2>Password</h2>
         
         <input type='password' placeholder='Password'/>
         <br/>
         <button> Login</button>
         <br/>
         <button onClick={this.login}>
         <FaFacebookF/>
         </button>
       </div>

     </div>
  
    );
  }
}
export default withRouter(Login);
