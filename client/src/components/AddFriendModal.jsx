import React, { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
// import {ADD_FRIEND} from "../utils/mutations";
import { useMutation } from "@apollo/client";
import { useQuery } from "@apollo/client";
import { QUERY_EMAIL } from "../utils/queries";
import { ADD_FRIEND } from "../utils/mutations";

const AddFriendModal = ({ show, onHide }) => {
  const [searchTerm, setSearchTerm] = useState("");
  // const {searchEmail, {error, data}} = useQuery(QUERY_EMAIL);
  const [results, setResults] = useState([]);
  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const [addNewFriend, { error }] = useMutation(ADD_FRIEND);

  const { data, fetchMore } = useQuery(QUERY_EMAIL, {
    variables: { searchTerm },
  });
  const handleSearchSubmit = async (event) => {
    event.preventDefault();
    fetchMore({
      variables: {
        searchTerm: searchTerm,
      },
    });

    setResults(data.friendEmail);
    // Perform search logic here (e.g., make an API call to search for friends)
    // Query for the search term that will populate a list of users with a button that says follow

    // when that button is clicked, that user will be added to your array of friends
    // that is a mutation updating current user's friends array


    console.log("Search term:", searchTerm);

    // Close the modal after searching
    // onHide();
  };

  const addFriend = async (event, id) => {
    event.preventDefault();
    addNewFriend({
      variables: {
        friendId: id,
      },
    });

    // Perform search logic here (e.g., make an API call to search for friends)
    // Query for the search term that will populate a list of users with a button that says follow

    // when that button is clicked, that user will be added to your
  }

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Add Friend</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form onSubmit={handleSearchSubmit}>
          <Form.Group controlId="searchTerm">
            <Form.Label>Search by Email</Form.Label>
            <Form.Control
              type="text"
              value={searchTerm}
              onChange={handleSearchTermChange}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Search
          </Button>
        </Form>
        <ul>
          {results.map((result) => (
            <div key={result._id}>
              <h4>{result.email}</h4>
              <Button onClick={(event) => {addFriend(event, result._id)}}>Follow</Button>
              {/* //addFriend function that run onSubmit, takes in the id and adds the friend */}
            </div>
          ))}
        </ul>
      </Modal.Body>
    </Modal>
  );
};

export default AddFriendModal;
