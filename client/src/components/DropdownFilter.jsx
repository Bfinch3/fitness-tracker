

function DropdownFilter({ setFilterType }) {

  function onChange(e) {
    const filterType = e.target.value != "none" ? e.target.value : null;
    setFilterType(filterType);
  }

  return (
    <select onChange={onChange} className="btn rounded-pill btn-primary btn-sm d-inline-flex gap-2 align-items-center px-2">
      <option value="none">Filter by Type</option>
      <option value="Strength">Strength</option>
      <option value="Meditation">Meditation</option>
      <option value="Yoga">Yoga</option>
      <option value="Cardio">Cardio</option>
      <option value="Cycling">Cycling</option>
      <option value="Outdoor">Outdoor</option>
      <option value="Running">Running</option>
      <option value="Walking">Walking</option> 
      <option value="Stretching">Stretching</option> 
    </select>
  );
}

export default DropdownFilter;