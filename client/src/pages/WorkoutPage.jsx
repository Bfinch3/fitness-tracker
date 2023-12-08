// workout/:_id

import { useQuery } from "@apollo/client";
import Workout from "../components/Workout";
import { useParams } from "react-router-dom";
// import CommentsSection from "../components/CommentsSection";
import CommentList from "../components/CommentList";
import CommentForm from "../components/CommentForm";
import { Card } from "react-bootstrap";

import { QUERY_WORKOUT } from "../utils/queries";

const SingleWorkoutPage = () => {
  const { workoutId } = useParams();

  const { loading, data } = useQuery(QUERY_WORKOUT, {
    variables: { workoutId },
  });

  const workout = data?.workout || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  const mainDivStyle = {
    margin: "0 auto",
    maxWidth: "1200px"
  };



  return (
    <div className="d-flex gap-2 p-2 align-items-start flex-wrap" style={ mainDivStyle }>
      <Workout/>
    </div>
  // <Card>
  //   <Card.Title>{workout.workoutTitle}</Card.Title>
  //   {/* <div className="justify-self-end d-flex gap-2">
  //           <button className="btn btn-primary">
  //             <i className="fa-solid fa-pencil"></i>
  //           </button>
  //           <button className="btn btn-danger">
  //             <i className="fa-solid fa-trash"></i>
  //           </button>
  //         </div> */}
  //   <Card.Body>
  //     <Card.Text>{workout.workoutType}</Card.Text>
  //     <Card.Text>{workout.workoutUrl}</Card.Text>
  //     <Card.Text>{workout.workoutText}</Card.Text>
  //     {/* <div className="my-5">
  //       <CommentList comments={thought.comments} />
  //     </div>
  //     <div className="m-3 p-4" style={{ border: '1px dotted #1a1a1a' }}>
  //       <CommentForm thoughtId={thought._id} />
  //     </div> */}
  //   </Card.Body>
  // </Card>

  )
}

export default SingleWorkoutPage;