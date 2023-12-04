import Comment from "./Comment";

const testComment = {
  username: "SuperBrawnyBro",
  text: "Bro this workout really streches your tendons!"
}

const textComment2 = {
  username: "YogaMaster",
  text: "This is definatly realy recommanded for all people new to yoga!"
}

function CommentsSection({ comments }) {
  return (
    <>
      <h4>Comments</h4>

      <div className="d-flex flex-column gap-3">
        <Comment />
        <Comment comment={ testComment }/>
        <Comment comment={ textComment2 }/>
      </div>
    </>
  );
}

export default CommentsSection;