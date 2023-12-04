import WorkoutLinks from "./WorkoutLinks";
import CommentsSection from "./CommentsSection";

const profilePictureStyle = {
  height: "0.5in",
  borderRadius: "0.25in"
};

function Workout({ title, type, links, comments }) {

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
          <span>Summary</span>
          <i className="fa-solid fa-caret-right"></i>
          <span className="badge bg-secondary rounded-pill p-2 d-inline-flex gap-2">
            <i className="fa-solid fa-bookmark"></i>
            {type}
          </span>
        </div>
      </div>
      <div className="card-body">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, eos. Iusto eligendi accusamus iste culpa reprehenderit ab fuga est aliquam molestiae optio eos hic enim, corrupti placeat nemo voluptatem vel.</p>

        <WorkoutLinks links={links}/>

        <hr/>

        <CommentsSection comments={comments} />
      </div>
    </div>
  )
}

export default Workout;