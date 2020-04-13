import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import "firebase/firestore";
import * as firebase from "firebase/app";
import "firebase/auth";
import { LoginWithFacebook } from "../../Config/Api";
import { connect } from "react-redux";
import Company from "../Company";
import Token from '../Token';
import {companyInfo} from '../../../Store/actions/userActions'


class Example extends Component {
  state = {
    lgShow: false,
    setLgShow: false,
    venue: "",
    searchVal: "",
    searchList: [],
    companyName: "",
    since: "",
    TimingsFrom: "",
    TimingsTo: "",
    certificate: "",
    data: [],
    allow:false,
    value:'',
    adding:false
  };
  stateChange = () => {
    this.setState({
      lgShow: true,
      setLgShow: true,
    });
  };
  hide = () => {
    this.setState({
      setLgShow: false,
      lgShow: false,
    });
  };
  address = (key, value) => {
    
    const {searchList}=this.state
    let location = this.props.venue;
    const val = location.filter((item) => {
      return item.venue.name.includes(value) == true;
    });
    
    this.setState({
      searchList:val,
      [key]:value,
      adding:true,
      value
    
    
    })
  
 
   };

  submit = (name) => {
    const {
      address,
      TimingsFrom,
      TimingsTo,
      since,
      companyName,
      value,
      data,
    } = this.state;
    let Timings = TimingsFrom + "to" + TimingsTo;
    const ll=this.props.ll
    let token=20
  console.log(this.state.value)
   
   const info={companyName,since,value,Timings,ll,token}
    const db=firebase.firestore()
    db.collection("companyData").doc().set(
      {companyName,since,address,Timings,ll,token
      }
    ).then(res=>{
      this.hide()
    
    })

  };
  allow=()=>{
    this.setState({
      allow:true
    })
  }
  disallow=()=>{
    this.setState({
      allow:false
    })
  }
  
val=(name)=>{
this.setState({
  value:name
})
}
 info=(key,value)=>{
   this.setState({
     [key]:value
   })

 }
  render() {
    const { lgShow,  searchList, data,allow,adding,value} = this.state;
    
 

    // const userData=this.props.user
    // localStorage.setItem("userObj",JSON.stringify(userData))
    // let us= localStorage.getItem("userObj")
 
    
    return (
      <>
    
        <button className="btn btn-primary " onClick={this.stateChange}>
          +ADD DETAILS
        </button>
        {allow?<div><Token/> <button onClick={this.disallow}  className='btn btn-danger'>disallow</button> </div>:
           <button className='btn btn-success' onClick={this.allow}>Allow</button>}
        
     

        <Modal
          size="lg"
          show={lgShow}
          onHide={this.hide}
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
              COMPANY INFORMATION
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p className="primary">Company name</p>
            <input
              id="company"
              placeholder="Company Name"
              className="form-control"
              type="text"
              onChange={(e) => this.info("companyName", e.target.value)}
            />
            <p className="primary">Since </p>
            <input
              id="since"
              placeholder="Since"
              className="form-control"
              type="date"
              onChange={(e) => this.info("since", e.target.value)}
            />
            <p className="primary">Timings From</p>
            <input
              id="time"
              className="form-control"
              type="time"
              onChange={(e) => this.info("TimingsFrom", e.target.value)}
            />
            <p className="primary">Timings to</p>
            <input
              id="time"
              className="form-control"
              type="time"
              onChange={(e) => this.info("TimingsTo", e.target.value)}
            />
            <p className="primary">Certificate</p>
            <input
              id="certificate"
              type="file"
              onChange={(e) => this.info("certificate", e.target.value)}
            />
            <p>Address</p>

            <input
              onChange={(e) => this.address("address", e.target.value)}
              id="address"
              placeholder="Address"
              className="form-control"
              type="text"
              value={this.state.value}
  
            />
            {adding?searchList.map((item) => {
              return (
                <div>
                  <p style={{cursor:'pointer'}} onClick={()=>this.val(item.venue.name)}>
                    
                    {item.venue.name}
                  </p>
                  
                </div>
                
              );
            }) :null}
            <button onClick={this.submit} className="btn btn-success">
                   Submit
                 </button>
            <br />
         
          </Modal.Body>
        </Modal>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};
// const mapDispatchToProps = (dispatch) => {
//   return {
//     updateTheDat: () => dispatch(this.state.data),
//     formDataRequest:(data)=>dispatch(companyInfo(data))
   
//   };
// };
export default connect(mapStateToProps,{companyInfo})(Example);
