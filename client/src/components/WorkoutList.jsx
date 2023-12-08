import DropdownFilter from "./DropdownFilter";
import WorkoutSummary from "./WorkoutSummary";
import { QUERY_WORKOUTS } from "../utils/queries";
import { useQuery } from "@apollo/client";

import Auth from "../utils/auth";

function WorkoutList() {

 const { loading, data } = useQuery(QUERY_WORKOUTS, {
  variables: { userId: Auth.getProfile().data._id },
  
});

  return (
    <div className="card flex-grow-1 box-shadow col-7">
      <div className="card-header">
        <h4 className="card-title d-flex flex-wrap gap-2 mb-0 mt-1">
          <span>My Workouts</span>
          <DropdownFilter text="Low Intensity" />
          <DropdownFilter isAdd={true} />
        </h4>
      </div>
      <div className="card-body">
        <div className="d-flex flex-column gap-3">
          {(data?.workouts??[]).map((workout) => (
            <WorkoutSummary
              key={workout.userId}
              _id={workout.userId}
              type={workout.workoutType}
              title={workout.workoutTitle}
              notes={workout.workoutText}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default WorkoutList;