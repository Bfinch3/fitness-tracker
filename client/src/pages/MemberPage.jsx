import Aside from '../components/Aside'
import WorkoutList from '../components/WorkoutList'

const mainDivStyle = {
    margin: "0 auto",
    maxWidth: "1200px"
  };

export default function MemberPage() {
    return (
        <div className="d-flex gap-2 p-2 align-items-start flex-wrap" style={ mainDivStyle }>
        <WorkoutList/>
        <Aside/>
</div>
    );
  }
