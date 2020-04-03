import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import  { Example } from '../Modal'
import axios from "axios";
import Modal from 'react-bootstrap/Modal'
class Home extends Component {
  constructor() {
    super();
    this.state = {
      latLon: "",
      venues: [],
      location: []
    };
  }
  componentDidMount() {
    this.getLocation();
  }
  getLocation = () => {
    console.log("1");
    navigator.geolocation.getCurrentPosition(response => {
      let latlong = response.coords.latitude + "," + response.coords.longitude;
      this.setState(
        {
          latLon: latlong
        },
        () => {
          console.log("2");
          this.getVenue();
        }
      );
    });
  };

  getVenue = query => {
    const endPoint = "https://api.foursquare.com/v2/venues/explore?";
    const parameter = {
      client_id: "BGTHONCSD3S2ZFWFA1V0AJC3UOCVODWCHI2VTWKCMWKQQ3BD",
      client_secret: "QNIAKAROVQN3KAJMLQACZFUENQ0143DEPQ0VHF54MI01TAOZ",
      ll: this.state.latLon,
      v: "20200403",
      near: "pakistan "
    };
    axios
      .get(endPoint + new URLSearchParams(parameter))
      .then(response => {
        this.setState({
          venues: response.data.response.groups[0].items
        });
      })
      .catch(error => {
        console.log(error.message);
      });
  };
  location = () => {
      const {venues}=this.state
    const venue=venues.map()
  };

  change=(e)=>{
      console.log(e.target.value)

  }
  render() {
    console.log(this.state.latLon);
    const {venues}=this.state
   
    


    return (
      <div>
        <h1>user Logged in:arif</h1>
        <button className="btn btn-primary">Are You Company</button>
        <button className="btn btn-success">Are You awating for token</button>
 
        <Example/>

  
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(withRouter(Home))


;
