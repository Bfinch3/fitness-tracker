import React, { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
// import {ADD_FRIEND} from "../utils/mutations";
import { useMutation } from '@apollo/client';

const AddFriendModal = ({ show, onHide }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();

    // Perform search logic here (e.g., make an API call to search for friends)
    console.log('Search term:', searchTerm);

    // Close the modal after searching
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Add Friend</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form onSubmit={handleSearchSubmit}>
          <Form.Group controlId="searchTerm">
            <Form.Label>Search by Username or Email</Form.Label>
            <Form.Control type="text" value={searchTerm} onChange={handleSearchTermChange} />
          </Form.Group>

          <Button variant="primary" type="submit">
            Search
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default AddFriendModal;
