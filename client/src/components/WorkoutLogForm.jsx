import React, { useState } from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';

const WorkoutLogForm = () => {
  const [workoutType, setWorkoutType] = useState('');
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [notes, setNotes] = useState('');

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

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform any necessary validation or data processing here i.e sending the workout data to your server
    
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="workoutType">
        <Form.Label>Workout Type</Form.Label>
        <Form.Control as="select" value={workoutType} onChange={handleWorkoutTypeChange}>
          <option value="cardio">Cardio</option>
          <option value="strength">Strength Training</option>
          <option value="meditation">Meditation</option>
          <option value="yoga">Yoga</option>
          <option value="cycling">Cycling</option>
          <option value="outdoor">Outdoor</option>
          <option value="running">Running</option>
          <option value="walking">Walking</option>
          <option value="stretching">Stretching</option>
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="title">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" value={title} onChange={handleTitleChange} />
      </Form.Group>

      <Form.Group controlId="url">
        <Form.Label>URL</Form.Label>
        <Form.Control type="text" value={url} onChange={handleUrlChange} />
      </Form.Group>

      <Form.Group controlId="notes">
        <Form.Label>Notes</Form.Label>
        <Form.Control as="textarea" rows={3} value={notes} onChange={handleNotesChange} />
      </Form.Group>

      <Button variant="primary" type="submit">
        Log Workout
      </Button>
    </Form>
  );
};

export default WorkoutLogForm;