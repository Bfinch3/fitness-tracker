import DropdownFilter from "./DropdownFilter";
import WorkoutSummary from "./WorkoutSummary";
import ModalLaunch from "./ModalLaunch";
import { QUERY_WORKOUTS } from "../utils/queries";
import { useQuery } from "@apollo/client";

import Auth from "../utils/auth";
import { useEffect, useState } from "react";

function WorkoutList() {

  const [ filterType, setFilterType ] = useState(null);

  const { loading, data, refetch } = useQuery(QUERY_WORKOUTS, { variables: { userId: Auth.getProfile().data._id } });

  useEffect(() => {
    refetch({type: filterType})
  }, [filterType]);

  return (
    <div className="card flex-grow-1 box-shadow col-7 md-order-2 lg-w-100">
      <div className="card-header d-flex align-items-center">
        <h4 className="card-title d-flex flex-wrap gap-2 mb-0 mt-1">
          <span>My Workouts</span>
          <DropdownFilter setFilterType={setFilterType} />
        </h4>
        <div className="flex-grow-1" />
        <ModalLaunch />
      </div>
      <div className="card-body">
        <div className="d-flex flex-column gap-3">
          {data?.workouts.length === 0 ? (
            <div>No Workouts Found</div>
          ) : (
            data?.workouts.map((workout) => (
              <WorkoutSummary
                key={workout._id}
                _id={workout._id}
                type={workout.workoutType}
                title={workout.workoutTitle}
                notes={workout.workoutText}
              />
            ))
          )}
        </div>
        <div className={ loading ? "spinner-border" : "d-none" } role="status"></div>
      </div>
    </div>
  );
}

export default WorkoutList;