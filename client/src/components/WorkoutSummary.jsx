// these are the summary workout cards that appear on the workoutlist
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const style = {
  textDecoration: "none",
};

//summary needs to include type, title, and notes
function WorkoutSummary({ type, title, notes, _id }) {
  // find workout array
  // desconstruct to pull out type, title, notes
  return (
    <Link to={`/workout/${_id}`}>
    <Card>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle>{type}</Card.Subtitle>
        <Card.Text>{notes}</Card.Text>  
      </Card.Body>
    </Card>
    </Link>
  );
}

export default WorkoutSummary;
