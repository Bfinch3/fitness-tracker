// workout/:_id

import { useQuery } from "@apollo/client";
import Workout from "../components/Workout";
import { useParams } from "react-router-dom";
import CommentsSection from "../components/CommentsSection";
import { Card } from "react-bootstrap";

// import { QUERY_WORKOUT } from "../utils/queries";

const SingleWorkoutPage = () => {
  // const { workoutId } = useParams();

  // const { loading, data } = useQuery(QUERY_WORKOUT, {
  //   variables: { workoutId },
  // });

  // const workout = data?.workout || {};

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  const workoutListData = [
    {
        _id: 1, 
        Type: "Yoga",
        Title: "30 min Yoga Flow",
        Url: "https://members.onepeloton.com/classes/yoga?modal=classDetailsModal&classId=5b0c7818d280400aaa4a83b1d0ea0c74",
        Notes: "I only did the first half, but there was a flowing section that was like dancing that I loved. A lot of the movements were fluid. Also, the music was celebrating the 75th anniversary of Atlantic Records."
    },
    {
      _id: 2,
        Type: "Meditation",
        Title: "10 min Courage Meditation",
        Url: "https://members.onepeloton.com/classes/meditation?modal=classDetailsModal&classId=02d7567767b54bb9ab2027325180c10e",
        Notes: "Included oceanic breathing and the mini-self avatar entering through your third eye and sitting on a golden throne in your heart."
    },
    {
        _id: 3, 
        Type: "Cycling",
        Title: "30 min 90s Rock Ride",
        Url: "https://members.onepeloton.com/classes/cycling?modal=classDetailsModal&classId=5e133499066d40fd85f14d318ab9373f",
        Notes: "Great playlist including Pearl Jam, Third Eye Blind, Metallica, Counting Crows, Better Than Ezra, Smashing Pumpkins!"
    }
]




  return (
    // <div className="d-flex gap-2 p-2 align-items-start flex-wrap" style={ mainDivStyle }>
    //   <Workout/>
    // </div>
  <Card>
    <Card.Title>{Title}</Card.Title>
    <div className="justify-self-end d-flex gap-2">
            <button className="btn btn-primary">
              <i className="fa-solid fa-pencil"></i>
            </button>
            <button className="btn btn-danger">
              <i className="fa-solid fa-trash"></i>
            </button>
          </div>
    <Card.Body>
      <Card.Text>{workout.}</Card.Text>
      <Card.Text>Workout URL</Card.Text>
      <Card.Text>Workout Notes</Card.Text>
      <Card.Text>{CommentsSection}</Card.Text>
    </Card.Body>
  </Card>

  )
}

export default SingleWorkoutPage;