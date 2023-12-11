import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import AddFriendModal from './AddFriendModal'; // Adjust the import path

const AddFriendModalLaunch = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleHideModal = () => setShowModal(false);


  return (
    <>
      <Button variant="primary" size="sm" onClick={handleShowModal} className="w-100 rounded-pill">
        Add Friend
        <i className="fa fa-user ms-2" />
      </Button>

      <AddFriendModal show={showModal} onHide={handleHideModal} />
    </>
  );
};

export default AddFriendModalLaunch;