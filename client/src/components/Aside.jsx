import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";
import { useMutation } from "@apollo/client";
import { ADD_FRIEND } from "../utils/mutations";

const profilePictureStyle = {
  height: "2in",
  maxHeight: "2in",
  backgroundColor: "var(--dark)",
  backgroundImage: "url(/default-pfp.jpg)",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
  boxShadow: "0 0 15px var(--dark)",
};

function Aside() {
  const { loading, data } = useQuery(QUERY_ME);

  if (loading) {
    return <p>Loading...</p>;
  }

  const { me } = data || {};

  const handleAddFriend = async (friendId) => {
    try {
      // Check if the friend is already in the list
      if (me.friends.some((friend) => friend._id === friendId)) {
        console.log("Friend already added");
        return;
      }

      // Perform the mutation
      await addFriend({
        variables: { friendId },
        update: (cache, { data }) => {
          // Update the cache to reflect the new state
          const updatedData = cache.readQuery({ query: QUERY_ME });
          cache.writeQuery({
            query: QUERY_ME,
            data: {
              me: {
                ...updatedData.me,
                friends: [...updatedData.me.friends, data.addFriend.friend],
              },
            },
          });
        },
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="card col-5 box-shadow aside overflow-hidden">
        <div style={profilePictureStyle}></div>

        <div className="card-body">
          <h5 className="card-title">{me?.name || "Unknown"}</h5>
          <h6 className="card-subtitle text-body-secondary mb-2">
            Date Joined: {me?.createdAt ? new Date(me.createdAt).toLocaleString() : "Unknown"}
          </h6>
          <ul className="card-text">
            My friends:
            {me?.friends && me.friends.length > 0 ? (
              <ul>
                {me.friends.map((friend) => (
                  <li key={friend._id}>{friend.name || "Unknown"}</li>
                ))}
              </ul>
            ) : (
              <p>No friends yet.</p>
            )}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Aside;