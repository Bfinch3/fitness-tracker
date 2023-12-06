// added to Workout.jsx, this is where the url will go

const linkStyle = {
  zIndex: 5,
  boxShadow: "0 0 5px var(--darker)"
};

function WorkoutLinks({links}) {

  if(!links) return;

  return (
    <>
      <h4>Links</h4>
      <div className="d-flex flex-column gap-2">
        { links.map((link) => (
            <div className="input-group overflow-hidden" key={link.url}>
              <a className="btn btn-secondary" href={link.url} style={linkStyle}>
                <i className="fa fa-paperclip"></i>
              </a>
              <a className="btn btn-primary text-start flex-grow-1" href={link.url}>
                { link.text }
              </a>
            </div>
          ))
        }
      </div>
    </>
  );
}

export default WorkoutLinks;