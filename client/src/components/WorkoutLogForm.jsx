import React, { useState } from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';

const WorkoutLogForm = () => {
  const [workoutType, setWorkoutType] = useState('');
  const [sets, setSets] = useState('');
  const [reps, setReps] = useState('');
  const [duration, setDuration] = useState('');

  const handleWorkoutTypeChange = (event) => {
    setWorkoutType(event.target.value);
  };

  const handleSetsChange = (event) => {
    setSets(event.target.value);
  };

  const handleRepsChange = (event) => {
    setReps(event.target.value);
  };

  const handleDurationChange = (event) => {
    setDuration(event.target.value);
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

      <Form.Group as={Row} controlId="setsRepsDuration">
        <Form.Label column sm={2}>
          Sets
        </Form.Label>
        <Col sm={2}>
          <Form.Control type="text" value={sets} onChange={handleSetsChange} />
        </Col>

        <Form.Label column sm={2}>
          Reps
        </Form.Label>
        <Col sm={2}>
          <Form.Control type="text" value={reps} onChange={handleRepsChange} />
        </Col>

        <Form.Label column sm={2}>
          Duration (min)
        </Form.Label>
        <Col sm={2}>
          <Form.Control type="text" value={duration} onChange={handleDurationChange} />
        </Col>
      </Form.Group>

      <Button variant="primary" type="submit">
        Log Workout
      </Button>
    </Form>
  );
};

export default WorkoutLogForm;
