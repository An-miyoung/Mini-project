import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
// import "../css/card.css";
import "../css/cardComment.css";
import "../css/submissionComment.css";
import { getStory } from "../utils/apis";
import { mapTime } from "../utils/mapTime";
import More from "../assets/images/more.png";
import Back from "../assets/images/back.png";
import Up from "../assets/images/up_small.png";
import Avatar from "../assets/images/1.png";
import { cleanText } from "../utils/cleanText";

export default function SumissionComment({ post, height }) {
  const [story, setStory] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getStory(id).then((response) => {
      const story = response.data;
      setStory(story);
    });
  }, [id]);
  console.log(id);

  if (story !== null) {
    const { by, kids, text, time } = story;
    console.log(story);
    console.log(story.text);
    return (
      <div className="container">
        <div className="page submissions">
          <div className="content__comments submissions">
            <div className="content__up">
              <img src={Up} alt="upWard" />
            </div>
            <div className="content__title">
              Comment ({`${kids && kids.length > 0 ? kids.length : 0}`})
            </div>
            <div className="content__inner">
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
            </div>
          </div>
        </div>
      </div>
    );
  } else return null;
}
