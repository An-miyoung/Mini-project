import { Link } from "react-router-dom";
import "../css/card.css";
import More from "../assets/images/more.png";
import Time from "../assets/images/time.png";
import Point2 from "../assets/images/point2.png";
import Comment2 from "../assets/images/comment2.png";
import { mapTime } from "../utils/mapTime";
import { cleanText } from "../utils/cleanText";

export default function Card({ post, type, height }) {
  const { id, by, kids, score, title, time } = post;

  return (
    <div className="card" style={{ height: `${height}px` }}>
      {type === "top" && (
        <div className="card__container top" style={{ height: `${height}px` }}>
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
                  src={Point2}
                  alt="point"
                  style={{ width: "16px", height: "16px" }}
                />
              </span>
              <span style={{ marginLeft: "3px", marginRight: "12px" }}>
                {` `}
                {score}
              </span>
              <span>
                <img
                  src={Comment2}
                  alt="comment"
                  style={{ marginLeft: "3px" }}
                />
              </span>
              <span style={{ marginLeft: "3px" }}>
                {`${kids && kids.length > 0 ? kids.length : 0}`}
              </span>
            </div>
          </div>
        </div>
      )}

      <div
        className={`card__container ${type}`}
        style={{ height: `${height}px` }}
      >
        <div className="card__item title">{`${
          post.text ? cleanText(post.text) : title
        }`}</div>
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
                src={Time}
                alt="time"
                style={{ width: "16px", height: "16px" }}
              />
            </span>
            <span style={{ marginLeft: "3px", marginRight: "12px" }}>
              {` `}
              {mapTime(time)} ago
            </span>
            <span>
              <img src={Comment2} alt="comment" style={{ marginLeft: "3px" }} />
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
