import SearchBar from './SearchBar';
import ThemeToggler from './ThemeToggler';

function NavigationBar({ theme, setTheme }){

  const navColor = {
    backgroundColor: theme == "light" ? "#0d6efd" : "#0a54c4"
  };

  return (
    <nav className="navbar navbar-expand-md" style={navColor} data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src="/assets/images/logo/32.png"></img>
          Fitness Tracker
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav-content" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="nav-content">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Settings</a>
            </li>
          </ul>
          <SearchBar theme={theme}/>
          <ThemeToggler theme={theme} setTheme={setTheme}/>
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;