import Aside from "../components/Aside";
import WorkoutList from "../components/WorkoutList";
import ModalLaunch from "../components/ModalLaunch";
import AddFriendModalLaunch from "../components/AddFriendModalLaunch";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import DropdownFilter from "../components/DropdownFilter";

const mainDivStyle = {
  margin: "0 auto",
  maxWidth: "1200px",
};

export default function UserPage() {
  return (
    <div class="flex-wrap: wrap">
      
      <div className="d-flex gap-2 p-2 align-items-start flex-wrap"
        style={mainDivStyle} align="left" >
        <ModalLaunch />
        <AddFriendModalLaunch />
        {/* <DropdownFilter isAdd={true}/> */}
      </div>
      <Card>
      <div class="card-block flex-wrap">
        <WorkoutList />
      </div>
      <div>
        <Aside />
      </div>
      </Card>
      <div>
        
      </div>
    </div>
  );
}
