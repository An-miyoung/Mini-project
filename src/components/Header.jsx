import "../css/header.css";
import { NavLink } from "react-router-dom";
import JobImg from "../assets/images/job-img.png";
import Logo from "../assets/images/logo.png";
import ThreeDot from "../assets/images/3Dot.png";

export default function Header({ name }) {
  // console.log(name);
  return (
    <div className="header">
      <div className={`inner-box ${name}`}>
        <img src={JobImg} alt="rocket" />
        <div className="title-container">
          <div className="title">
            <h1 className={`inner-box ${name}`}>
              {name === "job" ? "JOBS" : name.toUpperCase()}
            </h1>
          </div>
          <NavLink to="/about" className={`footer inner-box ${name}`}>
            <div className="logo">
              <img src={Logo} alt="detail" />
            </div>
            <div className="space"></div>
            <div className="dots">
              <img src={ThreeDot} alt="detail" />
            </div>
          </NavLink>
        </div>
        <div className={`search-bar ${name}`}>SEARCH-BAR</div>
      </div>
    </div>
  );
}
