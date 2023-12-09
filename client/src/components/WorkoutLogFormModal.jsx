import React, { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { ADD_WORKOUT } from "../utils/mutations";
import { useMutation } from "@apollo/client";
import { QUERY_WORKOUTS } from "../utils/queries";

const WorkoutLogFormModal = ({ show, onHide }) => {
  const [workoutType, setWorkoutType] = useState("");
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [notes, setNotes] = useState("");

  const [addWorkout, { error }] = useMutation(ADD_WORKOUT, {
    refetchQueries: [QUERY_WORKOUTS]
  });


  const handleSubmit = async (event) => {
    event.preventDefault();
    // Perform any necessary validation or data processing here
    try {
      const { data } = await addWorkout({
        variables: {
          workoutType,
          workoutTitle: title,
          url,
          workoutText: notes
        },
      });

      setWorkoutType("");
      setTitle("");
      setUrl("");
      setNotes("");
      onHide();
    } catch (err) {
      console.error(err);
    }
  };
  // Close the modal after submitting
  // onHide();
  const handleWorkoutTypeChange = (event) => {
    setWorkoutType(event.target.value);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleUrlChange = (event) => {
    setUrl(event.target.value);
  };

  const handleNotesChange = (event) => {
    setNotes(event.target.value);
  };
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Log Workout</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="workoutType">
            <Form.Label>Workout Type</Form.Label>
            <Form.Select size="sm" value={workoutType} onChange={handleWorkoutTypeChange}>
                <option>Select One</option>
                <option>Strength</option>
                <option>Meditation</option>
                <option>Yoga</option>
                <option>Cardio</option>
                <option>Cycling</option>
                <option>Outdoor</option>
                <option>Running</option>
                <option>Walking</option>
                <option>Stretching</option>
            </Form.Select>
            {/* <Form.Control
              as="select"
              value={workoutType}
              onChange={handleWorkoutTypeChange}
            > */}
            
              {/* Options... */}
            {/* </Form.Control> */}
          </Form.Group>

          <Form.Group controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              value={title}
              onChange={handleTitleChange}
            />
          </Form.Group>

          <Form.Group controlId="url">
            <Form.Label>URL</Form.Label>
            <Form.Control type="text" value={url} onChange={handleUrlChange} />
          </Form.Group>

          <Form.Group controlId="notes">
            <Form.Label>Notes</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={notes}
              onChange={handleNotesChange}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Log Workout
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default WorkoutLogFormModal;
