import Auth from "../utils/auth";
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";
import Friend from "./Friend";

function FriendList() {
  const { loading, data } = useQuery(QUERY_ME, {
    variables: { userId: Auth.getProfile().data._id },
  });
console.log(data);
  return (
    <div>
      {(data?.user.friends??[]).map((friends.name) => (
        <Friend 
            key={user._id} 
            _id={user._id} 
            friends={user.friends.name} 
        />
      ))}
    </div>
  );
}

export default FriendList;
