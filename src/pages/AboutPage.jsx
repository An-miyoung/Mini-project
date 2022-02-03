import { NavLink } from "react-router-dom";
import "../css/about.css";
import Back from "../assets/images/back.png";
import AboutImg from "../assets/images/about.png";

export default function AboutPage() {
  const type = "ABOUT";

  return (
    <div className="container">
      <div className="about__inner">
        <div className="about__back">
          <NavLink to="/">
            <img src={Back} alt="backWard" />
          </NavLink>
        </div>
        <div className="about__title">{type}</div>
        <img src={AboutImg} alt="about" className="about__img" />
        <div className="about__greeting">
          <p>
            This is a simple Hacker News clone, built with SvelteKit, an
            application framework for Svelte.
          </p>
          <p>
            Svelte is a new kind of framework, one that compiles your component
            templates into fast, compact JavaScript — either client-side or
            server-side. You can read more about the design and philosophy in
            the introductory blog post.
          </p>
          <p>
            We're using hnpwa-api as a backend. The app is hosted on Vercel.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
