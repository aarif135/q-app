import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import "firebase/firestore";
import * as firebase from "firebase/app";
import "firebase/auth";
import { LoginWithFacebook } from "../../Config/Api";
import { connect } from "react-redux";

class Example extends Component {
  state = {
    lgShow: false,
    setLgShow: false,
    venue:'',
    searchVal:'',
    searchList:[]
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
  address = (e) => {
   let searchVal= e.target.value;
  let location=this.props.venue
     const val=location.filter(item=>{
    return item.venue.name.includes(e.target.value)==true
    })
    console.log(val)
    this.setState({
      searchList:val,
      searchVal
    })
 

   

  };
  render() {
    const { lgShow, searchVal,searchList } = this.state;
    console.log(searchList,searchVal)

    return (
      <>
        <button className="btn btn-primary" onClick={this.stateChange}>
          +
        </button>

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
            />
            <p className="primary">Since </p>
            <input
              id="since"
              placeholder="Since"
              className="form-control"
              type="date"
            />
            <p className="primary">Timings</p>
            <input id="time" className="form-control" type="time" />
            <p className="primary">Certificate</p>
            <input id="certificate" type="file" />
            <p>Address</p>

            <input
              onChange={this.address}
              id="address"
              placeholder="Address"
              className="form-control"
              type="text"
           
            />
            {searchList.map(item=>{
              return <div><a href=''>{item.venue.name}</a></div>
            })}
            <button className="btn btn-primary">Submit</button>
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
export default connect(mapStateToProps);
export { Example };
