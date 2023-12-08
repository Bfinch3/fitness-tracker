// this feeds WorkoutPage

import WorkoutLinks from "./WorkoutLinks";
import CommentsSection from "./CommentsSection";
import WorkoutList from "./WorkoutList";

const profilePictureStyle = {
  height: "0.5in",
  borderRadius: "0.25in"
};

function Workout({ workoutType, title, url, notes, comments }) {
  return (
    <div className="card flex-grow-1 box-shadow col-7">
      <div className="card-header">
        <h4 className="card-title d-flex gap-2 align-items-center mb-0">
          <img style={profilePictureStyle} src="/default-pfp.jpg"></img>
          <span>{ title }</span>

          <span className="flex-grow-1"></span>

          <div className="justify-self-end d-flex gap-2">
            <button className="btn btn-primary">
              <i className="fa-solid fa-pencil"></i>
            </button>
            <button className="btn btn-danger">
              <i className="fa-solid fa-trash"></i>
            </button>
          </div>
        </h4>

        <div className="d-flex gap-2 align-items-center pt-2">
          {workoutType}
        </div>
      </div>
      <div className="card-body">
        <p>{title}</p>
        { url }

        <hr/>

        <CommentsSection comments={comments} />
      </div>
    </div>
  );
}

export default Workout;