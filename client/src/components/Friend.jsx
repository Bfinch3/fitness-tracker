import Card from "react-bootstrap/Card";

function Friend({ friends }) {
  // if (!friends.length) {
  //   return <h3>No friends yet</h3>;
  // }

  return (
    <>
      <Card>
        <Card.Header>Friends</Card.Header>
        <Card.Body>
          <Card.Text>{friends}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default Friend;
