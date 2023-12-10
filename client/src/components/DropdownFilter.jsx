function DropdownFilter({ text, isAdd }) {
  return isAdd ? (
    <button className="btn rounded-pill btn-primary btn-sm d-inline-flex gap-2 align-items-center">
      Filter by Workout Type
      <i className="fa fa-plus"></i>
    </button>
  ) : (
    <button className="btn rounded-pill btn-primary btn-sm d-inline-flex gap-2 align-items-center">
      { text }
      <i className="fa fa-caret-down"></i>
    </button>
  );
}

export default DropdownFilter;