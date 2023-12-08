import AddFriendModalLaunch from "./AddFriendModal";

const profilePictureStyle = {
  height: "2in",
  maxHeight: "2in",
  backgroundColor: "var(--dark)",
  backgroundImage: "url(/default-pfp.jpg",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
  boxShadow: "0 0 15px var(--dark)"
};

function Aside() {
  return (
    <><div className="card col-5 box-shadow aside overflow-hidden">
      <div style={profilePictureStyle}></div>
      <AddFriendModalLaunch/>
      <div className="card-body">
        <h5 className="card-title">Name</h5>
        <h6 className="card-subtitle text-body-secondary mb-2">Date Joined</h6>

        <ul className="card-text">My friends:</ul>
        {/* //map through friend array */}
        
      </div>
      
    </div>
    </>
    
    
    
  );
}

export default Aside;