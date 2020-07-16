import React from 'react';
import PullRequestsSVG from 'SVGs/PullRequestsSVG';
import CommentSVG from 'SVGs/CommentSVG';
import style from './IssueDetails.module.css';

function IssueDetails({ issue }) {
  const { issueAssignedTo, pullRequests, comments } = issue;

  return (
    <div className={style.issueDetails}>
      <span className={style.issueDetail}>
        {issueAssignedTo && (
          <span>
            <a href="#">
              <img src={issueAssignedTo} />
            </a>
          </span>
        )}
      </span>
      <span className={style.issueDetail}>
        {pullRequests && (
          <span>
            <a href="#">
              <PullRequestsSVG />
              <span>{pullRequests}</span>
            </a>
          </span>
        )}
      </span>
      <span className={style.issueDetail}>
        {comments && (
          <span>
            <a href="#">
              <CommentSVG />
              <span>{comments}</span>
            </a>
          </span>
        )}
      </span>
    </div>
  );
}

export default IssueDetails;
