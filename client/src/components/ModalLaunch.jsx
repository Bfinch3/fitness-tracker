import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import WorkoutLogFormModal from './WorkoutLogFormModal'; // Adjust the import path

const ParentComponent = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleHideModal = () => setShowModal(false);

  return (
    <>
      <Button variant="primary" onClick={handleShowModal}>
        Log New Workout
      </Button>

      <WorkoutLogFormModal show={showModal} onHide={handleHideModal} />
    </>
  );
};

export default ParentComponent;
