import Workout from "../components/Workout";

const mainDivStyle = {
  margin: "0 auto",
  maxWidth: "1200px"
};

const links = [
  {
    text: "Yoga Tutorial",
    url: "https://www.youtube.com"
  },
  {
    text: "Yoga Tutorial Pt.2",
    url: "https://youtube.com"
  }
]

const testComments = [
  {
    username: "SuperBrawnyBro",
    text: "This yoga session really streaches your tendons!"
  },
  {
    username: "YogaMaster",
    text: "Yeah this is defanatly recommended for yoga beginners"
  }
];

const testText = "### Wow what a workout!\nI ran like Forrest Gump yesterday; I did crosscountry!"

function WorkoutPage() {
  return (
    <div className="d-flex gap-2 p-2 align-items-start flex-wrap" style={ mainDivStyle }>
      <Workout title="A really good yogo session" text={testText} comments={testComments} links={links} type="Yoga"/>
    </div>
  )
}

export default WorkoutPage;