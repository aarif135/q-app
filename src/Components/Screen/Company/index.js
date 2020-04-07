import React, { Component } from "react";
import Example from "../Modal";
import axios from "axios";
import { connect } from "react-redux";
import Background from "../../images/backgroud.jpg";
import "firebase/firestore";
import * as firebase from "firebase/app";
import { Token } from "../Token";
import { formDataRequestAction } from "../../../Store/actions/userActions";
import { CompanyData } from "../../Config/Api";
class Company extends Component {
  constructor() {
    super();
    this.state = {
      latLon: "",
      venues: [],
      location: [],
      comData: [],
    };
  }
  componentDidMount() {
    this.getLocation();
    let info = [];
    firebase
      .firestore()
      .collection("companyInformation")
      .onSnapshot((item) => {
        item.forEach((doc) => {
          console.log(doc.data());
          info.push(doc.data());
        });
        this.setState({ comData: info });
      });
  }
  getLocation = () => {
    console.log("1");
    navigator.geolocation.getCurrentPosition((response) => {
      let latlong = response.coords.latitude + "," + response.coords.longitude;
      this.setState(
        {
          latLon: latlong,
        },
        () => {
          console.log("2");
          this.getVenue();
        }
      );
    });
  };

  getVenue = (query) => {
    const endPoint = "https://api.foursquare.com/v2/venues/explore?";
    const parameter = {
      client_id: "BGTHONCSD3S2ZFWFA1V0AJC3UOCVODWCHI2VTWKCMWKQQ3BD",
      client_secret: "QNIAKAROVQN3KAJMLQACZFUENQ0143DEPQ0VHF54MI01TAOZ",
      ll: this.state.latLon,
      v: "20200403",
      near: "karachi",
    };
    axios
      .get(endPoint + new URLSearchParams(parameter))
      .then((response) => {
        this.setState({
          venues: response.data.response.groups[0].items,
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  render() {
    const { venues, comData } = this.state;
    console.log(comData);

    return (
      <div
        style={{
          width: "100%",
          height: "45.6rem",
          backgroundImage: `url(${Background})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <h1 style={{ color: "white", textAlign: "center" }}>
            COMPANY INFORMATION
          </h1>
        </div>

        <div className=" container table-responsive ">
          <table
            className="table table-hover"
            style={{
              color: "white",
              border: "solid white 3px",
              fontSize: "20px",
            }}
            border="4"
          >
            <tr>
              <th style={{ textAlign: "centre" }}>COMPANY NAME</th>
              <th>SINCE</th>
              <th>TIMINGS</th>
             <th>ADDRESS</th>
              <th >
                <Example venue={venues} />
              </th>
            </tr>
            {
              comData.map(item=>{
              return<tr><td>{item.companyName}</td>
              
              
              </tr>
              })
            }
           
          </table>  
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    user: state.user,
    companyInfo: state.companyInfo,
  };
};

export default connect(mapStateToProps, { formDataRequestAction })(Company);
