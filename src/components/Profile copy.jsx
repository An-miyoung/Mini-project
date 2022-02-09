import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import "../css/profile.css";
import useGetUser from "../hooks/useGetUser";
import { mapTime } from "../utils/mapTime";
import { extractEmail } from "../utils/extractEmail";
import { cleanText } from "../utils/cleanText";
import Back from "../assets/images/back.png";
import More from "../assets/images/more.png";
import Bar from "../assets/images/profile-bar.png";

const hasAbout = false;
export default function Profile() {
  const navigate = useNavigate();
  console.log(navigate);
  const { by } = useParams();
  console.log("by: ", by);

  const user = useGetUser(by);
  console.log(user);

  const { data: profile } = user;
  console.log(profile);

  console.log("여기");
  if (profile !== undefined && profile !== null) {
    console.log("여기");
    const hasAbout = Object.keys(profile).includes("about");
    console.log(hasAbout);
  } else {
    const hasAbout = false;
  }

  // if (profile !== undefined)
  return (
    <div className="container">
      <div className="header__profile">
        <div className="header__back">
          <img
            src={Back}
            alt="backWard"
            onClick={() => {
              navigate(-1);
            }}
          />
        </div>
        <div className="header__title" style={{ top: "110px" }}>
          <div
            className="title-text"
            style={{ color: "#000000", height: "58px" }}
          >
            PROFILE
          </div>
        </div>
      </div>
      <div className="avatar">
        <div className="avatar__img"></div>
        <div className="avatar__name">{by}</div>
      </div>
      {profile !== undefined && hasAbout ? (
        <>
          <div className="sns">
            <div className="sns__about">{cleanText(profile.about)}</div>
            {/* <div className="instagram">
              <i className="fab fa-instagram"></i>
              <span className="sns__text">insta1234</span>
            </div>
            <div className="texttweeter">
              <i className="fab fa-twitter"></i>
              <span className="sns__text">{`tweet5678`}</span>
            </div>
            <div className="email">
              <i className="far fa-envelope"></i>
                <span className="sns__text">{extractEmail(profile.about)}</span>
            </div> */}
          </div>
          <div className="career">
            <div className="career-inner">
              <div className="date">{mapTime(profile.created)}</div>
              <div className="k-point">{profile.karma}</div>
            </div>
            <div className="career-float">
              <div className="joined">joined</div>
              <div className="karma">karma</div>
            </div>
          </div>
          <div className="profile-bar">
            <img src={Bar} alt="bar" />
          </div>
          <div className="activeLog">
            <div className="activeLog-container">
              <div className="logo-sub"></div>
              <div className="title-sub">Submissions</div>
              <div className="more-sub">
                <Link to={`/profile/${by}/submissions`}>
                  <img src={More} alt="detail" />
                </Link>
              </div>
              <div className="none"></div>
              <div className="none"></div>
              <div className="none"></div>
              <div className="logo-com"></div>
              <div className="title-com">Comments</div>
              <div className="more-com">
                <img src={More} alt="Detail" />
              </div>
              <div className="none"></div>
              <div className="none"></div>
              <div className="none"></div>
              <div className="logo-fav"></div>
              <div className="title-fav">Favorites</div>
              <div className="more-fav">
                <img src={More} alt="Detail" />
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="sns">
            <div className="instagram">
              <i className="fab fa-instagram"></i>
              <span className="sns__text">No Instagram</span>
            </div>
            <div className="texttweeter">
              <i className="fab fa-twitter"></i>
              <span className="sns__text">No tweeter</span>
            </div>
            <div className="email">
              <i className="far fa-envelope"></i>
              <span className="sns__text">No email address</span>
            </div>
          </div>
          {profile === undefined && !hasAbout ? (
            <div className="career">
              <div className="career-inner">
                <div className="date">loading...</div>
                <div className="k-point">loading...</div>
              </div>
              <div className="career-float">
                <div className="joined">joined</div>
                <div className="karma">karma</div>
              </div>
            </div>
          ) : (
            <div className="career">
              <div className="career-inner">
                <div className="date">{mapTime(profile.created)}</div>
                <div className="k-point">{profile.karma}</div>
              </div>
              <div className="career-float">
                <div className="joined">joined</div>
                <div className="karma">karma</div>
              </div>
            </div>
          )}
          <div className="profile-bar">
            <img src={Bar} alt="bar" />
          </div>
          <div className="activeLog">
            <div className="activeLog-container">
              <div className="logo-sub"></div>
              <div className="title-sub">Submissions</div>
              <div className="more-sub">
                <Link to={`/profile/${by}/submissions`}>
                  <img src={More} alt="detail" />
                </Link>
              </div>
              <div className="none"></div>
              <div className="none"></div>
              <div className="none"></div>
              <div className="logo-com"></div>
              <div className="title-com">Comments</div>
              <div className="more-com">
                <img src={More} alt="Detail" />
              </div>
              <div className="none"></div>
              <div className="none"></div>
              <div className="none"></div>
              <div className="logo-fav"></div>
              <div className="title-fav">Favorites</div>
              <div className="more-fav">
                <img src={More} alt="Detail" />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
  // else return null;
}
