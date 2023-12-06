// these are the summary workout cards that appear on the workoutlist

const style = {
  textDecoration: "none"
};

//summary needs to include type, title, and notes
function WorkoutSummary({ title, description, tags }) {
  return (
    <a href="" style={style}>
    <div className="card workout-item">
      <div className="card-body">
        <h5 className="card-title d-flex flex-wrap gap-2">
          { title }
          { tags.map((tag) => (
            <span className={`badge bg-${tag.type} rounded-pill`}>{ tag.name }</span>
          )) }
        </h5>
        { description }
      </div>
    </div>
    </a>
  );
}

export default WorkoutSummary;