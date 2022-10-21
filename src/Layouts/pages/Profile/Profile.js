import React, { useContext, useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

function Profile() {
  const { user } = useContext(AuthContext);
  const photoUrlRef = useRef(user.photoURL);
  const [name, setName] = useState(user?.displayName);
  const [photoURL, setPhotoURL] = useState(user?.photoURL);
  const handleProfileUpdate = (event) => {
    event.preventDefault();
    console.log(photoUrlRef.current.value);
  };
  const handleNameChange = (event) => {
    alert(event.target.value);
  };
  return (
    <Form onSubmit={handleProfileUpdate}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          readOnly
          defaultValue={user?.email}
          type="email"
          placeholder="Enter email"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicUserName">
        <Form.Label>User Name</Form.Label>
        <Form.Control
          type="text"
          onChange={handleNameChange}
          placeholder="User Name"
          defaultValue={name}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPhotoURL">
        <Form.Label>PhotoURL</Form.Label>
        <Form.Control
          ref={photoUrlRef}
          type="text"
          defaultValue={photoURL}
          placeholder="PhotoURL"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Profile;
