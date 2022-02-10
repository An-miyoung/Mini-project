import { useState, useEffect } from "react";
import "../css/job.css";
import { extractUrl } from "../utils/extractUrl";

export default function JobList({ post, type }) {
  const [cleanUrl, setCleanUrl] = useState("");
  const { title, url, text } = post;

  useEffect(() => {
    if (!url && text) {
      const temp = extractUrl(text);
      if (temp === null) setCleanUrl("No Url");
      else {
        setCleanUrl(temp[0]);
        console.log(cleanUrl);
      }
    } else setCleanUrl(url);
  }, [post]);

  return (
    <div className="card__item" onClick={() => window.open(cleanUrl)}>
      <div className="job-title">{title}</div>
      {cleanUrl && <div className="job-url">{cleanUrl.split("/")[2]}</div>}
    </div>
  );
}
