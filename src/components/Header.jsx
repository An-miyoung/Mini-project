import "../css/header.css";
import JobImg from "../assets/images/job-img.png";
import Search from "../assets/images/search.png";

export default function Header({ name }) {
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
        </div>
        <div className={`search-bar ${name}`}>
          <div className="logo search">
            <img src={Search} alt="search" />
          </div>
          <form>
            <input type="text" placeholder="Search" />
          </form>
        </div>
      </div>
    </div>
  );
}
