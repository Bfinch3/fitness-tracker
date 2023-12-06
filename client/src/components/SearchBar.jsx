function SearchBar({theme}){
  const style = {
    maxWidth: "600px",
    margin: ".5rem .5rem .5rem 0"
  }

  const searchButtonTheme = theme == "light" ? "dark" : "light";

  return (
    <form className="d-flex" role="search" style={style}>
      <div className="input-group" data-bs-theme={theme}>
        <input className="form-control" type="search" placeholder="Search"></input>
        <button className={`btn btn-${searchButtonTheme}`} type="submit">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
    </form>
  );
}

export default SearchBar;