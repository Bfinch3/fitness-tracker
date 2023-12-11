

function DropdownFilter({children}) {
  return (
    <select className="btn rounded-pill btn-primary btn-sm d-inline-flex gap-2 align-items-center">
      <option>Filter by Type</option>
      <option>Strength</option>
      <option>Meditation</option>
      <option>Yoga</option>
      <option>Cardio</option>
      <option>Cycling</option>
      <option>Outdoor</option>
      <option>Running</option>
      <option>Walking</option> 
      <option>Stretching</option> 
    </select>
  );
}

export default DropdownFilter;