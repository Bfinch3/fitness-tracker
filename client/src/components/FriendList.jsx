// FriendList.jsx
import Auth from "../utils/auth";
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";
import Friend from "./Friend";

function FriendList() {
  const { loading, data } = useQuery(QUERY_ME, {
    variables: { userId: Auth.getProfile().data._id },
  });

  console.log(data);

  const friends = data?.user?.friends ?? [];

  return (
    <div>
      <Friend friends={friends} />
    </div>
  );
}

export default FriendList;
