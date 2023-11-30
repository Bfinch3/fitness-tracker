function WorkoutItem({ title, description, tags }) {
  return (
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
  );
}

export default WorkoutItem;