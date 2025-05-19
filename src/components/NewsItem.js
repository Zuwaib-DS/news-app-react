import React from "react";
import TooltipControl from "./controls/TooltipControl";

function NewsItem({
  imageUrl,
  title,
  description,
  url,
  publishedAt,
  author,
  source,
}) {
  return (
    <a href={url} target="_blank" className="no-link">
      <div className="card">
        <img src={imageUrl} className="card-img-top" alt={title} />
        <div className="card-body title-section">
          <TooltipControl text={title}>
            <h5 className="card-title">
            {title && title.length > 45
              ? `${title.substring(0, 45)}...`
              : title}
          </h5>
          </TooltipControl>
          <TooltipControl text={description}>
            <p className="card-text" title={description}>
            {description && description.length > 85
              ? `${description.substring(0, 90)}...`
              : description}
          </p>
          </TooltipControl>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item font-details">
            <TooltipControl text={source}>
                <strong>Source:</strong> {source && source.length > 22
              ? `${source.substring(0, 22)}...`
              : source}
            </TooltipControl>
          </li>
          <li className="list-group-item font-details">
            <strong>Author:</strong>{" "}
            {author && author.length > 22
              ? `${author.substring(0, 22)}...`
              : author}
          </li>
          <li className="list-group-item font-details">
            <strong>Published At:</strong>{" "}
            {new Date(publishedAt).toLocaleString()}
          </li>
        </ul>
      </div>
    </a>
  );
}

export default NewsItem;
