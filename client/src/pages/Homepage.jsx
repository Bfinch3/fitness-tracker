import { useEffect } from "react";
import AuthCarousel from "../components/AuthCarousel";

const titleStyle = {
  fontSize: "6rem",
  zIndex: "5",
  fontWeight: "",
  textShadow: "0 0 40px rgba(0, 0, 0, 0.5)",
  fontFamily: "'Noto Sans', sans-serif"
};

function formatMainDiv() {
  const mainDiv = document.getElementById("main-div");
  mainDiv.classList.remove("container");
}

export default function Homepage() {

  useEffect(formatMainDiv, []);

  return (
        
    <div id="homepage-main-hero">       
      <div className="d-flex py-3 md-py-3 gap-3 align-items-center xs-flex-column container">
        <div className="flex-grow-1 d-grid">
          <div className="layer xs-text-center d-grid">
            <img src="assets/images/logo/512.png" className="brand-image-glow layer"/>
            <img src="assets/images/logo/512.png" className="brand-image layer"/>
          </div>
          <div className="text-white layer d-flex flex-column-reverse brand-title">
            <div className="">Fitness Tracker</div>
          </div>
        </div>
        {/* The AuthCarousel has both the login and signup forms that can be switched by clicking thier respective tabs */}
        <AuthCarousel />
      </div>
    </div>
  );
}