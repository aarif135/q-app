import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import { connect } from "react-redux";
import "firebase/firestore";
import * as firebase from "firebase/app";
import {sendTokenstate} from '../../../Store/actions/userActions'
class Token extends Component {
  state = {
    lgShow: false,
    setLgShow: false,
    Token:'',
    TimeFor:''
  
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
  token=(key,value)=>{
    console.log(key,value)
    this.setState({
      [key]:value
    })

  }
  componentDidMount(){
    const token=20
    const TimeFor=15+"mint each"
   this.props.sendTokenstate(token,TimeFor)
  }

  render() {
    const { lgShow} = this.state;
  
    
    
    return (
      <>
        <button className="btn btn-danger" onClick={this.stateChange}>
          + ADD TOKENS
        </button>

        <Modal
          size="sm"
          show={lgShow}
          onHide={this.hide}
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
              ADD TOKENS
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <p>Write Tokens</p>
              <input onChange={(e)=>this.token("Token",e.target.value)} type='number' placeholder='Token' maxLength='2' max='20' min='0' className='form-control'/>
             <p>Time for each Token</p>
             
             <input type='hour' onChange={(e)=>this.token("TimeFor",e.target.value)} placeholder='Time for each token' className='form-control'/>

              <br/>
              
           
            <button onClick={this.submit} className="btn btn-success">
              Submit
            </button>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}




 const mapDispatchToprops=(dispatch)=>{
   return{
     SendToken:()=>dispatch(sendTokenstate())
   }
 }
export default connect(mapDispatchToprops,{sendTokenstate})(Token);

