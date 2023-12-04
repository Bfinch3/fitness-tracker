const profilePictureStyle = {
  height: "0.5in",
  borderRadius: "0.25in"
};

function Comment({ comment }) {

  return comment ? (
    <div className="d-flex gap-2">
      <img style={profilePictureStyle} src="/default-pfp.jpg"></img>
      <div className="flex-grow-1">
        <h5>{ comment.username }</h5>
        <p>{ comment.text }</p>
        <button className="btn btn-secondary-outline btn-sm p-0">Add Reply</button>
      </div>
    </div>
  ) : (
    <div className="d-flex gap-2">
      <img style={profilePictureStyle} src="/default-pfp.jpg"></img>
      <form className="d-flex flex-grow-1 align-items-start gap-2" role="add-comment">
        <textarea className="form-control" type="text" placeholder="Add comment"></textarea>
        <button className="btn btn-primary">
          <i className="fa fa-paper-plane"></i>
        </button>
      </form>
    </div>
  );
}

export default Comment;