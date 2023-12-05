import { isCompositeType } from "graphql";

const lightIconStyle = {
  position: "absolute",
  left: "3rem"
}

function ThemeToggler({ theme, setTheme }) {

  function onClick() {
    setTheme(theme == "light" ? "dark" : theme == "dark" ? "light" : light);
  }

  const buttonTheme = theme == "light" ? "dark" : "light";
  const iconTransform = {
    transform: theme == "light" ? "translate(0%, 0%)" : "translate(-3.1rem, 0%)"
  }

  return (
    <button className={`btn btn-${buttonTheme} overflow-hidden`} onClick={onClick}>
      <i id="theme-toggler-icon" className="fa-solid fa-moon" style={iconTransform}>
        <i className="fa-solid fa-sun" style={lightIconStyle}></i>
      </i>
    </button>
  )
}

export default ThemeToggler;