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
    venue: "",
    searchVal: "",
    searchList: [],
    companyName: "",
    since: "",
    Timings: "",
    certificate: "",
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
    let searchVal = value;
    let location = this.props.venue;
    const val = location.filter((item) => {
      return item.venue.name.includes(value) == true;
    });
    console.log(val);
    this.setState({
      searchList: val,
      searchVal,
      [key]: value,
    });
  };

  submit = () => {
    const { address, Timings, since, companyName } = this.state;
    const data = { address, Timings, since, companyName };
    firebase
      .firestore()
      .collection("company data")
      .doc()
      .set(data)
      .then(this.hide());
  };

  render() {
    const { lgShow, searchVal, searchList } = this.state;

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
              onChange={(e) => this.address("CompanyName", e.target.value)}
            />
            <p className="primary">Since </p>
            <input
              id="since"
              placeholder="Since"
              className="form-control"
              type="date"
              onChange={(e) => this.address("since", e.target.value)}
            />
            <p className="primary">Timings</p>
            <input
              id="time"
              className="form-control"
              type="time"
              onChange={(e) => this.address("Timings", e.target.value)}
            />
            <p className="primary">Certificate</p>
            <input
              id="certificate"
              type="file"
              onChange={(e) => this.address("certificate", e.target.value)}
            />
            <p>Address</p>

            <input
              onChange={(e) => this.address("address", e.target.value)}
              id="address"
              placeholder="Address"
              className="form-control"
              type="text"
            />
            {searchList.map((item) => {
              return (
                <div>
                  <a id="name" href="">
                    {item.venue.name}
                  </a>
                </div>
              );
            })}
            <button onClick={this.submit} className="btn btn-primary">
              Submit
            </button>
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
