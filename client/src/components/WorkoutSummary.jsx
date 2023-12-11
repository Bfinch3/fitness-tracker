// these are the summary workout cards that appear on the workoutlist
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const style = {
  textDecoration: "none",
};

//summary needs to include type, title, and notes
function WorkoutSummary({ type, title, notes, _id }) {

  // turn markdown in to plain text for summary and limit characters
  function plainText(text, maxLength = 100) {
    return text.replace(/[\][=~`#|*_-]/g, "").substring(0, maxLength);
  }
  // find workout array
  // desconstruct to pull out type, title, notes
  return (
    <Link to={`/workout/${_id}`} style={style}>
    <Card>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle>{type}</Card.Subtitle>
        <Card.Text>{plainText(notes)}</Card.Text>  
      </Card.Body>
    </Card>
    </Link>
  );
}

export default WorkoutSummary;
