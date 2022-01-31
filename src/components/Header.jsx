import "../css/header.css";
import Logo from "../assets/images/logo.png";
import ThreeDot from "../assets/images/3Dot.png";

export default function Header({ name }) {
  console.log(name);
  return (
    <div className="header">
      <div className="title">
        <h1>{name}</h1>
      </div>
      <div className="footer">
        <div className="logo">
          <img src={Logo} alt="detail" />
        </div>
        <div className="dots"></div>
        <img src={ThreeDot} alt="detail" />
      </div>
    </div>
  );
}
