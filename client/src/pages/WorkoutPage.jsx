// workout/:_id

import { useQuery } from "@apollo/client";
import Workout from "../components/Workout";
import { useParams } from "react-router-dom";
// import CommentList from "../components/CommentList";
// import CommentForm from "../components/CommentForm";
// import { Card } from "react-bootstrap";
// import ModalLaunch from "../components/ModalLaunch";
// import { Link } from "react-router-dom";

import { QUERY_WORKOUT } from "../utils/queries";

const SingleWorkoutPage = () => {
  const { id } = useParams();

  const { loading, data } = useQuery(QUERY_WORKOUT, {
    variables: { workoutId: id },
  });
console.log(data);
  const workout = data?.workout || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  const mainDivStyle = {
    margin: "0 auto",
    maxWidth: "1200px"
  };

  console.log(workout);

  // NOTE: The backend should at one point return the workout object containg a link field with the following format:
  const link = {
    text: workout.url, // The text is shown in place of the url
    url: workout.url
  }

  return (
    <div className="d-flex gap-2 p-2 align-items-start flex-wrap" style={ mainDivStyle }>
      <Workout id={id} title={workout.workoutTitle} type={workout.workoutType} notes={workout.workoutText} link={link} comments={workout.comments} />
    </div>


  )
}

export default SingleWorkoutPage;