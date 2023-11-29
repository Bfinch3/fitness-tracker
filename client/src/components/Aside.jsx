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
    <div className="card col-5 box-shadow aside overflow-hidden">
      <div style={profilePictureStyle}></div>
      <div className="card-body">
        <h5 className="card-title">FirstName LastName</h5>
        <h6 className="card-subtitle text-body-secondary mb-2">City, State, Country</h6>

        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione rem consequuntur quaerat tempora dolorum harum nihil aperiam ipsa eaque quos doloribus voluptas vero iusto, porro debitis, placeat maiores dolorem excepturi!</p>
      </div>
    </div>
  );
}

export default Aside;