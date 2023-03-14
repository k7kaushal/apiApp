import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import copy from "copy-to-clipboard";  
  

function Modal1({user}) {
  const [copyText, setCopyText] = useState('');
  
  const handleCopyText = (e) => {
      setCopyText(e.target.value);
  } 
  
  const copyToClipboard = () => {
      var copyText = document.getElementById("Address").innerText;
      copy(copyText);
      alert(`You have copied "${copyText}"`);
  }   
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Read more
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Address & Contact details</Modal.Title> 
        </Modal.Header>
        <Modal.Body id = "Address" align="left" value={copyText} onLoad = {handleCopyText}>
          City : {user.address.city}
          <br></br>
          Street : {user.address.street}
          <br></br>
          Zipcode : {user.address.zipcode}
          <br></br>
          Phone : {user.phone}
          <br></br>
          Website : {user.website}
        </Modal.Body>
        <Modal.Footer>
        <Button onClick={copyToClipboard}>
          Copy to Clipboard
        </Button>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Modal1;