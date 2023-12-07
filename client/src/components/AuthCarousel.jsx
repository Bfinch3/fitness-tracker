import { useEffect, useState } from "react";
import LoginForm from "../components/LoginForm";
import Signup from "../components/Signup";

function AuthCarousel() {
  const [authForm, setAuthForm] = useState(localStorage.getItem("auth-form") ? localStorage.getItem("auth-form") : "signup");

  useEffect(() => {
    localStorage.setItem("auth-form", authForm);
  }, [authForm]);

  const formTransition = {
    transform: authForm == "login" ? "translate(0%, 0%)" : "translate(-110%, 0%)"
  };

  return (
    <div className="d-flex flex-column align-items-center gap-1 auth-form-size">
      <ul className="nav rounded-pill overflow-hidden bg-light-subtle nav-pills nav-fill w-100 box-shadow">
        <li className="nav-item">
          <button onClick={() => { setAuthForm("login") }} className={`nav-link rounded-0 ${authForm == "login" ? 'active' : ''}`}>Login</button>
        </li>
        <li className="nav-item">
          <button onClick={() => { setAuthForm("signup") }} className={`nav-link rounded-0 ${authForm == "signup" ? 'active' : ''}`}>Signup</button>
        </li>
      </ul>
      <div className="overflow-hidden p-2 md-w-100">
        <div className="d-grid auth-carousel" style={formTransition}>
          <div className="layer"><LoginForm/></div>
          <div className="layer" style={{transform: "translate(110%, 0%)"}}><Signup /></div>
        </div>
      </div>
    </div>
  )
}

export default AuthCarousel;