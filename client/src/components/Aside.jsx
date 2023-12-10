import React from "react";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";
import { ADD_FRIEND } from "../utils/mutations";
import { format, parseISO, isValid } from 'date-fns';

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
  const [addFriend] = useMutation(ADD_FRIEND);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    console.error("Error fetching data:", error);
    return <p>Error fetching data: {error.message}</p>;
  }

  const me = data?.me;

  if (!me) {
    console.error("No 'me' data found");
    return <p>No user data found</p>;
  }

  // Format the date if it's valid
  const formattedDate = me.createdAt && isValid(parseISO(me.createdAt))
    ? format(parseISO(me.createdAt), 'MM/dd/yyyy')
    : "Unknown";

  console.log("me:", me);

  return (
    <div className="card col-5 box-shadow aside overflow-hidden">
      <div style={{ ...profilePictureStyle, backgroundImage: me?.profilePicture ? `url(${me.profilePicture})` : "url(/default-pfp.jpg)" }}></div>

      <div className="card-body">
        <h5 className="card-title">{me?.name || "Unknown"}</h5>
        <h6 className="card-subtitle text-body-secondary mb-2">
          Date Joined: {formattedDate}
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
  );
}

export default Aside;
