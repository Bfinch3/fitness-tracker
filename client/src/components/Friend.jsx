import React from "react";
import Card from "react-bootstrap/Card";

function Friend({ friends }) {
  // Check if friends is defined before mapping
  if (!friends) {
    return
  }

  return (
    <>
      <Card>
        <Card.Header>
          Friends
          <ul>
            {friends.map((friend) => (
              <li key={friend._id}>
                {friend.name}
              </li>
            ))}
          </ul>
        </Card.Header>
      </Card>
    </>
  );
}

export default Friend;
