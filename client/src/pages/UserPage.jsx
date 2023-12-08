import Aside from '../components/Aside';
import WorkoutList from '../components/WorkoutList';
import ModalLaunch from '../components/ModalLaunch';
import AddFriendModal from '../components/AddFriendModal';
import AddFriendModalLaunch from '../components/AddFriendModalLaunch';

const mainDivStyle = {
    margin: "0 auto",
    maxWidth: "1200px"
  };

export default function UserPage() {
  //do a query and pass that into workoutlist (that send that array into workoutlist)
    return (
        <div className="d-flex gap-2 p-2 align-items-start flex-wrap" style={ mainDivStyle }>
        <ModalLaunch/>
        <WorkoutList/>
        <Aside/>
        <AddFriendModalLaunch/>
</div>
    );
  }
