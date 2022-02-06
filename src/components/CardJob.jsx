import "../css/job.css";

export default function JobList({ post, type }) {
  const { id, by, kids, score, title, url } = post;
  console.log(url);
  return (
    <div className="card__item">
      <div className="job-title">{title}</div>
      {url && <div className="job-url">{url.split("/")[2]}</div>}
    </div>
  );
}
