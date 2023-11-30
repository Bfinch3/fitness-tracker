import DropdownFilter from "./DropdownFilter";
import WorkoutItem from "./WorkoutItem";

function WorkoutList() {
  const strechingTags = [
    {name: "Low Intensity", type: "success"},
    {name: "Stretching", type: "secondary"}
  ];

  const runningTags = [
    {name: "High Intensity", type: "danger"},
    {name: "Running", type: "secondary"}
  ];

  const yogaTags = [
    {name: "Low Intensity", type: "success"},
    {name: "Yoga", type: "secondary"}
  ];

  return (
    <div className="card flex-grow-1 box-shadow col-7">
      <div className="card-header">
        <h4 className="card-title d-flex flex-wrap gap-2 mb-0 mt-1">
          <span>Your Workouts</span>
          <DropdownFilter text="Low Intensity" />
          <DropdownFilter isAdd={true} />
        </h4>
      </div>
      <div className="card-body">
        <div className="d-flex flex-column gap-3">
          <WorkoutItem title="Stretching" tags={ strechingTags } description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, ullam veritatis fugiat quis nobis eveniet voluptate alias, quaerat asperiores voluptas distinctio ipsa libero. Enim nesciunt vel, vero aliquam maxime velit."/>
          <WorkoutItem title="Running" tags={ runningTags }  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, ullam veritatis fugiat quis nobis eveniet voluptate alias, quaerat asperiores voluptas distinctio ipsa libero. Enim nesciunt vel, vero aliquam maxime velit."/>
          <WorkoutItem title="Yoga" tags={ yogaTags } description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, ullam veritatis fugiat quis nobis eveniet voluptate alias, quaerat asperiores voluptas distinctio ipsa libero. Enim nesciunt vel, vero aliquam maxime velit."/>
        </div>
      </div>
    </div>
  );
}

export default WorkoutList;