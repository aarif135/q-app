import React from 'react'
import Modal from 'react-bootstrap/Modal'
import ModalHeader from 'react-bootstrap/ModalHeader'
import ModalTitle from 'react-bootstrap/ModalTitle'
import ModalBody from 'react-bootstrap/ModalBody'
import ModalFooter from 'react-bootstrap/ModalFooter'
function Example() {
    const [smShow, setSmShow] = React.useState(false);
  
    return (
      <div>
        <button className='btn btn-primary' onClick={() => setSmShow(true)}>+</button>{' '}
       
  
        <Modal
          size="sm"
          show={smShow}
          onHide={() => setSmShow(false)}
          aria-labelledby="example-modal-sizes-title-sm"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-sm">
            COMPANY INFORMATION
            </Modal.Title>
          </Modal.Header>
          <Modal.Body> <h4 className='text-primary'>Name of company</h4>
              <input placeholder='Enter your Company Name' className='form-control ' type='text'/>
               <h4 className='text-primary'>since</h4>
              <input  className='form-control'  type='date'/>
               <h4 className='text-primary'>certifacate</h4>
              <input  type='file'/>
              <h4 className='text-primary'>Timings</h4>
              <input placeholder='Enter your time duration ' className='form-control'  type='text'/>
              <h4 className='text-primary'>Address</h4>
              <input className='form-control' placeholder='Enter your address'/>
              <br/>
              <button className='btn btn-success'>Submit</button>


              </Modal.Body>
        </Modal>
    
      </div>
    );
  }
  
export{Example};