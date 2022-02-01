import { NavLink, Link } from "react-router-dom";
import "../css/card.css";
import More from "../assets/images/more.png";
import Point from "../assets/images/point.png";
import Comment from "../assets/images/comment.png";

export default function Card({ post, height }) {
  const { id, by, kids, score, time, title, url } = post;

  return (
    <div className="card" style={{ height: `${height}px` }}>
      <div className="card__container" style={{ height: `${height}px` }}>
        <div className="card__item rank">1</div>
        <div className="card__item title">{title}</div>
        <div className="more logo__right-arrow">
          <Link to={"comments/" + id}>
            <img src={More} alt="detail" />
          </Link>
        </div>
        <div className="card__item by">
          by {by}
          <div className="logo logo__point__comment">
            <span>
              <img
                src={Point}
                alt="point"
                style={{ width: "16px", height: "16px" }}
              />
            </span>
            <span style={{ marginLeft: "3px", marginRight: "12px" }}>
              {score}
            </span>

            <span>
              <img src={Comment} alt="comment" style={{ marginLeft: "3px" }} />
            </span>
            <span style={{ marginLeft: "3px" }}>
              {`${kids && kids.length > 0 ? kids.length : 0}`}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
