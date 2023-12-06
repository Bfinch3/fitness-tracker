import DropdownFilter from "./DropdownFilter";
import WorkoutSummary from "./WorkoutSummary";

function WorkoutList() {

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
          {/* // get array of workouts from loggedin user 
          include workout ID
          type, title, notes

          */}
          {workoutListData.map((workout) => (
            <WorkoutSummary
              key={workout._id}
              _id={workout._id}
              type={workout.Type}
              title={workout.Title}
              notes={workout.Notes}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default WorkoutList;