import { Link } from "react-router-dom";
import "../css/cardComment.css";
import { mapTime } from "../utils/mapTime";
import More from "../assets/images/more.png";
import Avatar from "../assets/images/1.png";
import { cleanText } from "../utils/cleanText";

export default function CardComment({ post, height }) {
  console.log(post);

  if (post !== null) {
    const { by, time, text } = post;

    return (
      <>
        <div className="content__header">
          <div className="profile__img">
            <img src={Avatar} alt="avatar" />
          </div>
          <div className="content__by__created">
            <Link to={"/profile/" + by}>
              <div className="content__by">{by}</div>
            </Link>
            <div className="created">
              {mapTime(time)}
              {` `}ago
            </div>
          </div>
        </div>
        <div className="content__text__more">
          {text && <div className="content__text">{cleanText(text)}</div>}
          <div className="logo more">
            <img src={More} alt="detail" />
          </div>
          <div className="line"></div>
        </div>
      </>
    );
  } else return null;
}
