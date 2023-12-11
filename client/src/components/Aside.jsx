import AddFriendModalLaunch from "./AddFriendModalLaunch";

import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";
import { ADD_FRIEND } from "../utils/mutations";

const profilePictureStyle = {
  height: "2in",
  maxHeight: "2in",
  backgroundColor: "var(--dark)",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
  boxShadow: "0 0 15px var(--dark)",
};

function Aside() {
  const { loading, data, error } = useQuery(QUERY_ME);
  console.log("loading:", loading);
  console.log("data:", data);
  console.log("error:", error);

  const [addFriend] = useMutation(ADD_FRIEND);
  const me = data?.me;

  const [clickedOnce, setClickedOnce] = useState(false);

  const handleAddFriend = async (friendId) => {
    try {
      if (clickedOnce) {
        // Perform the mutation
        await addFriend({
          variables: { friendId },
          refetchQueries: [{ query: QUERY_ME }],
        });

        // Reset the click state
        setClickedOnce(false);
      } else {
        // Set the click state to true
        setClickedOnce(true);

        // Set a timeout to reset the click state after a certain period (e.g., 500ms)
        setTimeout(() => {
          setClickedOnce(false);
        }, 500);
      }
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    console.error(error);
    return <p>Error loading data</p>;
  }

  console.log("Data:", data);

  return (
    <>
      <div className="card col-5 box-shadow aside overflow-hidden md-order-1">
        <div style={{ ...profilePictureStyle, backgroundImage: me?.profilePicture ? `url(${me.profilePicture})` : "url(/default-pfp.jpg)" }}></div>

        <div className="card-body">
          <h5 className="card-title">{me?.name || "Unknown"}</h5>
          <h6 className="card-subtitle text-body-secondary mb-2">
            Date Joined: {me?.createdAt ? new Date(me.createdAt).toLocaleString() : "Unknown"}
          </h6>
          <hr />
          <AddFriendModalLaunch handleAddFriend={handleAddFriend}/>
          { me?.friends.length > 0 ?
            <h5 className="card-title mt-2 d-flex align-items-center gap-2">
              Friends <h6 className="m-0"><span className="badge text-bg-secondary rounded-pill">{me?.friends.length}</span></h6>
            </h5> :
            <h5 className="card-title mt-2">No friends yet.</h5>
          }
          <ul class="list-group list-group-flush overflow-hidden">
          { me?.friends.map((friend) => (
            <li class="list-group-item d-flex align-items-center gap-2" key={friend._id}>
              <img src="/assets/images/default-pfp.jpg" className="rounded-pill" style={{height: "0.3in"}} />
              <span className="text-nowrap">{friend.name}</span>
            </li>
            ))
          }
          </ul>
        </div>
      </div>
    </>
  );
}

export default Aside;