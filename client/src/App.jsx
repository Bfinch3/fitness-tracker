import './App.css'
import Aside from './components/Aside'
import NavigationBar from './components/NavigationBar'
import WorkoutList from './components/WorkoutList'

const mainDivStyle = {
  margin: "0 auto",
  maxWidth: "1200px"
};

function App() {
  return (
    <>
      <NavigationBar/>
      <div className="d-flex gap-2 p-2 align-items-start flex-wrap" style={ mainDivStyle }>
        <WorkoutList/>
        <Aside/>
      </div>
    </>
  )
}

export default App
