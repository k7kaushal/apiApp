import React from 'react'
import { useDispatch } from 'react-redux';
import {adduser} from '../features/user';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const AddData = ({ Add, users }) => {

  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    const Submit = (e) => {
        setShow(false);
        var l = users.length;
        e.preventDefault();
        Add(l, e.target.name.value, e.target.email.value, e.target.username.value,  e.target.city.value,  e.target.street.value,  e.target.zipcode.value,  e.target.phone.value,  e.target.website.value);
        
        e.target.name.value = "";
        e.target.email.value = "";
        e.target.username.value = "";
        e.target.city.value = "";
        e.target.street.value = "";
        e.target.zipcode.value = "";
        e.target.phone.value = "";
        e.target.website.value = "";
    }
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Add user
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Data</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={Submit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter name" name="name" /><br></br>
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter username" name="username" /><br></br>
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name="email" /><br></br>
                <Form.Label>Phone</Form.Label>
                <Form.Control type="text" placeholder="Enter phone number" name="phone" /><br></br>
                <Form.Label>Website</Form.Label>
                <Form.Control type="text" placeholder="Enter your website url" name="website" /><br></br>
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" placeholder="Enter city" name="city"/><br></br>
                <Form.Control type="text" placeholder="Enter Street" name="street" /><br></br>
                <Form.Control type="text" placeholder="Enter zipcode" name="zipcode"/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember credentials" />
              </Form.Group>
              <Button onClick={() => Submit()} variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );

  // return (
  //   <div>
  //     <button onClick={
  //       () => {
  //         dispatch(adduser({name:"K", email:"KK"}));
  //       }
  //     }>ADD USER</button>
      
  //       <form onSubmit={ Submit }>
  //           <h4>Add data</h4>
  //           <input placeholder='Name' name='name' />
  //           <input placeholder='Email' name='email' />
  //           <button onSubmit={ Submit }>Add</button>
  //       </form>
  //   </div>
  // )
}

export default AddData