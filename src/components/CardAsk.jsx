import { Link } from "react-router-dom";
import "../css/card.css";
import Time from "../assets/images/time.png";
import Comment2 from "../assets/images/comment2.png";
import { mapTime } from "../utils/mapTime";

export default function CardAsk({ post, type, height }) {
  const { by, kids, text, title, time } = post;

  return (
    <div className="card" style={{ height: `${height}px` }}>
      <div
        className={`card__container ${type}`}
        style={{ height: `${height}px` }}
      >
        <div className="card__inner">
          <div className="letterQ">Q.</div>
          <div className="card__item title">{title}</div>
          <div className="logo">
            <div className="card__item by">
              by {by}
              <div className="logo__point__comment">
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
          <div className="line"></div>
          <div className="letterA">A.</div>
          <div className="card__item text">{text}</div>
        </div>
      </div>
    </div>
  );
}
