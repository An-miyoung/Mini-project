import "../css/navi.css";
import { NavLink } from "react-router-dom";
import Top from "../assets/images/top.png";
import New from "../assets/images/new.png";
import Ask from "../assets/images/ask.png";
import Show from "../assets/images/show.png";
import Jobs from "../assets/images/jobs.png";

export default function BottomNavi() {
  return (
    <div className="navi">
      <div className="navi__top items">
        <NavLink to="/top">
          <img src={Top} alt="TOP" />
          <h3>TOP</h3>
        </NavLink>
      </div>
      <div className="navi__new items">
        <NavLink to="/new">
          <img src={New} alt="NEW" />
          <h3>NEW</h3>
        </NavLink>
      </div>
      <div className="navi__ask items">
        <NavLink to="/ask">
          <img src={Ask} alt="ASK" />
          <h3>ASK</h3>
        </NavLink>
      </div>
      <div className="navi__show items">
        <NavLink to="/show">
          <img src={Show} alt="SHOW" />
          <h3>SHOW</h3>
        </NavLink>
      </div>
      <div className="navi__job items">
        <NavLink to="/job">
          <img src={Jobs} alt="JOB" />
          <h3>JOB</h3>
        </NavLink>
      </div>
      <button
        style={{ position: "fixed", top: "746px", left: "360px" }}
        onClick={() => {
          const divPage = document.getElementById("div-page");
          divPage.scrollTop = 0;
        }}
      >
        Top
      </button>
    </div>
  );
}
