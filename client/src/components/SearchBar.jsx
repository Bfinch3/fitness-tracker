function SearchBar(){
  const style = {
    maxWidth: "600px",
    margin: ".5rem .5rem .5rem 0"
  }

  return (
    <form className="d-flex" role="search" style={style}>
      <div className="input-group" data-bs-theme="light">
        <input className="form-control" type="search" placeholder="Search"></input>
        <button className="btn btn-dark" type="submit">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
    </form>
  );
}

export default SearchBar;