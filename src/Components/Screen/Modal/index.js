import React from 'react'
import Modal from 'react-bootstrap/Modal'
import "firebase/firestore";
import * as firebase from "firebase/app";
import "firebase/auth"; 
import {LoginWithFacebook} from '../../Config/Api'
import {connect} from 'react-redux'


function Example() {
 
  function name(){
  
    console.log(LoginWithFacebook)
   let name= document.getElementById('company').value
   let time=document.getElementById('time').value
   let since=document.getElementById('since').value
   let cer=document.getElementById('certificate').value
   let address=document.getElementById('address').value
   console.log(cer,since,time,name,address)

   firebase.firestore().collection('CompanyData').doc().set({
     name,
     time,
     since,
     cer,
     address
   }).then(res=>{
    alert('your data has been successfully submited')
   })
  }
  const [lgShow, setLgShow] = React.useState(false);

  return (
    <>

      <button className='btn btn-primary' onClick={() => setLgShow(true)}>Large modal</button>
     
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            COMPANY INFORMATION
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
    <p className='primary'>Company name</p>
    <input id="company" placeholder='Company Name' className='form-control' type='text'/>
    <p className='primary'>Since </p>
    <input id="since" placeholder='Since' className='form-control' type='date'/>
    <p className='primary'>Timings</p>
    <input  id='time' className='form-control' type='time'/>
    <p className='primary'>Certificate</p>
    <input id='certificate' type='file'/>
    <p>Address</p>
    <input id='address' placeholder='Address' className='form-control' type='text'/>
    <button onClick={name } className='btn btn-primary'>Submit</button>

        </Modal.Body>
      </Modal>
    </>
  );
}
const mapStateToProps=(state)=>{
  return{
    user:state
  }
}
export default connect()
export {Example}

